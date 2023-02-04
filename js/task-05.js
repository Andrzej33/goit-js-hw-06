// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Створюємо посилання на необхідні теги

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

// Додаємо прослуховувача подій на input


inputRef.addEventListener('input', onInputTransform);

// Використовуємо функцію з тернарним оператором для виконання завдання

function onInputTransform(event) {
    event.currentTarget.value ?
    spanRef.textContent = event.currentTarget.value : spanRef.textContent = `Anonymous`;
};