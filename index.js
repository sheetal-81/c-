// script.js

let questions = [
	{
		prompt: `{1} What is C++?`,
		options: [
		    "A programming language",
		    "A markup language",
		    "A database system",
		    "A web browser",
		],
		answer: "A programming language",
	    },
	    {
		prompt: `{2} Which keyword is used to declare a class in C++?`,
		options: [ 
		    "struct",
		    "class",
		    "object",
		    "void",
		],
		answer: "class",
	    },
	    {
		prompt: `{3} What is the correct way to define a constructor in C++?`,
		options: [
		    "Same name as the class",
		    "Constructor()",
		    "create()",
		    "initialize()",
		],
		answer: "Same name as the class",
	    },
	    {
		prompt: `{4} What is the purpose of the "new" operator in C++?`,
		options: [
		    "To dynamically allocate memory",
		    "To declare a new variable",
		    "To create a new class",
		    "To call a constructor",
		],
		answer: "To dynamically allocate memory",
	    },
	    {
		prompt: `{5} Which operator is used for pointer dereferencing in C++?`,
		options: [
		    "&",
		    "->",
		    ">>",
		    "*",
		],
		answer: "*",
	    },
	    {
		prompt: `{6} What is the correct way to define a destructor in C++?`,
		options: [
		    "~ClassName()",
		    "destructor()",
		    "destroy()",
		    "delete()",
		],
		answer: "~ClassName()",
	    },
	    {
		prompt: `{7} What is the purpose of the "this" pointer in C++?`,
		options: [   
		    "To refer to the parent object",
		    "To refer to the current object",
		    "To refer to the previous object",
		    "To refer to the global object",
		],
		answer: "To refer to the current object",
	    },
	    {
		prompt: `{8} What is the correct way to declare a virtual function in C++?`,
		options: [
		    "virtual void functionName() = 0;",
		    "void virtual functionName();",
		    "virtual functionName();",
		    "virtual functionName() {}",
		],
		answer: "virtual void functionName() = 0;",
	    },
	    {
		prompt: `{9) What does the "const" keyword indicate in C++?`,
		options: [
		    "That the variable is a constant",
		    "That the variable is static",
		    "That the value of a variable cannot be changed",
		    "That the variable is global",
		],
		answer: "That the value of a variable cannot be changed",
	    },
	    {
		prompt: `{10} What is the purpose of the "static" keyword in C++?`,
		options: [
		    "To declare a variable with static storage duration",
		    "To specify the access level of a variable",
		    "To allocate memory dynamically",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To declare a variable with static storage duration",
	    },
	    {
		prompt: `{11} What is the purpose of the "friend" keyword in C++?`,
		options: [
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To grant access to private and protected members of a class",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To grant access to private and protected members of a class",
	    },
	    {
		prompt: `{12} What is the correct syntax for inheriting a class in C++?`,
		options: [
		    "class Derived : public Base { ... };",
		    "class Derived -> public Base { ... };",
		    "class Derived :: public Base { ... };",
		    "class Derived extends Base { ... };",
		],
		answer: "class Derived : public Base { ... };",
	    },
	    {
		prompt: `{13} What is the purpose of the "inline" keyword in C++?`,
		options: [
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To declare a variable with automatic storage duration",
		    "To suggest the compiler to inline a function",
		],
		answer: "To suggest the compiler to inline a function",
	    },
	    {
		prompt: `{14} What does the "virtual" keyword indicate in C++?`,
		options: [
		    "That a function cannot be overridden in derived classes",
		    "That a function is static",
		    "That a function can be overridden in derived classes",
		    "That a function is global",
		],
		answer: "That a function can be overridden in derived classes",
	    },
	    {
		prompt: `{15} What is the purpose of the "override" keyword in C++?`,
		options: [
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To explicitly indicate that a function overrides a virtual function from a base class",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To explicitly indicate that a function overrides a virtual function from a base class",
	    },
	    {
		prompt: `{16} What is the purpose of the "const" qualifier in a member function declaration in C++?`,
		options: [
		    "To indicate that the member function does not modify the object's data members",
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To indicate that the member function does not modify the object's data members",
	    },
	    {
		prompt: `{17} What is the correct way to declare a template function in C++?`,
		options: [
		    "void template functionName(T arg) { ... }",
		    "typename T void functionName(T arg) { ... }",
		    "void functionName(T arg) template <typename T> { ... }",
		    "template <typename T> void functionName(T arg) { ... }",
		],
		answer: "template <typename T> void functionName(T arg) { ... }",
	    },
	    {
		prompt: `{18} What is the correct way to define a template class in C++?`,
		options: [
		    "class template <typename T> ClassName { ... };",
		    "class ClassName template <typename T> { ... };",
		    "template <typename T> class ClassName { ... };",
		    "class ClassName <typename T> { ... };",
		],
		answer: "template <typename T> class ClassName { ... };",
	    },
	    {
		prompt: `{19} What is the purpose of the "decltype" keyword in C++?`,
		options: [
		    "To obtain the type of an expression",
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To obtain the type of an expression",
	    },
	    {
		prompt: `{20} What does the "auto" keyword indicate in C++?`,
		options: [
		    "That the variable is constant",
		    "That the type of a variable is automatically deduced by the compiler",
		    "That the variable is static",
		    "That the variable is global",
		],
		answer: "That the type of a variable is automatically deduced by the compiler",
	    },
	    {
		prompt: `{21} What is the purpose of the "mutable" keyword in C++?`,
		options: [
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To allow modification of a data member in a const member function",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To allow modification of a data member in a const member function",
	    },
	    {
		prompt: `{22} What is the correct way to overload an operator in C++?`,
		options: [
		    "ReturnType operatorSymbol(Parameters) { ... }",
		    "void operatorSymbol(Parameters) { ... }",
		    "operatorSymbol(Parameters) ReturnType { ... }",
		    "operatorSymbol ReturnType (Parameters) { ... }",
		],
		answer: "ReturnType operatorSymbol(Parameters) { ... }",
	    },
	    {
		prompt: `{23} What is the purpose of the "using" keyword in C++?`,
		options: [
		    
		    "To specify the access level of a variable",
		    "To declare a variable with static storage duration",
		    "To declare a variable with automatic storage duration",
		    "To create an alias for a namespace or type",
		],
		answer: "To create an alias for a namespace or type",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
