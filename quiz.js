var time=1;
function generateQuiz(questions, quizcontainer, resultcontainer, submitbutton) {
    for (var k = 0; k < questions.length; k++) {
        shuffle(questions[k].answers);
    }
    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;





        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for (j in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + questions[i].answers[j] + '">'

                    + questions[i].answers[j]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    function showresult(questions, quizcontainer, resultcontainer) {

    }

    showQuestions(questions, quizcontainer)
    
    submitButton.onclick = function () {
       var check= confirm("are you sure you want to submit?")
        if(check){showResults(questions, quizContainer, resultsContainer);}
    }
}
var myQuestions = [
    {
        "question": "Que1-How many friends are there?",
        "answers": [
            '6',
            '7',
            '8'
        ],
        "correctAnswer": '6'
    },
    {
        "question": "Que2-Who says the last line of the series?",
        "answers": [
            'Chandler',
            'joey',
            'Monica'
        ],
        "correctAnswer": 'Chandler'
    },
    {
        "question": "Que3-What is Rachel scared of?",
        "answers": [
            'Swings',
            'Dog',
            'Cat'
        ],
        "correctAnswer": 'Swings'
    },
    {
        "question": "Que4-How many times has Ross been married",
        "answers": [
            '4',
            '3',
            '2'
        ],
        "correctAnswer": '3'
    }
    ,
    {
        "question": "Que5-How many sisters does Joey have?",
        "answers": [
            '8',
            '7',
            '6'
        ],
        "correctAnswer": '7'
    }
    ,
    {
        "question": "Que6-which character has a twin?",
        "answers": [
            'phoebe',
            'Ross',
            'Monica'
        ],
        "correctAnswer": 'phoebe'
    },
    {
        "question": "Que7-what is monica skilled at",
        "answers": [
            'Dancing',
            'running',
            'cooking'
        ],
        "correctAnswer": 'cooking'
    }

];
function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    if(numCorrect==questions.length){resultsContainer.innerHTML = "you score " +numCorrect+","+"indeed a true fan!";}
    else if(time){resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    
}
    else{resultsContainer.innerHTML = 'sorry' +" "+'time' +" "+ 'out';}

}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);








var minutesToAdd = 5;
var currentDate = new Date();
var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);


// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = futureDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        time=0;
    }
}, 1000);
function shuffle(array) {
    var temporaryValue, randomIndex;
    var currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex > 1) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
