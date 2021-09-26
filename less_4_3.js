var userAnswer, logs = [];
for(var q = 0; q < questions.length; q++) {
    userAnswer = prompt("Вопрос " + (q+1) + "  " + questions[q].quest + "\n Вам предоставлены на выбор 4 ответа:\n" + questions[q].answ1 + "\n" + questions[q].answ2 + "\n" + questions[q].answ3 + "\n" + questions[q].answ4 + "\n Выберете верный. \n\n Для выхода из игры введите -1");
    if (userAnswer == -1) {
        alert("Жаль, что Вы решили покинуть игру");
        break;   
    }
    if (userAnswer == questions[q].correct) {
        alert("Вы правильно ответили на " + (q+1) + " вопрос! Двигаемся дальше!");
        logs.push(userAnswer);
    } else {
        alert("К сожалению Вы проиграли! Правильный ответ был " + questions[q].correct);
        break;
    }
}
alert("Вы ответили правильно на " + logs.length + " вопросов");