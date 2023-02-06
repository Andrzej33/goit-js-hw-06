// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  input:
    document.querySelector('#controls > input'),
 createBtn :
  document.querySelector('button[data-create]'),
 destroyBtn :
  document.querySelector('button[data-destroy]'),
 collection :
  document.querySelector('#boxes'),
}








function createBoxes(amount)  {
  const boxes = [];
  
 

  for (let i = 0; i < amount; i += 1) {

    const div = document.createElement('div');



  div.style.backgroundColor = getRandomHexColor();
  div.style.height = `${30 + 10 * i}px`;
  div.style.width = `${30 + 10 * i}px`;

      

    boxes.push(div);
    
  }
  
  refs.collection.append(...boxes);
}



refs.createBtn.addEventListener('click', () => {
let boxesColection = createBoxes(refs.input.value)
});


 






refs.destroyBtn.addEventListener('click', () => {
  refs.collection.innerHTML = '';
 });




























function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
