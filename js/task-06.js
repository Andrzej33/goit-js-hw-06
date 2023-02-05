

// Створюємо посилання на необхіднтй тег

const input = document.querySelector('#validation-input');
 
// Додаємо прослуховувача подій на input

input.addEventListener("blur", onInputBlur);


// Виносимо колбек в окрему функцію

function onInputBlur(event) {
   
        if (event.currentTarget.value.length ==
        input.getAttribute('data-length')) {
            input.classList.add('valid');
            input.classList.remove('invalid') 
    } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
    }
      
    
};


 



