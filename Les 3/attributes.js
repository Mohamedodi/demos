const getAttributesButton = document.getElementById('getAttributesButton');
const removeAttributesButton = document.getElementById('removeAttributesButton');
const setAttributesButton = document.getElementById('setAttributesButton');
const hasAttributesButton = document.getElementById('hasAttributesButton');
const img = document.getElementById('image');
const googleLink = document.getElementById('google');


getAttributesButton.addEventListener('click', () => {
	const src = img.getAttribute('src');
	console.log(src);
	const alt = img.getAttribute('alt');
	console.log(alt);
	const url = googleLink.getAttribute('href');
	console.log(url);
});

removeAttributesButton.addEventListener('click', () => {
	img.removeAttribute('alt');

});

setAttributesButton.addEventListener('click', ()=> {
	img.setAttribute('src', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg');
	img.setAttribute('alt', 'new image');
	googleLink.setAttribute('href', 'https://yahoo.com');
});

hasAttributesButton.addEventListener('click', ()=> {
	console.log(`image contains src: ${img.hasAttribute('src')}`);
	console.log(`image contains alt: ${img.hasAttribute('alt')}`);
  
	console.log(`googlelink contains href: ${googleLink.hasAttribute('href')}`);
});