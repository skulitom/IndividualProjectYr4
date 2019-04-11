package com.ucl.projectmanager.user.service;

import javax.ws.rs.ClientErrorException;
import com.ucl.projectmanager.user.config.CachingConfiguration;
import com.ucl.projectmanager.user.dal.ProjectDal;
import com.ucl.projectmanager.user.dal.UserDal;
import com.ucl.projectmanager.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

import javax.ws.rs.NotFoundException;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private CacheManager cacheManager;

    @Autowired
    private ProjectApi projectApi;

    @Autowired
    private UserRepository userRepository;

    public List<UserDal> getUsers() {
        List<UserDal> userDals = userRepository.findAll();
        return userDals;
    }

    public String createUser(UserDal userDal) {
        validateProjects(userDal);
        userDal = userRepository.save(userDal);
        return userDal.getId();
    }

    public void updateUser(UserDal userDal) {
        validateProjects(userDal);
        userRepository.save(userDal);
    }

    private void validateProjects(UserDal userDal) {
        userDal.getProjects().forEach(project -> {
            if (!projectApi.checkIfProjectExists(project.getId())) {
                throw new ClientErrorException(String.format("id:%s for project not found", project.getId()), 422);
            }
        });
    }

    public UserDal getUser(String id) {
        UserDal userDal = userRepository.findOne(id);
        if (userDal == null) {
            throw new NotFoundException();
        } else {
            return userDal;
        }
    }

    public void deleteUser(String id) {
        UserDal userDal = userRepository.findOne(id);
        if (userDal == null) {
            throw new NotFoundException();
        } else {
            userRepository.delete(id);
        }
    }

    @CacheEvict(cacheNames = CachingConfiguration.PROJECTS_CACHE, key = "#projectDal.id")
    @StreamListener(ProjectChannel.PROJECT_DELETED_INPUT)
    public void handleDeletedProject(ProjectDal projectDal) {
        userRepository.deleteProjectsById(projectDal.getId());
    }

    @StreamListener(ProjectChannel.PROJECT_UPDATED_INPUT)
    public void handleUpdatedProject(ProjectDal projectDal) {
        cacheManager.getCache(CachingConfiguration.PROJECTS_CACHE).put(projectDal.getId(), projectDal);
    }
}