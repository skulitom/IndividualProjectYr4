package com.ucl.projectmanager.project.service;

import com.ucl.projectmanager.project.dal.ProjectDal;
import com.ucl.projectmanager.project.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Qualifier;

import javax.ws.rs.NotFoundException;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    @Qualifier(ProjectChannel.PROJECT_DELETED_OUTPUT)
    private MessageChannel projectDeletedMessageChannel;

    @Autowired
    @Qualifier(ProjectChannel.PROJECT_UPDATED_OUTPUT)
    private MessageChannel projectUpdatedMessageChannel;

    public List<ProjectDal> getProjects() {
        return projectRepository.findAll();
    }

    public void updateProject(ProjectDal projectDal) {
        projectDal = projectRepository.save(projectDal);
        projectUpdatedMessageChannel.send(MessageBuilder.withPayload(projectDal).build());
    }

    public String createProject(ProjectDal projectDal) {
        projectDal = projectRepository.save(projectDal);
        return projectDal.getId();
    }

    public ProjectDal getProject(String id) {
        ProjectDal projectDal = projectRepository.findOne(id);
        if (projectDal == null) {
            throw new NotFoundException();
        }
        return projectDal;
    }

    public void deleteProject(String id) {
        ProjectDal projectDal = projectRepository.findOne(id);
        if (projectDal == null) {
            throw new NotFoundException();
        } else {
            projectRepository.delete(id);
            projectDeletedMessageChannel.send(MessageBuilder.withPayload(projectDal).build());
        }
    }
}