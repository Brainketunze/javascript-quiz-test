'use strict';

const scoreBoard = document.querySelector('#score');
const informUser = document.querySelector('#userInfo');
let score = 0;

 function showAnswers(e){
    const selectedButton = e.target;
    if(selectedButton.tagName !== 'BUTTON') return;
    const selectedAnswer = selectedButton.dataset["number"];
    quizData.answered++;
    log.push({
        state: deepClone( quizData)
      });

    if (selectedAnswer == currentQuestion.correctAnswer) {
        selectedButton.classList.add('correct');
        quizData.correct++;
        log.push({
            state: deepClone( quizData)
          });
        console.log(log);
        button.forEach(btn=>{
            if(!btn.classList.contains('correct')){
                btn.classList.add('incorrect')
            }
            btn.setAttribute("disabled", true);
        });
        score++;
        scoreBoard.innerHTML = score;
        selectedButton.setAttribute("disabled", true);
        informUser.innerHTML = `CORRECT`;
    } else {
        selectedButton.classList.add('incorrect');
        quizData.showCorrectAnswers = true;
        log.push({
            state: deepClone(quizData)
          });
        informUser.innerHTML = `SORRY, YOU ARE WRONG `;
        button.forEach(btn=>{

            if(btn.dataset.number == currentQuestion.correctAnswer){
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            };
            btn.setAttribute("disabled", true);
        });
        console.log(log);
    }
};