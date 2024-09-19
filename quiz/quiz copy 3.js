const questions = [
  {
    question: "What is the term for the integration of digital information with physical objects or environments?",
    answers: [
      { text: "Augmented Reality (AR)", correct: true },
      { text: "Virtual Reality (VR)", correct: false },
      { text: "Mixed Reality (MR)", correct: false },
      { text: "Extended Reality (XR)", correct: false },
    ]
  },
  {
    question: "What is the popular media technology used for creating and editing video content?",
    answers: [
      { text: "Adobe Premiere Pro", correct: true },
      { text: "Final Cut Pro", correct: false },
      { text: "Avid Media Composer", correct: false },
      { text: "DaVinci Resolve", correct: false },
    ]
  },
  {
    question: "What is the term for the process of converting raw video footage into a final edited product?",
    answers: [
      { text: "Video Post-Production", correct: true },
      { text: "Video Pre-Production", correct: false },
      { text: "Video Production", correct: false },
      { text: "Video Distribution", correct: false },
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