function startQuiz() {
    document.getElementById('start').style.visibility = "hidden";
    // var x = false;
    // return x;
    return displayQuestion();
}

var next = document.getElementById('nextQ');
var check = document.getElementById('nextButton');
var pos = 0, test, test_staus, question, option, options, opA, opB, opC, opD, score = 0;
var questions = [
    [" My day starts with:", " a complete breakfast during my long morning commute.", " reviewing and adding things to my planner and making a to-do list for the day.", " waking up late and finishing homework or other work due that day.", " exercise or meditation.", "A", "B", "C", "D"],
    [" I would describe my organizational skills as:", " okay; I try to be organized but mostly fail.", " strong; it helps me get important tasks done.", " nonexistent.", " a necessity in my professional life.", "A", "B", "C", "D"],
    [" When I have a deadline approaching, I:", " pull an all nighter the night before to produce a decent product."," plan out the task and finish it early."," beg for an extension or turn in nothing."," procrastinate the task; I finish it but it is not the best.", "A", "B", "C", "D"],
    [" I am on social media:", " very often; I sometimes let it get in the way of my work.", " when I have free time; I never use it while working.", " 24/7; I cannot get off of it.", " rarely, because I am focused on my work.", "A", "B", "C", "D"],
    [" I spend most of my time doing:", " activities that are urgent but not that important.", " activities that are important but not urgent.", " activities that are neither urgent nor important.", " activities that are both urgent and important.", "A", "B", "C", "D"],
    [" At what time do you schedule the biggest task you have that day?", " During lunch, if I cannot get to it before then.", " In the morning, when I still have the highest energy.", " I do not schedule anything.", " Whenever I am at peace.", "A", "B", "C", "D"],
    [" When people ask me to do something, I:", " say yes no matter what.", " respectfully decline unless it  benefits one of my priorities.", " cannot say yes. I am far too busy.", " say yes, unless it interferes with my schedule.", "A", "B", "C", "D"],
    [" At the end of the day, I feel:", " unhappy from all the things I did not get done.", " relaxed and ready to take on tomorrow.", " unsatisfied.", " tired; it took longer than expected to finish my tasks.", "A", "B", "C", "D"],
    [" How often do you check your email?", " Every hour or multiple times every hour", " No more than 3 times a day", " Never", " I have email open all day and respond to emails as fast as I can", "A", "B", "C", "D"],
    [" I can maintain focus on one task for a significant period of time.", " Rarely", " Very often", " Not at all", " Sometimes", "A", "B", "C", "D"],
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
        if (score <= 15) {
          var article1 = "How to Spend the Last 10 Minutes of Your Work Day";
          var article1_result = article1.link("https://www.entrepreneur.com/article/296898");
          var podcast1 = "The Productivityist Podcast";
          var podcast1_result = podcast1.link("https://productivityist.simplecast.fm/");
          var podcast2 = "How to Make Sure Your Projects and Tasks are the Right Ones";
          var podcast2_result = podcast2.link("http://www.asianefficiency.com/podcast/151-six-horizons/");
          test.innerHTML = "You got a score of " + score + " out of 30";
          $("test_status").innerHTML = "Test completed.";
          print_results.innerHTML = "Productivity? Never heard of her?";
          results_paragraph.innerHTML = "For you, every day is a struggle when it comes to finishing and doing your work.  Start controlling time instead of letting time control you! Here are some podcasts and articles to listen and read to guide you to a more productive life.";
          articles.innerHTML = "Articles:"
          document.getElementById("results_articles").innerHTML = article1_result;
          podcasts.innerHTML = "Podcasts:"
          document.getElementById("results_podcasts1").innerHTML = podcast1_result;

          document.getElementById("results_podcasts2").innerHTML = podcast2_result;
        }
        else if (score <= 19) {
          var book1 = "The 7 Habits of Highly Effective People";
          var book1_result = book1.link("https://www.amazon.com/Habits-Highly-Effective-People-Anniversary-ebook/dp/B00GOZV3TM/ref=sr_1_2?ie=UTF8&qid=1399666292&sr=8-2&keywords=e+7+habits+of+highly+effective+people")
          var book2 = "The 4-Hour Workweek, Expanded and Updated";
          var book2_result = book2.link("https://www.amazon.com/4-Hour-Workweek-Expanded-Updated-Cutting-Edge-ebook/dp/B002WE46UW/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1399666326&sr=1-1&keywords=the+four+hour+work+week")
          test.innerHTML = "You got a score of " + score + " out of 30";
          $("test_status").innerHTML = "Test completed.";
          print_results.innerHTML = "Unbalanced";
          results_paragraph.innerHTML = "Hey, you are not the most unproductive person but you are still pretty unproductive. There is a good chance nobody ever taught you how to be a productivity king or queen. Let us help you with that through these links.";
          articles.innerHTML = "Books:"
          document.getElementById("results_articles").innerHTML = book1_result;
          document.getElementById("results_articles2").innerHTML = book2_result;
        }
        else if (score <= 23) {
          var book3 = "Getting Things Done: The Art of Stress-Free Productivity ";
          var book3_result = book3.link("https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity-ebook/dp/B000WH7PKY/ref=sr_1_1_ha?s=digital-text&ie=UTF8&qid=1399666383&sr=1-1&keywords=Getting+Things+Done")
          var article4 = "6 Steps to Go from Procrastinating to Productive";
          var article4_result = article4.link("https://www.entrepreneur.com/article/297563")
          test.innerHTML = "You got a score of " + score + " out of 30";
          $("test_status").innerHTML = "Test completed.";
          print_results.innerHTML = "Productivity Novice";
          results_paragraph.innerHTML = "You understand the basics of good productivity; however, your plans often fall apart in the face of daily realities. Learn to plan out how long your tasks will actually take. Check out these links to learn how to stop the madness.";
          books.innerHTML = "Books:"
          document.getElementById("results_books").innerHTML = book3_result;
          articles.innerHTML = "Articles:"
          document.getElementById("results_articles").innerHTML = article4_result;
        }
        else if (score <= 27) {
          var article3 = "Why It's Crucial To Be Flexible";
          var article3_result = article3.link("http://www.businessinsider.com/business-leaders-move-away-from-strategic-planning-2010-1")
          test.innerHTML = "You got a score of " + score + " out of 30";
          $("test_status").innerHTML = "Test completed.";
          print_results.innerHTML = "Productivity Expert";
          results_paragraph.innerHTML = "Good job, you are on task and on time. I am shocked you even did this quiz instead of getting back to work. Some advice I can give is that you might want to look into how you prioritize your time so that you can be a little more flexible.";
          articles.innerHTML = "Articles: "
          document.getElementById("results_articles").innerHTML = article3_result;
        }
        else {
          var article1 = "How to Spend the Last 10 Minutes of Your Work Day";
          var article1_result = str.link("https://www.entrepreneur.com/article/296898")
          // test.innerHTML = "<h2>You got a score of </h2>" + score;
          test.innerHTML = "You got a score of " + score + " out of 30";
          $("test_status").innerHTML = "Test completed.";
          print_results.innerHTML = "Productivity Black Belt Ninja Master";
          results_paragraph.innerHTML = "You are a proDUCKtivity master. Use this app to enhance your already-amazing productivity habits.";
          articles.innerHTML = "Articles: "
          document.getElementById("results_articles").innerHTML = article1_result;
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
    opD = questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='options' value='A'>" + opA + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='B'>" + opB + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='C'>" + opC + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='D'>" + opD + "<br><br>";
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
    if (option[0] == questions[pos][5]) {
        score = score + 1;
    }
    else if (option[0] == questions[pos][6]) {
        score = score + 3;
    }
    else if (option[0] == questions[pos][7]) {
        score = score + 0;
    }
    else {
        score = score + 2;
    }

    correctAnswer.innerHTML = answers[pos];
    pos++; // next question

    // handle the next question
    var next =  document.getElementById('nextQ');
    next.style.visibility = "visible";
    next.addEventListener("click", ()=>{
      topFunction();
      displayQuestion(); // display next question
    })
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
