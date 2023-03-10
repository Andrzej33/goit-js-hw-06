const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// Створюємо посилання на необхідний тег

const galeryElList = document.querySelector(`.gallery`);

// Перебираємо масив і створюємо галерею

const makeGaleryImages = (properties) => {
  return properties.map((property) => {
    return `<li class = "images-item"><img class = "images-03" 
    src = "${property.url}" 
    alt = "${property.alt}" 
    width = "100%" height = "200" ></img></li>`;
  });
};

// Прибираємо ","

const allImages = makeGaleryImages(images).join(" ");

// Додаємо галерею в HTML

galeryElList.insertAdjacentHTML("beforeend", allImages);

// Додаємо до галереї css стилі

galeryElList.style.display = "flex";
galeryElList.style.gap = "40px";
galeryElList.style.listStyleType = "none";
galeryElList.style.allignItems = "center";
galeryElList.style.backgroundColor = "rgb(98, 87, 146)";
galeryElList.style.padding = "20px";
galeryElList.style.justifyContent = "center";
