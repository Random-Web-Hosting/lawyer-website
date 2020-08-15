const contactDiv = document.querySelector('#contact-number .box .contact-content');
const prev = document.querySelector('#testimonials .fa-chevron-left');
const next = document.querySelector('#testimonials .fa-chevron-right');
const client = document.querySelector('#testimonials .passengers-container');
let count = 0;


function windowScroll() {
	document.addEventListener('scroll', ()=>{
		if(window.pageYOffset <= 0){
			document.querySelector('.navbar').style.position = 'relative';
		}else{
			document.querySelector('.navbar').style.position = 'fixed';
		}
	})
}
function divSize(){
	let contactDivOffset = contactDiv.offsetHeight / 2;
	contactDiv.style.transform = `translateY(-${contactDivOffset}px)`;
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
function getStorage(){
	const attorneyName = localStorage.getItem('attorneyName');
	const title = document.querySelector('#attorney-detail .title');
	const occupation = document.querySelector('#attorney-detail .occupation');
	const upperDescription = document.querySelector('#attorney-detail .upperDescription');
	const upperList = document.querySelector('#attorney-detail .upperList');
	const bottomDescription = document.querySelector('#attorney-detail .bottomDescription');
	const bottomList = document.querySelector('#attorney-detail .bottomList');
	const img = document.querySelector('#attorney-detail img');

    attorneyObject.forEach(attorney =>{
    	if(attorney.name === attorneyName){
    		img.src = attorney.imgSrc;
    		title.textContent = attorney.title;
    		occupation.textContent = attorney.occupation;
    		upperDescription.textContent = attorney.upperDescription;
    		bottomDescription.textContent = attorney.bottomDescription;
    		upperList.innerHTML = attorney.upperList;
    		bottomList.innerHTML = attorney.bottomList;
    	}
    })
}


let attorneyObject = [
{
   name: 'attorney-one',
   title: 'Joseph Kennedy',
   occupation: 'Personal Injury',
   imgSrc: 'images/attorney-one.jpg',
   upperDescription: `Joseph is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-two',
   title: 'Jodie Riley',
   occupation: 'Estate Planning',
   imgSrc: 'images/attorney-two.jpg',
   upperDescription: `Jodie is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-three',
   title: 'Amber Wallace',
   occupation: 'Crime Lawyer',
   imgSrc: 'images/attorney-three.jpg',
   upperDescription: `Amber is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-four',
   title: 'Michael Hall',
   occupation: 'Immigration Lawyer',
   imgSrc: 'images/attorney-four.jpg',
   upperDescription: `Michael is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-five',
   title: 'Corbin Dickson',
   occupation: 'Corporate Lawyer',
   imgSrc: 'images/attorney-five.jpg',
   upperDescription: `Corbin is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-six',
   title: 'Cristopher Stewart',
   occupation: 'Employment Lawyer',
   imgSrc: 'images/attorney-six.jpg',
   upperDescription: `Cristopher is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-seven',
   title: 'Teagan Nolan',
   occupation: 'Tax Lawyer',
   imgSrc: 'images/attorney-seven.jpg',
   upperDescription: `Teagan is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-eight',
   title: 'Andrew Berry',
   occupation: 'Family Lawyer',
   imgSrc: 'images/attorney-eight.jpg',
   upperDescription: `Andrew is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-nine',
   title: 'Noah Thomas',
   occupation: 'Workers Compensation Lawyer',
   imgSrc: 'images/attorney-nine.jpg',
   upperDescription: `Noah is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-ten',
   title: 'David Grant',
   occupation: 'Contract Lawyer ',
   imgSrc: 'images/attorney-ten.jpg',
   upperDescription: `David is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-eleven',
   title: 'Robert Harper',
   occupation: 'Civil Litigation Lawyer',
   imgSrc: 'images/attorney-eleven.jpg',
   upperDescription: `Robert is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
{
   name: 'attorney-twelve',
   title: 'Megan Edwards',
   occupation: 'General Practice Lawyer',
   imgSrc: 'images/attorney-twelve.jpg',
   upperDescription: `Megan is experienced in a wide variety of case types including traumatic brain injury, paralysis, workplace accidents, vehicular and bicycle negligence, medical malpractice, product liability, government liability, aviation disasters, and wrongful death claims.`,
   upperList: `<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, ac blandit nibh purus in arcu. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus.</li>`,
   bottomDescription: `His outstanding skills and presence in the courtroom have made him one of the most highly respected trial lawyers in California:`,
   bottomList: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui, 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui,</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. Donec sed dui eget metus accumsan efficitur. Ut egestas, urna vitae pretium mollis, lectus sem maximus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ut ipsum eu volutpat. Donec non vehicula quam, quis elementum leo. Quisque ac enim finibus, fermentum lectus quis, tempor ligula. </li>
				<li>Maecenas vitae condimentum neque. Fusce diam lorem, scelerisque quis turpis sed, mattis bibendum tellus. Mauris ultricies odio non tortor placerat consectetur placerat in metus. Donec egestas ante dapibus, bibendum elit congue, varius velit. Vivamus vestibulum dolor quis arcu sagittis, vitae tempus velit fringilla.</li>
				<li>Sed feugiat arcu et leo dignissim, at efficitur urna semper. Sed eu ex at lorem elementum aliquam. Pellentesque eget convallis augue, non eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis pretium suscipit. Fusce volutpat laoreet eros, nec accumsan sem vestibulum sed. Ut eget erat in odio iaculis tempor sed ut diam.</li>`,
},
]


function setNavStorage(e){
	localStorage.setItem('navbar-id', e.id);
	window.open('practice-areas.html');
}

getStorage();
windowScroll();
divSize();
testimonial();