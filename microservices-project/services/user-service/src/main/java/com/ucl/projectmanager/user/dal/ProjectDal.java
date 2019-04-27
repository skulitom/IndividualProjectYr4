package com.ucl.projectmanager.user.dal;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document
public class ProjectDal {

    @Id
    private String id;

    @Transient
    private String name;

    public String getId() {
        return id;
    }

    public ProjectDal setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public ProjectDal setName(String name) {
        this.name = name;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectDal projectDal = (ProjectDal) o;
        return Objects.equals(id, projectDal.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
