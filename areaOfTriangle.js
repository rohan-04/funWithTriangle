const sides = document.querySelectorAll('.side');
const calculateAreaButton = document.querySelector('#calulate-area-btn');
const outputArea = document.querySelector('#output');

function calculateArea() {
	const base = sides[0].value;
	const height = sides[1].value;

	if (base >= 0 && height >= 0) {
		const area = 0.5 * base * height;
		console.log(base, height);
		outputArea.innerText = 'Area of a triangle is ' + area;
	} else {
		outputArea.innerText = 'Please enter correct values 😐';
	}
}

calculateAreaButton.addEventListener('click', calculateArea);
