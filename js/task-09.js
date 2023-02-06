// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color


// Створюємо посилання на необхідні теги


const body = document.querySelector('body');
const colorValue =
  document.querySelector('.color');
const changeColorBtn =
  document.querySelector('.change-color');


// Додаємо прослуховувача подій на кнопку зміни кольоу

changeColorBtn.addEventListener('click', onChangeColorBtnClick);


// Виносимо в окрему функцію те що необхдно зробити

function onChangeColorBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;
}





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



