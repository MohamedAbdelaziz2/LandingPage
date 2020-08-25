/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const section1= document.querySelector('#sec1');
const section2= document.querySelector('#sec2');
const section3= document.querySelector('#sec3');
const section4= document.querySelector('#sec4');

const sec1= document.querySelector('#section1');
const sec2= document.querySelector('#section2');
const sec3= document.querySelector('#section3');
const sec4= document.querySelector('#section4');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//This function takes the section and get its coordinates on the page and then check if it's in the view port or not by returning true or false to the view result variable


const viewResult = function (section){
	const x=section.getBoundingClientRect();
	return(

	x.top >= 0 &&

	x.left >= 0 &&

	x.right <= (window.innerWidth || document.documentElement.clientWidth) &&

	x.bottom <= (window.innerHeight || document.documentElement.clientHeight))

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
/**
 * End Main Functions
 * Begin Events
 * 
*/
//when you click on the secction on the nav bar it scrolls you to the section in the body
for(let i=1;i<=4;i++)
{
	const x=document.getElementById('sec'+i);
	const y=document.querySelector('#section'+i);
	
	x.addEventListener('click',function(){

		y.scrollIntoView();
	}
		)
}





// Add class 'active' to section when near top of viewport
// Set sections as active
/* 
**This event listner is a (scroll type) listner to any scroll on the page and intiates it self at every point 
**It preforms the function on every point you scroll down the page 
**The function checks for all the sections if they are in the view port by the help of another function
**and if the section in the view port then the section in the nav bar color changes to orange (acive) and all other section to the samge color of nav bar
*/

document.addEventListener('scroll',function(){

	if(viewResult(sec1)==true){
		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(i==1)
				x.className='Active'
			else
				x.className='MyClass'
		}


		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(x.className=='Active')
				x.style.backgroundColor='orange'
			else
				x.style.backgroundColor='#333'
		}
	}
	else if(viewResult(sec2)==true){
		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(i==2)
				x.className='Active'
			else
				x.className='MyClass'
		}
		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(x.className=='Active')
				x.style.backgroundColor='orange'
			else
				x.style.backgroundColor='#333'
		}
	}
	else if(viewResult(sec3)==true){
		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(i==3)
				x.className='Active'
			else
				x.className='MyClass'
		}


		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(x.className=='Active')
				x.style.backgroundColor='orange'
			else
				x.style.backgroundColor='#333'
		}
	}
	else if(viewResult(sec4)==true){

		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(i==4)
				x.className='Active'
			else
				x.className='MyClass'
		}



		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
			if(x.className=='Active')
				x.style.backgroundColor='orange'
			else
				x.style.backgroundColor='#333'
		}
	}
	else{
		for(let i=1;i<=4;i++){
			x=document.getElementById('sec'+i);
				x.style.backgroundColor='#333'
		}

	}








}
)



// build the nav
document.addEventListener('DOMContentLoaded',function(){
	for(let i=1;i<=4;i++){

		const x=document.getElementById('sec'+i);
		const y=document.createTextNode("Section"+i);
		x.href='#Section'+i;
		x.appendChild(y);
	}
})


















