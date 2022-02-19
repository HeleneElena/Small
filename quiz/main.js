const questions = [
    {
        question: 'Welche Sprache funktioniert im Browser?',
        answers: ['Java', 'C', 'Python', 'JavaScript'],
        correct: 4,
    },
    {
        question: 'Was bedeutet CSS?',
        answers: [
            'Central Style Sheets', 
            'Cascading Style Sheets', 
            'Cascading Simple Sheets', 
            'Cars Style Sheetst',
        ],
        correct: 2,
    },
    {
        question: 'Was bedeutet HTML?',
        answers: [
            'Hypertext Markup Language', 
            'Hypertext Mardown Language', 
            'Hypertext Machine Language', 
            'Helicopters Terminals Motoboats Language',
        ],
        correct: 1,
    },
    {
        question: 'Im welchem Jahr wurde das JavaScript erstellt?',
        answers: ['1996', '1995', '1994', '2000'],
        correct: 2,
    },
];

const quizHeader = document.querySelector('.quiz-header');
const quizList = document.querySelector('.quiz-list');
const btn = document.querySelector('.quiz-submit');

let score = 0; 
let questionIndex = 0;

clearPage();
showQestion();

function clearPage() {
    quizHeader.innerHTML = '';
    quizList.innerHTML = '';
}

function showQestion() {
    console.log('showQestion');

    console.log(questions[questionIndex]['question']);

    const headerTemplate = ´ <h2 class="title">%title%</h2> ´; 
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

    console.log(title);

    for(item of questions[questionIndex]['answers']) {
        console.log(item);
    }
}