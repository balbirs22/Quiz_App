const quizData = [
    {
        question: "Who has the highest average in test cricket?",
        a: "Virat Kohli",
        b: "Steven Smith",
        c: "Brian Lara",
        d: "Don Bradman",
        correct: "d",
    },
    {
        question: "Which fast bowler has taken most wickets in test cricket?",
        a: "James Anderson",
        b: "Stuart Broad",
        c: "Mitchell Johnson",
        d: "Irfan Pathan",
        correct: "a",
    },
    {
        question: "Which team won the first cycle of WTC?",
        a: "Australia",
        b: "New Zealand",
        c: "India",
        d: "South Africa",
        correct: "b",
    },
    {
        question: "Which team has played most test matches?",
        a: "Australia",
        b: "India",
        c: "England",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which Among the following doesn't have two triple centuries in test?",
        a: "David Warner",
        b: "Chris Gayle",
        c: "Virender Sehwag",
        d: "Don Bradman",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if(score>3)
            {
                quiz.innerHTML = `
                    <h2>You are a legend</h2>
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                    <button onclick="location.reload()">Reload</button>
            `   ;
            }
            else if(score>1)
            {
                quiz.innerHTML = `
                    <h2>You are Great</h2>
                    <h2>You are a legend</h2>
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                    <button onclick="location.reload()">Reload</button>
            `   ;
            }
            else{
                quiz.innerHTML = `
                    <h2>Good Try! Better luck next time</h2>
                    <h2>You are a legend</h2>
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                    <button onclick="location.reload()">Reload</button>
            `   ;
            }
    }
}});