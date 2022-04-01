<%@ page contentType="text/html;charset=UTF-8" pageEncoding="utf-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>Login</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="<%=basePath%>css/bootstrap.min14ed.css" rel="stylesheet">
    <link href="<%=basePath%>css/font-awesome.min93e3.css" rel="stylesheet">
    <link href="<%=basePath%>css/animate.min.css" rel="stylesheet">
    <link href="<%=basePath%>css/style.min862f.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/themes/icon.css">
    <script>if(window.top !== window.self){ window.top.location = window.location;}</script>
</head>
<body class="gray-bg">

<div class="middle-box text-center loginscreen  animated fadeInDown easyui-layout" >
    <div style="padding-top: 70%">

        <div  >${msg}</div>
        <form  class="m-t" role="form" action="<%=basePath%>lg/login" method = "post">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="用户名" name = "uname" required="">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="密码" name = "pwd" required="">
            </div>
            <button type="submit" onclick="login()" class="btn btn-primary block full-width m-b">登 录</button>

        </form>
    </div>
</div>
<script <%=basePath%>src="js/jquery.min.js">
    function login(){
        var userName=$("#uname").val();
        var password=$("#pwd").val();
        var pwd=$.md5(password);debugger;
        $.ajax({
            type: "POST",
            url: "<%=basePath%>user/login",
            data: {userName:userName , pwd:pwd},
            success: function(msg){

            }
        });

    }
</script>
<script <%=basePath%>src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="utf-8"></script>
</body>

</html>
