package com.example.demo.service.user.Impl;

import com.example.demo.dao.user.UserMapper;
import com.example.demo.pojo.user.User;
import com.example.demo.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserMapper userMapper;

    /**
     * 用户登录
     * @param userName
     * @param pwd
     * @return
     * @throws Exception
     */
    public User login(String userName, String pwd) throws Exception{
        User user = null;
        Map<String, Object> data = new HashMap();
        data.put("userName", userName);
        data.put("pwd", pwd);
        if(userName != null && pwd != null && !userName.equals("") && !pwd.equals("")){
            user = userMapper.login(data);
        }else{
            throw new Exception("登录失败 请重试");
        }

        return user;
    }
}
