function verification(){
	var username = document.getElementById("uname").value;
	var userpwd = document.getElementById("upwd").value;
	if(username.trim() == ""){
		document.getElementById("userspan").innerHTML = "<span class=\"iconfont icontxt\">&#xe637;</span>用户名不能为空";
		return false;
	}else if(userpwd.trim() == ""){
		document.getElementById("userspan").innerHTML = "<span class=\"iconfont icontxt\">&#xe637;</span>密码不能为空";
		return false;
	}
	var dlform = document.getElementById("dlform");
	dlform.submit();
}
//切换登录注册页
function changeLeft(y){
	document.getElementById("userspan").innerHTML = " ";
	var x = document.getElementById("login_regis");
	x.style.left = y + "px";
	var z = document.getElementById("title");
	if(y<0){
		z.innerHTML = "用户注册";
	}else{
		z.innerHTML = "用户登录";
	}
}
//ajax更改用户名
function changeuname(destURL,changeunameURL){
	var regname = $('#changename').val();
    var span = document.getElementById("examinuname");
    if(span.value == "可用,确认提交"){
    	$.ajax({
			type: "get",
			url: changeunameURL,
			success: function(msg){
	          if(msg == 1){
	          	 //document.getElementById("usernameOne").innerHTML = regname;
	          	 //document.getElementById("usernameTwo").innerHTML = regname;
                  $('.cnameshow').html(regname);
	             alert("修改成功,请重新登录");
	           	 $('#dialogBg').fadeOut(10,function(){
					 $('#tochangename').addClass('bounceOutUp').fadeOut();
				 });
				 //document.getElementById("logout").click();
	          }else{
	             alert("修改失败");
	             return false;
	          } 
			}
	  });
    }else if(span.value == "检测该用户名是否可用"){
    	if(regname.trim() == ""){
    		return false;
    	}else{
    		$.ajax({
			type: "get",
			url: destURL,
			success: function(msg){
	          if(msg == 1){
	             span.value = "可用,确认提交";
	          }else{
	             span.value = "不可用,用户名已存在";
	          } 
			}
	 		});
	 		return false;
    	}
    	
    }	
}
//ajax充值
function paymoney(changebalanceURl){
	 var balance = $('.balancePay').val(); 
	 var balancenew = parseFloat($('.userbalanceshow').html())+parseFloat(balance);
	 var span = document.getElementById("topay");debugger;
	 if(span.value == "确认支付" & balance.trim != ""){
	    	$.ajax({
				type: "get",
				url: changebalanceURl,
				success: function(msg){
		          if(msg == 1){
		          	 $('.userbalanceshow').html(balancenew);
		             alert("充值成功");
		           	 $('#dialogBg').fadeOut(10,function(){
						 $('#tochangebalance').addClass('bounceOutUp').fadeOut();
					 });
		           	$('.balancePay').val("");
		          }else{
		             alert("充值失败");
		             return false;
		          } 
				}
		 	 });		    			    
	    }				
}








