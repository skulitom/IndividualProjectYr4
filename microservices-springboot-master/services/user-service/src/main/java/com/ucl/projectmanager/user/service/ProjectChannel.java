package com.ucl.projectmanager.user.service;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface ProjectChannel {

    String PROJECT_DELETED_INPUT = "projectDeletedInput";

    String PROJECT_UPDATED_INPUT = "projectUpdatedInput";

    @Input(PROJECT_DELETED_INPUT)
    SubscribableChannel projectDeletedInput();

    @Input(PROJECT_UPDATED_INPUT)
    SubscribableChannel projectUpdatedInput();
}