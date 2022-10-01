//? Definicion
const $hours = document.querySelector('#hours');
const $minutes = document.querySelector('#minutes');
const $seconds = document.querySelector('#seconds');
const $menuBarSvg = document.querySelector('#nav-bar');

//! Functions
//* Nav bar
const NavBar = () => {
	const $nav = document.querySelector('nav');
	$nav.classList.toggle('active-height');
	$nav.classList.toggle('hide-height');
};

//* Clock
const time = () => {
	//* Date
	let dateTime = new Date();
	let hour = dateTime.getHours();
	let minute = String(dateTime.getMinutes()).padStart(2, '0');
	let second = String(dateTime.getSeconds()).padStart(2, '0');
	let $session = document.querySelector('#session');
	let $mainBg = document.querySelector('main');

	//* Validate if its am or pm
	if (hour >= 12) {
		$session.textContent = 'PM';
	} else {
		$session.textContent = 'AM';
	}

	if (hour >= 6 && hour <= 10) {
		$mainBg.classList.add('morning-bg');
		$mainBg.classList.remove('noon-bg');
		$mainBg.classList.remove('afternoon-bg');
		$mainBg.classList.remove('night-bg');
	} else if (hour >= 11 && hour <= 15) {
		$mainBg.classList.add('noon-bg');
		$mainBg.classList.remove('morning-bg');
		$mainBg.classList.remove('afternoon-bg');
		$mainBg.classList.remove('night-bg');
	} else if (hour >= 16 && hour <= 18) {
		$mainBg.classList.add('afternoon-bg');
		$mainBg.classList.remove('morning-bg');
		$mainBg.classList.remove('noon-bg');
		$mainBg.classList.remove('night-bg');
	} else {
		$mainBg.classList.add('night-bg');
		$mainBg.classList.remove('morning-bg');
		$mainBg.classList.remove('noon-bg');
		$mainBg.classList.remove('afternoon-bg');
	}

	//* Convert normal time
	if (hour > 12) {
		hour = hour - 12;
	}

	//* Show date
	$hours.textContent = hour;
	$minutes.textContent = minute;
	$seconds.textContent = second;

	//* Interval each second
	setInterval(time, 1000);
};
time();

//! Listeners
//* Nav bar
$menuBarSvg.addEventListener('click', NavBar);
