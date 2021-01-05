function cheatHandler() {

  const userInput = confirm('Do you want to cheat? One of the incorrect answers will be shown');

  if (!userInput) {
      return false;
  };

  const questionArticle = document.getElementsByClassName("question")[0];
  const questionParagraph = questionArticle.querySelector('p');

  const questionIndex = getCurrentQuestionIndex(questionParagraph.innerText, quizData.questions);

  const res = getAnswer(quizData.questions[questionIndex].correctAnswer, quizData.questions[questionIndex].answers);

  const answerArticle = document.getElementsByClassName("answers")[0];
  const answersArray = [...answerArticle.querySelectorAll('button')];
  const incorrectButton = answersArray.find(item => item.dataset.number == res);

  if (incorrectButton !== undefined) {
      answersArray.forEach(btn => btn.classList.remove('incorrect'));
      incorrectButton.classList.add('incorrect');

  }

}