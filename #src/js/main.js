import loaded from './assets/preloader.js';

loaded('.preloader');

import { dynamicAdaptive } from './assets/dynamic-adaptive.js';

dynamicAdaptive();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './assets/anchors-smooth-scrolling.js';

anchorsSmoothScrolling();
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

	dateContainer.innerHTML = `<div class="day">${day}</div> <div class="data-wrapper">
<div class="month">${month}</div><div class="status"><p>Доступен</br> для&nbsp;работы</p></div></div>`;


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
const accelerate = document.querySelector('.accelerate');
const buttonItems = document.querySelector('.burger-button');
const itemButton = document.querySelector('.item-button');
const closeButton = document.querySelector('.project-list__close-button');
const projectList = document.querySelector('.project-list');
const anchorLinks = document.querySelectorAll('.anchor-link');

burgerButton.addEventListener('click', () => {
	accelerate.classList.toggle('hide');
});
//* ----------------------------- Burger Button --------------------------------
anchorLinks.forEach(anchorLink => {
	anchorLink.addEventListener('click', () => {
		if (!accelerate.classList.contains('hide')) {
			accelerate.classList.add('hide');
			document.body.classList.remove('no-scroll');
		}
	});
});

buttonItems.addEventListener('click', () => {
	buttonItems.classList.toggle('_open-menu');

	if (buttonItems.classList.contains('_open-menu')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
});

const listContent = document.querySelector('.main-content__project-list');

itemButton.addEventListener('click', () => {
	const backgroundColorTransparent = getComputedStyle(
		document.documentElement).getPropertyValue(
			'--background-color-transparent');
	projectList.classList.add('_open-list');
	listContent.style.pointerEvents = 'all';
	listContent.style.backgroundColor = backgroundColorTransparent;

	if (projectList.classList.contains('_open-list')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
});

closeButton.addEventListener('click', () => {
	document.body.classList.remove('no-scroll');
	projectList.classList.remove('_open-list');
	listContent.style.pointerEvents = 'none';
	listContent.style.backgroundColor = 'transparent';
});
//* ----------------------------------------------------------------------------
const contentHidden = document.querySelector('.content-hidden');
const animatedElements = document.querySelector('.animated-elements');
const pageHeader = document.querySelector('.page__header');
const pageContent = document.querySelector('.page__main-content');
const boxContent = document.querySelector('.grid-box__content');
const contentButtons = document.querySelectorAll('.content-hidden__button');
const elementItems = document.querySelector('.content-hidden__items');

contentButtons.forEach(contentButton => {
	contentButton.addEventListener('click', () => {
		const activeElement = elementItems.querySelector('._active');
		activeElement.classList.remove('with-border');
		activeElement.classList.remove('_active');
		animatedElements.classList.add('_trasform-reverse');
		animatedElements.classList.remove('_content-open');
		pageHeader.classList.remove('_transform');
		pageContent.classList.remove('_hide');
		boxContent.classList.remove('_hide');
		document.body.classList.remove('no-scroll');
		contentHidden.classList.remove('_hide');
		hideButton.classList.remove('_hide');

		itemFooters.forEach(itemFooter => itemFooter.classList.remove('with-border'));

		setTimeout(() => {
			animatedElements.classList.remove('_trasform-reverse');
		}, 900);
	});
});

//* ----------------------------------------------------------------------------
// with-border
const tablinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const itemFooters = document.querySelectorAll('.content-hidden__item-footer');
const hideButton = document.querySelector('.project-buttons');

tablinks.forEach((tabLink, i) => {
	tabLink.addEventListener('click', () => {
		const tabContent = tabContents[i];
		const itemFooter = itemFooters[i];

		tablinks.forEach(link => link.classList.remove('_active'));
		tabContents.forEach(content => content.classList.remove('_active'));
		hideButton.classList.add('_hide');
		itemFooter.classList.add('with-border');
		document.body.classList.add('no-scroll');
		tabLink.classList.add('_active');
		tabContent.classList.add('_active');
		contentHidden.classList.add('_hide');
		animatedElements.classList.add('_content-open');
		pageHeader.classList.add('_transform');
		pageContent.classList.add('_hide');
		boxContent.classList.add('_hide');

	});
});
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
