import galleryItems from './gallery-items.js'
// console.log(galleryItems);


const gallery = document.querySelector('.gallery')

function renderUsers(galleryItems, gallery) {

	const markup = galleryItems.reduce((acc, galleryItem) => {
		const li = `
	  <li class="gallery__item">
	  <a
		class="gallery__link"
		href="${galleryItem.original}"
	  >
		<img
		  class="gallery__image"
		  src="${galleryItem.preview}"
		  data-source="${galleryItem.original}"
		  alt="${galleryItem.description}"
		/>
		<span class="gallery__icon">
		  <i class="material-icons">zoom_out_map</i>
		</span>
	  </a>
	</li>
	  `;
		return acc += li;
	}, "");
	
	gallery.insertAdjacentHTML('beforeend', markup);
}

renderUsers(galleryItems, gallery);

//! открываем модальное окно

const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightbox = document.querySelector('.lightbox');

// закрываем модальное окно через CLOSE и модальное окно
lightbox.addEventListener('click', function (e) {
	console.dir(e.target);
	if (
		e.target.nodeName === 'BUTTON' ||
		e.target === e.currentTarget
	) {
		lightbox.classList.remove('is-open');
	} else if (e.target.nodeName !== 'IMG') {
		if (lightbox.classList.contains('is-open')) {
			lightbox.classList.remove('is-open')
		}
	}
});

// закрываем модальное окно через ESC
window.addEventListener('keydown', (e) => {
	if (
		e.keyCode === 27 &&
		lightbox.classList.contains('is-open')
	) {
		lightbox.classList.toggle('is-open');
	}
});

// слушатель на список с фото
gallery.addEventListener('click', function (e) {
	e.preventDefault()
	console.log('e.target', e.target.nodeName);
	console.log('e.currentTarget', e.currentTarget.nodeName);

	if (e.target.nodeName === 'IMG') {
		lightbox.classList.add('is-open')

		const lightboxImage = document.querySelector('.lightbox___image');
		lightboxImage.src = e.target.dataset.source
		lightboxImage.alt = e.target.alt

		// console.log(lightboxImage);
		// console.log(lightbox);
		// console.log('e.target.dataset.source:', e.target.dataset.source)
	}
});
