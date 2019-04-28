package com.ucl.projectmanager.user.repository;

import com.ucl.projectmanager.user.dal.UserDal;
import com.mongodb.BasicDBObject;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;

public class UserRepositoryImpl implements UserRepositoryCustom {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public void deleteProjectsById(String id) {
        mongoOperations.updateMulti(new Query(), new Update().pull("projects", new BasicDBObject("id", id)), UserDal.class);
    }
}
