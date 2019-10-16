'use strict'
import users from './users.js'
console.log(users);

//! Задание 1 ---------------------------------
// Получить массив имен всех пользователей (поле name).


//! Решение 1
// const getUserNames = users => {
// 	const Arr = users.map((el) => el.name)
// 	return Arr;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//! Задание 2 ---------------------------------------
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

//! Решение 2

// const getUsersWithEyeColor = (users, color) => {
// 	const filterArr = users.filter(el => el.eyeColor === color);
// 	return filterArr;
// };

// console.log(getUsersWithEyeColor(users, 'blue'));
// //   [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


//! Задание 3 ------------------------------
// Получить массив имен пользователей по полу (поле gender).

//! Решение 3

// const getUsersWithGender = (users, gender) => {
// 	const Arr = users
// 	.filter(el => el.gender === gender)
// 	.map(el => el.name)
// 	return Arr;
// };

// console.log(getUsersWithGender(users, 'male')); 
// // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


//! Задание 4 -----------------------------
// Получить массив только неактивных пользователей (поле isActive).

//! Решение 4

// const getInactiveUsers = users => {
// 	const Arr = users.filter(el => !el.isActive)
// 	return Arr
// };

// console.log(getInactiveUsers(users));
// // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


//! Задание 5 --------------------------------
// Получить пользоваля (не массив) по email (поле email, он уникальный).


//! Решение 5
// const getUserWithEmail = (users, email) => {
// 	const findOne = users.find(el => el.email === email)
// 	return findOne
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// // {объект пользователя Elma Head}


//! Задание 6 --------------------------------
// Получить массив пользователей попадающих в возрастную категорию 
// от min до max лет(поле age).

//! Решение 6
// const getUsersWithAge = (users, min, max) => {
// 	const Arr = users
// 	.filter((el) => el.age >= min && el.age <= max)
// 	// .map(el => el.name)
// 	return Arr
// };

// console.log(getUsersWithAge(users, 20, 30));
// // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


//! Задание 7 --------------------------------
// Получить общую сумму баланса(поле balance) всех пользователей.

// //! Решение 7
// const calculateTotalBalance = users => {
// 	const  totalbalance = users
// 	// .reduce((prevTotal, user) => prevTotal + user.balance, 0);
// 	.reduce((acc, value) => acc + value.balance, 0);
// 	return totalbalance
//   };

// console.log(calculateTotalBalance(users)); // 20916


//! Задание 8 --------------------------------
// Массив имен всех пользователей у которых есть друг с указанным именем.

// //! Решение 8

// const getUsersWithFriend = (users, friendName) => {
// 	const Arr = users
// 	.filter(el => el.friends
// 		.some(el => el === friendName))
// 	.map(el => el.name)

// 	return Arr;
//   };

//   console.log(getUsersWithFriend(users, 'Briana Decker')); 
//   // [ 'Sharlene Bush', 'Sheree Anthony' ]
//   console.log(getUsersWithFriend(users, 'Goldie Gentry')); 
//   // [ 'Elma Head', 'Sheree Anthony' ]


//! Задание 9 --------------------------------
// Массив имен (поле name) людей, отсортированных в 
// зависимости от количества их друзей (поле friends)

//! Решение 9
// const getNamesSortedByFriendsCount = users => {
// 	const Arr = users
// 		.sort((a, b) => a.friends.length - b.friends.length)
// 		.map(el => el.name)
// 	return Arr
// };


// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//! Задание 10 --------------------------------
// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть 
// отсортированы в алфавитном порядке.

//! Решение 10

const getSortedUniqueSkills = users => {
	let arr = [];

	users.forEach(el => arr = [...arr, ...el.skills]);

	arr
	.sort()
	
	const newArr = arr
	.filter((el, ind) => arr.indexOf(el) === ind)
	.sort()

	// return arr
	return newArr
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
