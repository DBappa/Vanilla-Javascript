const age='18';

if(age===18){
    console.log("You are an adult Strict");
}

if(age==18){
    console.log("You are an Adult Loose");
}

const myage= prompt("Enter your age");

if(myage>=18){
    console.log("You are an adult");
}else if(myage <= 12){
    console.log("You are an child");
}else {
    console.log("You are teenager");
}