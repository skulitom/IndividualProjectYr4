package com.ucl.projectmanager.project.service;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface ProjectChannel {
    String PROJECT_UPDATED_OUTPUT = "projectUpdatedOutput";
    String PROJECT_DELETED_OUTPUT = "projectDeletedOutput";
    @Output(PROJECT_UPDATED_OUTPUT)
    MessageChannel projectUpdatedOutput();
    @Output(PROJECT_DELETED_OUTPUT)
    MessageChannel projectDeletedOutput();
}