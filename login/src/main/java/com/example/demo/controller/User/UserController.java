package com.example.demo.controller.User;

import com.example.demo.dao.user.UserMapper;
import com.example.demo.pojo.user.User;
import com.example.demo.service.user.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/user")
public class UserController {
        @Autowired
        private UserMapper userMapper;
        @Autowired
        private UserServiceImpl userService;

        @RequestMapping(value = "/login", method = RequestMethod.GET)
        public String login(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
            System.out.println("login");
            return "login.jsp";
        }

    /**
     * 登录
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping("/login")
    protected String Login(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String cname= request.getParameter("uname");
        String pwd= request.getParameter("upwd");
        try {
            User user = userService.login(cname, pwd);
            if(user!=null){
                request.getSession().setAttribute("user",user);    //保存登录人信息
                return "redirect:/client/main";
            }else{
                request.setAttribute("msg", "账号密码错误 ");
                return "login.jsp";
            }
        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "登录异常 请稍后重试");
            return "login.jsp";
        }
    }
}
