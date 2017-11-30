
var myQuestions = [


    {
        question: "1. Which of the following is NOT a Principle of Design?",
        answers: {
            A: 'Emphasis',
            B: 'Pattern',
            C: 'Proportion',
            D: 'Balance',
            E: 'Texture'
        },
        correctAnswer: 'E'
    },

    {
        question: "2. What do you call the art of selecting the proper typeface or Font?",
        answers: {
            A: 'Typeface',
            B: 'Graphic Design',
            C: 'Typography',
            D: 'Lithography',
            E: 'none of these'
        },
        correctAnswer: 'C'
    },

    {
        question: "3. If you want to design a logo or create original drawings, this program will be the best option to create your vector images.",
        answers: {
            A: 'llustrator',
            B: 'Photoshop',
            C: 'InDesign',
            D: 'Microsoft Word',
            E: 'Google Drive'
        },
        correctAnswer: 'A'
    },


    {
        question: "4. An example of an Intermediate or Tertiary color is:",
        answers: {
            A: 'Blue- Green',
            B: 'Red',
            C: 'Light Blue',
            D: 'Orange',
            E: 'Purple'
        },
        correctAnswer: 'A'
    },

    {
        question: "5. What element of art is a point moving in space?",
        answers: {
            A: 'Form',
            B: 'Value',
            C: 'Texture',
            D: 'Line',
            E: 'Shape'
        },
        correctAnswer: 'D'
    },


];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + 
                    '</label>'
                );

            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );

        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('<br> <br>');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }


var number = 100;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the stop button gets clicked, run the stop function.
    $("#start").on("click", start);
    //  When the resume button gets clicked, execute the run function.
    
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
    //  Execute the run function.
    run();


}
