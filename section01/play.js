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

