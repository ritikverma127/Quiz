const questions = [
  {
    question: "Which is the longest river in the world?",
    options: ["Greeat Ganga", "Nile", "Amazon", "Niger"],
    answer: "Nile"
  },
  {
    question: "Which is the largest ocean in the world??",
    options: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "None of the above"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which is India’s first super computer?",
    options: ["Param8000", "param80000", "param800", "param8"],
    answer: "Param8000"
  },
  {
    question: "Which bank is called bankers Bank of India?",
    options: ["Reserve Bank of India", "Punjab National Bank", "State Bank of India", "State Bank of India"],
    answer: "Reserve Bank of India"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (const option of questions[currentQuestion].options) {
      const radioBtn = document.createElement("input");
      radioBtn.setAttribute("type", "radio");
      radioBtn.setAttribute("name", "answer");
      radioBtn.setAttribute("value", option);
      optionsElement.appendChild(radioBtn);

      const label = document.createElement("label");
      label.textContent = option;
      optionsElement.appendChild(label);

      optionsElement.appendChild(document.createElement("br"));
    }
  } else {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector("input[name='answer']:checked");
  const resultElement = document.getElementById("result");

  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    currentQuestion++;
    loadQuestion();
  } else {
    resultElement.textContent = "Please select an answer!";
  }
}

loadQuestion();
