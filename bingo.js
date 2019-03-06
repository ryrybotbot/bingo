function highlightCell(cellId) {
	var cell = document.getElementById(cellId);
	if (cell.style.backgroundColor == "white") {
		cell.style.backgroundColor = "black";
		cell.style.color = "white";
	} else {
		cell.style.backgroundColor = "white";
		cell.style.color = "black";
	}
}

function numCaller() {
	var randomNum = Math.floor(Math.random() * 75) + 1;
	if (randomNum > 0 && randomNum <= 15) {
		columnLetter = 'B-';
	} else if (randomNum > 15 && randomNum <= 30) {
		columnLetter = 'I-';
	} else if (randomNum > 30 && randomNum <= 45) {
		columnLetter = 'N-';
	} else if (randomNum > 45 && randomNum <= 60) {
		columnLetter = 'G-';
	} else if (randomNum > 60 && randomNum <= 75) {
		columnLetter = 'O-';
	}
	var result = columnLetter.concat(randomNum);
	document.getElementById('numCall').innerHTML = result;
}

/* source for [shuffleArray]: 
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randomNum() {
	var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	num = shuffleArray(num);
	var cell = document.getElementById('cell1');
	cell.innerHTML = num[0];
	var cell = document.getElementById('cell2');
	cell.innerHTML = num[1];
	var cell = document.getElementById('cell3');
	cell.innerHTML = num[2];
	var cell = document.getElementById('cell4');
	cell.innerHTML = num[3];
	var cell = document.getElementById('cell5');
	cell.innerHTML = num[4];

	var num = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	num = shuffleArray(num);
	var cell = document.getElementById('cell6');
	cell.innerHTML = num[0];
	var cell = document.getElementById('cell7');
	cell.innerHTML = num[1];
	var cell = document.getElementById('cell8');
	cell.innerHTML = num[2];
	var cell = document.getElementById('cell9');
	cell.innerHTML = num[3];
	var cell = document.getElementById('cell10');
	cell.innerHTML = num[4];

	var num = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
	num = shuffleArray(num);
	var cell = document.getElementById('cell11');
	cell.innerHTML = num[0];
	var cell = document.getElementById('cell12');
	cell.innerHTML = num[1];
	var cell = document.getElementById('cell13');
	cell.innerHTML = num[2];
	var cell = document.getElementById('cell14');
	cell.innerHTML = num[3];

	var num = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
	num = shuffleArray(num);
	var cell = document.getElementById('cell15');
	cell.innerHTML = num[0];
	var cell = document.getElementById('cell16');
	cell.innerHTML = num[1];
	var cell = document.getElementById('cell17');
	cell.innerHTML = num[2];
	var cell = document.getElementById('cell18');
	cell.innerHTML = num[3];
	var cell = document.getElementById('cell19');
	cell.innerHTML = num[4];

	var num = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
	num = shuffleArray(num);
	var cell = document.getElementById('cell20');
	cell.innerHTML = num[0];
	var cell = document.getElementById('cell21');
	cell.innerHTML = num[1];
	var cell = document.getElementById('cell22');
	cell.innerHTML = num[2];
	var cell = document.getElementById('cell23');
	cell.innerHTML = num[3];
	var cell = document.getElementById('cell24');
	cell.innerHTML = num[4];
}

function resetBoard() {
	var cells = document.getElementsByTagName('td');
	for (var i = 0; i < 25; i++) {
		cells[i].style.backgroundColor = 'white';
		cells[i].style.color = 'black';
	}
	var freeCell = document.getElementById('freeCell');
	freeCell.style.backgroundColor = 'black';
	freeCell.style.color = 'white';
}

function checkCorners() {
	var c1 = document.querySelector('#cell1').style.backgroundColor;
	var c2 = document.querySelector('#cell5').style.backgroundColor;
	var c3 = document.querySelector('#cell20').style.backgroundColor;
	var c4 = document.querySelector('#cell24').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkDiagonol1() {
	var d1 = document.querySelector('#cell1').style.backgroundColor;
	var d2 = document.querySelector('#cell7').style.backgroundColor;
	var d3 = document.querySelector('#cell18').style.backgroundColor;
	var d4 = document.querySelector('#cell24').style.backgroundColor;
	if (d1 == 'black' && d2 == 'black' && d3 == 'black' && d4 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkDiagonol2() {
	var d1 = document.querySelector('#cell5').style.backgroundColor;
	var d2 = document.querySelector('#cell9').style.backgroundColor;
	var d3 = document.querySelector('#cell16').style.backgroundColor;
	var d4 = document.querySelector('#cell20').style.backgroundColor;
	if (d1 == 'black' && d2 == 'black' && d3 == 'black' && d4 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn1() {
	var c1 = document.querySelector('#cell1').style.backgroundColor;
	var c2 = document.querySelector('#cell2').style.backgroundColor;
	var c3 = document.querySelector('#cell3').style.backgroundColor;
	var c4 = document.querySelector('#cell4').style.backgroundColor;
	var c5 = document.querySelector('#cell5').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black' && c5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn2() {
	var c1 = document.querySelector('#cell6').style.backgroundColor;
	var c2 = document.querySelector('#cell7').style.backgroundColor;
	var c3 = document.querySelector('#cell8').style.backgroundColor;
	var c4 = document.querySelector('#cell9').style.backgroundColor;
	var c5 = document.querySelector('#cell10').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black' && c5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn3() {
	var c1 = document.querySelector('#cell11').style.backgroundColor;
	var c2 = document.querySelector('#cell12').style.backgroundColor;
	var c3 = document.querySelector('#cell13').style.backgroundColor;
	var c4 = document.querySelector('#cell14').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn4() {
	var c1 = document.querySelector('#cell15').style.backgroundColor;
	var c2 = document.querySelector('#cell16').style.backgroundColor;
	var c3 = document.querySelector('#cell17').style.backgroundColor;
	var c4 = document.querySelector('#cell18').style.backgroundColor;
	var c5 = document.querySelector('#cell19').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black' && c5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn5() {
	var c1 = document.querySelector('#cell20').style.backgroundColor;
	var c2 = document.querySelector('#cell21').style.backgroundColor;
	var c3 = document.querySelector('#cell22').style.backgroundColor;
	var c4 = document.querySelector('#cell23').style.backgroundColor;
	var c5 = document.querySelector('#cell24').style.backgroundColor;
	if (c1 == 'black' && c2 == 'black' && c3 == 'black' && c4 == 'black' && c5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkColumn() {
	var col1 = checkColumn1();
	var col2 = checkColumn2();
	var col3 = checkColumn3();
	var col4 = checkColumn4();
	var col5 = checkColumn5();
	if (col1 == true || col2 == true || col3 == true || col4 == true || col5 == true) {
		return true;
	} else {
		return false;
	}
}

function checkRow1() {
	var r1 = document.querySelector('#cell1').style.backgroundColor;
	var r2 = document.querySelector('#cell6').style.backgroundColor;
	var r3 = document.querySelector('#cell11').style.backgroundColor;
	var r4 = document.querySelector('#cell15').style.backgroundColor;
	var r5 = document.querySelector('#cell20').style.backgroundColor;
	if (r1 == 'black' && r2 == 'black' && r3 == 'black' && r4 == 'black' && r5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkRow2() {
	var r1 = document.querySelector('#cell2').style.backgroundColor;
	var r2 = document.querySelector('#cell7').style.backgroundColor;
	var r3 = document.querySelector('#cell12').style.backgroundColor;
	var r4 = document.querySelector('#cell16').style.backgroundColor;
	var r5 = document.querySelector('#cell21').style.backgroundColor;
	if (r1 == 'black' && r2 == 'black' && r3 == 'black' && r4 == 'black' && r5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkRow3() {
	var r1 = document.querySelector('#cell3').style.backgroundColor;
	var r2 = document.querySelector('#cell8').style.backgroundColor;
	var r3 = document.querySelector('#cell17').style.backgroundColor;
	var r4 = document.querySelector('#cell22').style.backgroundColor;
	if (r1 == 'black' && r2 == 'black' && r3 == 'black' && r4 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkRow4() {
	var r1 = document.querySelector('#cell4').style.backgroundColor;
	var r2 = document.querySelector('#cell9').style.backgroundColor;
	var r3 = document.querySelector('#cell13').style.backgroundColor;
	var r4 = document.querySelector('#cell18').style.backgroundColor;
	var r5 = document.querySelector('#cell23').style.backgroundColor;
	if (r1 == 'black' && r2 == 'black' && r3 == 'black' && r4 == 'black' && r5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkRow5() {
	var r1 = document.querySelector('#cell5').style.backgroundColor;
	var r2 = document.querySelector('#cell10').style.backgroundColor;
	var r3 = document.querySelector('#cell14').style.backgroundColor;
	var r4 = document.querySelector('#cell19').style.backgroundColor;
	var r5 = document.querySelector('#cell24').style.backgroundColor;
	if (r1 == 'black' && r2 == 'black' && r3 == 'black' && r4 == 'black' && r5 == 'black') {
		return true;
	} else {
		return false;
	}
}

function checkRow() {
	var row1 = checkRow1();
	var row2 = checkRow2();
	var row3 = checkRow3();
	var row4 = checkRow4();
	var row5 = checkRow5();
	if (row1 == true || row2 == true || row3 == true || row4 == true || row5 == true) {
		return true;
	} else {
		return false;
	}
}

function checkSingleLine() {
	var corners = checkCorners();
	var diag1 = checkDiagonol1();
	var diag2 = checkDiagonol2();
	var row = checkRow();
	var col = checkColumn();

	if (corners == true || diag1 == true || diag2 == true || row == true || col == true) {
		alert("Congratulations, you have won!!!");
	} else {
		alert("Winning condition not met, check again!");
	}
}

function checkFullBoard() {
	var row1 = checkRow1();
	var row2 = checkRow2();
	var row3 = checkRow3();
	var row4 = checkRow4();
	var row5 = checkRow5();

	if (row1 == true && row2 == true && row3 == true && row4 == true && row5 == true) {
		alert("Congratulations, you have won!!!");
	} else {
		alert("Winning condition not met, check again!");
	}
}


function checkBingoMethod() {
	if (document.querySelector('input[name="goal"]:checked').value == 'single') {
		checkSingleLine();
	} else {
		checkFullBoard();
	}
}
