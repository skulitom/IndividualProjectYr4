package com.ucl.projectmanager.project.api.mapper;

import com.ucl.projectmanager.project.api.model.QueryProject;
import com.ucl.projectmanager.project.dal.ProjectDal;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper
public interface ProjectMapper {
    ProjectDal toProject(QueryProject payload);
    QueryProject toQueryProjectResult(ProjectDal projectDal);
    void updateProject(QueryProject payload, @MappingTarget ProjectDal projectDal);
}