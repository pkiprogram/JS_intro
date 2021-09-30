var table = document.createElement('table');
		var symbols = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
		var digits = ['', '1', '2', '3', '4', '5', '6', '7', '8', ''];
		var reverseDigits = digits.reverse();
		var figureWhite = ['', '&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;', ''];
		var pawnWhite = ['&#9817;'];
		var figureBlack = ['', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];
		var pawnBlack = ['&#9823;'];		

		function chessDesk() {
			for (var i = 0; i < 10; ++i) {
				var tr = document.createElement('tr');
				table.appendChild(tr);
				for (var j = 0; j < 10; ++j) {
					var td = document.createElement('td');					
					tr.appendChild(td);
					td.innerHTML = (i + 1) + j;

					if (td.innerHTML % 2 == 0) {
						td.style.backgroundColor = 'gray';
					} 

					if (i == 9 && 0 <= j <= 9) {
						td.innerHTML = symbols[j];
					} else if (i == 0 && 0 <= j <= 9) {
						td.innerHTML = symbols[j];
					} else if (i <= 8 && j == 0) {
						td.innerHTML = reverseDigits[i];
					} else if (i <= 8 && j == 9) {
						td.innerHTML = reverseDigits[i];
					} else if (i == 1 && 1 <= j && j < 9) {
						td.innerHTML = figureBlack[j];
					} else if (i == 2 && 1 <= j && j < 9 ) {
						td.innerHTML = pawnBlack;
					} else if (i == 7 && 1 <= j && j < 9) {
						td.innerHTML = pawnWhite;
						td.style.color = 'black';
					} else if (i == 8 && 1 <= j && j < 9) {
						td.innerHTML = figureWhite[j];
						td.style.color = 'black';
					} else {
						td.innerHTML = '';
					}
				}
			}
			document.querySelector('div').appendChild(table);
		}
		chessDesk();