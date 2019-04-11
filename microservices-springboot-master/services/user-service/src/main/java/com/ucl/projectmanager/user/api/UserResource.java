package com.ucl.projectmanager.user.api;

import com.ucl.projectmanager.user.api.mapper.UserMapper;
import com.ucl.projectmanager.user.api.model.QueryUser;
import com.ucl.projectmanager.user.dal.UserDal;
import com.ucl.projectmanager.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Path("users")
public class UserResource {

    @Context
    private UriInfo uriInfo;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserService userService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() {
        List<UserDal> userDals = userService.getUsers();
        List<QueryUser> results = userDals.stream().map(userMapper::toQueryUserResult).collect(Collectors.toList());
        return Response.ok(results).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createUser(@Valid @NotNull QueryUser payload) {
        UserDal userDal = userMapper.toUser(payload);
        String id = userService.createUser(userDal);
        return Response.created(uriInfo.getAbsolutePathBuilder().path(id).build()).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") String id) {
        UserDal userDal = userService.getUser(id);
        QueryUser result = userMapper.toQueryUserResult(userDal);
        return Response.ok(result).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUser(@PathParam("id") String id, @Valid @NotNull QueryUser payload) {
        UserDal userDal = userService.getUser(id);
        userMapper.updateUser(payload, userDal);
        userService.updateUser(userDal);
        return Response.noContent().build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteUser(@PathParam("id") String id) {
        userService.deleteUser(id);
        return Response.noContent().build();
    }
}