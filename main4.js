// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
let getUserNum = prompt('Введите любое целое число от 0 до 999 (включительно)!');

function number() {
    'use strict';
    // let hundreds = Math.floor(getUserNum / 100);
    // let decades = Math.floor(getUserNum / 10 % 10);
    // let units = Math.floor(getUserNum % 10);

    if (isNaN(getUserNum)) return 'Введите числовое значение!';
    if (getUserNum.length > 3 && Number.isInteger(+getUserNum)) return 'Вы ввели число выше 1000!';
    if (!Number.isInteger(+getUserNum)) return 'Вы ввели не целое число!'; // долго провозился с isInteger()

    let numStructure = {}; // создаю объект, где буду хранить свои числа
    numStructure['Сотни'] = Math.floor(getUserNum / 100);
    numStructure['Десятки'] = Math.floor(getUserNum / 10 % 10);
    numStructure['Единицы'] = Math.floor(getUserNum % 10);
    return numStructure;
}
console.log(getUserNum, '\n', number());