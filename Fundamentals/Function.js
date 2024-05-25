function logger(){
    console.log("Hi I am Bappaditya");
}

logger();


function juiceMaker(noOfApples,noOfOranges){
    console.log(noOfApples,noOfOranges);
    const juiceString=`Juice Prepared with ${noOfApples} Apples and ${noOfOranges} Oranges`;

    return juiceString;
}

console.log(juiceMaker(3,5));