// Name field
document.getElementById('name').addEventListener('blur', () => {
	const nameField = document.getElementById('name');
	const regEx = /^([a-zA-Z]\s?){2,20}$/;

	if(regEx.test(nameField.value)) {
		nameField.classList.remove('is-invalid');
	} else {
		nameField.classList.add('is-invalid');
	}
});

// Zip code
document.getElementById('zip').addEventListener('blur', () => {
	const zipField = document.getElementById('zip');
	const regEx = /^([0-9]){3}(\s?){1}([0-9]){3}$/;

	if(regEx.test(zipField.value)) {
		zipField.classList.remove('is-invalid');
	} else {
		zipField.classList.add('is-invalid');
	}
});

// Email
document.getElementById('email').addEventListener('blur', () => {
	const mailField = document.getElementById('email');
	const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]){2,63}$/;

	if(regEx.test(mailField.value)) {
		mailField.classList.remove('is-invalid');
	} else {
		mailField.classList.add('is-invalid');
	}
});

// Phone
document.getElementById('phone').addEventListener('blur', () => {
	const phoneField = document.getElementById('phone');
	/* The regex is based on most Indian and international numbers. It will work for numbers like:
	 *	+91-9830959521 or +91 9830959521 or 091 9830959521 or 0919830959521 or 
	 *  (033) 2532-2663 or 03325322663 or 033-2532-2663
	 *  +1-7813760580 or +1 7813760580
	**/
	const regEx = /^(\(?\+?[0-9]{1,3}\)?)?(\s?|\-?)([0-9]){4}(\s?|\-?)([0-9]){4,6}$/;

	if(regEx.test(phoneField.value)) {
		phoneField.classList.remove('is-invalid');
	} else {
		phoneField.classList.add('is-invalid');
	}
});
