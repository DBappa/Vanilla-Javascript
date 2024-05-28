 
//Arrow Function with Single Parameter and Single Statement
const calculateAge= birthYear => 2024-birthYear;

const myage= calculateAge(1990);

console.log(myage);

//Arrow function with Single Parameter and Multiple Statement
const yearsToRetire= birthYear => {
    const age= 2024-birthYear;
    const retirementAge= 60-age;
    return retirementAge;
}

console.log(yearsToRetire(1990));

//Arrow function with Multiple Parame