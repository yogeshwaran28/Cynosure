let a = document.getElementsByClassName('toggle-button')[0];
let b = document.getElementsByClassName('link-cont')[0];
a.addEventListener("click", toggle);

function toggle() {
	b.classList.toggle('active');
}

const menuBtn =document.querySelector(".toggle-button");

const menu =document.querySelector(".navbar");

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



	 $(document).ready(function () {
 	 	$(window).scroll(function () {
 		var scroll = $(window).scrollTop();
  		if (scroll > 100) {
 	 			$(".menubar").css("background", "#fff")	 
 		}
 		else {
  	    	$(".menubar").css("background", "transparent")
 	 		}
	 	})
 	})
  

// counting days to new year
const countDownDateTime = new Date(2023, 1, 8, 12, 0, 0).getTime();
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");
// run this function every 1000 ms or 1 second
let x = setInterval(function () {
 const dateTimeNow = new Date().getTime();
 let difference = countDownDateTime - dateTimeNow;
 // calculating time and assigning values
 daysValue.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
 hoursValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 minutesValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60)) / (1000 * 60)
 );
 secondsValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
 if (difference < 0) {
 clearInterval(x);
 }
}, 1000);
