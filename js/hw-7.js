// Задание 1

// console.log('js'.toUpperCase());


// Задание 2

// function filterbyString(arr, str) {
//     const lowerStr = str.toLowerCase();
//     return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
// }

// const words = ['Apple', 'banana', 'apricot', 'grape', 'avocado', 'Blueberry'];
// console.log(filterbyString(words, 'ap'));


// Задание 3

// const num = 32.588884;
// const floorNum = Math.floor(num);
// console.log(floorNum);
// const ceilNum = Math.ceil(num);
// console.log(ceilNum);
// const roundNum = Math.round(num);
// console.log(roundNum);


// Задание 4

// const numbers = [52, 53, 49, 77, 21, 32];

// const minValue = Math.min(...numbers);
// const maxValue = Math.max(...numbers);

// console.log('Минимальное значение:', minValue);
// console.log('Максимальное значение:', maxValue);
   

// Задание 5

// function getRandomNumber () {
//     return Math.floor(Math.random() * 10) + 1;
// }

// console.log(getRandomNumber());


// Задание 6

// function getRandomArray(number) {
//     const length = Math.floor(number / 2);

//     const result = [];

//     for (let i = 0; i < length; i++) {
//         const randomNum = Math.floor(Math.random() * (number + 1));
//         result.push(randomNum);
//     }

//     return result;
// }

// console.log(getRandomArray(10));
// console.log(getRandomArray(8));  
// console.log(getRandomArray(5));


// Задание 7

// function getRandomInRange(a, b) {
//     const min = Math.min(a, b);
//     const max = Math.max(a, b);
//     return Math.floor(Math.random() * (max - min + 1)) + min; // из макс вычисляем мин  и +1 чтобы было числа включительо макс, + мин это чтобы вдруг выпадет числе меньше мин, то число было равным мин.
// }

// console.log(getRandomInRange(27, 4));


// Задание 8

// const now = new Date();
// console.log(now.toLocaleDateString());


// Задание 9

// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(futureDate.getDate() + 73);

// console.log('Текущая дата:', currentDate.toLocaleDateString());
// console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


// Задание 10

function formatDateTime(date) {

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        
    const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekDays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} - это ${weekday}\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDateTime(new Date()));