$(function () {
	newgame();
});

function newgame(){
	//初始化棋盘
	init();
	//随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function bug() {
	//初始化棋盘
	newinit();
	bugn();
}
var hasConflicted = new Array();

var board = new Array();
function init(){
	
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		hasConflicted[i] = new Array();
		for (var j = 0; j < 4; j++) {
			//每个格子初始化值为零
			board[i][j] = 0;
			 hasConflicted[i][j] = false;
			//获取每个格子元素
			var gridCell = $("#grid-cell-"+i+"-"+j);
			//通过getPosTop方法设置每个格子到顶部的距离
			gridCell.css("top",getPosTop(i,j));
			//通过getPosLeft方法设置每个格子到左端的距离
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	

	updateBoardView();
	$("#score").text("0");
	$("#id").css("font-size","30px");
	$("#score").css("font-size","30px");
	$("#score").css("color","#ccc");
}

//初始化数字格
function updateBoardView() {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			//增加数字格
			$("#grid-container").append("<div class = 'number-cell' id='number-cell-"+ i + "-" +j+"'></div>");
			var numberCell = $("#number-cell-"+i+"-"+j);
			if(board[i][j]==0){
				numberCell.css("width","0");
				numberCell.css("height","0");
				numberCell.css("top",getPosTop(i,j)+100);
				numberCell.css("left",getPosLeft(i,j)+100);
			}
			else{
				numberCell.css("width","87");
				numberCell.css("height","87");
				numberCell.css("top",getPosTop(i,j));
				numberCell.css("left",getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
				numberCell.css("color",getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			}
			hasConflicted[i][j] = false;
		}
	}
	$(".number-cell").css("line-height","87px");
	$(".number-cell").css("font-size","60px");
}

function generateOneNumber(){
	//判断格子是否为空
	// if (nospace(board)) {
	// 	return false;
	// }
	// return true;

	//生成随机位置的随机数字
	//生成随机位置
	var randx = parseInt(Math.floor(Math.random()*4));
	var randy = parseInt(Math.floor(Math.random()*4));

	while(true){
		if (board[randx][randy] == 0) {
			break;
		}
		var randx = parseInt(Math.floor(Math.random()*4));
		var randy = parseInt(Math.floor(Math.random()*4));
	}
	//随机生成数字
	var randNumber = Math.random() > 0.5 ? 2 : 4;

	//在随机位置显示随机数字
    board[randx][randy] = randNumber;
    //实现随机数字显示的动画
    ShowNumberWithAnimation(randx, randy, randNumber);
}


function newinit(){
	
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		for (var j = 0; j < 4; j++) {
			//每个格子初始化值为零
			board[i][j] = 0;
			//获取每个格子元素
			var gridCell = $("#grid-cell-"+i+"-"+j);
			//通过getPosTop方法设置每个格子到顶部的距离
			gridCell.css("top",getPosTop(i,j));
			//通过getPosLeft方法设置每个格子到左端的距离
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	

	newupdateBoardView();
}

//初始化数字格
function newupdateBoardView() {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			//增加数字格
			$("#grid-container").append("<div class = 'number-cell' id='number-cell-"+ i + "-" +j+"'></div>");
			var numberCell = $("#number-cell-"+i+"-"+j);
			
			numberCell.css("width","87");
			numberCell.css("height","87");
			numberCell.css("top",getPosTop(i,j));
			numberCell.css("left",getPosLeft(i,j));
			numberCell.css("background-color","pink");
			numberCell.css("color","red");
			
		}
	}
	$(".number-cell").css("line-height","87px");
	$(".number-cell").css("font-size","60px");
}

//加入响应式布局
function moveUpIn() {
	moveUp();
	//随机生成一个数字（2/4）
	setTimeout("generateOneNumber()",200);
	//判断游戏是否结束
	setTimeout("isgameover()",210);
}
function moveDownIn() {
	moveDown();
	//随机生成一个数字（2/4）
	setTimeout("generateOneNumber()",200);
	//判断游戏是否结束
	setTimeout("isgameover()",210);
}
function moveRightIn() {
	moveRight();
	//随机生成一个数字（2/4）
	setTimeout("generateOneNumber()",200);
	//判断游戏是否结束
	setTimeout("isgameover()",210);
}
function moveLeftIn() {
	moveLeft();
	//随机生成一个数字（2/4）
	setTimeout("generateOneNumber()",200);
	//判断游戏是否结束
	setTimeout("isgameover()",210);
}