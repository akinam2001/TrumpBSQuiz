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
    [" How would Trump appeal to an authoritarian?", " Enforce stricter laws", " Marginalize a group of people and use them as scapegoats", " Consolidate the power to one person (whether it be a country or a company)", "A", "B", "C"],
    [" How would Trump appeal to someone who believes in social dominance order (a.k.a. SDO)?", " Make it normal to allow someone to hurt other people to achieve their own goals", " All of the above", " Create a clearly defined social hierarchy", "A", "B", "C"],
    [" How does Trump utilize relative deprivation to connect with his audience?", " Make a plan to deprive upper class citizens of their luxuries", " Convince the audience that certain groups of people deserve less", " Appeal to the groups that have less", "A", "B", "C"],
    [" How does Trump use prejudice to appeal to his followers?", " Direct remarks towards outgroups show that Trump has authority and is unafraid to challenge the status quo", " All of the above", " Allows his followers to connect with him because he is open with his beliefs", "A", "B", "C"],
    [" How does Trump take advantage of the lack of intergroup contact to further appeal to his intended audience?", " Encourage his audience to connect with other groups of people", " Use racist stereotypes to refer to other ethnic groups of people", " Learn jargon specific to that group of people", "A", "B", "C"],
    [" Which quote appeals to the authoritarians in Trump\'s audience?", "  \"I WON THE ELECTION IN A LANDSLIDE, but remember, I only think in terms of legal votes, not all of the fake voters and fraud that miraculously floated in from everywhere! What a disgrace!\" (https://twitter.com/realDonaldTrump/status/1337745268591259648?s=20)", " \"When Mexico sends its people, they\'re ... bringing drugs. They\'re bringing crime. They\'re rapists\" (\"Fired\" Up for White House Brash Trump Hits the Prez Race Like a Turbo Tornado, N.Y. POST, June 17, 2015)", " \"He is a member of a club or society, very strongly pro-Mexican, which is all fine. But I say he\'s got bias. I want to build a wall. I\'m going to build a wall. I\'m doing very well with the Latinos, with the Hispanics, with the Mexicans, I\'m doing very well with them, in my opinion.\" (Transcript is from https://www.politifact.com/article/2016/jun/08/donald-trumps-racial-comments-about-judge-trump-un/)", "A", "B", "C"],
    [" Which quote demonstrates Trump\'s use of the lack of intergroup contact to appeal to his audience? ", " \"The Supreme Court had ZERO interest in the merits of the greatest voter fraud ever perpetrated on the United States of America. All they were interested in is \"standing\", which makes it very difficult for the President to present a case on the merits. 75,000,000 votes!\" (https://twitter.com/realDonaldTrump/status/1337790419875352576)", " \"Why are we having all these people from shithole countries come here? ...We should have more people from places like Norway.\" (from an Oval Office meeting with lawmakers in January 2018 - https://www.huffpost.com/entry/trump-immigrants-shithole-countries_n_5a57db94e4b04df054f757a0?8a6)", " \"And we have the best carbon emission numbers that we\'ve had in 35 years under this administration, we are working so well with industry, but here\'s what we can\'t do. Look at China, how filthy it is, look at Russia, look at India, it\'s filthy, the air is filthy.\" (Presidential Debate 2020 https://www.rev.com/blog/transcripts/donald-trump-joe-biden-final-presidential-debate-transcript-2020)", "A", "B", "C"],
    [" Which quote shows how Trump is taking advantage of people\'s prejudice against other races?", " \"The Swine Flu (H1N1), and the attempt for a vaccine by the Obama Administration, with Joe Biden in charge, was a complete and total disaster. Now they want to come in and take over one of the \'greatest and fastest medical miracles in modern day history.\' I don\'t think so!\" (https://twitter.com/realDonaldTrump/status/1337372201662746625?s=20)", " \"Let me just tell you, I have had horrible rulings. I\'ve been treated very unfairly by this judge. Now, this judge is of Mexican heritage. I\'m building a wall, OK? I\'m building a wall. I am going to do very well with the Hispanics, the Mexicans.\" (https://www.politifact.com/article/2016/jun/08/donald-trumps-racial-comments-about-judge-trump-un/)", "  \"To Iranian President Rouhani: NEVER, EVER THREATEN THE UNITED STATES AGAIN OR YOU WILL SUFFER CONSEQUENCES THE LIKES OF WHICH FEW THROUGHOUT HISTORY HAVE EVER SUFFERED BEFORE. WE ARE NO LONGER A COUNTRY THAT WILL STAND FOR YOUR DEMENTED WORDS OF VIOLENCE & DEATH. BE CAUTIOUS!\" (https://twitter.com/realDonaldTrump/status/1021234525626609666?s=20)", "A", "B", "C"],
    [" Which quote would appeal to someone who believes in Social Dominance Orientation (SDO)?", " \"Tonight, FLOTUS and I tested positive for COVID-19. We will begin our quarantine and recovery process immediately. We will get through this TOGETHER!\" (https://www.reuters.com/article/us-health-coronavirus-usa-trump-quotes-f/factbox-selected-quotes-as-u-s-president-trump-tests-positive-for-covid-19-idUSKBN26N0QT)", " \"The only card [Hillary Clinton] has is the woman\'s card. She\'s got nothing else to offer and frankly, if Hillary Clinton were a man, I don\'t think she\'d get 5 percent of the vote. The only thing she\'s got going is the woman\'s card, and the beautiful thing is, women don\'t like her.\" (https://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213)", " \"Proud Boys, stand back and stand by. But I\'ll tell you what somebody\'s got to do something about Antifa and the left because this is not a right wing problem this is a left wing ...\" (1st Presidental Debate 2020 - https://www.rev.com/blog/transcripts/donald-trump-joe-biden-1st-presidential-debate-transcript-2020)", "A", "B", "C"],
    [" Which quote shows how Trump appeals to those who believe in relative deprivation?", " \"Twitter is sending out totally false \"Trends\" that have absolutely nothing to do with what is really trending in the world. They make it up, and only negative \"stuff\". Same thing will happen to Twitter as is happening to @FoxNews daytime. Also, big Conservative discrimination!\" (https://twitter.com/realDonaldTrump/status/1332173996134195202?s=20)", " \"It\'s our right, as a sovereign nation to [choose] immigrants that we think are the likeliest to thrive and flourish and love us.\" (https://www.latimes.com/politics/la-na-pol-donald-trump-immigration-speech-transcript-20160831-snap-htmlstory.html)", " Tapper : \"...What I'm saying is, if you invoke his race as a reason why he can't do his job ...\" Trump: \"I think that's why he's [giving me an unfair ruling].\" (https://www.politifact.com/article/2016/jun/08/donald-trumps-racial-comments-about-judge-trump-un/)", "A", "B", "C"],
];

var answers = [
  ["\"Marginalize a group of people and use them as scapegoats\" is the right answer. In order to appeal to an authoritarian, Trump marginalizes a group of people and uses them as a scapegoat. Through racism and stereotyping non-white people, Trump incites fear among the people who are not used to racial diversity and furthers the fear of people of other ethnicities. For example, he pins Mexico as the source of drug dealers, rapists, and criminals in the United States and his solution was to build a wall. However, this fear of Mexicans was created through using stereotypes."],
  ["All of the above are right. Members of SDO like to have a clear hierarchy of power in society. As a result of associating social dominance with climbing up the social ladder, the members of SDO are more likely to do anything they possibly can in order to reach their ambitions, even if it requires them to hurt people. For example, Trump can be seen as a member of SDO because during the COVID-19 pandemic, he wanted to keep businesses open at full capacity to keep the economy healthy. However by wanting to keep stores at full capacity, it increases the risk of customers catching the virus and hence, more people will die from the disease. In this instance, Trump was willing to sacrifice many lives and livelihoods of US citizens to achieve his goal."],
  ["The correct answer is \"Convince the audience that certain groups of people deserve less\". Trump designates a group of people to be deemed less deserving. For example tying back to the idea of authoritarianism, Trump creates an \'other\' group by marginalizing a minority group and associating them with negative traits. By deeming a group of people to be bad people, he can convince his audience to say that a specific group of people are less deserving than his listeners. Typically, this is in the context of money."],
  ["All of the above are right. Trump is known to be direct with his racist remarks and this appeals to his racist and prejudiced followers. By being direct, he creates an illusion that he is powerful, unafraid of the status quo, and adds to his authority while telling his followers what they want to hear. His followers are able to connect with him on a deeper level as a result because he is open about his prejudiced beliefs and ideals."],
  ["\"Use racist stereotypes to refer to other ethnic groups of people\" is correct. Trump uses racist stereotypes to refer to other ethnic groups of people. He takes advantage of his audience\'s ignorance to create this negative image of people of other ethnicities that they have never met before. The audiences that lack intergroup contact are more likely to believe in relative deprivation and the prejudiced remarks about the groups that Trump has marginalized in his rallies and speeches. (Authoritarianism, SDO, relative deprivation, prejudice, and lack of intergroup contact are the 5 traits that are most commonly spotted in Trump supporters. These traits were also defined by Professor Pettigrew in his piece \"Social Psychology Perspectives on Trump Supporters\" from Journal of Social and Political Psychology, vol. 5, no. 1, 2017)"],
  ["In the second quote, Trump marginalizes Mexicans and uses them as a scapegoat. He is trying to incite fear among the people who are not used to racial diversity and furthers the fear of people of other ethnicities. "],
  ["In this case, Trump is targeting people who are more familiar with people from Norway, and heaps praise on them. He does this by diminishing the people from \"shithole countries\". He creates a bad image of the people his target audience has a lack of contact with."],
  ["The correct answer is B. In this quote, Trump states that he was \"treated very unfairly by this judge\" and follows up his response with \"this judge is of Mexican heritage.\" He insinuates that the result or outcome of his ruling was a consequence of the judge\'s race not because of legislation. In doing this, Trump diminishes the credibility of the judge while appealing to his follower\'s prejudice towards other races by cementing their belief that people from these races are inherently \"bad\". "],
  ["In this quote, Trump states \"Proud boys, stand back, and stand by\". This appeals to those with SDO as it is a clear hierarchy of power with Trump giving \"Proud Boys\" an order (telling them to stand back and stand by)."],
  ["B is the correct answer here because Trump is telling his audience that they have power over the immigrants. Trump is implying that US citizens get to pick and choose which immigrant is more worthy of staying in the United States because they have more power."],
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
        document.getElementById('correctAnswer').style.color = "black";
        if (score <= 15) {
          correctAnswer.innerHTML = "<h4>No Trump Guard in Sight</h4>You have no clue about the rhetorical techniques Trump employs and most likely have the traits Trump targets";
        }
        else if (score <= 19) {
          correctAnswer.innerHTML = "<h4>Trash Trump Guard</h4>You may not have an understanding on the rhetorical techniques Trump employs and probably have some of the traits that he targets";
        }
        else if (score <= 24) {
          correctAnswer.innerHTML = "<h4>Filmsy Trump Guard</h4>You might have an understanding on the rhetorical techniques Trump employs and may have some of the traits that he targets";
        }
        else if (score <= 27) {
          correctAnswer.innerHTML = "<h4>Pretty Good Trump Guard</h4>You have a decent understanding about the rhetoric techniques that Trump employs and have a small chance of having the traits that he targets";
        }
        else {
          correctAnswer.innerHTML = "<h4>Strong Trump Guard</h4>You are well informed about the rhetoric techniques that Trump employs and don\'t seem to exhibit any of the traits he targets";
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

function nextQuestion(){
  // next question
 displayQuestion(); // display next question
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
