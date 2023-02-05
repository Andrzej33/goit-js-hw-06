// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.





// Створюємо посилання на необхідні теги

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


// Додаємо прослуховувача подій на input

input.addEventListener('input', event => {
    text.style.fontSize = `${event.target.value}px`;
});