<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getServletContext().getContextPath()+"/";
%>
<head>
<base href="<%=basePath%>">
<title>二进制小网虫——好玩儿</title>
	<meta  charset="utf-8">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<script type="text/javascript">
		function moveTo(id) {
			$("#frame").attr("src",id+".html");
			$('#operation').attr("src",id+"-do.html");
			$('#downLoad').attr("href",id+'.zip');
		}
	
		function rollup() {
			$('#section').scrollTop($('#section').scrollTop()+1);
			if ($('#section').scrollTop() == $('#roll').innerHeight()) {
				$('#section').scrollTop(0);
			}
		}
		/*--------没有用户动作调用的方法---------*/
		$(function(){
			//初始化登录模块
			initLogin(300,'design')
			var time = setInterval(rollup,30);
			$('#section').mouseover(function() {
				clearInterval(time);
			})
			$('#section').mouseout(function() {
				time = setInterval(rollup,30);
			})
		})
	</script>
	<style type="text/css">
		#section{
			overflow: hidden;
			height: 250px;
		}
		.operation{
			position: fixed;
			right: 30px;
			top:250px;
		}
		#code{
			position: fixed;
			top:200px;
			left: 30px;
		}
		.connect li img{
			position: relative;
			top: 5px;
			width: 30px;
		}
	</style>
</head>
<body>
	<input type="hidden" id="userSession" value='${sessionScope.user }'>
	<div class="top_box" id="top_box"></div>
	<div id="page">
		<div id="header">
			<a id="logo" href="index.do"><img src="images/logo.png" alt=""></a>
			<ul class="navigation">
				<li class="first">
					<a href="index.do">首页</a>
				</li>
				<li>
					<a class="active" href="about.do">好玩儿</a>
				</li>
				<li>
					<a href="myths.html">有用</a>
				</li>
				<li>
					<a href="archives.html">推荐</a>
				</li>
			</ul>
		</div>
		<div id="body">
			<div id="content">
				<iframe src="five.html" height="800px" width="100%" id="frame"></iframe>
			</div>
			<div id="sidebar"> <a class="readmore" href="archives.html">&nbsp;</a>
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
						<img src="images/default.png" alt="" id="user_head"/>
					</li>
					<li>
						<p id="user_userName"></p>
					</li>
					<li>
						余额：<span id="user_balance">0</span>&nbsp;&nbsp;&nbsp;
						积分：<span id="user_integral">0</span>
					</li>
				</ul>
				<ul class="section">
					<li>
						<h2><a href="five.zip" id="downLoad">下载该游戏</a></h2>
						<h2>更多游戏</h2>
						<div id="section">
							<div id="roll">
								<p>
									接糖块&nbsp;&nbsp;&nbsp;
									<a href="#">转到该游戏</a>
								</p>
								<p>
									超级打字&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('letter')">转到该游戏</a>
								</p>
								<p>
									五子棋&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('five')">转到该游戏</a>
								</p>
								<p>
									2048&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('2048/2048')">转到该游戏</a>
								</p>
							</div>
							<div>
								<p>
									接糖块&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('sugar')">转到该游戏</a>
								</p>
								<p>
									超级打字&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('letter')">转到该游戏</a>
								</p>
								<p>
									五子棋&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('five')">转到该游戏</a>
								</p>
								<p>
									2048&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('2048/2048')">转到该游戏</a>
								</p>
								<p>
									接糖块&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('sugar')">转到该游戏</a>
								</p>
								<p>
									超级打字&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('letter')">转到该游戏</a>
								</p>
								<p>
									五子棋&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('five')">转到该游戏</a>
								</p>
								<p>
									2048&nbsp;&nbsp;&nbsp;
									<a href="javascript:moveTo('2048/2048')">转到该游戏</a>
								</p>
							</div>
						</div>	
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
	<div class="operation">
		<iframe id="operation" src="five-do.html" width="200px" height="320px"></iframe>
	</div>
	<div id="code">
		<iframe src="code.html" width="250px" height="350px;"></iframe>
	</div>
	<!-- 注册页面 -->
	<div id="design"></div>
</body>
</html>