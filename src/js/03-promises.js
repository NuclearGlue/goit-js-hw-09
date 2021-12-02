const promiseForm = document.querySelector('.form')
const delayField = document.querySelector('input[name = "delay"]');
const stepField = document.querySelector('input[name = "step"]');
const amountField = document.querySelector('input[name = "amount"]');


promiseForm.addEventListener('submit', onSubmit);


let submitInfo = {};


function createPromise(position, delay) {
  
  const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
  } else {
      reject({ position, delay });
  }},delay)
  })
  return promise;
}



  function onSubmit(event) {
  event.preventDefault()
  let delayNumber = Number(delayField.value);
  const step = Number(stepField.value);
  const amount = Number(amountField.value);

    console.log(delayNumber);
    
  for (let i = 1; i <= amount; i += 1) {
     createPromise(i, delayNumber)
       .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
       .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayNumber += step;
  }
    
}