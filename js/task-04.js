// Створити посилання на необхідні теги в документі 




const augmentationBt = document.querySelector('button[data-action="decrement"]');
const valueNumber = document.querySelector('#value');
const degressionBt = document.querySelector('button[data-action="increment"]');



// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

let counterValue = 0;


// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


degressionBt.addEventListener('click', () => {
    counterValue += 1;
    valueNumber.textContent = counterValue;
});

augmentationBt.addEventListener('click', () => {
   counterValue -= 1;
    valueNumber.textContent = counterValue; 
});