// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она
// проверяла наличие картинки по указанному в src адресу.

function smallImg() {
    let getSmallImg = document.querySelector('#small-img');

    for (let i = 1; i <= 5; i++) {
        let img = document.createElement('img');
        img.className = 'img-small';
        img.src = 'img/small/' + i + '.jpg';
        getSmallImg.appendChild(img);
    }

    return getSmallImg;
}
function bigImg() {
    let smallImg = document.querySelector('.img-small'),
        collection = document.querySelectorAll('.small-img'),
        divBigImg = document.querySelector('#big-img'),
        bigImg = document.createElement('div');

    bigImg.className = 'img-big';

    for (let i = 0; i < collection.length; i++) {
        smallImg.addEventListener('click', (e) => {
            e.target.bigImg.src.replace(`img/small/${i}.jpg`, `img/big/${i}.jpg`);

            divBigImg.appendChild(bigImg);
        });
    }
}

smallImg();
bigImg();



// 3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам
// от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на
// которые происходит замена изображения на следующее или предыдущее.