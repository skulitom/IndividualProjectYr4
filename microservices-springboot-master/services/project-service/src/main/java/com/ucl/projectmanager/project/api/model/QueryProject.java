package com.ucl.projectmanager.project.api.model;

public class QueryProject {

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

    public QueryProject setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return this.name;
    }

    public QueryProject setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescrib() {
        return this.describ;
    }

    public QueryProject setDescrib(String describ) {
        this.describ = describ;
        return this;
    }

    public String getTechnologies() {
        return this.technologies;
    }

    public QueryProject setTechnologies(String technologies) {
        this.technologies = technologies;
        return this;
    }

    public String getStudentAgreement() {
        return this.studentAgreement;
    }

    public QueryProject setStudentAgreement(String studentAgreement) {
        this.studentAgreement = studentAgreement;
        return this;
    }

    public String getSupervisorAgreement() {
        return this.supervisorAgreement;
    }

    public QueryProject setSupervisorAgreement(String supervisorAgreement) {
        this.supervisorAgreement = supervisorAgreement;
        return this;
    }

    public String getExternal() {
        return this.external;
    }

    public QueryProject setExternal(String external) {
        this.external = external;
        return this;
    }
}
