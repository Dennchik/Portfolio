import { applyParallax, tlVertical, } from './animations/animations.jsx';
tlVertical();
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const parallax = document.querySelector('.parallax');
	if (!isMobile) {
		if (parallax) {
			applyParallax('.material-parallax');
		};
	}
});