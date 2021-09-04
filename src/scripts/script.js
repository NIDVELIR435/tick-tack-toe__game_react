window.onload = () => { _updateNamePlayers() };
function _updateNamePlayers() {                     //? при перезагрузке страницы запрашивает имена игроков
   let player1 = prompt('как звать первого игрока?', 'Player 1');
   let player2 = prompt('как звать второго игрока?', 'Player 2');
   document.querySelector('.firstPlayer__name').innerHTML = `${player1}(X):<span id='firstPlayer'></span>`;
   document.querySelector('.firstPlayer__name').style.textDecoration = 'underline';
   document.querySelector('.secondPlayer__name').innerHTML = `${player2}(O):<span id='secondPlayer'></span>`;

};

let whoIsMove = 0;                                       //? номер игрока, что ходит
let movesCount = 0;                                      //? счетчик количества ходов

export function OnClickFUNC(id) {                                 //? осуществляет блокировку кнопок и замену символов при нажатии
   _currentMove(id);
   _checkForWIn();
   if (movesCount === 9) {
      _addTextOfLackmove();
      setTimeout(() => { _resetGame() }, 1500);
   } else if (whoIsMove === 0) {
      document.querySelector('.firstPlayer__name').style.textDecoration = 'underline';
      document.querySelector('.secondPlayer__name').style.textDecoration = '';
   } else if (whoIsMove === 1) {
      document.querySelector('.secondPlayer__name').style.textDecoration = 'underline';
      document.querySelector('.firstPlayer__name').style.textDecoration = '';
   }

};

function _addTextOfLackmove() {
   let divline = document.createElement('div');
   divline.innerHTML = 'Похоже ничья';
   divline.className = 'textLackMove';
   document.getElementById('5').appendChild(divline);
}
function _currentMove(id) {
   if (!whoIsMove) {                                                           //* если ходит первый игрок(его значение = 0), то ставятся "Х"
      _crossAdd(id);
      whoIsMove = 1;
   } else if (!!whoIsMove) {                                                   //* если ходит второй игрок(его значение = 1), то ставятся "О"
      _zeroAdd(id);
      whoIsMove = 0;
   }
};

function _crossAdd(id) {                                                         //* ставит крест                                         
   document.getElementById(`${id}`).setAttribute('disabled', '');
   let div = document.createElement('div');
   div.className = 'cross';
   div.setAttribute('disabled', '');
   document.getElementById(`${id}`).appendChild(div)
   movesCount += 1;
}
function _zeroAdd(id) {                                                          //*ставит ноль               
   document.getElementById(`${id}`).setAttribute('disabled', '');
   let div = document.createElement('div');
   div.className = 'zero';
   document.getElementById(`${id}`).setAttribute('disabled', '');
   document.getElementById(`${id}`).appendChild(div)
   movesCount += 1;
}

function _BlockedAllBlock() {                              //? блокирует все блоки если есть победитель            
   let DisabledAllButton = document.querySelectorAll('.button-block');
   for (let i = 0; i < DisabledAllButton.length; i++) {
      DisabledAllButton[i].setAttribute('disabled', '');
   }
}

function _resetGame() {                                     //? очищает поле
   let button_block = document.querySelectorAll('.button-block');
   for (let i = 0; i < button_block.length; i++) {
      button_block[i].removeAttribute('disabled', '');
      while (button_block[i].firstChild) {
         button_block[i].removeChild(button_block[i].firstChild)
      }
      whoIsMove = 0;
   };
   document.querySelector('.firstPlayer__name').style.textDecoration = 'underline';
   document.querySelector('.secondPlayer__name').style.textDecoration = '';
}

function _ScoreStore(playerNumb) {                          //? прибавляет результат победителю
   if ('cross' === playerNumb) {
      document.querySelector('#firstPlayer').innerText = (Number(document.querySelector('#firstPlayer').innerText) + 1);
   } else {
      document.querySelector('#secondPlayer').innerText = (Number(document.querySelector('#secondPlayer').innerText) + 1);
   }

}

function CheckValue(blockID, value) {                            //? по приходящим параметрам сравнивает нужное значение
   if (document.getElementById(`${blockID}`).firstChild !== null) {
      if (document.getElementById(`${blockID}`).firstChild.className === `${value}`) {
         return true;
      } else {
         return false;
      }
   }
};
function _winLine(blockID, classN) {                         //? перечеркивает победившие ячейки
   let divline = document.createElement('div');
   divline.className = `${classN}`;
   document.getElementById(`${blockID}`).appendChild(divline);
}


function _checkForWinLine() {                                //? добавляет класс нужному блоку, что бы отрисовалась крассная линия перечеркивания
   if ((CheckValue(1, 'cross') && CheckValue(2, 'cross') && CheckValue(3, 'cross')) || (CheckValue(1, 'zero') && CheckValue(2, 'zero') && CheckValue(3, 'zero'))) {
      _winLine(2, 'line-H');
   } else if ((CheckValue(4, 'cross') && CheckValue(5, 'cross') && CheckValue(6, 'cross')) || (CheckValue(4, 'zero') && CheckValue(5, 'zero') && CheckValue(6, 'zero'))) {
      _winLine(5, 'line-H');
   } else if ((CheckValue(7, 'cross') && CheckValue(8, 'cross') && CheckValue(9, 'cross')) || (CheckValue(7, 'zero') && CheckValue(8, 'zero') && CheckValue(9, 'zero'))) {
      _winLine(8, 'line-H');
   } else if ((CheckValue(1, 'cross') && CheckValue(4, 'cross') && CheckValue(7, 'cross')) || (CheckValue(1, 'zero') && CheckValue(4, 'zero') && CheckValue(7, 'zero'))) {
      _winLine(4, 'line-V');
   } else if ((CheckValue(2, 'cross') && CheckValue(5, 'cross') && CheckValue(8, 'cross')) || (CheckValue(2, 'zero') && CheckValue(5, 'zero') && CheckValue(8, 'zero'))) {
      _winLine(5, 'line-V');
   } else if ((CheckValue(3, 'cross') && CheckValue(6, 'cross') && CheckValue(9, 'cross')) || (CheckValue(3, 'zero') && CheckValue(6, 'zero') && CheckValue(9, 'zero'))) {
      _winLine(6, 'line-V');
   } else if ((CheckValue(1, 'cross') && CheckValue(5, 'cross') && CheckValue(9, 'cross')) || (CheckValue(1, 'zero') && CheckValue(5, 'zero') && CheckValue(9, 'zero'))) {
      _winLine(5, 'line-LO');
   } else if ((CheckValue(3, 'cross') && CheckValue(5, 'cross') && CheckValue(7, 'cross')) || (CheckValue(3, 'zero') && CheckValue(5, 'zero') && CheckValue(7, 'zero'))) {
      _winLine(5, 'line-RO');
   }
};

export function _checkForWIn() {                                //? следит за ходами
   if ((CheckValue(1, 'cross') && CheckValue(2, 'cross') && CheckValue(3, 'cross')) //? следит за "Х"
      || (CheckValue(4, 'cross') && CheckValue(5, 'cross') && CheckValue(6, 'cross'))
      || (CheckValue(7, 'cross') && CheckValue(8, 'cross') && CheckValue(9, 'cross'))
      || (CheckValue(1, 'cross') && CheckValue(4, 'cross') && CheckValue(7, 'cross'))
      || (CheckValue(2, 'cross') && CheckValue(5, 'cross') && CheckValue(8, 'cross'))
      || (CheckValue(3, 'cross') && CheckValue(6, 'cross') && CheckValue(9, 'cross'))
      || (CheckValue(1, 'cross') && CheckValue(5, 'cross') && CheckValue(9, 'cross'))
      || (CheckValue(3, 'cross') && CheckValue(5, 'cross') && CheckValue(7, 'cross'))
   ) {
      _BlockedAllBlock()
      _ScoreStore('cross')
      _checkForWinLine()
      movesCount = 0;
      setTimeout(() => { _resetGame() }, 1500);
   } else if ((CheckValue(1, 'zero') && CheckValue(2, 'zero') && CheckValue(3, 'zero'))  //? следит за "O"
      || (CheckValue(4, 'zero') && CheckValue(5, 'zero') && CheckValue(6, 'zero'))
      || (CheckValue(7, 'zero') && CheckValue(8, 'zero') && CheckValue(9, 'zero'))
      || (CheckValue(1, 'zero') && CheckValue(4, 'zero') && CheckValue(7, 'zero'))
      || (CheckValue(2, 'zero') && CheckValue(5, 'zero') && CheckValue(8, 'zero'))
      || (CheckValue(3, 'zero') && CheckValue(6, 'zero') && CheckValue(9, 'zero'))
      || (CheckValue(1, 'zero') && CheckValue(5, 'zero') && CheckValue(9, 'zero'))
      || (CheckValue(3, 'zero') && CheckValue(5, 'zero') && CheckValue(7, 'zero'))
   ) {
      _BlockedAllBlock()
      _ScoreStore()
      _checkForWinLine()
      movesCount = 0;
      setTimeout(() => { _resetGame() }, 1500);

   }
}
