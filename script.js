const questions = [
    {
        question: "Какой твой любимый напиток?",
        answers: [
            { text: "Вода из океана", creature: "Bombodil" },
            { text: "Эспрессо", creature: "CappuccinoAssassino" },
            { text: "Виноградный сок", creature: "Tralaleilo" },
            { text: "Банановый смузи", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Твоё любимое занятие?",
        answers: [
            { text: "Искать сокровища на дне моря", creature: "Bombodil" },
            { text: "Планировать коварные планы", creature: "CappuccinoAssassino" },
            { text: "Танцевать на карнавале", creature: "Tralaleilo" },
            { text: "Жонглировать бананами", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Какой твой любимый десерт?",
        answers: [
            { text: "Морские водоросли в шоколаде", creature: "Bombodil" },
            { text: "Кофе с секретным ингредиентом", creature: "CappuccinoAssassino" },
            { text: "Радужный торт", creature: "Tralaleilo" },
            { text: "Банановый пирог", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Какой твой любимый звук?",
        answers: [
            { text: "Плеск волн", creature: "Bombodil" },
            { text: "Шипение кофемашины", creature: "CappuccinoAssassino" },
            { text: "Звон бубенцов", creature: "Tralaleilo" },
            { text: "Весёлый смех", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Какая твоя самая большая мечта?",
        answers: [
            { text: "Исследовать все глубины океана", creature: "Bombodil" },
            { text: "Стать самым известным злодеем", creature: "CappuccinoAssassino" },
            { text: "Устроить самый яркий карнавал", creature: "Tralaleilo" },
            { text: "Посадить банановые деревья повсюду", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Какой твой стиль одежды?",
        answers: [
            { text: "Морской костюм", creature: "Bombodil" },
            { text: "Чёрный плащ и шляпа", creature: "CappuccinoAssassino" },
            { text: "Блестящий карнавальный костюм", creature: "Tralaleilo" },
            { text: "Костюм из банановых листьев", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Твой любимый вид транспорта?",
        answers: [
            { text: "Подводная лодка", creature: "Bombodil" },
            { text: "Секретный скутер", creature: "CappuccinoAssassino" },
            { text: "Карнавальная платформа", creature: "Tralaleilo" },
            { text: "Банановый велосипед", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Что ты делаешь, когда грустно?",
        answers: [
            { text: "Разговариваю с рыбами", creature: "Bombodil" },
            { text: "Варю себе чашечку крепкого кофе", creature: "CappuccinoAssassino" },
            { text: "Танцую до упаду", creature: "Tralaleilo" },
            { text: "Ем много бананов", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Что ты ценишь больше всего?",
        answers: [
            { text: "Свободу", creature: "Bombodil" },
            { text: "Успех в своих планах", creature: "CappuccinoAssassino" },
            { text: "Веселье и радость", creature: "Tralaleilo" },
            { text: "Бананы!", creature: "ScimpanziniBananini" }
        ]
    },
    {
        question: "Твой девиз по жизни?",
        answers: [
            { text: "Плыви и исследуй!", creature: "Bombodil" },
            { text: "Мои планы всегда сбываются!", creature: "CappuccinoAssassino" },
            { text: "Тралала и жизнь прекрасна!", creature: "Tralaleilo" },
            { text: "Бананы - это всё!", creature: "ScimpanziniBananini" }
        ]
    }
];

const creatures = {
    "Bombodil": {
        name: "Бомбардило Крокадило"
    },
    "CappuccinoAssassino": {
        name: "Капучино Ассасино"
    },
    "Tralaleilo": {
        name: "Тралалейло"
    },
    "ScimpanziniBananini": {
        name: "Шимпанзини Бананини"
    }
};

let currentQuestionIndex = 0;
let result = "";
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");
const coverElement = document.getElementById("cover");
const quizElement = document.getElementById("quiz");
const playButton = document.getElementById("playButton");

function startQuiz() {
    currentQuestionIndex = 0;
    coverElement.style.display = "none";
    quizElement.style.display = "block";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    const randomizedAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    randomizedAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answerButton");
        button.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResult();
            }
        });
        answersElement.appendChild(button);
    });
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function showResult() {
    questionElement.innerText = "";
    answersElement.innerText = "";
    nextButton.style.display = "none";
    quizElement.style.display = "none";
    resultElement.style.display = "block";
}

playButton.addEventListener("click", startQuiz);