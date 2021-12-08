function userSurvey() {
	let question;
	let result = "";
	let askUser = true;
	for (let i = 1; true; i++) {
		question = prompt('Enter some word');
		result = `${result} ${question}`;
		if (i !== 0 && i % 3 === 0) {
			askUser = confirm('Are you want to continue?');
		}
		if (!askUser) {
			break;
		}
		console.log(result);
	}
}
userSurvey();