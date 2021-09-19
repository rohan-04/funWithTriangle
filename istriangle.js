const angles = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output');

isTriangleButton.addEventListener('click', function isTriangle() {
	let sum = 0;
	for (let i = 0; i < angles.length; i++) {
		sum += Number(angles[i].value);
	}

	if (sum === 180) {
		output.innerText = 'It is a triangle 🥳';
	} else {
		output.innerText = 'Angles does not form a triangle 📐😔';
	}
});
