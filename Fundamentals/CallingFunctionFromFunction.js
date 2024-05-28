
function cutFruitPieces(noOfFruits){

    return 4*noOfFruits;

}

function juiceMaker(noOfApples,noOfOranges){
    console.log(noOfApples,noOfOranges);
    const applePieces=cutFruitPieces(noOfApples);
    const orangePieces=cutFruitPieces(noOfOranges);
    const juiceString=`Juice Prepared with ${applePieces} pieces of Apple and ${orangePieces} pieces of Orange`;

    return juiceString;
}

console.log(juiceMaker(3,5));