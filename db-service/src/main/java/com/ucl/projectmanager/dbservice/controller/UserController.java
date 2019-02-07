package com.ucl.projectmanager.dbservice.controller;


import com.ucl.projectmanager.dbservice.dal.UserDAL;
import com.ucl.projectmanager.dbservice.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private static final Logger LOG = LoggerFactory.getLogger("AppsDeveloperBlog");

    private final UserDAL userDAL;

    @Autowired
    public UserController(UserDAL userDAL) {
        this.userDAL = userDAL;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        LOG.info("Getting all data from MongoDB: \n{}", userDAL.getAllUsers());
        return userDAL.getAllUsers();
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public User findUserByName(@PathVariable("name") String name) {
        return userDAL.findUserByName(name);
    }
}
