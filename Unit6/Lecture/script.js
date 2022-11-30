// Статические методы
class User {
    static test = true;
    constructor(name) {
        this.name = name;
    }
    static getRole(email) {
        /**
         *  реализация, возвращает роль
         */
        return 'student';
    }
    static getRole(email) {

    }
    static getUser(id) {

    }
}

const person = new User('Ivan');
console.log(person);

// Alex --> хочет нажать кнопку перейти на форум
// role
// -> взять класс -> создать на его основе объект -> object.getRole();
console.log(User.getRole())
console.log(User.test)
// console.log(person.getRole())

class Student extends User {
    constructor(name) {
        super();
    }
}

console.log(Student.getRole('tedt'));

console.log(Student.test)