//获取键盘事件
$(document).keydown(function (event) {
	switch(event.keyCode){
		case 37:
		case 65:
			if (moveLeft()) {
				//随机生成一个数字（2/4）
				setTimeout("generateOneNumber()",200);
				//判断游戏是否结束
				setTimeout("isgameover()",250);
				
			}
			
			break;
		case 38:
		case 87:
			if (moveUp()) {
				//随机生成一个数字（2/4）
				setTimeout("generateOneNumber()",200);
				//判断游戏是否结束
				setTimeout("isgameover()",250);
			}
			break;
		case 39:
		case 68:
			if (moveRight()) {
				//随机生成一个数字（2/4）
				setTimeout("generateOneNumber()",200);
				//判断游戏是否结束
				setTimeout("isgameover()",250);
			}
			break;
		case 40:
		case 83:
			if (moveDown()) {
				//随机生成一个数字（2/4）
				setTimeout("generateOneNumber()",200);
				//判断游戏是否结束
				setTimeout("isgameover()",250);
			}
			break;
		default:
			break;

	}
});

var score = 0;
//向左移动的游戏逻辑
function moveLeft() {
	if (!canMoveLeft(board)) {
		return flase;
	}

	for (var i = 0; i < 4; i++) {
		for(var j = 1; j < 4; j++){
			if (board[i][j] != 0) {
				for(var k = 0; k < j ; k++){
					if (board[i][k] == 0 && noBlokHorizontalCol(i,k,j,board)) {
						showMoveAnimation(i,j,i,k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i,k,j,board)&&!hasConflicted[i][k]){
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score +=board[i][k];
						$("#score").text(score);
						hasConflicted[i][k] = true;
						
						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200) ;
	return true;
}
//向右移动的逻辑
function moveRight() {
	if (!canMoveRight(board)) {
		return flase;
	}

	for (var i = 0; i < 4; i++) {
		for(var j = 2; j >= 0; j--){
			if (board[i][j] != 0) {
				for(var k = 3; k > j ; k--){
					if (board[i][k] == 0 && noBlokHorizontalCol(i,j,k,board)) {
						showMoveAnimation(i,j,i,k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i,j,k,board)&&!hasConflicted[i][k]){
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score +=board[i][k];
						$("#score").text(score);
						hasConflicted[i][k] = true;
						
						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200) ;
	return true;
}
//向上移动的逻辑
function moveUp() {
	if (!canMoveUp(board)) {
		return flase;
	}

	for (var i = 1; i < 4; i++) {
		for(var j = 0; j < 4; j++){
			if (board[i][j] != 0) {
				for(var k = 0; k < i; k++){
					if (board[k][j] == 0 && noBlokHorizontalRow(k,i,j,board)) {
						showMoveAnimation(i,j,k,j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] == board[i][j] && noBlokHorizontalRow(k,i,j,board)&&!hasConflicted[i][k]){
						showMoveAnimation(i,j,k,j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score +=board[k][j];
						$("#score").text(score);
						hasConflicted[k][j] = true;
						
						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200) ;
	return true;
}
//向下移动逻辑
function moveDown() {
	if (!canMoveDown(board)) {
		return false;
	}

	for (var i = 2; i >= 0; i--) {
		for(var j = 0; j < 4; j++){
			if (board[i][j] != 0) {
				for(var k = 3; k > i; k--){
					if (board[k][j] == 0 && noBlokHorizontalRow(i,k,j,board)) {
						showMoveAnimation(i,j,k,j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] == board[i][j] && noBlokHorizontalRow(i,k,j,board)&&!hasConflicted[i][k]){
						showMoveAnimation(i,j,k,j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score +=board[k][j];
						$("#score").text(score);
						hasConflicted[k][j] = true;
						
						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200) ;
	return true;
}

//判断游戏是否结束
function isgameover() {
	if (nospace(board) && nomove(board)) {
		gameOver();
	}
}
//游戏结束逻辑
function gameOver() {
	alert("gameOver!");
	alert("本次得分："+score);
	score = 0;
}
