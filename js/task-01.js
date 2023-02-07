// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Скрипт для виведення в консоль загальної к-сті категорій

const allElementsList = document.querySelectorAll(`.item`);
console.log("Number of categories :", allElementsList.length);

// Скрипт для перебору масиву та  виведення в консоль <h2> і його <li>

allElementsList.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.childElementCount);
});
