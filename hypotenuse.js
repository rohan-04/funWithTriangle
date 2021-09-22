const sides = document.querySelectorAll('.side');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const output = document.querySelector('#output');

function calculateSumofSquares(a, b) {
	return a * a + b * b;
}

function showHypotenuse() {
	let sideOne = Number(sides[0].value);
	let sideTwo = Number(sides[1].value);

	if (sideOne >= 0 && sideTwo >= 0) {
		let hypotenuse = Math.sqrt(calculateSumofSquares(sideOne, sideTwo));

		hypotenuse = hypotenuse.toFixed(4);
		output.innerText = 'Hypotenuse of triangle is ' + hypotenuse + ' 🤓';
	} else {
		output.innerText = 'Please enter only postive values 🙄';
	}
}

hypotenuseBtn.addEventListener('click', showHypotenuse);
