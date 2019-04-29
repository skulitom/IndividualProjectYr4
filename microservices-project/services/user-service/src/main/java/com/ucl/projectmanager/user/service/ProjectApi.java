package com.ucl.projectmanager.user.service;

import com.ucl.projectmanager.user.config.CachingConfiguration;
import com.ucl.projectmanager.user.dal.ProjectDal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.ws.rs.ServiceUnavailableException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.Optional;

@Component
class ProjectApi {

    private Client client;

    @Autowired
    private LoadBalancerClient loadBalancer;

    private static final String PROJECT_SERVICE = "project-service";

    @PostConstruct
    private void init() {
        this.client = ClientBuilder.newClient();
    }

    @Cacheable(cacheNames = CachingConfiguration.PROJECTS_CACHE, key = "#projectId")
    public Optional<ProjectDal> getProject(String projectId) {
        URI projectServiceUri = getProjectServiceUri();
        Response response = client.target(projectServiceUri).path("api").path("projects").path(projectId).request().get();
        if (Response.Status.Family.SUCCESSFUL == response.getStatusInfo().getFamily()) {
            return Optional.ofNullable(response.readEntity(ProjectDal.class));
        } else {
            return Optional.empty();
        }
    }

    public boolean checkIfProjectExists(String projectId) {
        URI projectServiceUri = getProjectServiceUri();
        Response response = client.target(projectServiceUri).path("api").path("projects").path(projectId).request().head();
        return Response.Status.OK.getStatusCode() == response.getStatus();
    }

    private URI getProjectServiceUri() {
        ServiceInstance serviceInstance = loadBalancer.choose(PROJECT_SERVICE);
        if (serviceInstance == null) {
            throw new ServiceUnavailableException("Service unavailable");
        }

        return serviceInstance.getUri();
    }
}
