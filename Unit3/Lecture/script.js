

let a = 'IVAN';
let b = '777';

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword())

let firstStudent = new Student(a, b, 'I!@#');

console.log(firstStudent);
console.log(firstStudent.getStudentCourses());