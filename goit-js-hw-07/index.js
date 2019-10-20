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

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];

// const ul = document.querySelector('#ingredients')
// // console.log(ul);
// let li = document.createElement('li');
// ul.append(li);
// li.innerHTML = ingredients[0]
// // console.log(li);

ingredients.forEach(function(item) {
	const li = document.createElement('li')
	const text = document.createTextNode(item);
	li.appendChild(text);
	document.getElementById("ingredients").appendChild(li);
  });


//! Задание 3 ------------------------------
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
//! Решение 3


//! Задание 4 -----------------------------

//! Решение 4


//! Задание 5 --------------------------------

//! Решение 5
