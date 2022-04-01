// user
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
var balance_Boolen = false;
$('.reg_user').blur(function(){
  if ((/^[a-z0-9A-Z_-]{4,12}$/).test($(".reg_user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("×").css("color","red");
    user_Boolean = false;
  }
});
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("×").css("color","red");
    password_Boolean = false;
  }
});


// password_confirm
$('.reg_confirm').blur(function(){
  if (($(".reg_password").val())==($(".reg_confirm").val())){
    $('.confirm_hint').html("✔").css("color","green");
    varconfirm_Boolean = true;
  }else {
    $('.confirm_hint').html("×").css("color","red");
    varconfirm_Boolean = false;
  }
});


// Email
$('.reg_email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())){
    $('.email_hint').html("✔").css("color","green");
    emaile_Boolean = true;
  }else {
    $('.email_hint').html("×").css("color","red");
    emaile_Boolean = false;
  }
});


// Mobile
$('.reg_mobile').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
    $('.mobile_hint').html("✔").css("color","green");
    Mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("×").css("color","red");
    Mobile_Boolean = false;
  }
});


// click
$('.red_button').click(function(){
  if(user_Boolean && password_Boolean && Mobile_Boolean && varconfirm_Boolean){
    $('#zcform').submit();
  }else {
    alert("请完善信息");
    return false;
  }
});
//修改用户名
$('.changename').blur(function(){
	  if ((/^[a-z0-9_-]{4,12}$/).test($(".changename").val())){
	  }else {
		  document.getElementById("examinuname").value = "用户名不符合规范";
	  }
});

//修改密码
$('.changepwdtxt').blur(function(){
	  if ((/^[a-z0-9_-]{6,16}$/).test($(".changepwdtxt").val())){
	    $('.password_hint').html("✔").css("color","green");
	    password_Boolean = true;
	    if (($(".changepwdtxt").val())==($(".changepwdtxtcon").val())){
	        $('.confirm_hint').html("✔").css("color","green");
	        varconfirm_Boolean = true;
	     }else {
	        $('.confirm_hint').html("×").css("color","red");
	        varconfirm_Boolean = false;
	    }
	  }else {
	    $('.password_hint').html("×").css("color","red");
	    password_Boolean = false;
	  }
	});
//确认修改密码
$('.changepwdtxtcon').blur(function(){
  if (($(".changepwdtxt").val())==($(".changepwdtxtcon").val())){
    $('.confirm_hint').html("✔").css("color","green");
    varconfirm_Boolean = true;
  }else {
    $('.confirm_hint').html("×").css("color","red");
    varconfirm_Boolean = false;
  }
});
//修改密码点击按钮
$('#changepwdbtn').click(function(){
	if($(".changepwdtxt").val() != ""){
		if(password_Boolean && varconfirm_Boolean){
		    $('.changepwdform').submit();
		  }else {
		    alert("打叉处出错,请修改");
		    return false;
		  }
	}else{
		alert("此处不允许留空");
		return false;
	}
	  
	});
//充值
$('.balancePay').blur(function(){
	  if ((/^[0-9_-]{1,5}$/).test($(".balancePay").val())){
		  $("#topay").val("确认支付");
		  balance_Boolen = true;
		  //document.getElementById("topay").value = "确认支付";
	  }else {
		  if($(".balancePay").val() < 0){
			  $("#topay").val("请输入大于0的整数"); 
		  }else if($(".balancePay").val() > 99999){
			  $("#topay").val("请输入小于100000整数");
		  }else{
			  $("#topay").val("请输入整数");
		  }
		  balance_Boolen = false;
		  //document.getElementById("topay").value = "请输入整数";
	  }
});

function quxiao(){
	$('#examinuname').val("检测该用户名是否可用");
}
















