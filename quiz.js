// Quiz Time! program

var user = {}
var responses = []

function nameQuestion() {
  var name = prompt('What is your name?')
  user.name = name;
}

function question1() {

  var firstQuestion = prompt('Does Krillin die more than once in the Dragon Ball series? (Yes or No)')

  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true;
  }

  else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false;
  }

  else {
    alert("Please answer either Yes or No");
    return question1();
  }

  responses.push(firstQuestion);
}

function question2() {
	var secondQuestion = prompt('How many times has Goku won the World Martial Arts Tournament? (One, Two or Four)');
	secondQuestion = secondQuestion.toLowerCase();
	
	switch (secondQuestion) {
	  	case 'one':
	        secondQuestion = true;
	        break;
	   	case 'two':
	        secondQuestion = false;
	        break;
	  	case 'four':
	    	secondQuestion = false;
	    	break;
	  	default:
	        alert("Please write one of the provided answers!");
	        return question2();
	    }

  responses.push(secondQuestion);
}

function question3() {
	var thirdQuestion = prompt('Which is the highest Saiyan level they reach in Dragon Ball Z? (Two, Three or Four)');
	thirdQuestion = thirdQuestion.toLowerCase();
  	
  	switch (thirdQuestion) {
  	case 'two':
        thirdQuestion = false;
        break;
   	case 'three':
        thirdQuestion = true;
        break;
  	case 'four':
    	thirdQuestion = false;
    	break;
  	default:
        alert("Please write one of the provided answers!");
        return question2();
  }

  responses.push(thirdQuestion);
}

function question4() {

  var fourthQuestion = prompt('Is Gohan the one who raised Goku when he was a child? (Yes or No)')

  if (fourthQuestion.toLowerCase() === 'yes') {
    fourthQuestion = true
  }

  else if (fourthQuestion.toLowerCase() === 'no') {
    fourthQuestion = false
  }

  else {
    alert("Please answer either Yes or No!");
    return question4();
  }

  responses.push(fourthQuestion);
}

function evaluate(responsesArray) {
	totalTrue = 0;
	totalFalse = 0;

	for (var i = 0; i < responsesArray.length; i++) {
		if (responsesArray[i] == true) {
			totalTrue += 1;
		}

		else {
			totalFalse += 1;
		}
	}

	user.correct = totalTrue;
	user.failed = totalFalse;

	showResults();
}

function showResults() {
	alert('Hi ' + user.name + '! You have ' + user.correct + ' correct answers and ' + user.failed + ' incorrect answers.' );
}

nameQuestion();

question1();

question2();

question3();

question4();

evaluate(responses);

