import {getResource} from '../services/request'

const showMoreStyles = (trigger, styles, wrapper) => {
	const cards = document.querySelectorAll(styles),
				btn = document.querySelector(trigger);

	// 1 variant
	// cards.forEach(card => {
	// 	card.classList.add('animated', 'fadeInUp');
	// });
	//
	// btn.addEventListener('click', () => {
	// 	cards.forEach(card => {
	// 		card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
	// 		card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
	// 	});
	// 	// btn.style.display = 'none';
	// 	btn.remove();
	// });

	// 2 variant
	btn.addEventListener('click', function () {
		getResource('assets/db.json')
			.then(res => createCards(res.styles))
			.catch(err => console.log(err))

		this.remove();
	});

	function createCards(response) {
		response.forEach(({src, title, link}) => {
			let card = document.createElement('div');

			card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

			card.innerHTML = `
				<div class="styles-block">
					<img src=${src} alt="image-style">
					<h4>${title}</h4>
					<a href=${link}>Подробнее</a>
				</div>
			`;

			document.querySelector(wrapper).appendChild(card);
		});
	};
}

export default showMoreStyles;
