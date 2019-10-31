const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
];

const refs = {
	body: document.querySelector('body'),
	start: document.querySelector('[data-action="start"]'),
	stop: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min = 0, max = colors.length - 1) => {
	return Math.floor(Math.random() * colors.length);
	// * (max - min + 1) + min
};

// console.log(colors[randomIntegerFromInterval()]);

let startId;

refs.start.addEventListener('click', (e) => {
	// console.dir(refs.start);
	refs.start.disabled = true;
	refs.stop.disabled = false;

	startId = setInterval(() => {
		refs.body.bgColor = colors[randomIntegerFromInterval()];
	}, 1000);
})

refs.stop.addEventListener('click', () => {
	refs.start.disabled = false;
	refs.stop.disabled = true;
	clearInterval(startId)
})
