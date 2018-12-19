$(function () {
	newgame();
});

function newgame(){
	//��ʼ������
	init();
	//�������������������
	generateOneNumber();
	generateOneNumber();
}

function bug() {
	//��ʼ������
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
			//ÿ�����ӳ�ʼ��ֵΪ��
			board[i][j] = 0;
			 hasConflicted[i][j] = false;
			//��ȡÿ������Ԫ��
			var gridCell = $("#grid-cell-"+i+"-"+j);
			//ͨ��getPosTop��������ÿ�����ӵ������ľ���
			gridCell.css("top",getPosTop(i,j));
			//ͨ��getPosLeft��������ÿ�����ӵ���˵ľ���
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	

	updateBoardView();
	$("#score").text("0");
	$("#id").css("font-size","30px");
	$("#score").css("font-size","30px");
	$("#score").css("color","#ccc");
}

//��ʼ�����ָ�
function updateBoardView() {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			//�������ָ�
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
	//�жϸ����Ƿ�Ϊ��
	// if (nospace(board)) {
	// 	return false;
	// }
	// return true;

	//�������λ�õ��������
	//�������λ��
	var randx = parseInt(Math.floor(Math.random()*4));
	var randy = parseInt(Math.floor(Math.random()*4));

	while(true){
		if (board[randx][randy] == 0) {
			break;
		}
		var randx = parseInt(Math.floor(Math.random()*4));
		var randy = parseInt(Math.floor(Math.random()*4));
	}
	//�����������
	var randNumber = Math.random() > 0.5 ? 2 : 4;

	//�����λ����ʾ�������
    board[randx][randy] = randNumber;
    //ʵ�����������ʾ�Ķ���
    ShowNumberWithAnimation(randx, randy, randNumber);
}


function newinit(){
	
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		for (var j = 0; j < 4; j++) {
			//ÿ�����ӳ�ʼ��ֵΪ��
			board[i][j] = 0;
			//��ȡÿ������Ԫ��
			var gridCell = $("#grid-cell-"+i+"-"+j);
			//ͨ��getPosTop��������ÿ�����ӵ������ľ���
			gridCell.css("top",getPosTop(i,j));
			//ͨ��getPosLeft��������ÿ�����ӵ���˵ľ���
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	

	newupdateBoardView();
}

//��ʼ�����ָ�
function newupdateBoardView() {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			//�������ָ�
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

//������Ӧʽ����
function moveUpIn() {
	moveUp();
	//�������һ�����֣�2/4��
	setTimeout("generateOneNumber()",200);
	//�ж���Ϸ�Ƿ����
	setTimeout("isgameover()",210);
}
function moveDownIn() {
	moveDown();
	//�������һ�����֣�2/4��
	setTimeout("generateOneNumber()",200);
	//�ж���Ϸ�Ƿ����
	setTimeout("isgameover()",210);
}
function moveRightIn() {
	moveRight();
	//�������һ�����֣�2/4��
	setTimeout("generateOneNumber()",200);
	//�ж���Ϸ�Ƿ����
	setTimeout("isgameover()",210);
}
function moveLeftIn() {
	moveLeft();
	//�������һ�����֣�2/4��
	setTimeout("generateOneNumber()",200);
	//�ж���Ϸ�Ƿ����
	setTimeout("isgameover()",210);
}