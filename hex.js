const hex = [0,1,2,3,4,5,6,7,8,9,'a','A','b','B','c','C','d','D','e','E','f','F'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    let hexColor = '#'
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandomNumber()];
        // console.log(hexColor)
    }
  document.body.style.backgroundColor= hexColor;
  color.textContent = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

// summary
/**
 1. create array
 2. on btn click change background color using reandom num function 
 */
