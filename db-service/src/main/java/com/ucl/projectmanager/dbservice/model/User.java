package com.ucl.projectmanager.dbservice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

    @Id
    private ObjectId userId;
    private String name;
    private String role;

    public User(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public String getUserId() {
        return userId.toHexString();
    }

    public void setUserId(ObjectId userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
