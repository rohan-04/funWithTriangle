const angles = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output');

isTriangleButton.addEventListener('click', function isTriangle() {
	let angleOne = Number(angles[0].value);
	let angleTwo = Number(angles[1].value);
	let angleThree = Number(angles[2].value);

	if (angleOne >= 0 && angleTwo >= 0 && angleThree >= 0) {
		let sum = angleOne + angleTwo + angleThree;
		if (sum === 180) {
			output.innerText = 'It is a triangle 🥳';
		} else {
			output.innerText = 'Angles does not form a triangle 😔';
		}
	} else {
		output.innerText = 'Only enter positive values 🙄';
	}
});
