// window.onload = function () {
// 	window.scrollTo(0, 0);
// };
gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-list');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', sizeNav);

function sizeNav() {
	if (window.scrollY > nav.offsetHeight - 30) {
		nav.classList.add('active');
		logo.style.width = '150px';
		logo.classList.add('active');
	} else {
		nav.classList.remove('active');
		logo.style.width = '220px';
	}
}

//~ mobile nav
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//*~~~* GSAP REUSABLES;
gsap.to('.nav a', {
	x: 0,
	duration: 0.5,
	ease: 'power2.out',
	opacity: 1,
	stagger: 0.08,
});
const btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
	let btn = btns[i];

	gsap.to(btn, {
		scrollTrigger: {
			trigger: btn,
		},
		start: '20px 80%',
		duration: 0.1,
		fontSize: 16,
	});
}
// let tlHome = gsap.timeline({
// 	defaults: {
// 		opacity: 1,
// 		y: 0,
// 		duration: 0.5,
// 		ease: 'power2.out',
// 	},
// });
// tl.to('.nav', {});
// tlHome
// .to(
// 	'.header-container',
// 	{
// 		delay: 1.2,
// 	},
// 	'-=1.5'
// )
// 	.to('.nav a', { x: 0 })
// 	.to('.header-logo', {
// 		'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
// 		duration: 1.2,
// 	})
// 	.to(
// 		'.header-text',
// 		{
// 			duration: 1,
// 			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
// 		},
// 		'-=1'
// 	);

// * ABOUT
let tlAbout = gsap.timeline({
	defaults: {
		ease: 'power2.out',
		opacity: 1,
		duration: 0.5,
	},
});
tlAbout
	.from('.header', {
		x: 200,
		opacity: 0,
		duration: 1,
	})
	.to(
		'.head-clip',
		{
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: 0.8,
		},
		'-=.5'
	)
	.from(
		'.top p',
		{
			y: 200,
			opacity: 0,
			duration: 0.8,
			stagger: 0.14,
		},
		'-=.4'
	)
	.to('.about-line:first-of-type', {
		x: -2000,
		duration: 2,
	})
	.to(
		'.about-line:last-of-type',
		{
			x: 2000,
			duration: 2,
		},
		'-=1.5'
	)
	.to(
		'.row',
		{
			duration: 2.5,
		},
		'-=4'
	)
	.to(
		'.column',
		{
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: 0.4,
			stagger: 0.4,
			ease: 'none',
		},
		'-=2.5'
	);

const slideUp = gsap.utils.toArray('.slide-up');
for (let i = 0; i < slideUp.length; i++) {
	let slide = slideUp[i];

	gsap.from(slide, {
		scrollTrigger: {
			trigger: slide,
			start: '10px 90%',
		},
		y: 100,
		opacity: 0,
		stagger: 0.5,
		duration: 0.8,
	});
}

//* WHY WORK WITH LNC
let tlWhy = gsap.timeline({
	defaults: {
		ease: 'power3.out',
		opacity: 1,
		duration: 1,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
	},
});
tlWhy
	.to('.img-box', {
		delay: 1,
	})
	.to(
		'.block',
		{
			x: 1,
			delay: 0.2,
		},
		'-=1.3'
	);
// .to(
// 	'.box-container p:first-child',
// 	{
// 		y: 0,
// 	},
// 	'-=1.3'
// );

const smallMedia = window.matchMedia('(max-width: 955px)');

gsap.to('.block', {
	scrollTrigger: {
		trigger: '.block',
		start: '10px 90%',
	},
	opacity: 1,
	duration: 1.3,
	x: 1,
	'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
});

const tlDif = gsap.timeline({
	scrollTrigger: {
		trigger: '#different',
		start: '20px 80%',
	},
});
tlDif
	.to('.fade', {
		opacity: 1,
		duration: 2,
	})
	.to(
		'.clip-right',
		{
			duration: 0.5,
			stagger: 0.4,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		},
		'-=.5'
	);

// ! ========= ERASE ==========
// gsap.from('.hire-header', {
// 	scrollTrigger: {
// 		trigger: '.hire-header',
// 		start: '20px 80%',
// 	},
// 	opacity: 0,
// 	x: 150,
// 	duration: 1.2,
// 	scrub: true,
// 	// ease: 'elastic',
// });
// const blocks = gsap.utils.toArray('.block');
// blocks.forEach((block) => {
// 	gsap.to(block, {
// 		scrollTrigger: {
// 			trigger: block,
// 			start: '10px 90%',
// 		},
// 		x: 0,
// 		opacity: 1,
// 		duration: 1.3,
// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
// 	});
// });

// // * LARGER SCREENS FOR .BOX ELEMENTS
// const largeMedia = window.matchMedia('(min-width: 956px)');
// if (largeMedia.matches) {
// 	gsap.to('.box', {
// 		scrollTrigger: {
// 			trigger: '.box',
// 			start: '10px 90%',
// 		},
// 		delay: 0.4,
// 		stagger: 0.5,
// 		duration: 0.5,
// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
// 	});
// }
// if (largeMedia.matches) {
// 	gsap.to('.box h4', {
// 		scrollTrigger: {
// 			trigger: '.box h4',
// 			start: '10px 90%',
// 		},
// 		y: 0,
// 		opacity: 1,
// 		delay: 0.4,
// 		stagger: 0.5,
// 		duration: 0.5,
// 	});
// }
// if (largeMedia.matches) {
// 	gsap.to(
// 		'.box p',
// 		{
// 			scrollTrigger: {
// 				trigger: '.box p',
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.5,
// 			stagger: 0.5,
// 			duration: 0.5,
// 		},
// 		'-=.3'
// 	);
// }
// // * SMALLER SCREENS FOR .BOX ELEMENTS
// const smallMedia = window.matchMedia('(max-width: 955px)');

// const boxes = gsap.utils.toArray('.box');
// const boxHeaders = gsap.utils.toArray('.box h4');
// const boxPs = gsap.utils.toArray('.box p');

// for (let i = 0; i < boxes.length; i++) {
// 	let box = boxes[i];

// 	if (smallMedia.matches) {
// 		gsap.to(box, {
// 			scrollTrigger: {
// 				trigger: box,
// 				start: '10px 90%',
// 			},
// 			delay: 0.4,
// 			// stagger: 0.5,
// 			duration: 0.8,
// 			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
// 		});
// 	}
// }
// for (let i = 0; i < boxHeaders.length; i++) {
// 	let boxHeader = boxHeaders[i];

// 	if (smallMedia.matches) {
// 		gsap.to(boxHeader, {
// 			scrollTrigger: {
// 				trigger: boxHeader,
// 				start: '10px 90%',
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.4,
// 			// stagger: 0.5,
// 			duration: 0.5,
// 		});
// 	}
// }
// for (let i = 0; i < boxPs.length; i++) {
// 	let boxP = boxPs[i];

// 	if (smallMedia.matches) {
// 		gsap.to(boxP, {
// 			scrollTrigger: {
// 				trigger: boxP,
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.5,
// 			stagger: 0.6,
// 			duration: 0.5,
// 		});
// 	}
// }

// const servicesTL = gsap.timeline({
// 	ease: 'power1.out',
// 	scrollTrigger: {
// 		trigger: '#services',
// 		start: 'top center',
// 		duration: 0.5,
// 		toggleActions: 'play none play none',
// 	},
// });
// servicesTL
// 	.from('.services-flag-container', { opacity: 0, x: 1200 })
// 	.from('.video-container', {
// 		x: 1200,
// 		rotate: 720,
// 		width: -500,
// 		duration: 1,
// 	})
// 	.from('.video-container .video', { height: 50, delay: 1.2 })
// 	.from('.services-text', { opacity: 0, y: 500 })
// 	.from('.services-text p', { opacity: 0, duration: 0.8 });
