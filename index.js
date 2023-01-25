let a = document.getElementsByClassName('toggle-button')[0];
let b = document.getElementsByClassName('link')[0];
 a.addEventListener("click",toggle);

function toggle() {
 	b.classList.toggle('active');
	 }


const menuBtn = 

document.querySelector(".toggle-button");


const menu = 

document.querySelector(".navbar");




let showMenu = false;


menuBtn.addEventListener("click", toggleMenu);


function toggleMenu() {

if (!showMenu) {

	menuBtn.classList.toggle("close");

	menu.classList.toggle("show");

	

	// Reset the menu state

	showMenu = true;

} else {

	menuBtn.classList.remove("close");

	menu.classList.remove("show");

	


	// Reset the menu state

	showMenu = false;

}

}


