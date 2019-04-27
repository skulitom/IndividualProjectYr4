package com.ucl.projectmanager.project.api;

import com.ucl.projectmanager.project.api.mapper.ProjectMapper;
import com.ucl.projectmanager.project.api.model.QueryProject;
import com.ucl.projectmanager.project.dal.ProjectDal;
import com.ucl.projectmanager.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Path("projects")
public class ProjectResource {

    @Context
    private UriInfo uriInfo;

    @Autowired
    private ProjectMapper projectMapper;

    @Autowired
    private ProjectService projectService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProjects() {
        List<ProjectDal> projectDals = projectService.getProjects();
        List<QueryProject> queryResults = projectDals.stream().map(projectMapper::toQueryProjectResult).collect(Collectors.toList());
        return Response.ok(queryResults).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProject(@PathParam("id") String id) {
        ProjectDal projectDal = projectService.getProject(id);
        QueryProject queryResult = projectMapper.toQueryProjectResult(projectDal);
        return Response.ok(queryResult).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateProject(@PathParam("id") String id, @Valid @NotNull QueryProject payload) {
        ProjectDal projectDal = projectService.getProject(id);
        projectMapper.updateProject(payload, projectDal);
        projectService.updateProject(projectDal);
        return Response.noContent().build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createProject(@Valid @NotNull QueryProject projectPayload) {
        ProjectDal projectDal = projectMapper.toProject(projectPayload);
        String id = projectService.createProject(projectDal);
        return Response.created(uriInfo.getAbsolutePathBuilder().path(id).build()).build();
    }


    @DELETE
    @Path("{id}")
    public Response deleteProject(@PathParam("id") String id) {
        projectService.deleteProject(id);
        return Response.noContent().build();
    }
}