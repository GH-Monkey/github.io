package com.example.demo.dao.user;

import com.example.demo.pojo.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
@Mapper
public interface UserMapper {
    //登录
    public User login(Map<String, Object> data) throws Exception;

}
