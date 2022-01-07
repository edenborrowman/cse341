const nameM = "Max";
let age = 29;
const hasHobbies = true;

age = 30;


console.log(nameM); 

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby
    );
 }
console.log(summarizeUser(nameM, age, hasHobbies));

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));

const addOne = (a) => a +1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();