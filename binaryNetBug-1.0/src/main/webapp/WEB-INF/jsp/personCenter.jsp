<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getServletContext().getContextPath()+"/";
%>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>个人中心</title>
    <link rel="stylesheet" href="css/user_style.css">
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
    <style type="text/css">
    	.user_content_{
    		height:250px;
    		overflow-y:scroll;
    	}
    </style>
</head>
<body>
<input type="hidden" id="userSession" value='${sessionScope.user }'>
<input type="hidden" id="userId" value="${sessionScope.user.userId }"/>
    <div class="head">
        <div class="head_title">
            个人中心
        </div>
        <ul>
            <li onclick="location.href='index.do'">首页</li>
            <li>
                <img src="${sessionScope.user.headImg }" alt="用户头像" />
            	${sessionScope.user.nickName }
            </li>
            <li onclick="scrollLogin(0)">退出登录</li>
        </ul>
    </div>
    <div class="body">
        <div class="body_side">
            <ul id="menu">
                <li onclick="clickMenu(0)" class="menu" style="background:#681E03;">基本信息</li>
                <li onclick="clickMenu(1)" class="menu">修改密码</li>
                <li onclick="clickMenu(2)" class="menu">分享空间</li>
            </ul>
        </div>
        <div class="body_content" id="user_content">
            <div class="user_basic user_content_body" style="display:block;">
                <table>
                    <tr>
                        <td rowspan="3"><img src="${sessionScope.user.headImg}" alt="您的头像" style="width:100px;height:100px;border-radius: 50%"/></td>
                        <td>昵称：</td>
                        <td class="user_basic_nickName">${sessionScope.user.nickName}</td>
                        <td><span class='user_basic_button' onclick="changeBasic()">修改</span></td>
                    </tr>
                    <tr>
                        <td>积分：</td>
                        <td>${sessionScope.user.integral}虫</td>
                        <td><span class='user_basic_button'>充值</span></td>
                    </tr>
                    <tr>
                        <td>余额：</td>
                        <td>${sessionScope.user.balance}元</td>
                        <td><span class='user_basic_button'>充值</span></td>
                    </tr>
                </table>
            </div>
            <div class="user_changePassWord user_content_body" style="display:none">
                <table>
                    <tr>
                        <td>原密码：</td>
                        <td><input type="password" id="oldPassword"/></td>
                    </tr>
                    <tr>
                        <td>修改密码：</td>
                        <td><input type="password" id="newPassword"/></td>
                    </tr>
                    <tr>
                        <td>确认密码：</td>
                        <td><input type="password" id="newPassworda"/></td>
                    </tr>
                    <tr>
                    	<td colspan="2"><input type="button" value="提交" onclick="changPassword()"></td>
                    </tr>
                </table>
            </div>
            <div class="user_file user_content_body" style="display:none">
                <h3>待审核</h3>
                <div class="user_content_">
                    <table>
                        <tr>
                            <td>
                                <img src="aaa.jpg" alt="待审核logo" />
                            </td>
                            <td>
                                <h4>某某文档分享</h4>
                                <p>文档内容简介</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="aaa.jpg" alt="待审核logo" />
                            </td>
                            <td>
                                <h4>某某文档分享</h4>
                                <p>文档内容简介</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="aaa.jpg" alt="待审核logo" />
                            </td>
                            <td>
                                <h4>某某文档分享</h4>
                                <p>文档内容简介</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <h3>已审核</h3>
                <div class="user_content_">
                    <table>
                        <tr>
                            <td>
                                <img src="bb.jpg" alt="审核通过logo" />
                            </td>
                            <td>
                                <h4>某某小游戏代码分享</h4>
                            </td>
                            <td>
                                审核通过
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="cc.jpg" alt="审核未通过logo" />
                            </td>
                            <td>
                                <h4>某某视频分享</h4>
                                <p>未通过原因：内容不符</p>
                            </td>
                            <td>
                                审核未通过
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="cc.jpg" alt="审核未通过logo" />
                            </td>
                            <td>
                                <h4>某某视频分享</h4>
                                <p>未通过原因：内容不符</p>
                            </td>
                            <td>
                                审核未通过
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" charset="utf-8">
    function clickMenu(i){
        $('.user_content_body').css({'display':'none'});
        $('.menu').css({'background':''});
        $('.user_content_body:eq('+i+')').css({'display':'block'});
        $('.menu:eq('+i+')').css({'background':'#681E03'});
    }
    if($("#userSession").val() == null || $("#userSession").val() == ''){
    	location.href="index.do"
    }
    function changeBasic(){
    	$(".user_basic_nickName").html("<input value='"+$(".user_basic_nickName").text()+"' style='background-color:rgba(255,255,255,0.1);outline:none;border:0px;color:white;font-size:20px;'>");
    	$(".user_basic_button:eq(0)").text("保存");
    	$(".user_basic_button:eq(0)").attr("onclick","saveBasic()");
    }
    function saveBasic(){
    	var nickName = $(".user_basic_nickName>input:eq(0)").val();
    	if(confirm("您确定要修改用户名吗？")){
	    	$.post("updateUser.do",{
	    		"userId":"${sessionScope.user.userId }",
	    		"nickName":nickName
	    	},function(data){
	    		if(data)
	    			alert("用户名修改成功，重新登录生效！");
	    		else
	    			alert("用户名修改失败，该用户名已存在！");
	    	});
    	}
    	$(".user_basic_nickName").html(nickName);
    	$(".user_basic_button:eq(0)").text("修改");
    	$(".user_basic_button:eq(0)").attr("onclick","changeBasic()");
    }
    function changPassword(){
    	if(confirm("您确定要修改密码吗？")){
    		if($("#newPassword").val() == $("#newPassworda").val()){
    			$.post("resetPassword.do",{
    				"oldpassword":$("#oldPassword").val(),
    				"nickName":"${sessionScope.user.nickName}",
    				"newPassword":$("#newPassword").val()
    			},function(data){
    				if(data.result){
    					alert(data.message);
    					location.reload();
    				}else{
    					alert(data.error);
    				}
    			});
    		}else
    			alert("两次密码输入的不一致！");
    	}
    }
</script>
</html>