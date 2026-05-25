// Игра Угадай число

function startGuessGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;                                       // Генерация числа от 1 до 100
    let attempts = 0;
    let guessed = false;

    alert('Я загадал число от 1 до 100. Попробуй угадать!');                                        // Приветствие

    while (!guessed) {                                                                              // Цикл игры
        let userGuess = prompt('Введите ваше число (от 1 до 100):');

        if (userGuess === null) {                                                                   //  Если  нажал "Отмена"
            alert('Игра отменена. Приходи ещё!');
            return;
        }

        userGuess = Number(userGuess);                                                              // Преобразование в число
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {                                 // Проверка на корректность ввода
            alert('Ошибка! Введите число от 1 до 100!');
            attempts--;
            continue;
        }

        if (userGuess === randomNumber) {                                                           // Сравниваем с загаданным числом            
            alert(`ПОБЕДА! Вы угадали число ${randomNumber}! Количество попыток: ${attempts}`);
            guessed = true;
        } else if (userGuess < randomNumber) {
            alert(`Число ${userGuess} — МЕНЬШЕ загаданного. Попробуй число побольше!`);
        } else {
            alert(`Число ${userGuess} — БОЛЬШЕ загаданного. Попробуй число поменьше!`);
        }
    }
}


// Игра простая арифметика

function startArithmeticGame() {
    let score = 0;                                   // счётчик правильных ответов
    let total = 5;                                   // всего вопросов
    
    alert(`Арифметическая игра! \nТебе будет задано ${total} вопросов. \nПоехали!`);

    for (let i = 1; i <= total; i++) {                                          // цикл на 5 вопросов   

        const num1 = Math.floor(Math.random() * 10) + 1;                              // Генерируем случайные числа от 1 до 10
        const num2 = Math.floor(Math.random() * 10) + 1;

        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];         // Выбираем случайную операцию

        let correctAnswer;
        if (operation === '+') {
            correctAnswer = num1 + num2;
        } else  if (operation === '-') {
            correctAnswer = num1 - num2;
        } else if (operation === '*') {
            correctAnswer = num1 * num2;
        } else if (operation === '/') {
            correctAnswer = num1 / num2;
            // округляем до 2х знаков после деления
            correctAnswer = Math.round(correctAnswer * 100) / 100;
        }

        let userAnswer = prompt(`Вопрос ${i} из ${total}: ${num1} ${operation} ${num2} = ?`);            // Задаём вопрос

        if (userAnswer === null) {                                                              // Проверка на отмену
            alert(`Игра прервана! Правильных ответов: ${score} из ${i-1}`);
            return;
        } 

        userAnswer = Number(userAnswer);                                      // Преобразуем в число

        if (userAnswer === correctAnswer) {                                                // Сравниваем ответы
            alert(`Верно! ${num1} ${operation} ${num2} = ${correctAnswer}`);
            score++;
        } else {
            alert(`Неверно! ${num1} ${operation} ${num2} = ${correctAnswer} \n Твой ответ: ${userAnswer}`);
        }
    }

    alert(`Игра окончена! \n\n Правильных ответов: ${score} из ${total} \n Процент правильных ответов: ${(score / total * 100)}%`);         // Итог
}