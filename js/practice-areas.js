const contactDiv = document.querySelector('#contact-number .box .contact-content');
const prev = document.querySelector('#testimonials .fa-chevron-left');
const next = document.querySelector('#testimonials .fa-chevron-right');
const client = document.querySelector('#testimonials .passengers-container');
const navBtn = document.querySelectorAll('.dropdown-menu a');
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

function setNavStorage(e){
	localStorage.setItem('navbar-id', e.id);
	window.open('practice-areas.html');
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

function getNavbarId() {
    const categoryTag = document.querySelector('.case-detail');
	let storedData = localStorage.getItem('navbar-id');
	for(let i in praciceAreasObject){
    	if(storedData === praciceAreasObject[i].name){
    		categoryTag.innerHTML = praciceAreasObject[i].content;
    	}
    }
}

function categoryTarget() {
    const category = document.querySelectorAll('.category ul li');
    const categoryTag = document.querySelector('.case-detail');
    category.forEach(btn =>{
    	btn.addEventListener('click', ()=>{
    	    for(let i in praciceAreasObject){
    	    	if(btn.className === praciceAreasObject[i].name){
    	    		categoryTag.innerHTML = praciceAreasObject[i].content;
    	    	}
    	    }
    	})
    })
}


let praciceAreasObject = [
{
   name: 'accident',
   content: `<h1 class="case-type-title"> Accident Injury Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula, ac porta erat congue id. Craaugue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
            	<h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. C, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Accident Injury Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget. Quisque in dolor et quam dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis.  facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit,  vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est  eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet  venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus , ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'injuries',
   content: `<h1 class="case-type-title"> Catastrophic Injury Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula , ac porta erat congue id. Cras nisl neque, ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, egestas diam. Etiam vitae nunc augue. Nunc vel nulla. Fusce condimentum tellus augue, ut faucibus mauris id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. feugiat ligula ante, erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce  tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Catastrophic Injury Lawyers</h4>
            	<p> Mauris aliquam est eros , vel porta nisl varius. eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est  eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'liability',
   content: `<h1 class="case-type-title"> Premises Liability Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas ligula ante, ac porta erat congue id. nisl neque, laoreet ac placerat sed, interdum in ex. Cras leo, porta et ante in, convallis diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Premises Liability Lawyers</h4>
            	<p> Mauris aliquam est commodo efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis,  in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut  </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum  augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'sexual-victims',
   content: `<h1 class="case-type-title"> Sexual Assault Victims Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Sexual Assault Victims Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'drunk-driving',
   content: `<h1 class="case-type-title"> Drunk Driving Accident Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum adipiscing elit. et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, et ante in, convallis egestas diam. Etiam vitae nunc augu. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Drunk Driving Accident Lawyers</h4>
            	<p> Mauris aliquam nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, eget felis</li>
            	</ul>
            </div>`
 },
 {
   name: 'wrongful-death',
   content: `<h1 class="case-type-title"> Wrongful Death Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliqla ante, ac porta era id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Wrongful Death Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius eros nisi, elementum nec vulputate non, commodo at orci. nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'domestic-violence',
   content: `<h1 class="case-type-title"> Domestic Violence Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Domestic Violence Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'medical-malpractice',
   content: `<h1 class="case-type-title"> Medical Malpractice Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Medical Malpractice Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'defective-products',
   content: `<h1 class="case-type-title"> Defective Products Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
                <p> convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 
                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Defective Products Lawyers</h4>
                <p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'theft/fraud',
   content: `<h1 class="case-type-title"> Theft / Fraud Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Theft / Fraud Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'government-negligence',
   content: `<h1 class="case-type-title"> Government Negligence & Liability Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Government Negligence & Liability Lawyers</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
 {
   name: 'defective-medical',
   content: `<h1 class="case-type-title"> Defective Medical Devices And Drugs Lawyers</h1>
			<b></b>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.
            <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis.        
                <br/>
            <div>
                <h4>Get One Of The Nation’s Leading Law Firms On Your Side</h4>
            	<p>A lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                    convallis egestas diam. Etiam vitae nunc augue. Nunc vel interdum nulla. Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis. 

                Suspendisse et nisi eros. Vestibulum elementum ultricies aliquam. Maecenas feugiat ligula ante, ac porta erat congue id. Cras nisl neque, laoreet ac placerat sed, interdum in ex. Cras risus leo, porta et ante in, .</p>
            </div>
            <br/>
            <div>
            	<h4>Experience Spanning All Types Of Defective Medical Devices And Drugs</h4>
            	<p> Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat nisi eget ante ornare pellentesque. Quisque in dolor et quam eleifend dapibus quis eget velit. Fusce turpis ex, pellentesque in velit ut, blandit viverra odio. Vivamus vel felis quam. Donec tristique tincidunt urna et fringilla. </p>
            	<ul>
            		<li>placerat diam sed enim suscipit lobortis. Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>placerat Duis facilisis tortor elit, fringilla vehicula libero commodo tempus. Nam dignissim pulvinar</li>
            		<li>Mauris aliquam est commodo eros efficitur, vel porta nisl varius. Nullam eros nisi, elementum nec vulputate non, commodo at orci. Ut volutpat </li>
            		<li>Praesent nec pretium massa. Integer lobortis blandit dolor, et semper lacus pretium quis. Vestibulum aliquam lacus id diam pulvinar consectetur</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit.</li>
            		<li>Fusce condimentum tellus augue, ut faucibus mauris euismod id. Maecenas massa tellus, consequat non hendrerit sit amet, accumsan eget felis</li>
            		<li>Etiam non mollis ipsum. Donec sit amet lectus venenatis, ullamcorper tortor at, ultricies metus. Integer venenatis gravida hendrerit. Fusce faucibus fringilla velit.</li>
            	</ul>
            </div>`
 },
]

getNavbarId();
categoryTarget();
windowScroll();
divSize();
testimonial();
