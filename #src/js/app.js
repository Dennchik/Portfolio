import { applyParallax, tlVertical, tlRotate, cassieEvans } from './animations/animations.jsx';
tlVertical(); cassieEvans();

setTimeout(() => {
	tlRotate();
}, 2000);

// document.addEventListener('DOMContentLoaded', () => {
// 	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// 	const parallax = document.querySelector('.parallax');
// 	if (!isMobile) {
// 		if (parallax) {
// 			applyParallax('.material-parallax');
// 		};
// 	}
// });