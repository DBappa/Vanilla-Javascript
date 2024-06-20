'use strict';
//Selecting The Elements
const currentScoreElPlayer1= document.getElementById('current--0');
const currentScoreElPlayer2= document.getElementById('current--1');
const player0El=document.querySelector(".player--0");
const player1El=document.querySelector(".player--1");
const diceEl=document.querySelector(".dice");
const btnNew=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");
const totalScoreEl0=document.querySelector("#score--0");
const totalScoreEl1=document.querySelector("#score--1");



diceEl.classList.add("hidden");
currentScoreElPlayer1.textContent=0;
currentScoreElPlayer2.textContent=0;
totalScoreEl0.textContent=0;
totalScoreEl1.textContent=0;
let currentScore=0;
let activePlayer=0;
let scores=[0,0];
let playing =true;





btnRoll.addEventListener("click",function(){

    if(playing){
    //Generate a random Number
    let randomNumber= Math.trunc(Math.random()*6)+1;
    console.log(randomNumber);

    //Show it to user
    diceEl.classList.remove("hidden");
    let image=`dice-${randomNumber}.png`;
    console.log(image);
    diceEl.src=image;
    


    //if 1 then switch player
    if(randomNumber!==1){
        //Add to current score
        currentScore+=randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;

    }else{
        //Switch Player
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        activePlayer= activePlayer===0?1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }

    }
});

btnHold.addEventListener("click",function(){

    if(playing){
    //Add Current Score to Total Score
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer] >20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add("hidden");
        playing=false;
    }else{
        //Switch Player
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        activePlayer= activePlayer===0?1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
    }
});