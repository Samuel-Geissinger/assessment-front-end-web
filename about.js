console.log("hello world");


const handleSubmit = evt => {
	evt.preventDefault();
	alert("You have successfully submitted a form.");
	console.log('form submit');
}
// function handleSubmit(evt) {

// }


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	const compliment  = document.querySelector('ul').children;
	const num = Math.random() * compliment.length | 0;
	for (let i = 0; i < compliment.length; i++) {
		const element = compliment[i];
		if (num === i) {
			alert(element.textContent)
		}
	}
})