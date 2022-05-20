const stopBtn =document.querySelector(`button[data-stop]`);
const startBtn = document.querySelector(`button[ data-start]`);
const body = document.querySelector(`body`);

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

stopBtn.addEventListener(`click`, ()=>{
    clearInterval(intervalId);
    stopBtn.disabled= true;
    startBtn.disabled= false;
    console.log(`стоп`)
} );


startBtn.addEventListener(`click`, ()=>{
    startBtn.disabled = true;
    stopBtn.disabled = false;
  intervalId = setInterval(()=>{ body.style.backgroundColor = getRandomHexColor()}, 1000);

} );

