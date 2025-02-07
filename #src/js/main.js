// import { AnimationLogo } from './assets/logoAnimation.js';
// AnimationLogo(); 
import loaded from './assets/preloader.js';

loaded('.preloader');
//* ----------------------------------------------------------------------------
import returnToSavedPosition from './modules/return-position.js';
import modalOpen from './modules/modalOpen.js';
import { timeLineHeaderItem, buttonShow, timeLineTextItem } from './animations/anime-js.jsx';
// import { animateTitles } from './animations/animations.jsx';
// const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// const offerContent = document.querySelector('.offer-container__content');

// if (!isMobile) {
// 	// LagTextFunction();
// 	if (offerContent) {
// 		animateTitles(
// 			'.offer-container__title',
// 			'.offer-container__title',
// 			'.offer-container__title',
// 			'=150',
// 			'=150',
// 		);
// 	}


// }

const textItem = document.querySelector('.performance__text');
if (textItem) {
	timeLineTextItem();
}
document.addEventListener('DOMContentLoaded', function () {
	let dateContainer = document.querySelector('.performance__date');
	if (!dateContainer) return;

	let now = new Date();
	let options = { month: 'short' }; // Сокращённое название месяца
	let day = now.getDate();
	let month = new Intl.DateTimeFormat('ru-RU', options).format(now);

	// Убираем точку и делаем первую букву заглавной
	month = month.replace('.', '').charAt(0).toUpperCase() + month.slice(1, -1);

	dateContainer.innerHTML = `<div class="day">${day}</div> <div class="data-wrapp"> <div class="month">${month}</div><div class="status"><p>доступен </br> для&nbsp;работы</p></div></div>`;
});

document.addEventListener('DOMContentLoaded', () => {
	returnToSavedPosition();
	buttonShow();
	modalOpen();

	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const slideServices = document.querySelector('.slide-services');

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

		// Инициализация логики timeLineHeaderItem (если нужно)
		// const timeLineHeaderItem = () => {
		// 	console.log('timeLineHeaderItem logic executed');
		// 	// Добавьте вашу логику здесь, если она присутствует
		// };

		// Выполнение timeLineHeaderItem при загрузке
		timeLineHeaderItem();

		// Добавление обработчика скроллинга
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			window.removeEventListener('scroll', handleScroll);
		});
	}

	if (!isMobile || innerWidth > 1024) {
		// tlFooterParallel();
		// tlFooterHorizontal();
		// refreshScrollTrigger();
	}

	if (slideServices) {
		// observerMutation();
	}
});
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------

// import dynamicAdaptive from './libraries/move-elements.js';
// dynamicAdaptive();
