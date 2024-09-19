const questions = [
  {
    question: "What is the primary goal of Search Engine Optimization (SEO)?",
    answers: [
      { text: "To increase website traffic", correct: false },
      { text: "To improve website ranking on search engines", correct: true },
      { text: "To increase website conversions", correct: false },
      { text: "To reduce website bounce rate", correct: false },
    ]
  },
  {
    question: "What is the term for creating and sharing valuable, relevant, and consistent content to attract and retain a clearly defined audience?",
    answers: [
      { text: "Content Marketing", correct: true },
      { text: "Inbound Marketing", correct: false },
      { text: "Digital Advertising", correct: false },
      { text: "Social Media Marketing", correct: false },
    ]
  },
  {
    question: "What is the popular digital marketing analytics tool used to track website traffic and behavior?",
    answers: [
      { text: "Google Analytics", correct: true },
      { text: "Adobe Analytics", correct: false },
      { text: "Mixpanel", correct: false },
      { text: "Chartbeat", correct: false },
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