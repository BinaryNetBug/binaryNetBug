function getPosTop(i,j) {
	return 15 + i * 106;
}
function getPosLeft(i,j){
	return 15 + j * 106;
}


//为数字格的背景设置颜色
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
}
//获取数字的颜色
function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65";
    }
    return "white";
}


//判断棋盘格里还有没有空余的格子
function nospace(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j]==0) {
				return false;
			}
		}
	}
	return true;
}

//判断数字格还有没有能够移动的格子
function nomove(board) {
	if (canMoveDown(board)||canMoveUp(board)||canMoveRight(board)||canMoveLeft(board)) {
		return false;
	}
	return true;
}

//判断格子能否向左移动
function canMoveLeft(board) {
	for(var i = 0;i < 4;i++){
		for(var j = 1;j < 4;j++){
			if (board[i][j] != 0) {
				if (board[i][j-1] == 0 || board[i][j-1] ==board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//判断格子能否向右移动
function canMoveRight(board) {
	for(var i = 0;i < 4;i++){
		for(var j = 2;j >= 0;j--){
			if (board[i][j] != 0) {
				if (board[i][j+1] == 0 || board[i][j+1] ==board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//判断格子能否向上移动
function canMoveUp(board) {
	for(var i = 1;i < 4;i++){
		for(var j = 0;j < 4;j++){
			if (board[i][j] != 0) {
				if (board[i - 1][j] == 0 || board[i - 1][j] ==board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//判断格子能否向下移动
function canMoveDown(board) {
	for(var i = 2;i >= 0;i--){
		for(var j = 0;j < 4;j++){
			if (board[i][j] != 0) {
				if (board[i + 1][j] == 0 || board[i + 1][j] ==board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
//判断当前格子与指定格子之间的格子的值是否为0
function noBlokHorizontalCol(row,col1,col2,board) {
	for(var i = col1+1; i < col2;i++){
		if (board[row][i] != 0) {
			return false;
		}
	}
	return true;
}

function noBlokHorizontalRow(row1,row2,col,board) {
	for (var i = row1 + 1; i < row2; i++) {
		if (board[i][col] != 0) {
			return false;
		}
	}
	return true;
}



//作弊神器
function bugn() {
	var num = $("#number-cell-0-0");
	var num2 = $("#number-cell-0-1");
	var num3 = $("#number-cell-0-2");
	var num4 = $("#number-cell-0-3");
	var num5 = $("#number-cell-1-0");
	var num6 = $("#number-cell-1-1");
	var num7 = $("#number-cell-1-2");
	var num8 = $("#number-cell-1-3");
	var num9 = $("#number-cell-2-0");
	var num10 = $("#number-cell-2-1");
	var num11 = $("#number-cell-2-2");
	var num12 = $("#number-cell-2-3");
	var num13 = $("#number-cell-3-0");
	var num14 = $("#number-cell-3-1");
	var num15 = $("#number-cell-3-2");
	var num16 = $("#number-cell-3-3");
	num.text("5");
	num16.text("5");
	num2.text("2");
	num5.text("2");
	num12.text("2");
	num15.text("2");
	num3.text("0");
	num6.text("0");
	num8.text("0");
	num9.text("0");
	num11.text("0");
	num14.text("0");
	num4.text("爱");
	num13.text("爱");
	num7.text("❤");
	num10.text("❤");

	$("#score").css("font-size","100px");
	$("#score").css("color","red");
	$("#score").text("1314");
	$("#id").css("font-size","10px");
}