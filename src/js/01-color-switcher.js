import throttle from 'lodash.throttle'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    
     timer =  setInterval(() => {
          body.style.backgroundColor = `${getRandomHexColor()}`;
     }, 1000);
    
});

stopBtn.addEventListener('click', ()=>{
    stopBtn.setAttribute('disabled', '');
    startBtn.removeAttribute('disabled');

    clearInterval(timer);
});


