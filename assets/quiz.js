const questionDisplay = $('.question');
var questionIndex = 0;
const answer = document.getElementsByClassName('answer')
const next = $('.next');
const prev = $('.prev');
const start = $('.start');
const timer = $('#time');
const answer1 = $('.answer');
const score = $('#score');
var point = 0;
function Millonaire ( problem, option, answers){
	this.problem = problem;
	this.option = option;
	this.answers = answers;
}

const questionArray = [ 
new Millonaire('At	any	one	time,	what	percentage	of	5	to	16	year	olds	in	the	UK	have	a	mental	health	problem?', ['1%', '5%', '9%', '20%'] , '20%'), 
new Millonaire('How	many	teenagers	are	believed	to	self-harm	in	the	UK?', ['1	in	19', '1	in	85', '1	in	95', '1	in	15'], '1	in	15'),
new Millonaire('Which	of	these	symptoms	can	happen	if	you’re	depressed?', ['none', 'sick', 'done', 'D	-	any	of	the	above'], 'D	-	any	of	the	above'),
new Millonaire('Which	of	these	are	possible	triggers	for	a	psychotic	episode?', ['Taking	drugs', 'Smoking', '1	in	95', '1	in	15'], 'Taking	drugs')
]

// console.log(questionArray[0].problem)



function Quizcontrol(){
this.pre_next = function(){
		next.on('click', function(){
	 questionIndex = questionIndex+1;
	 prev.attr("disabled", false);
	 answer1.css('background', '#000080')
if(questionIndex  ===  questionArray.length ){
	questionIndex = questionIndex-1;
	next.attr("disabled", true);
	questionDisplay.text(questionArray[questionArray.length-1].problem)	
	}

	else{questionDisplay.text(questionArray[questionIndex].problem)} 
for(var i=0; i<questionArray[questionIndex].option.length; i++){
	answer[i].textContent=questionArray[questionIndex].option[i]
	// console.log(questionArray[questionIndex].option[i])
}
})
// prev.on('click', function(){
// 	next.attr("disabled", false);
// 	 questionIndex = questionIndex-1;
// if(questionIndex  === 0 ){
// 	prev.attr("disabled", true);
// 	questionDisplay.text(questionArray[questionArray.length-1].problem)

// 	}	
// 	else{questionDisplay.text(questionArray[questionIndex].problem)

// 	} 
// for(var i=0; i<questionArray[questionIndex].option.length; i++){
// 	answer[i].textContent=questionArray[questionIndex].option[i];
// 	// console.log(questionArray[questionIndex].option[i])
// }
// })
	};
	this.timeSet = function () {
    var x = 0;
   function add1 (){
   	x = x+1
   	if (x == 1 ){
   		x = 0
   	}
   	else if (x>=20){
   		timer.css('background', 'red')
   	}
   	else if (x<20){
   		timer.css('background', '#000080')
   	}

      timer.text(x)
    };
     add1();
    setInterval(add1, 1000);
   
};
//point
this.start =  function(){
start.on('click', function(){
	questionDisplay.text(questionArray[questionIndex].problem);
	for(var i=0; i<questionArray[questionIndex].option.length; i++){
	answer[i].textContent=questionArray[questionIndex].option[i]
prev.attr("disabled", false);
next.attr("disabled", false);
start.attr("disabled", true);

}

})
};
this.points =  function (){
	
	answer1.on('click', function(){
		let myself = $(this);
		
		if(  myself.text() === questionArray[questionIndex].answers  && questionIndex){
			point = point + 100;
			score.text('$ ' + point)
			myself.css('background', 'green')
		}
		else  {
			
			myself.css('background', 'red')
		}
		
		
	})
}
}

function quiStart(){
const quizControlApp = new Quizcontrol();
prev.attr("disabled", true);
next.attr("disabled", true);
quizControlApp.pre_next()
quizControlApp.timeSet()
quizControlApp.start()
quizControlApp.points();
}
quiStart()






