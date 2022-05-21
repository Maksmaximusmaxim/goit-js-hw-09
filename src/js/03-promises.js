
const form = document.querySelector(`.form`);
console.log(form)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
 setTimeout(()=>{
    if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
 } , delay);
});
};

form.addEventListener(`submit`, (e)=>{
e.preventDefault();
const delay = form.delay.value;
const step       =  form.step.value;
const amount     = form.amount.value;
let numDelay = delay;
if (numDelay <= 0) {
  return;
}
for (let i = 0; i < amount; i += 1) {
  let numPosition = i + 1;
  createPromise(numPosition, numDelay)

  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  numDelay += step;
}



})







