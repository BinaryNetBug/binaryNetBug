<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getServletContext().getContextPath()+"/";
%>
<head>
	<base href="<%=basePath%>">
	<title>二进制小网虫</title>
	<meta  charset="utf-8">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<script type="text/javascript">
		function goPersonCenter(){
			location.href="personCenter.do";
		}
		/*--------没有用户动作调用的方法---------*/
		$(function(){
			//初始化登录模块
			initLogin(700,'design')
		})
	</script>
</head>
<body>
	<input type="hidden" id="userSession" value='${sessionScope.user }'>
	<div class="top_box" id='top_box'></div>
	<div id="page">
		<div id="header">
			<a id="logo" href="index.do"><img src="images/logo.png" alt=""></a>
			<ul class="navigation">
				<li class="first">
					<a class="active" href="index.do">首页</a>
				</li>
				<li>
					<a href="about.do">好玩儿</a>
				</li>
				<li>
					<a href="files.do">有用</a>
				</li>
				<li>
					<a href="archives.html">推荐</a>
				</li>
			</ul>
		</div>
		<div id="body">
			<div class="featured"> <img src="images/featured-character.jpg" alt="">
				<div class="section">
					<h2>欢迎来到二进制小网虫</h2>
					<p>
						本站是集游戏、学习为一体的互联网技术交流平台，本站好玩儿页提供来自八方网友提供的HTML5小游戏，有用页提供这些游戏的源代码，游戏源代码只有在用户登录后可以查看。
					</p>
					<p>
						同时，本站面向广大用户收录HTML5小游戏，欢迎关注待定公众号，后台回复我要上传游戏，上传HTML5小游戏代码。
					</p>
				</div>
				<span>&nbsp;</span>
			</div>
			<div id="content">
				<p>
					随着计算机及网络技术的飞速发展，Internet/Intranet应用在全球范围内日益普及，当今社会正快速向信息化社会前进，信息系统的作用也越来越大。
				</p>
				<p>
					人们对程序员的需求也就越来越大。然而要培养一个程序员，和更多知识的学习一样，没有精力的投入是不行的，要有踏实的基础和勇于钻研的精神。
				</p>
				<p>
					而本站有着丰富的学习资源，和先进的互联网技术。为更多的人们提供了一个平台。
				</p>
				<p>
					本站所有用户均可以为本站查找bug，提出需求，可以公众号后台提出所需资源，我们会全力帮你找到资源并第一时间告诉你
				</p>
			</div>
			<div id="sidebar"> <a class="readmore" href="archives.do">&nbsp;</a>
				<ul class="connect" id="sidebar_login">
					<li>
						Follow Us Here:
					</li>
					<li>
						<span class="smallSize">账号： <input type="text" id="userName" size="13" maxlength="15"></span>
					</li>
					<li>
						<span class="smallSize">密码： <input type="password" id="password" size="13" maxlength="20"></span>
					</li>
					<li>
						<button id="login" class="loginButton" onclick="submitLogin()">登录</button>
						<button id="regist" class="loginButton">注册</button>
					</li>
				</ul>
				<ul class="connect" id="sidebar_user">
					<li>
						<img src="${sessionScope.user.headImg }" alt="" id="user_head" onclick="goPersonCenter()"/>
					</li>
					<li>
						<p id="user_userName">${sessionScope.user.nickName }</p>
					</li>
					<li>
						余额：<span id="user_balance">${sessionScope.user.balance }</span>&nbsp;&nbsp;&nbsp;
						积分：<span id="user_integral">${sessionScope.user.integral }</span>
					</li>
				</ul>
			</div>
		</div>
		<div id="footer">
			<ul>
			</ul>
			<span>备案号：冀ICP备18016215号 © 2012-2017 北京小桔科技有限公司审批[2018]</span> 
		</div>
	</div>
	<!-- 注册页面 -->
	<div id="design"></div>
</body>
</html>