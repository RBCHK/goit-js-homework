import menu from './menu.json'
import template from '../template/menuItem.hbs'
// console.log(template(menu));

const menuUl = document.querySelector('.js-menu');

menuUl.insertAdjacentHTML('afterbegin', template(menu))
// console.log(menuUl)

const body = document.querySelector('body');
body.classList.add('light-theme')
// console.log(body)

const localStorageTheme = localStorage.getItem('theme');
// console.log(localStorageTheme)

// if (localStorageTheme) {
//   body.classList.remove('light-theme')
//   body.classList.add(localStorageTheme)
// }

if (localStorageTheme) {
  body.className = localStorageTheme
}

const themeSwitchControl = document.querySelector('#theme-switch-control')
themeSwitchControl.addEventListener('change', () => {
  //   console.log('e.target :', e.target);
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  } else if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  }
  localStorage.setItem('theme', body.classList);
  //   console.log(localStorage)
})

if (localStorageTheme === 'dark-theme') {
  themeSwitchControl.checked = true
}
