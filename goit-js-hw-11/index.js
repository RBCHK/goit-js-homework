//! Переключатель цветов

// const colors = [
// 	'#f56642',
// 	'#42a7f5',
// 	'#42f58d',
// 	'#8142f5',
// 	'#f542dd',
// 	'#f542dd',
// ];

// const refs = {
// 	body: document.querySelector('body'),
// 	start: document.querySelector('[data-action="start"]'),
// 	stop: document.querySelector('[data-action="stop"]'),
// }

// const randomIntegerFromInterval = (min = 0, max = colors.length - 1) => {
// 	return Math.floor(Math.random() * colors.length);
// 	// * (max - min + 1) + min
// };

// let startId;

// refs.start.addEventListener('click', (e) => {
// 	refs.start.disabled = true;
// 	refs.stop.disabled = false;

// 	startId = setInterval(() => {
// 		refs.body.bgColor = colors[randomIntegerFromInterval()];
// 		refs.body.style.transition = '.7s ease-in-out';
// 	}, 400);
// })

// refs.stop.addEventListener('click', () => {
// 	refs.start.disabled = false;
// 	refs.stop.disabled = true;
// 	clearInterval(startId)
// })

//! Задание 1

// Напиши функцию delay(ms), которая возвращает промис, переходящий в 
// состояние "resolved" через ms миллисекунд.Значением исполнившегося 
// промиса должно быть то кол - во миллисекунд которое передали во время 
// вызова функции delay.

//! Решение Задачи 1

// let time;

// const delay = ms => {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			resolve(time = ms)
// 		}, ms)
// 	})
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


//! Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не 
// использовала callback-функцию callback, а принимала всего
//  два параметра allUsers и userName и возвращала промис.

//! Решение Задачи 2

// const users = [{
// 		name: 'Mango',
// 		active: true
// 	},
// 	{
// 		name: 'Poly',
// 		active: false
// 	},
// 	{
// 		name: 'Ajax',
// 		active: true
// 	},
// 	{
// 		name: 'Lux',
// 		active: false
// 	},
// ];

// let updatedUsers;

// const toggleUserState = (allUsers, userName) => {
// 	return new Promise(function (resolve, reject) {
// 		resolve(updatedUsers = allUsers.map(user =>
// 			user.name === userName ? { ...user, active: !user.active } : user,
// 		  ))
// 	});
// }

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */

// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);


//! Задание 3

// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess 
// и onError, а принимала всего один параметр transaction и возвращала промис.

//! Решение Задачи 3

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
	const delay = randomIntegerFromInterval(200, 500);

	return new Promise(function (resolve, reject) {

		setTimeout(() => {
			const canProcess = Math.random() > 0.3;
			if (canProcess) {
				resolve({id: transaction.id, time: delay});
			  } else {
				reject(transaction.id);
			  }
		})

	}, delay)
}

const logSuccess = ({id, time}) => {
	console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
	console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);






//! Таймер обратного отсчета 






//! ------------------------------------------------------
// function logPerson() {
// 	console.log(`Имя: ${this.name}, возраст: ${this.age}, работа: ${this.job}`)
// }

// const user1 = {
// 	name: 'Михаил',
// 	age: 22,
// 	job: 'Frontend'
// }

// const user2 = {
// 	name: 'Елена',
// 	age: 18,
// 	job: 'SMM'
// }

// function bindFn(user, func) {
// 	return function() {
// 		func.call(user)
// 	}
// }

// bindFn(user1, logPerson)()
// bindFn(user2, logPerson)()
