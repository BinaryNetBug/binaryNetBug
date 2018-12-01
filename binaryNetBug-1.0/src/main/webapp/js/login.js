/**
 * 用于登录的js脚本
 */
/*页眉*/
var top_top_index = "top_top_index";//首页
var top_top_download = "top_top_download";//下载
var top_top_login = "top_top_login";//登录
var top_top_desion = "top_top_desion";//注册
var top_top_callwe = "top_top_callwe";//联系我们
var top_box = "top_box";//页眉外边框
/*注册信息*/
var head = "headName";//头像
var nickName = "nickName";//注册时用户名
var password = "insertPassword";//注册时密码
var reset = "reset";//重置
var headImg = "headImg";//头像节点
var regist = "regist";//注册
/*登录信息*/
var userName = "userName";//登录时用户名
var lpassword = "password";//登录时密码
var userSession = "userSession";//用户session
var sidebar_login = "sidebar_login";//侧边栏登录
var sidebar_user = "sidebar_user";//侧边栏用户信息
var user_userName = "user_userName";//登录后用户名
var user_balance = "user_balance";//余额
var user_integral = "user_integral";//积分
var user_head = "user_head";//头像
/*用户信息*/
//创建登录栏节点
function createLoginDOM(){
	var domText = '<div class="top">'+
					'<ul>'+
						'<li id="top_top_index">首页</li>'+
						'<li id="top_top_download">下载</li>'+
					'</ul>'+
					'<ul style="float:right">'+
						'<li id="top_top_login">登录</li>'+
						'<li id="top_top_desion">注册</li>'+
						'<li id="top_top_callwe">联系我们</li>'+
					'</ul>'+
					'</div>';
	$("#"+top_box).html(domText);
}

//登录下滚
function scrollLogin(top){
	//判断是否已登录，若已登录，便取消登录
	if(isLogin())
		if(confirm("确定要注销登录吗？")){
			$.post("loginOut.do",{},function(data){
				if(data)
					alert("注销登录成功！");
				else
					alert("系统错误，请联系管理员！");
				window.location.reload();
			})
			return;
		}
	console.log($(window).scrollTop());
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({scrollTop: top}, 1000);
}

//注册
function submitDesign(scrollTop,id){
	//ajax上传注册信息
	$.post("design.do",{
		'headImg':$('#'+head).val(),
		'nickName':$('#'+nickName).val(),
		'password':$('#'+password).val()
	},function(data){//上传成功，回调函数
		if(data!=null&&data!=''){
			alert('注册成功！');
			resetDesign();
		}else{
			if(confirm('用户名已存在，是否登录？')){
				$.post("select.do","nickName="+$('#'+nickName).val(),function(data){
					$('#'+userName).val(data.nickName);
					scrollLogin(scrollTop);
				});
				resetDesign(id);
			}
		}
	});
}

//打开注册页
function openDesign(scrollTop,id){
	var domText = '<a id="close" href="javascript:closeDesign(\''+id+'\')">x</a>'+
	'<form action="javascript:submitDesign('+scrollTop+',\''+id+'\')">'+
		'<p><img id="headImg" alt="图片未加载" src="images/default.png" style="width:100px;"><input type="file" style="display:none" id="file"><input type="hidden" value="images/default.png" name="headImg" id="headName"></p>'+
		'用户名：<input type="text" id="nickName" maxlength="15"><br>'+
		'密码：<input type="password" id="insertPassword" maxlength="20"><br><br>'+
		'<input type="submit" value="注册" class="loginButton" style="color:#FFFF00;background-image:url(images/designButton.png);">'+
		'<input type="reset" id="reset" style="display:none">'+
	'</form>';
	$('#'+id).html(domText);
	//顶部
	var top = ($(window).height()-parseInt($("#"+id).css("height")))/2;
	var floatTop = top >= 53 ? top : 53;
	//左边
	var left = ($(window).width()-parseInt($("#"+id).css("width")))/2;
	var floatLeft = left >= 0 ? left : 0;
	$("#"+id).css("top",floatTop+"px");
	$("#"+id).css("left",floatLeft+"px");
	$("#"+id).css("display","block");
}

//重置注册框
function resetDesign(id){
	$("#"+reset).click();
	$("#"+headImg).attr("src","images/default.png");
	closeDesign(id);
}

//登录
function submitLogin(){
	var xuserName = $("#"+userName).val();
	var xpassword = $("#"+lpassword).val();
	$.post("login.do",{
		"nickName":xuserName,
		"password":xpassword
	},function(data){
		console.log(data);
		if(data == null || data == ""){
			alert('用户名或密码错误！')
			return;
		}
		if(data.usable != '正常'){
			alert('用户处于'+data.usable+'状态！');
			return;
		}
		showUser(data);
		$("#"+userSession).val(data);
	});
}
//关闭注册页
function closeDesign(id){
	$("#"+id).css("display","none");
}

//显示用户信息
function showUser(data){
	$('#'+sidebar_login).css('display','none');
	$('#'+sidebar_user).css('display','inline-block');
	$('#'+user_userName).text(data.nickName);
	$('#'+user_balance).text(data.balance);
	$('#'+user_integral).text(data.integral);
	$('#'+user_head).attr('src',data.headImg);
	$('#'+top_top_login).text('注销登录');
}
function isLogin(){
	return $('#'+userSession).val() == '' || $("#"+userSession).val() == null ? false : true;
}

//登录模块初始化
function initLogin(scrollTop,id){
	createLoginDOM();
	$("#"+regist).click(function(){
		openDesign(scrollTop,id);
	});
	$("#"+top_top_desion).click(function(){
		openDesign(scrollTop,id);
	});
	$("#"+head).click(function(){
		$("#file").click();
	});
	$("#"+top_top_login).click(function(){scrollLogin(scrollTop)});
	//首页
	$("#"+top_top_index).click(function(){
		location.href="indexServlet";
	});
	//下载
	$("#"+top_top_download).click(function(){
		location.href="downLoadServlet"
	});
	//上传图片并回显
	$("#file").change(function(e){
		var formData = new FormData();
		var imgExt = ["png","gif","jpg","jpeg"];
		var file = $("#file")[0].files[0];
		formData.append("file",file);//获取文件
		if($.inArray($("#file").val().replace(/.+\./,""),imgExt)>=0){
			if(file.size>10*1024*1024){
				alert("请选择小于10M的图片")
			}else{
				//ajax请求
				$.ajax({
					url:"uploadFile.do",
					type:"post",
					data:formData,
					contentType:false,
					processData:false,
					success:function(data) {
						head = "upload/"+data;
						//将头像路径写入隐藏域
						$("#headName").val(head);
						//图片回显
						for (var i = 0; i < e.target.files.length; i++) {  
							var file = e.target.files.item(i);  
							if (!(/^image\/.*$/i.test(file.type))) {  
								continue; //不是图片 就跳出这一次循环  
							}  
							var freader = new FileReader();  
							freader.readAsDataURL(file);  
							freader.onload = function(e) {  
								$("#headImg").attr("src",e.target.result);  
							}  
						}
					}
				});
			}
		}else{
			alert("请选择文件格式为png,gif,jpg,jpeg的图片");
		}
	});
	
	//判断是否已登录
	if(isLogin()){
		var userStr = $("#"+userSession).val()
		showUser($.parseJSON(userStr));
	}
}