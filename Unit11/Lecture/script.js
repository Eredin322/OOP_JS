class User {
    constructor(title) {
        this.title = title;
    }

    set name(name) {
        if (name !== '') {
            this._name = name;
            return true;
        }
    }
    get name() {
        return this._name;
    }
}

let a = new User('Alex');
a.name = '';
console.log(a);
console.log(a.name);