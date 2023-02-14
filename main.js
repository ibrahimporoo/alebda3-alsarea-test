/* Coding Categories in Header */
const categoryBtn = document.querySelector('.category-btn');
const categories = document.querySelector('.categories');

categoryBtn.addEventListener('click', () => {
	categoryBtn.classList.toggle('on');
	categories.classList.toggle('on');
});

const menubar = document.querySelector('.menu-bar');
const menubarActivity = document.querySelector('header .sm-navbar');

menubar.addEventListener('click', () => {
	menubarActivity.classList.toggle('on');
});

/*  */ 

const dropdownHeaders = document.querySelectorAll('span.dropdown-header');
const innerHeaders = document.querySelectorAll('.inner-header');

dropdownHeaders.forEach(header => {
	header.addEventListener('click', () => {
		header.classList.toggle('on');
	});
});
innerHeaders.forEach(header => {
	header.addEventListener('click', () => {
		header.classList.toggle('on');
	})
});

/* Coding For Slides in the Landing */
const slides = document.querySelectorAll('.slider .slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const intervalTime = 4000;
let auto = true;
let slideInterval;

const nextSlide = () => {
	// Get Current Element
	const current = document.querySelector('.slider .slide.current');
	// Remove Current Element
	current.classList.remove('current');
	// Check if there is Next Element
	if(current.nextElementSibling.classList.contains('slide')) {
		current.nextElementSibling.classList.add('current');
	} else {
		slides[0].classList.add('current');
	};
	setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
	// Get Current Element
	const current = document.querySelector('.slider .slide.current');
	// Remove Current Element
	current.classList.remove('current');
	// Check if there is Prev Element
	if(current.previousElementSibling) {
		// Add current to the prev element
		current.previousElementSibling.classList.add('current');
	} else {
		// Add current to the last element
		slides[slides.length - 1].classList.add('current');
	};
	setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', () => {
	nextSlide();
	if(auto) {
		// Reset Interval
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	};
});

prev.addEventListener('click', () => {
	prevSlide();
	if(auto) {
		// Reset Interval
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	};
});

if(auto) {
	// Run next Slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}


