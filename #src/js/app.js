import { animateTitles, tlVerticalOpacity, tlVerticalReverse, tlRotateIcon, cassieEvans, skewSetter, animateImage, tmBounce, iconWiggle } from './animations/animations.jsx';
import Waves from './animations/waves.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const iconContacts = document.querySelector('.icon-contacts');
	if (iconContacts) {
		iconContacts.addEventListener('mouseover', () => {
			iconWiggle('.icon-contacts');
		});
	} else {
		console.error('Элемент с классом .icon-contacts не найден!');
	}
});
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	cassieEvans();
	tlVerticalOpacity();

	if (!isMobile) {
		tmBounce(
			'.bonse-01',
			'.tr-row-01',
			'.tr-row-01',
			'=50',
			'=50',
		);

		tmBounce(
			'.bonse-02',
			'.triger-02',
			'.triger-02',
			'=50',
			'=50',
		);
		skewSetter();
		animateTitles(
			'.split-01',
			'.split-trigger-01',
			'.split-trigger-01',
			'=150',
			'=150',
		);
		animateTitles(
			'.split-02',
			'.split-trigger-02',
			'.split-trigger-02',
			'=150',
			'=150',
		);
		animateTitles(
			'.split-03',
			'.split-trigger-03',
			'.split-trigger-03',
			'=150',
			'=150',
		);
		animateTitles(
			'.split-04',
			'.split-trigger-04',
			'.split-trigger-04',
			'=150',
			'=150',
		);
		animateTitles(
			'.split-05',
			'.split-trigger-05',
			'.split-trigger-05',
			'=150',
			'=150',
		);
		animateImage(
			'.imgtr-01',
			'.imgtr-01',
			'.imgtr-01',
			'=50',
			'=50',
		);
		animateImage(
			'.imgtr-02',
			'.imgtr-02',
			'.imgtr-02',
			'=50',
			'=50',
		);
		animateImage(
			'.imgtr-03',
			'.imgtr-03',
			'.imgtr-03',
			'=50',
			'=50',
		);
		animateImage(
			'.imgtr-04',
			'.imgtr-04',
			'.imgtr-04',
			'=50',
			'=50',
		);
		animateImage(
			'.imgtr-05',
			'.imgtr-05',
			'.imgtr-05',
			'=50',
			'=50',
		);
	}


	setTimeout(() => {
		tlRotateIcon();
	}, 2000);
	//* -------------------------- Canvas Animation ------------------------------
	// Ищем элемент с атрибутом [data-page]
	const pageElement = document.body.querySelector('[data-page]');

	// Получаем значение data-page, если элемент найден
	const currentPage = pageElement ? pageElement.getAttribute(
		'data-page') : null;

	if (currentPage === 'index' && !isMobile) {
		const waves = new Waves('#holder', { waves: 2, width: 400, });
		waves.animate();
		tlVerticalReverse();
	}
});
