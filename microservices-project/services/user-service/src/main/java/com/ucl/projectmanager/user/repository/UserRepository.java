package com.ucl.projectmanager.user.repository;

import com.ucl.projectmanager.user.dal.UserDal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserDal, String>, UserRepositoryCustom {

}
