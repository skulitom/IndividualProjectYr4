package com.ucl.projectmanager.user.api.model;

import java.util.ArrayList;
import java.util.List;

public class QueryUser {

    private String id;
    private String name;
    private List<Project> projects = new ArrayList<>();
    private String role;
    private String maxProjects;
    private String admin;


    public String getId() {
        return id;
    }

    public QueryUser setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public QueryUser setName(String name) {
        this.name = name;
        return this;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public QueryUser setProjects(List<Project> projects) {
        this.projects = projects;
        return this;
    }

    public String getRole() {
        return this.role;
    }

    public QueryUser setRole(String role) {
        this.role = role;
        return this;
    }

    public String getMaxProjects() {
        return this.maxProjects;
    }

    public QueryUser setMaxProjects(String maxProjects) {
        this.maxProjects = maxProjects;
        return this;
    }

    public String getAdmin() {
        return this.admin;
    }

    public QueryUser setAdmin(String admin) {
        this.admin = admin;
        return this;
    }

    public static class Project {

        private String id;

        private String name;

        public String getId() {
            return id;
        }

        public Project setId(String id) {
            this.id = id;
            return this;
        }

        public String getName() {
            return name;
        }

        public Project setName(String name) {
            this.name = name;
            return this;
        }
    }
}
