//  Задание 1

//  let password = 'пароль';
//  let userPassword = prompt('Введите пароль');

//  if (userPassword === password) {        
//      console.log('Пароль введён верно');
//  } else {    
//      console.log('Пароль введён неправильно');
//  }


//  Задание 2

//  let c = 7;

//  if (c > 0 && c < 10) { 
//      console.log('Верно');
//  } else {
//      console.log('Неверно');
//  }

//  c = 0;

//  if (c > 0 && c < 10) {  
//      console.log('Верно');
//  } else {    
//      console.log('Неверно');
//  }

//  c = 10;

//  if (c > 0 && c < 10) {  
//      console.log('Верно');
//  } else {    
//      console.log('Неверно');
//  }

//  c = -3;

//  if (c > 0 && c < 10) {  
//      console.log('Верно');
//  } else {    
//      console.log('Неверно');
//  }

//  c = 2;

//  if (c > 0 && c < 10) {  
//      console.log('Верно');
//  } else {    
//      console.log('Неверно');
//  }


//  Задание 3

//  let d = 4;
//  let e = 177;

//  if (d > 100 || e > 100) {   
//      console.log('Верно');
//  } else {
//      console.log('Неверно');
//  }

//  d = 1;
//  e = 2;

//  if (d > 100 || e > 100) {   
//      console.log('Верно');
//  } else {
//      console.log('Неверно');
//  }

//  d = 125;
//  e = 999;

//  if (d > 100 || e > 100) {   
//      console.log('Верно');
//  } else {
//      console.log('Неверно');
//  }


//  Задание 4

//  let a = '2';
//  let b = '3';

//  console.log(+a + +b);


//  Задание 5

let monthNumber = 13;

if (monthNumber > 12) {
    console.log('Программа не выполняется (номер месяца больше 12');  //наверно была допущена опечатка в задании. Зачем ставить "если больше 13" если месяцев 12, но если прописать 13, то все равно выдёт отказ. Наверно присваивается >=
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;

        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;

        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;

        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;

        default:
            console.log('Такого месяца не существует');
            break;
    }
}