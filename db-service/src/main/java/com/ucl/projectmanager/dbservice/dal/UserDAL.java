package com.ucl.projectmanager.dbservice.dal;

import com.ucl.projectmanager.dbservice.model.User;

import java.util.List;

public interface UserDAL {
    User saveUser(User user);
    List<User> getAllUsers();
    User findUserByName(String name);
    void updateUserRole(String role);
    void deleteUser(User user);
}
