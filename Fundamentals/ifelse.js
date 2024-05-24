const age=25;

if(age >= 18){

    console.log("You can start driving license 🚗");
}else{
    const yearsLeft= 18 -age;
    console.log(`You are too young wait another ${yearsLeft} years`);
}

const birthYear=1990;

let century;

if(birthYear <= 2000){
    century=20;
}else{
    century=21;
}

console.log(century);