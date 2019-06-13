console.log('Siema !!!');
const name = 'Lukasz';
const age = 33;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lata.☠️`);

const box = document.querySelector('.box');
console.log(box.innerHTML);

const boxjs = document.querySelector('.box__js');
boxjs.innerHTML = `Nazywam się ${name} i mam ${age} lata.☠️`;