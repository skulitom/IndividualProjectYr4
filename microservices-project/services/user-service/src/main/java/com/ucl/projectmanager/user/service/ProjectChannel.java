package com.ucl.projectmanager.user.service;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface ProjectChannel {
    String PROJECT_UPDATED_INPUT = "projectUpdatedInput";
    String PROJECT_DELETED_INPUT = "projectDeletedInput";
    @Input(PROJECT_UPDATED_INPUT)
    SubscribableChannel projectUpdatedInput();
    @Input(PROJECT_DELETED_INPUT)
    SubscribableChannel projectDeletedInput();
}