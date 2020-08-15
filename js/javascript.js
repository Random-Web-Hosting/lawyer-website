const prev = document.querySelector('#testimonials .fa-chevron-left');
const next = document.querySelector('#testimonials .fa-chevron-right');
const client = document.querySelector('#testimonials .passengers-container');
const serviceDiv = document.querySelectorAll('#services .row .inner');
const modalBody = document.querySelector('#services .modal-body');
const modalTitle = document.querySelector('#services .modal-title');
const contactDiv = document.querySelector('#contact-number .box .contact-content');
const extraDiv = document.querySelector('#extra-section .row .box .title-wrap');
let count = 0;


function windowScroll() {
	document.addEventListener('scroll', ()=>{
		if(window.pageYOffset <= 596){
			document.querySelector('.navbar').style.position = 'relative';
		}else{
			document.querySelector('.navbar').style.position = 'fixed';
		}
	})
}

function divSize(){
	let contactDivOffset = contactDiv.offsetHeight / 2;
	let extraDivOffset = extraDiv.offsetHeight / 2;
	contactDiv.style.transform = `translateY(-${contactDivOffset}px)`;
	extraDiv.style.transform = `translateY(-${extraDivOffset}px)`;
}

function modal() {
	serviceDiv.forEach(box =>{
		box.addEventListener('click', ()=>{
			modalTitle.textContent = box.firstElementChild.textContent.toUpperCase();
			modalBody.textContent = box.lastElementChild.textContent;
		})
	})
}

function testimonial() {
	prev.addEventListener('click', ()=>{
		count--;
		if(count === -1){
	       count = 2;
		   client.style.left = '-200%';
		}
		client.style.left = '-100' * count + '%';
	})

	next.addEventListener('click', ()=>{
		count++;
		if(count === 3){
	       count = 0;
		   client.style.left = '0';
		}
		client.style.left = '-100' * count + '%';
	})
}

function setNavStorage(e){
	localStorage.setItem('navbar-id', e.id);
	window.open('practice-areas.html')
}

windowScroll();
divSize();
modal();
testimonial();