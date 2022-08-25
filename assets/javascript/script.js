
// questions for disc golf quiz
var questions = [
    {
        questionText: 'Disc golf is like traditional golf but it uses ____ instead of round balls.',
        options: [
            'a. Gophers',
            'b. Discs',
            'c. Swords',
            'd. Tortillas'
        ],
        answer: 'b. Discs',
    },
    {
        questionText: 'How many “holes” are on a typical disc golf course?',
        options: [
            'a. 9',
            'b. 12',
            'c. 15',
            'd. 18'
        ],
        answer: 'd. 18',
    },
    {
        questionText: 'What material makes up a golf disc?',
        options: [
            'a. Wood',
            'b. Rubber',
            'c. Plastic',
            'd. Metal'
        ],
        answer: 'b. Rubber',
    },
    {
        questionText: 'What is one of the most important disc properties when choosing a golf disc to use?',
        options: [
            'a. Color',
            'b. Material',
            'c. Stability',
            'd. Durability'
        ],
        answer: 'd. Durability',
    },
    {
        questionText: 'What is increased when the player is able to hear a “snap” when the disc is released off the fingers?',
        options: [
            'a. Angle',
            'b. Momentum',
            'c. Stability',
            'd. Curve'
        ],
    },
];

var questions = document.querySelector('#questions');
var answers = document.querySelector('#answers');

function hide() {
    questions.setAttribute('hidden', true);
    answers.setAttribute('hidden', true);
}

document.querySelector('.start.btn').addEventListener('click', startQuiz),

    function startQuiz() {
        hide();
        questions.removeAttribute('hidden');
        currentQuestion = 0;
        displayQuestion();
    }