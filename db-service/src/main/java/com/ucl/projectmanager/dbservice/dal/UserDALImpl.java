package com.ucl.projectmanager.dbservice.dal;

import com.ucl.projectmanager.dbservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDALImpl implements UserDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public UserDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public User saveUser(User user) {
        mongoTemplate.save(user);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return mongoTemplate.findAll(User.class);
    }

    @Override
    public User findUserByName(String name) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is(name));

        return mongoTemplate.findOne(query, User.class);
    }

    @Override
    public void updateUserRole(String role) {
        Query query = new Query();
        Update update = new Update().set("role", role);
        mongoTemplate.findAndModify(query, update, User.class);
    }

    @Override
    public void deleteUser(User user) {
        mongoTemplate.remove(user);
    }
}
