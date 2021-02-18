document.querySelectorAll('.tab-button').forEach(tabButton => {
	tabButton.onclick = () => {
		if(tabButton.classList.contains('active'))
			return;

		document.querySelector('.tab.active').classList.remove('active');
		document.querySelector('.tab-button.active').classList.remove('active');

		document.querySelector(`.tab.${tabButton.classList[1]}`).classList.add('active');
		tabButton.classList.add('active');
	}
});