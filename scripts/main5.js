// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

let mainPart = document.querySelector('.main-part');
let chess = document.querySelector('.chess');
let numbers = document.querySelector('.numbers');
let letters = document.querySelector('.letters');
let classicChess = 8;
let lettersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8];
for (let number of numbersList) {
    let divForNumbers = document.createElement('div');
    divForNumbers.className = 'div-for-numbers';
    divForNumbers.innerHTML = number;
    numbers.insertAdjacentElement('afterbegin', divForNumbers);
}
for (let i = 0; i < classicChess; i++) {
    for (let j = 0; j < classicChess; j++) {
        let divForChess = document.createElement('div');
        divForChess.className = 'div-for-chess';
        chess.appendChild(divForChess);
        if ((j % 2 == 0 && i % 2 != 0) || (j % 2 != 0 && i % 2 == 0)) {
            divForChess.style.backgroundColor = '#ff9500';
            divForChess.style.border = '1px solid #ff9500';
        } else {
            divForChess.style.backgroundColor = '#ffce8a';
            divForChess.style.border = '1px solid #ffce8a';
        }
    }
}
for (let letter of lettersList) {
    let divForLetters = document.createElement('div');
    divForLetters.className = 'div-for-letters';
    divForLetters.innerHTML = letter;
    letters.insertAdjacentElement('beforeend', divForLetters);
}



// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
// 3. *Заменить буквы, обозначающие фигуры картинками.