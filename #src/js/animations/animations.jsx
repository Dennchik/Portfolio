import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';

import { CustomEase } from 'gsap/CustomEase';
import { CustomBounce } from 'gsap/CustomBounce';
//* ------------- Регистрация - ScrollTrigger, ScrollSmoother ------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Observer, CustomEase, CustomBounce);

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
export function tlVerticalReverse() {
	gsap.to('.vertical-reverse', {
		opacity: 0.3, // Появление элемента
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
//* ------------ Плавное появление заголовков (Анимация Titles) ----------------
export function animateTitles(element, trigger, endTrigger, start, end) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}`,
			endTrigger: endTrigger,
			end: `top bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		y: 300,
		duration: 0.8, // Продолжительность смещения
		ease: 'power1.out', // Мягкая анимация
	});

	// Анимация для прозрачности с большей продолжительностью
	timeline.from(element, {
		opacity: 0,
		duration: 1.2, // Увеличиваем продолжительность для opacity
		ease: 'power1.out', // Мягкая анимация
	},
		'<',
	); // "<" синхронизирует начало обеих анимаций
}
//* ------------------------- Анимация: Parallax -------------------------------
export function cassieEvans() {
	smoother.effects('.parallax__image-cont', {
		speed: () => gsap.utils.random(0.55, 0.85, 0.05)
	});

	gsap.to('.parallax__anime-swipe', {
		yPercent: 300,
		delay: 0.2,
		duration: 3,
		stagger: {
			from: 'random',
			each: 0.1
		},
		ease: 'sine.out'
	});

	gsap.to('.parallax__image-cont img', {
		scale: 1.5,
		xPercent: 20,
		scrollTrigger: {
			trigger: '.parallax',
			start: 'top top',
			end: '+=3000px',
			scrub: true
		}
	});
}
//* ---------------------- Анимация: lag - колонок -----------------------------
export function skewSetter() {
	// Создаем быстрый сеттер для свойства skewY.
	const setSkew = gsap.quickTo('.grid-box__item', 'skewY');
	// Ограничиваем значение наклона от -20 до 20 градусов.
	const clampSkew = gsap.utils.clamp(-5, 5);
	// Получаем экземпляр ScrollSmoother.
	const smootherInstance = ScrollSmoother.get();

	// Используем gsap.ticker для обновления на каждом кадре.
	gsap.ticker.add(() => {
		// Получаем текущую скорость прокрутки и вычисляем наклон.
		const velocity = smootherInstance.getVelocity();
		setSkew(clampSkew(velocity / -50));
	});

	if (window.innerWidth > 490) {
		smoother.effects('.lag-1', { lag: 2, speed: 1 });
		smoother.effects('.lag-2', { lag: 1.5, speed: 1.2 });
		smoother.effects('.col-1', { lag: 1.5, speed: 0.8 });
		smoother.effects('.col-2', { lag: 1.5, speed: 1 });
	}
}
//* ------------------- Анимация: Появление картинок ---------------------------
export function animateImage(element, trigger, endTrigger, start, end) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}`,
			endTrigger: endTrigger,
			end: `top bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true, 
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		y: 300,
		duration: 0.7, // Продолжительность смещения
		ease: 'slow(0.1,2,true)',
		// ease: 'expoScale(10,2.5,none)', 
	});
}


// export function myBounce() {
// 	//Create a custom bounce ease:
// 	CustomBounce.create('myBounce', {
// 		strength: 0.6,
// 		squash: 3,
// 		squashID: 'myBounce-squash',
// 	});
// 	//do the bounce by affecting the "y" property.
// 	gsap.from('.class-bonse', {
// 		duration: 2, y: 200, ease: 'myBounce'
// 	});

// 	//and do the squash/stretch at the same time:
// 	gsap.to('.class', {
// 		duration: 2,
// 		scaleX: 1.4,
// 		scaleY: 0.6,
// 		ease: 'myBounce-squash',
// 		transformOrigin: 'center bottom',
// 	}); 
// }
export function myBounce(element, trigger, endTrigger, start, end) {

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}`,
			endTrigger: endTrigger,
			end: `top bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true, 
		},
	});
	timeline.from(element, {
		// y: 300,
		duration: 1.2, // Продолжительность смещения
		scaleX: 0.7,
		scaleY: 0.7,
		opacity: 0,

		transformOrigin: 'center bottom',

		ease: CustomBounce.create('myBounce', {
			endAtStart: false,
			strength: 0.1,
			squash: 1,
			squashID: 'myBounce-squash'
		}),
		// ease: 'expoScale(10,2.5,none)', 
	});
	//do the bounce by affecting the "y" property.
	// gsap.from('.class-bonse', {
	// 	duration: 2, y: 200, ease: 'myBounce'
	// });

	//and do the squash/stretch at the same time:

}

