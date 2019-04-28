package com.ucl.projectmanager.project.api.mapper;

import com.ucl.projectmanager.project.api.model.QueryProject;
import com.ucl.projectmanager.project.dal.ProjectDal;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mapper;

@Mapper
public interface ProjectMapper {
    ProjectDal toProject(QueryProject payload);
    QueryProject toQueryProjectResult(ProjectDal projectDal);
    void updateProject(QueryProject payload, @MappingTarget ProjectDal projectDal);
}