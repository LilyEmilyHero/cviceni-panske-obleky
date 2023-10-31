console.log('funguju');

const svgElement = document.querySelector('#product-image');

const whiteBtnElement = document.querySelector('.button__color-white');
const blackBtnElement = document.querySelector('.button__color-black');
const redBtnElement = document.querySelector('.button__color-red');
const blueBtnElement = document.querySelector('.button__color-blue');

const setColorWhite = () => {
  svgElement.style = 'fill: #a6a6a6';
};

const setColorBlack = () => {
  svgElement.style = 'fill: #262626';
};

const setColorRed = () => {
  svgElement.style = 'fill: #953232';
};

const setColorBlue = () => {
  svgElement.style = 'fill: #89ACCC';
};

whiteBtnElement.addEventListener('click', setColorWhite);
blackBtnElement.addEventListener('click', setColorBlack);
redBtnElement.addEventListener('click', setColorRed);
blueBtnElement.addEventListener('click', setColorBlue);
