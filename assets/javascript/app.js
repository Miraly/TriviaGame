var arrayQuestions = [
	{
      question: "Other than water, what is the most consumed beverage?",
		answers: {
            answer: ["coffee", "tea", "vodka", "juice"] 
				},
		correctAnswer: 1
},
	{
      question: "The Munich beer festival is held during what month?",
		answers: {
             answer: ["August", "September", "October", "April"] 
				},
		correctAnswer: 2
	},
	{
      question: "What whisky brand was advertised with two terrier dogs?",
		answers: {
             answer: ["Johnnie Walker", "Chivas Regal", "White Horse", "Black & White"] 
				},
		correctAnswer: 3
	},
	{
      question: "What US state drinks the most alcohol per person?",
		answers: {
             answer: ["Nevada", "Alaska", "Texas", "Ohio"] 
				},
		correctAnswer: 0
	},
	{
      question: "In their lifetime, the average Britain consumes 14,571 what?",
		answers: {
             answer: ["water", "beer", "whisky", "milk"] 
				},
		correctAnswer: 1
	},
	
];

var questionCount = 0;
var correctAnswersCount = 0;
var wrongAnswersCount = 0;



function newQuestion() {
		
	var count = 15;
	var counter = setInterval(timer, 1000); 

	function timer() {
  	count = count - 1;
  		if (count <= 0) {
     		clearInterval(counter);
     		$(".triviaQuestion").html("Time is Up!");
			setTimeout(newQuestion, 2000);
			return;
		}
   	$("#timer").html( "Time remaining: " + count + " secs");
	};
	
	var index = arrayQuestions[questionCount];
	//Displaying question and corresponding answers
	$(".question").html(index.question);
	
	$("#answer1").data("answerID", 0).html(index.answers.answer[0]); //assigning data value to use for comparison
	$("#answer2").data("answerID", 1).html(index.answers.answer[1]);
	$("#answer3").data("answerID", 2).html(index.answers.answer[2]);
	$("#answer4").data("answerID", 3).html(index.answers.answer[3]);
		
	$(".button").click(function() {
		clearInterval(counter);
		
			if (index.correctAnswer === $(this).data("answerID")) {
				$(".question").html("Correct!");
				$("#answer1").empty();
				$("#answer2").empty();
				$("#answer3").empty();
				$("#answer4").empty();
				correctAnswersCount++;
				questionCount++;
				setTimeout(newQuestion, 2000);
								
			} else {
				$(".question").html("Sorry! The answer is " + index.answers.answer[index.correctAnswer]);
				$("#answer1").empty();
				$("#answer2").empty();
				$("#answer3").empty();
				$("#answer4").empty();
				wrongAnswersCount++;
				questionCount++;
				setTimeout(newQuestion, 2000);
			}
		});
	
	if (questionCount === 4) {
		$(".triviaQuestion").empty();
		$(".triviaQuestion").append($('<p>').html("End of Questions!"));
		$(".triviaQuestion").append($('<p>').html("Correct answers:" + correctAnswersCount));
		$(".triviaQuestion").append($('<p>').htmlhtml("Wrong answers:" + wrongAnswersCount));
			
	}
};

$(document).ready(function() {
	newQuestion();
		
});