const sides = document.querySelectorAll('.side');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const output = document.querySelector('#output');

function calculateSumofSquares(a, b) {
	return a * a + b * b;
}

function showHypotenuse() {
	let hypotenuse = Math.sqrt(
		calculateSumofSquares(Number(sides[0].value), Number(sides[1].value))
	);

	hypotenuse = hypotenuse.toFixed(4);
	output.innerText = 'Hypotenuse of triangle is ' + hypotenuse + ' 🤓';
}

hypotenuseBtn.addEventListener('click', showHypotenuse);
