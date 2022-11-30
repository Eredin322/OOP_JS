const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');
b1.onclick = test;

function test(color, num) {
    console.log(this);
    console.log(num);
    this.style.background = color;
}
test(); // !!! ERROR !!!

test.call(b1) // вызвал функция и указал, что this = b1;
b2.onclick = function () {
    test.call(b1); // кликаем на b2, а красим b1
};


b2.onclick = function () {
    test.call(b1, 'green', 5555); // кликаем на b2, а красим b1
};

b2.onclick = function () {
    test.apply(b1, ['green', 5555]); // кликаем на b2, а красим b1, но с помощью apply
};

let a = test.bind(b1, 'orange', 777); // записываем в 'а' экземпляр функции с привязанным контекстом
let b = test.bind(b2, 'red', 888);

b2.onclick = b; // вызываем функцию записанную в переменную b