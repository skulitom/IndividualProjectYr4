package com.ucl.projectmanager.user.api.mapper;

import com.ucl.projectmanager.user.api.model.QueryUser;
import com.ucl.projectmanager.user.dal.UserDal;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper
public interface UserMapper {
    UserDal toUser(QueryUser payload);
    QueryUser toQueryUserResult(UserDal userDal);
    void updateUser(QueryUser payload, @MappingTarget UserDal userDal);
}
