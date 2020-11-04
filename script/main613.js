// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
// 3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.

function smallImg() {
    let getSmallImg = document.querySelector('#small-img');
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement('img');
        img.id = 'image-small-' + i;
        img.className = 'img-small';
        img.src = 'img/small/' + i + '.jpg';
        getSmallImg.appendChild(img);
    }
    return getSmallImg;
}
function bigImg() {
    let big_img = document.querySelector('#big-img');
    let collectSmallImg = document.querySelectorAll('img');
    let emptyImg = 'Такой картинки нет!'
    for (let i = 1; i < collectSmallImg.length; i++) {
        // let smallImg = `<img id="image-small-${i}" class="img-small" src="img/small/${i}.jpg">`
        let createImg = `<img id="image-big-${i}" class="img-big" src="img/big/${i}.jpg">`
        // collectSmallImg[i].addEventListener('click', (e) => {
        //     big_img.appendChild(createImg);
        //     return big_img;
        // });
        // switch(i) {
        //     case `<img id="image-small-${i}" class="img-small" src="img/small/${i}.jpg">`:
        //         big_img.appendChild(createImg);
        //         return big_img;
        //     default:
        //         return emptyImg;
        // }
    }
    return big_img;
}
smallImg();
bigImg();