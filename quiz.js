function startQuiz() {
    document.getElementById('start').style.visibility = "hidden";
    // var x = false;
    // return x;
    return displayQuestion();
}

var next = document.getElementById('nextQ');
var check = document.getElementById('nextButton');
var pos = 0, test, test_staus, question, option, options, opA, opB, opC, score = 0;
var questions = [
    [" How would Trump appeal to an authoritarian?", " Consolidate the power to one person (whether it be a country or a company)", " Marginalize a group of people and use them as scapegoats", " Enforce stricter laws", "A", "B", "C"],
    [" Question 2", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 3", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 4", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 5", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 6", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 7", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 8", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 9", " Option A", " Option B", " Option C", "A", "B", "C"],
    [" Question 10", " Option A", " Option B", " Option C", "A", "B", "C"],
];

var answers = [
  ["answer explanation 1"],
  ["answer explanation 2"],
  ["answer explanation 3"],
  ["answer explanation 4"],
  ["answer explanation 5"],
  ["answer explanation 6"],
  ["answer explanation 7"],
  ["answer explanation 8"],
  ["answer explanation 9"],
  ["answer explanation 10"],
]


function $(arg) {
    return document.getElementById(arg);
}

function displayQuestion() {
    test = $("test");

    // check if quiz has been started
    if (pos < 0) {
        document.getElementById('nextButton').style.visibility = "hidden";
      }
    else {
      document.getElementById('nextButton').style.visibility = "visible";
      document.getElementById('nextQ').style.visibility = "hidden";
    }

    // display results depending on score after all questions are answered
    if (pos >= questions.length) {
        document.getElementById('nextButton').style.visibility = "hidden";
        $("test_status").innerHTML = "Test completed.";
        var scorePercent = (score/30) * 100;
        test.innerHTML = "<h3>Your Trump Shield is " + scorePercent.toFixed(2) + "% strong!</h3>";
        if (score <= 15) {
          correctAnswer.innerHTML = "blurb 1";
        }
        else if (score <= 19) {
          correctAnswer.innerHTML = "blurb 2";
        }
        else if (score <= 23) {
          correctAnswer.innerHTML = "blurb 3";
        }
        else if (score <= 27) {
          correctAnswer.innerHTML = "blurb 4";
        }
        else {
          correctAnswer.innerHTML = "blurb 5";
        }
        // reset the quiz vars
        pos = 0;
        score = 0;
        return false
    }

    document.getElementById("correctAnswer").innerHTML = "";
    $("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    opA = questions[pos][1];
    opB = questions[pos][2];
    opC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='options' value='A'>" + opA + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='B'>" + opB + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='C'>" + opC + "<br><br>";
    // test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    document.getElementById('nextButton').style.visibility = "hidden";
    options = document.getElementsByName("options");
    var correctAnswer = document.getElementById("correctAnswer");

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            option = [options[i].value, i];
        }
    }
    if (option[0] == questions[pos][4]) {
        score = score + 1;
    }
    else if (option[0] == questions[pos][5]) {
        score = score + 3;
    }
    else {
        score = score + 2;
    }

    correctAnswer.innerHTML = answers[pos];
    pos++;
    
    // handle the next question button
    var next =  document.getElementById('nextQ');
    next.style.visibility = "visible";
}

function explainAnswer(){
  // next question
 displayQuestion(); // display next question
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
