package com.ucl.projectmanager.user.dal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Document
public class UserDal {

    @Id
    private String id;

    private String name;
    private String role;
    private String maxProjects;
    private String admin;

    private Set<ProjectDal> projects = new HashSet<>();

    public String getId() {
        return id;
    }

    public UserDal setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return this.name;
    }

    public UserDal setName(String name) {
        this.name = name;
        return this;
    }

    public Set<ProjectDal> getProjects() {
        return this.projects;
    }

    public UserDal setProjects(Set<ProjectDal> projects) {
        this.projects = projects;
        return this;
    }

    public String getRole() {
        return this.role;
    }

    public UserDal setRole(String role) {
        this.role = role;
        return this;
    }

    public String getMaxProjects() {
        return this.maxProjects;
    }

    public UserDal setMaxProjects(String maxProjects) {
        this.maxProjects = maxProjects;
        return this;
    }

    public String getAdmin() {
        return this.admin;
    }

    public UserDal setAdmin(String admin) {
        this.admin = admin;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UserDal that = (UserDal) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
