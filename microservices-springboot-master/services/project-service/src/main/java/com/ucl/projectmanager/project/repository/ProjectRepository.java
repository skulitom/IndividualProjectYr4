package com.ucl.projectmanager.project.repository;

import com.ucl.projectmanager.project.dal.ProjectDal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<ProjectDal, String> {

}
