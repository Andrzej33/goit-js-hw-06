// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створюємо посилання на список в HTML файлі

const ingredientsList = document.querySelector(`#ingredients`);

// Прописуємо функцію для створення елементів списку

const ingredientsAdd = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement(`li`);
  ingredientEl.classList.add(`item`);
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});
// Додаємо список в HTML файл за одну операцію

ingredientsList.append(...ingredientsAdd);
