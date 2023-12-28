'use strict';


let counter = 12;
let temp;
const btn = document.querySelector('button');
btn.innerHTML = 'Start';
const listaUvas = document.querySelector('.uvas');
const time = document.querySelector('.time');
const header = document.querySelector('.titleTwo');
const footer = document.querySelector('footer');
const fireWork = document.querySelector('.firework');
const fireWork2 = document.querySelector('.firework2');
const fireWork3 = document.querySelector('.firework3');
const main = document.querySelector('main');
const headertitle = document.querySelector('.headerTitle');


let uvas = ['🍇', '🍇', '🍇', '🍇', '🍇', '🍇',
  '🍇', '🍇', '🍇', '🍇', '🍇', '🍇',];


const renderList = () => {
  let container = '';
  uvas.map((item) => { container += `<li> ${item}  </li>` })
  listaUvas.innerHTML = container;
  return container;
}
renderList();


const showUvasAndCounter = () => {

  header.classList.remove('color')
  btn.classList.add('hidden');
  listaUvas.classList.remove('hidden');
  time.classList.remove('hidden');
  fireWork.classList.add('hidden');
  fireWork2.classList.add('hidden');
  fireWork3.classList.add('hidden');
  main.classList.remove('colorDark');
  footer.classList.remove('colorDark');
  header.classList.remove('colorDark');
  headertitle.classList.remove('headertitle');



  renderList();
};

const showFelizAno = () => {

  listaUvas.classList.add('hidden');
  time.classList.add('hidden');
  header.classList.add('color');
  btn.innerHTML = 'reset';
  fireWork.classList.remove('hidden');;
  fireWork2.classList.remove('hidden');
  fireWork3.classList.remove('hidden');

  main.classList.add('colorDark');
  btn.classList.remove('hidden');
  footer.classList.add('colorDark');
  header.classList.add('colorDark');
  headertitle.classList.add(' headertitle');
};

const handleClick = () => {
  showUvasAndCounter();

  const decrementAndShowCounter = () => {
    counter--;

    if (counter >= 0) {
      time.innerHTML = counter;
      uvas.shift();
      renderList();
    } else {
      clearInterval(temp);
      counter = 12;
      time.innerHTML = counter;
      uvas = ['🍇', '🍇', '🍇', '🍇', '🍇', '🍇',
        '🍇', '🍇', '🍇', '🍇', '🍇', '🍇'];
      showFelizAno();
    }
  };

  temp = setInterval(decrementAndShowCounter, 1000);
};

btn.addEventListener('click', handleClick);




















