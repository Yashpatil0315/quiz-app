const questions = [
    {
        question: "What is the capital of France?",
        answers : [
            { text: "Berlin", correct: true },
            { text: "New-York", correct: false },
            { text: "Dheli", correct: false },
            { text: "Karachi", correct: false },
        ]
    },

    {
        question: "What is the largest planet in our solar system?",
        answers : [
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false },
        ]
    },

    {
        question: "What is the chemical symbol for water?",
        answers : [
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
            { text: "H2O", correct: true },
        ]
    },

    {
        question: "What is the capital of Japan?",
        answers : [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },

    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers : [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
        ]
    },

    {
        question: "What is the largest mammal?",
        answers : [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Great White Shark", correct: false },
            { text: "Blue Whale", correct: true },
        ]
    },

    {
        question: "What is the main ingredient in guacamole?",
        answers : [
            { text: "Avocado", correct: true },
            { text: "Tomato", correct: false },
            { text: "Onion", correct: false },
            { text: "Pepper", correct: false },
        ]
    },

    {
        question: "What is the hardest natural substance on Earth?",
        answers : [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false },
        ]
    },

    {
        question: "What is the smallest country in the world?",
        answers : [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false },
        ]
    },

    {
        question: "What is the main language spoken in Brazil?",
        answers : [
            { text: "Portuguese", correct: true },
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "French", correct: false },
        ]
    },

    
]

const questionElement = document.getElementById('question');
const answers = document.getElementById('ans-buttons');
const button = document.getElementById('next-button');


let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    console.log(questions[currentQuestionIndex]);
    showQuestion(questions[currentQuestionIndex]);
}


function showQuestion(question) {
    
    button.style.display = 'none'; // Hide the next button initially
    questionElement.innerText = question.question;
    answers.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('ans-btn');
        answers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectanswer);
    });
    
}

function selectanswer(e) {
    const selectedbutton = e.target;
    const correct = selectedbutton.dataset.correct;
    if (correct) {
        selectedbutton.classList.add('correct');
        score++;
        console.log(score);
    } else {
        selectedbutton.classList.add('incorrect');
    }
    Array.from(answers.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    button.style.display = 'block'; // Show the next button after an answer is selected

}


function showscore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    button.innerText = 'Play Again';
    button.style.display = 'block';
}


function handelnextbtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showscore();
    }
}

button.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handelnextbtn();
    } else {
        // Reset the game when "Play Again" is clicked
        currentQuestionIndex = 0;
        score = 0;
        button.style.display = 'none'; // Hide the "Play Again" button
        startGame();
    }
});

function resetState() {
    button.classList.add('none');
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

startGame();