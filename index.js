let a = document.getElementsByClassName('toggle-button')[0];
let b = document.getElementsByClassName('link')[0];

a.addEventListener("click",toggle);

function toggle() {
	b.classList.toggle('active');
	
}
