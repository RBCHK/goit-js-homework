'use strict'


//! Задание 1 ---------------------------------

// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет 
// в консоль текст заголовка элемента (тега h2) и количество элементов в 
// категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

//! Решение 1

// const categories = document
// 	.querySelector('#categories')
// 	.children.length;

// console.log(`В списке ${categories} категории.`);

// const liItem = document
// 	.querySelectorAll('.item');

// liItem.forEach(el => {
// 	console.log('Категория:', el.querySelector('h2').textContent);
// 	console.log('Количество элементов:', el.querySelectorAll('li').length);
// });

//! Задание 2 ---------------------------------------

// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию 
// в список ul.ingredients. Для создания DOM-узлов используй 
// document.createElement().

//! Решение 2

// const ingredients = [
// 	'Картошка',
// 	'Грибы',
// 	'Чеснок',
// 	'Помидоры',
// 	'Зелень',
// 	'Приправы',
// ];

// // для одного елемента из массива ------------------

// // const ul = document.querySelector('#ingredients')
// // console.log(ul);

// // const li = document.createElement('li');
// // ul.append(li);
// // li.innerHTML = ingredients[0]
// // console.log(li);

// // для всех елементов массива вариант 1 ------------------

// const ul = document.querySelector('#ingredients');
// // console.log(ul);

// ingredients.forEach(function (ingredient) {
// 	const li = document.createElement('li');
// 	li.innerHTML = ingredient;
// 	ul.append(li);
// 	// console.log(li);
// })

// // для всех елементов массива вариант 2 ------------------

// // ingredients.forEach(function(item) {
// // 	const li = document.createElement('li');
// // 	const text = document.createTextNode(item);
// // 	li.appendChild(text);
// // 	document.getElementById("ingredients").appendChild(li);
// //   })


//! Задание 3 ------------------------------
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img 
// вложенных в li. Для создания разметки используй шаблонные 
// строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию 
// вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами
// через css-классы.

//! Решение 3
// const images = [{
// 		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'White and Black Long Fur Cat',
// 	},
// 	{
// 		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
// 	},
// 	{
// 		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'Group of Horses Running',
// 	},
// ];

// const ul = document.querySelector('#gallery')
// console.log(ul);

// images.forEach(function (image) {

// 	const li = document.createElement('li');
// 	ul.insertAdjacentElement("beforeend", li);

// 	const img = document.createElement('img');
// 	img.src = `${image.url}`;
// 	img.alt = `${image.alt}`;
// 	img.width = 100;

// 	li.insertAdjacentElement("beforeend", img);

// })


//! Задание 4 -----------------------------
// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

//! Решение 4

// const counterValue = document.querySelector('#value');
// let value = 0;

// counterValue.textContent = value

// const increment = document.querySelector('[data-action="increment"]');
// const decrement = document.querySelector('[data-action="decrement"]');

// increment.addEventListener('click', () => counterValue.textContent = value += 1)
// decrement.addEventListener('click', () => counterValue.textContent = value -= 1)


//! Задание 5 --------------------------------
// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

//! Решение 5

// const nameInput = document.querySelector('#name-input')
// // console.log(nameInput);

// const nameOutput = document.querySelector('#name-output');
// // nameOutput.textContent = '1233456789'
// // console.log(nameOutput);

// nameInput.addEventListener('input', () => {
// 	nameOutput.textContent = nameInput.value;
// 	if (nameInput.value === '') {
// 		nameOutput.textContent = 'Незнакомец'
// 	}
// })

//! Задание 6 --------------------------------

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//! Решение 6

// const validationInput = document.querySelector('#validation-input');

// validationInput.addEventListener('blur', () => {
// 	if (validationInput.value.length !== +validationInput.dataset.length) {
// 		validationInput.classList.add('invalid');
// 	} else {
// 		validationInput.classList.add('valid');
// 	}
// });

// validationInput.addEventListener('focus', () => {
// 	if (validationInput.classList.contains('invalid')) {
// 		validationInput.classList.remove("invalid")
// 	} else {
// 		validationInput.classList.remove('valid')
// 	}
// });


//! Задание 7 ------------------------------- -
// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

//! Решение 7

// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// // fontSizeControl.value = 14;

// fontSizeControl.addEventListener('input', () => {
// 	text.style.fontSize = `${fontSizeControl.value}px`;
// })


//! Задание 8 дополнительное, выполнять не обязательно -----------------------
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится 
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{
	/* <div id="controls">
				<input type="number" min="0" max="100" step="1" />
				<button type="button" data-action="render">Создать</button>
				<button type="button" data-action="destroy">Очистить</button>
			</div>

			<div id="boxes"></div> */
}

//! Решение 8

// const controls = document.querySelector('#controls');
// const boxes = document.querySelector('#boxes');
// const input = document.querySelector('input');
// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');
// let amount;

// render.addEventListener('click', () => {
// 	amount = input.value
// 	console.log(boxes);

// 	createBoxes(amount)
// });

// destroy.addEventListener('click', () => {

// 	destroyBoxes()
// });

// function createBoxes(amount) {

// 	for (let i = 0; i < amount; i += 1) {
// 		const div = document.createElement('div');
// 		const width = 30;
// 		const height = 30;

// 		div.style.width = `${width + i * 10}px`;
// 		div.style.height = `${height + i * 10}px`;
	
// 		div.style.backgroundColor = `${random_bg_color()}`

// 		div.style.transition = '2s ease-in-out';
// 		setTimeout(() => `${random_bg_color()}`, 1000)

// 		boxes.append(div);
// 	}
// }

// function destroyBoxes() {
// 	boxes.innerHTML = '';
// 	input.value = '';
// }

// function random_bg_color() {
// 	const x = Math.floor(Math.random() * 256);
// 	const y = Math.floor(Math.random() * 256);
// 	const z = Math.floor(Math.random() * 256);
// 	const bgColor = `rgb(${x}, ${y}, ${z})`;

// 	return bgColor
// }
