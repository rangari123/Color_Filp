const simple = ["red" , "green","#B2A4FF","#0B2447","#A5D7E8"];

const btn = document.getElementById("btn");
const color  =document.querySelector('.color');

btn.addEventListener('click',function(){

    let  randomNumber  = getRandomNumber();

    document.body.style.backgroundColor=simple[randomNumber];
    color.textContent = simple[randomNumber];
    console.log(randomNumber)
})

function getRandomNumber(){
    return Math.floor(Math.random()*simple.length)
}