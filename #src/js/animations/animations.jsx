import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';
//* ------------- Регистрация - ScrollTrigger, ScrollSmoother ------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Observer);

//* --------------------- Конфигурация - ScrollTrigger -------------------------
ScrollTrigger.normalizeScroll(false);
ScrollTrigger.config({ ignoreMobileResize: true });

//* ----------------------------------------------------------------------------
export const smoother = ScrollSmoother.create({
	wrapper: '#wrapper',
	content: '#content',
	speed: 1.5,
	smooth: 1.5,
	effects: true,
	smoothTouch: 0.1,
});
//* ----------------------- Создание ScrollTrigger -----------------------------
export function refreshScrollTrigger() {
	return ScrollTrigger.refresh();
}

export function LagTextFunction() {
	const smoother = ScrollSmoother.get();

	if (window.innerWidth > 490) {
		smoother.effects('.lag-1', { lag: 2, speed: 1 });
		smoother.effects('.lag-2', { lag: 2, speed: 1.2 });
		smoother.effects('.col-1', { lag: 1.5, speed: 0.8 });
		smoother.effects('.col-2', { lag: 1.5, speed: 1 });
	}
}

export function applyParallax(element) {
	const smoother = ScrollSmoother.get();
	smoother.effects(element, {
		speed: () => 0.5
	});
}

//* ----------------------------------------------------------------------------
export function initSectionTriggerMove(trigger, targets) {
	ScrollTrigger.create({
		trigger: trigger,
		/* Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера*/
		start: 'top center',
		endTrigger: trigger, //* Конец события - конец документа
		/*Конец событие когда верхняя граница элемента 1 достигнет верха окна браузера*/
		end: 'bottom center',
		toggleClass: {
			targets: targets,
			className: '_active'
		},
		// markers: true
	});
}
//* ----------------------------------------------------------------------------
export function tlRotate() {
	gsap.to('._rotate-el-01', {
		rotate: -720, // постоянное вращение
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '._rotate-el-01',
			start: 'top bottom', // Начало анимации, когда `.trigger` выше нижней границы экрана
			end: 'top top', // Конец анимации, когда `.trigger` выше нижней границы экрана
			scrub: true, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	}), gsap.to('._rotate-el-02', {
		rotate: -720, // постоянное вращение
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '._rotate-el-02',
			start: 'top bottom', // Начало анимации, когда `.trigger` выше нижней границы экрана
			end: 'top top', // Конец анимации, когда `.trigger` выше нижней границы экрана
			scrub: true, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	});
}
//* ----------------------------------------------------------------------------
export function tlVertical() {
	gsap.to('.el-4', {
		opacity: 0, // Исчезает полностью
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '.performance',
			start: 'top top', // Начало анимации, когда `.performance` на 80% вниз от верхней границы экрана
			end: 'bottom top', // Конец анимации, когда `.performance` полностью ушел вверх
			scrub: 2, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	});
}
//* ----------------------------------------------------------------------------
export function tlFooterHorizontal() {
	const tlHorizontal = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});

	tlHorizontal.from(
		'.el-4',
		{
			y: 150,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=0.5',
	);

	tlHorizontal.from(
		'.el-5',
		{
			y: 350,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);

	tlHorizontal.from(
		'.contacts__items',
		{
			x: 450,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlFooterParallel() {
	const tlParallel = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom+=600',
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});
	tlParallel.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});

	tlParallel.from(
		'.el-2',
		{
			// x: window.innerWidth <= 680 ? 350 : 0,
			y: window.innerWidth > 680 ? 150 : 0,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);

	tlParallel.from(
		'.el-3',
		{
			x: window.innerWidth <= 680 ? -350 : window.innerWidth > 680 ? 350 : 0,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlServices1() {
	const endValue =
		window.innerWidth >= 490 ? 'bottom bottom+=70' : 'bottom bottom+=150';
	const tlServices1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__content',
			start: 'top bottom-=50',
			endTrigger: '.offer-container__content', // end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});
	tlServices1.from('.sr-1', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});
	tlServices1.from(
		'.sr-2',
		{
			x: 150,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlServices2() {
	const endValue = window.innerWidth >= 490 ? 'bottom bottom+=70' : 'bottom bottom+=150';
	const tlServices2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__content',
			start: 'top bottom-=300',
			endTrigger: '.offer-container__content', // end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse',
			markers: true,
		},
	});
	tlServices2.from('.sr-3', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.in',
	});
	tlServices2.from('.sr-4', {
		x: 150,
		duration: 1,
		opacity: 0,
		ease: 'sine.in',
	},
		'-=1',
	);
}
//* ------------ Плавное появление заголовков (Анимация Titles) ----------------
export function animateTitles(element, trigger, endTrigger, start, end) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: `top-=100 bottom-${start}`,
			endTrigger: endTrigger,
			end: `top-=100 bottom-${end}`,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		y: 100,
		duration: 0.8, // Продолжительность смещения
		ease: 'power1.out', // Мягкая анимация
	});

	// Анимация для прозрачности с большей продолжительностью
	timeline.from(
		element,
		{
			opacity: 0,
			duration: 1.2, // Увеличиваем продолжительность для opacity
			ease: 'power1.out', // Мягкая анимация
		},
		'< ',
	); // "<" синхронизирует начало обеих анимаций
}
//* ----------------------- Создание ScrollSmoother ----------------------------
// export function cassieEvans() {
// 	const smoother = ScrollSmoother.get();
// 	smoother.effects('.parallax__image', {
// 		speed: () => gsap.utils.random(0.55, 0.85, 0.05)
// 	});

// 	gsap.to('.anim-swipe', {
// 		yPercent: 300,
// 		delay: 0.2,
// 		duration: 3,
// 		stagger: {
// 			from: 'random',
// 			each: 0.1
// 		},
// 		ease: 'sine.out'
// 	});

// 	gsap.to('.parallax__image img', {
// 		scale: 1.5,
// 		xPercent: 20,
// 		scrollTrigger: {
// 			trigger: '.parallax',
// 			start: 'top top',
// 			end: '+=3000px',
// 			scrub: true
// 		}
// 	});
// }

export function cassieEvans() {
	smoother.effects('.hero__image-cont', {
		speed: () => gsap.utils.random(0.55, 0.85, 0.05)
	});

	gsap.to('.anim-swipe', {
		yPercent: 300,
		delay: 0.2,
		duration: 3,
		stagger: {
			from: 'random',
			each: 0.1
		},
		ease: 'sine.out'
	});

	gsap.to('.hero__image-cont img', {
		scale: 1.5,
		xPercent: 20,
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: '+=3000px',
			scrub: true
		}
	});
}




