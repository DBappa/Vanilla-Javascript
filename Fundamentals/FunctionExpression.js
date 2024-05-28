//Function Declaration
function calcAge1(birthYear){
    return 2023-birthYear;
}
const myAge= calcAge1(1990);

console.log(myAge);

//Function Expression

const calcAge2= function (birthYear){
    return 2023-birthYear;
}

const yourAge= calcAge2(1991);
console.log(yourAge)