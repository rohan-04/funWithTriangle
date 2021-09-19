const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const output = document.querySelector('#output');

const correctAnswers = ['Right', '3', 'Hypotenuse'];

function calculateScore() {
	let score = 0;
	let index = 0;
	const formResults = new FormData(quizForm);
	for (let value of formResults.values()) {
		if (value === correctAnswers[index]) {
			score += 1;
		}
		index += 1;
	}

	output.innerText = 'Congrats 👏, your score is ' + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);
