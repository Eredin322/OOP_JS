// console.log(this);
// document.querySelector('.b-1').onclick = () => {
//     console.log(this);
//     this.style.background = 'orange';
// }

document.querySelector('.b-1').addEventListener('click', f1);

function f1() {
    console.log(this);
    this.style.background = 'orange';
}

let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

class U2 {
    constructor(model) {
        this.model = model;
    }
    showThis() {
        console.log(this);
    }
}
console.log(U2);

const boat = new U2('722');
console.log(boat);
boat.showThis();

class Yellow extends U2 {
    constructor(model, color) {
        super(model);
        this.color = color;
        console.log('---------');
        console.log(this.model);
    }
}

let b = new Yellow(666, 'red');
console.log(b);
console.log(b.model);