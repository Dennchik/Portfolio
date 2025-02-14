import loaded from './assets/preloader.js';
loaded('.preloader');

import { dynamicAdaptive } from './assets/dynamic-adaptive.js';
dynamicAdaptive();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './modules/anchors-smooth-scrolling.js';
const anchorLink = document.querySelector('.anchor-link');
if (anchorLink) {
	anchorsSmoothScrolling();
}
//* ----------------------------------------------------------------------------
import returnToSavedPosition from './modules/return-position.js';
// import modalOpen from './modules/modalOpen.js';
import {
	timeLineHeaderItem,
	timeLineTextItem,
} from './animations/anime-js.jsx';


document.addEventListener('DOMContentLoaded', function () {
	const textItem = document.querySelector('.performance__text');
	if (textItem) {
		timeLineTextItem();
	}

	returnToSavedPosition();

	let dateContainer = document.querySelector('.performance__date');
	if (!dateContainer) return;

	let now = new Date();
	let options = { month: 'short' }; // Сокращённое название месяца
	let day = now.getDate();
	let month = new Intl.DateTimeFormat('ru-RU', options).format(now);

	// Убираем точку и делаем первую букву заглавной
	month = month.replace('.', '').charAt(0).toUpperCase() + month.slice(1, -1);

	dateContainer.innerHTML = `<div class="day">${day}</div> <div class="data-wrapp"> <div class="month">${month}</div><div class="status"><p>доступен </br> для&nbsp;работы</p></div></div>`;


	//* --------------------------- Animation Header -----------------------------
	const header = document.querySelector('.header');
	const mainContent = document.querySelector('.page__main-content');
	if (header && mainContent) {
		// Именованная функция для обработки скроллинга
		const handleScroll = () => {
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				header.classList.remove('without-border');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
			}
		};
		// Выполнение timeLineHeaderItem при загрузке
		timeLineHeaderItem();

		// Добавление обработчика скроллинга
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			window.removeEventListener('scroll', handleScroll);
		});
	}
});

//* ------------------------------ Burger Menu ---------------------------------
const burgerButton = document.querySelector('.burger-button__items');
burgerButton.addEventListener('click', () => {
	const accelerate = document.querySelector('.accelerate');
	accelerate.classList.toggle('hide');
});
//* ----------------------------- Burger Button --------------------------------
const buttonItems = document.querySelector('.burger-button');
const itembutton = document.querySelector('.item-button');
const closeButton = document.querySelector('.project-list__close-button');
const projectList = document.querySelector('.project-list');

buttonItems.addEventListener('click', () => {
	buttonItems.classList.toggle('_open-menu');

	if (buttonItems.classList.contains('_open-menu')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
});

itembutton.addEventListener('click', () => {
	projectList.classList.add('_open-list');

	if (projectList.classList.contains('_open-list')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
});

closeButton.addEventListener('click', () => {
	document.body.classList.remove('no-scroll');
	projectList.classList.remove('_open-list');
});


// import { dinamicAdaptive } from './assets/move-elements.js';

// dinamicAdaptive();
// //* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
