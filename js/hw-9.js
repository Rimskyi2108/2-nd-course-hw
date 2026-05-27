// Задание 1

// const headingEl = document.querySelector('.heading');
// const buttonEl = document.querySelector('.button');

// buttonEl.addEventListener('click', function () {
// headingEl.style.display = headingEl.style.display === 'none' ? 'block' : 'none';   // 2 раза headingEl.style.display - присваиваем(=) headingEl его значение true/false
// });


// Задание 2

// const textEl = document.querySelector('.text');
// const buttonChangeEl = document.querySelector('.button_change');

// buttonChangeEl.addEventListener('click', function () {
// textEl.style.color = textEl.style.color === 'blue' ? 'black' : 'blue';
// });


// Задание 3

// const headingEl = document.querySelector('.heading');
// const buttonEl = document.querySelector('.button');

// buttonEl.addEventListener('click', () => {
//     if(headingEl.textContent === 'Это заголовок') {
//         headingEl.textContent = 'Привет, мир!';
//     } else {
//         headingEl.textContent = 'Это заголовок';
//     }
// });


// Задание 4

// const descriptionElements = document.querySelectorAll('.description');
// const buttonEl = document.querySelector('.btn');

// buttonEl.addEventListener('click', () => {
//     descriptionElements.forEach(element => {element.textContent = 'Измененный текст';})
// });


// Задание 5

// const descriptionElements = document.querySelectorAll('.description');
// const buttonEl = document.querySelector('.changeBtn');

// buttonEl.addEventListener('click', () => {
//     descriptionElements.forEach(element => {element.textContent = 'Новый текст';})
//     });


// Задание 6

// const buttonEl = document.querySelector('.addBtn');

// buttonEl.addEventListener('click', () => {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = 'Новый абзац';
//     document.body.append(newParagraph);
// });   


// Задание 7

// const descriptionElement = document.querySelector('.description');
// const buttonEl = document.querySelector('.removeBtn');

// buttonEl.addEventListener('click', () => {
//     descriptionElement.remove();
// })