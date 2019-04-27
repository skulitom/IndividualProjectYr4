package com.ucl.projectmanager.project.api;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("api")
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        registerResources();
    }
    private void registerResources() {
        register(ProjectResource.class);
    }
}