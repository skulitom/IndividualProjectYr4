package com.ucl.projectmanager.project.dal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document
public class ProjectDal {

    @Id
    private String id;

    private String name;
    private String describ;
    private String technologies;
    private String studentAgreement;
    private String supervisorAgreement;
    private String external;


    public String getId() {
        return id;
    }

    public ProjectDal setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return this.name;
    }

    public ProjectDal setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescrib() {
        return this.describ;
    }

    public ProjectDal setDescrib(String describ) {
        this.describ = describ;
        return this;
    }

    public String getTechnologies() {
        return this.technologies;
    }

    public ProjectDal setTechnologies(String technologies) {
        this.technologies = technologies;
        return this;
    }

    public String getStudentAgreement() {
        return this.studentAgreement;
    }

    public ProjectDal setStudentAgreement(String studentAgreement) {
        this.studentAgreement = studentAgreement;
        return this;
    }

    public String getSupervisorAgreement() {
        return this.supervisorAgreement;
    }

    public ProjectDal setSupervisorAgreement(String supervisorAgreement) {
        this.supervisorAgreement = supervisorAgreement;
        return this;
    }

    public String getExternal() {
        return this.external;
    }

    public ProjectDal setExternal(String external) {
        this.external = external;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()){
            return false;
        }
        ProjectDal projectDal = (ProjectDal) o;
        return Objects.equals(id, projectDal.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
