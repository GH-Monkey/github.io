package com.example.demo.service.user;

import com.example.demo.pojo.user.User;

public interface UserService {
    //登录
    public User login(String userName, String pwd) throws Exception;
}
