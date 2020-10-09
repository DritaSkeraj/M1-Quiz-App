let points = 0;
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//console.log(shuffle([1,11,3,5,23]));
function loadQuestion(questionArray){
    for(let i=0; i<questionArray.length; i++){

        let question = document.createElement('h2');
        question.innerText = questionArray[i].question;
        question.style.textAlign = 'left';
        
        let container = document.getElementById('container');
        container.appendChild(question);
        container.style.textAlign = 'left';
        
        let options = [];
        options.push(questionArray[i].correct_answer);
        let incorrects = questionArray[i].incorrect_answers;
        for(let j=0; j<incorrects.length; j++){
            options.push(incorrects[j]);
        }

        let shuffledOptions = this.shuffle(options);
        for(let x=0; x<shuffledOptions.length; x++){
            
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = questionArray[i].question;
            radio.value = shuffledOptions[x];
            let rId = questionArray[i].question;
            radio.id = rId;
            radio.innerText = questionArray[i].question;
            container.appendChild(radio); 
            
            let label = document.createElement('label');
            label.for = rId;
            label.innerText = shuffledOptions[x];
            container.appendChild(label);

            let brLine = document.createElement('br');
            container.appendChild(brLine);
        }

        let line = document.createElement('hr');
        container.appendChild(line);
        console.log('not shuffeled: ',options);
        console.log('shuffeld: ',shuffledOptions);
    }
}

function evaluateAnswers(){
    let correctAns = [];
    for(let i = 0; i < questions.length; i++){
        correctAns.push(questions[i].correct_answer);
    }
    console.log('all the correct ans: ', correctAns);

    let givenAns = [];
    for(let i=0; i<questions.length; i++){
        let answ = document.querySelectorAll("input[type=radio]:checked")[i].value;
        //if(answ){
            givenAns.push(answ);
        //} else givenAns.push('-');
    }
    console.log('all the given answers here: ', givenAns);

    for(let i=0; i<questions.length; i++){
        let correctA = correctAns[i];
        let givenA = givenAns[i];
        if(correctA === givenA){
            points++;
        }
    }
    console.log(points);
    let pointsButton = document.createElement('p');
    pointsButton.classList.add('result');
    pointsButton.innerText = 'You have given '+ points + ' correct answers!';
    container.appendChild(pointsButton);
    return points;
}

      const questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesnt get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "The logo for Snapchat is a Bell.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "On Twitter, what is the character limit for a Tweet?",
          correct_answer: "140",
          incorrect_answers: ["120", "160", "100"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
      ];

      window.onload = function () {
        //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
        //HINT: for each question, create a container with the "question"
        //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
        //when EVERY question has an answer (google for how to get a value from a radio button with JS)
        //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        //Display first question with a title + radio button
        //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
        loadQuestion(questions);
        let submitBtn = document.createElement('button');
        submitBtn.innerText = 'Submit questions';
        submitBtn.onclick = evaluateAnswers;
        container.appendChild(submitBtn);
      };

      //HOW TO calculate the result
      //You can do it in 2 ways:
      //If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
      //If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
