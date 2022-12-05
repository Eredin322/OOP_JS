// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log(this.name + "Hello");
//     }
// }

// class Person extends User {
//     constructor(name, email) {
//         super(name);
//         this.email = email;
//     }
//     sayHello() {
//         super.sayHello();
//         console.log(this.email);
//     }
// }

// const li = new Person('li', 'li@email.ua');

// // console.log(li);
// li.sayHello();
// li.sayHello2();


// const alex = new User('Alex');
// console.log(alex);

// alex.sayHello();

// console.log(typeof User); // function :0

class User {
    sayHello() {
        console.log(this.name + ' Hello ');
        return this.name;

    }
}
class Person extends User {
    constructor(name) {
        super();
        this.name = name;
    }
}

const li = new Person('Li');
console.log(li);
li.sayHello();