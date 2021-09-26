//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, answers = [];

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function quest(ques, answ1, answ2, am) {
    question = {};
    do {
        ok = false;
        event = +prompt(ques + answ1 + answ2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(am, event);
            if (isAnswer(am, event)) {
                question['question'] = ques;
                if (event == 1) {
                    question['answer'] = answ1;
                } else if (event == 2) {
                    question['answer'] = answ2;
                }

            }
            answers.push(question);
        }
    } while (!ok);
}

quest(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        quest(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно   
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                quest(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        quest(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                quest(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

alert('Спасибо за игру');

while (true) {
    event = prompt("Посмотрим логи игры? Введите номер вопроса");
    if (event != -1) {
        alert('Вопрос: \n' + answers[event - 1].question + '\n Ваш ответ: ' + answers[event - 1].answer);
    } else {
        alert('Спасибо! До скорого!');
        break;
    }
}