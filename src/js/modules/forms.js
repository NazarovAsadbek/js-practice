const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]');

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что то пошло не так',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});
		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(i => {
			i.value = '';
		});
	};

	form.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			item.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				item.style.display = 'none';
			}, 400)

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading
			statusMessage.appendChild(textMessage)

			const formData = new FormData(item);
			console.log('formData', formData)
			postData('assets/server.php', formData)
				.then(res => {
					console.log('res', res)
					statusMessage.textContent = message.success
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000)
				})
		})
	})
};

export default forms;
