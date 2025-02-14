import { animateTitles, tlVerticalOpacity, tlVerticalReverse, tlRotateIcon, skewSetter, animateImage, tmBounce, cassieEvans } from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	cassieEvans();
	tlVerticalOpacity();

	if (!isMobile) {
		// tlVerticalReverse();
		skewSetter();
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
});
