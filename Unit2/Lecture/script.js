let a = {
    text: "Hello",
    color: "red",
    "bold": true,
    "show": function () {
        console.log(this.color);
    }
}

let b = {
    "fontSize": '24px',
    __proto__: a,
}
let c = {
    "fontFamily": 'Verdana',
    __proto__: b,
}

console.log(a);
console.log(b);
console.log(c);

console.log(b.text); // Hello
b.text = 'one';
console.log(b.text); // one
console.log(a.text); // Hello

b.show(); // red
b.color = 'green';
b.show();

console.log(c.hasOwnProperty('bold'));