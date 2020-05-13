window.addEventListener('DOMContentLoaded', () => {
	initFlowium();
});

function initFlowium() {
	initHeader();
}

function initHeader() {
	const mainHeaderEl = document.querySelector('.main-header');
	const hamburgerBtnEl = document.querySelector('.btn-hamburger');

	hamburgerBtnEl.addEventListener('click', () =>
		mainHeaderEl.classList.toggle('menu-active')
	);
}
