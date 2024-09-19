const questions = [
  {
    question: "What is the primary goal of a business?",
    answers: [
      { text: "To maximize profits", correct: true },
      { text: "To minimize costs", correct: false },
      { text: "To increase market share", correct: false },
      { text: "To improve customer satisfaction", correct: false },
    ]
  },
  {
    question: "What is the term for the process of planning, organizing, and controlling business activities to achieve specific goals?",
    answers: [
      { text: "Management", correct: true },
      { text: "Leadership", correct: false },
      { text: "Entrepreneurship", correct: false },
      { text: "Strategy", correct: false },
    ]
  },
  {
    question: "What is the popular business management framework used to analyze and improve business processes?",
    answers: [
      { text: "Six Sigma", correct: true },
      { text: "Lean Management", correct: false },
      { text: "Agile Methodology", correct: false },
      { text: "Total Quality Management", correct: false },
    ]
  }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("ans-btns");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("qbtn");
      answerButton.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function restState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;

    });
    nextButton.style.display = "block";

  }
  function showScore(){
    restState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} <br> You can grow your skill more with our course `;
    // questionElement.innerHTML = `You can grow your skill more with our course `;
    nextButton.innerHTML = "Play Again"; 
    nextButton.style.display = "block";
    
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
      showQuestion();
    }else{
      showScore(); //------------------------------------------------------------------------
    }
  }
  nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }
    else{
      startQuiz();
    }
  })
  startQuiz()