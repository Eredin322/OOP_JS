class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(number) {
        if (typeof number === 'number') return true;
        return false;
    }
    static isInt(number) {
        if (parseInt(number) === number) return true;
        return false;
    }
    static isFloat(number) {
        if (parseInt(number) !== number) return true;
        return false;
    }
    static isChar(string) {
        if (string.length > 1) return false;
        return true;
    }
    static isString(string) {
        if (typeof string === 'string') return true;
        return false;
    }
    static isBoolean(value) {
        if (typeof value === 'boolean') return true;
        return false;
    }
    static isArray(value) {
        console.log(typeof value)
        if (Array.isArray(value)) return true;
        return false;
    }
    static toMoney(number) {
        let res = '';
        let arr;
        let arr2 = [];
        let decimal;
        if (Validate.isString(number)) {
            arr = number.split('').reverse();
        } else {
            arr = number.toString().split('').reverse();
        }


        if (arr.includes('.')) {
            decimal = arr.splice(0, arr.indexOf('.') + 1)
        }
        console.log(decimal);
        for (let i = 0; i < arr.length; i++) {
            if (i !== 0 && i % 3 === 0) {
                console.log(i);
                arr2.push(' ');
                arr2.push(arr[i]);
                continue;
            }
            arr2.push(arr[i]);
        }
        res = arr2.reverse().join('');
        if (Validate.isInt(+number) && decimal.length === 0) {
            res = res + '.00';
        } else {
            res = res + decimal.reverse().join('');
        }
        return res;
    }
}