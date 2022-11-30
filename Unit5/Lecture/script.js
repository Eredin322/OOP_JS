// Приватные(#)
// Защищенные(_) Protected
// Public

class User {
    constructor() {
        // this._name = name;
    }
    #test = 'Hohoho';
    set name(name) {
        console.log('Privat = ' + this.#test)
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name.toUpperCase();
    }
    one() {
        console.log(this.#test);
    }
}
пше
const student = new User();
// student._name = 'Ivan';
student.name = '              AlEX        '
console.log(student);
console.log(student.name);
// console.log(student.#test); // return error

class User2 extends User { };
const student2 = new User2;
student2.name = 'Oleg';
student2.one();