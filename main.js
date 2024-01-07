const ratingButtons = document.querySelectorAll('#rating button');
const submitButton = document.getElementById('submitButton');
const slides = document.querySelectorAll('main article');

let score = null;
ratingButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		ratingButtons.forEach((_btn) => _btn.classList.remove('active'));
		btn.classList.add('active');
		if (!score) submitButton.disabled = false;
		score = +btn.value;
	});
});

submitButton.addEventListener('click', (e) => {
	if (!score) return;

	slides[1].querySelector('#score span').textContent = score;
	slides[0].style.animationName = 'slide';
	slides[1].style.display = 'block';
});
