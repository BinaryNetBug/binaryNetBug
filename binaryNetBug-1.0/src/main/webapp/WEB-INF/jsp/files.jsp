<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getServletContext().getContextPath()+"/";
%>
<head>
<base href="<%=basePath%>">
	<title>二进制小网虫——有用</title>
	<meta  charset="utf-8">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
</head>
<body>
	<div id="page">
		<div id="header">
			<a id="logo" href="index.do"><img src="images/logo.png" alt=""></a>
			<ul class="navigation">
				<li class="first">
					<a href="index.do">首页</a>
				</li>
				<li>
					<a href="about.do">好玩儿</a>
				</li>
				<li>
					<a class="active" href="myths.html">有用</a>
				</li>
				<li>
					<a href="archives.html">推荐</a>
				</li>
			</ul>
		</div>
		<div id="body">
			<div class="content">
				<ul>
					<li>
						<img src="images/myths-of-droga-character.png" alt="" id="mae">
						<div>
							<p>学习文档下载！！</p>
							<ul>
								<li>2048学习文档
									<a href="downloadFile.do?fileType=downloadFile&filename=2048.zip">点击下载</a>
								</li>
								<li>接糖块学习文档
									<a href="tang.zip">点击下载</a>
								</li>
								<li>五子棋学习文档
									<a href="five.doc">点击下载</a>
								</li>
								<li>超级打字学习文档
									<a href="code.doc">点击下载</a>
								</li>
								<li>2048学习文档
									<a href="2048.doc">点击下载</a>
								</li>
								<li>2048学习文档
									<a href="2048.doc">点击下载</a>
								</li>
								<li>2048学习文档
									<a href="2048.doc">点击下载</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div id="footer">
			<ul>
				<li>
					<a href="about.html" class="video">&nbsp;</a>
					<p>
						This website template has been collect from <a href="http://www.cssmoban.com/" title="模板之家">模板之家</a> for you, for
					</p>
				</li>
				<li>
					<a href="myths.html" class="myths">&nbsp;</a>
					<p>
						This website template has been collect from <a href="http://www.cssmoban.com/" title="模板之家">模板之家</a> for you, for
					</p>
				</li>
				<li class="last">
					<a href="archives.html" class="archives">&nbsp;</a>
					<p>
						This website template has been collect from <a href="http://www.cssmoban.com/" title="模板之家">模板之家</a> for you, for
					</p>
				</li>
			</ul>
			<span>&copy; Copyright &copy; 2032. <a href="index.html">Company name</a> All rights reserved&nbsp;- Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></span> </div>
	</div>
</body>
<script type="text/javascript">
	var img = document.getElementById('mae');
	img.addEventListener('mouseover', nn, false);
	img.addEventListener('cli', nn, false);
	function nn(evt) {
		var evt = event||window.event;
		if (evt&&evt.preventDefault) {
			evt.preventDefault();
		}else{
			window.event.returnValue = false;
		}
	}
</script>
</html>