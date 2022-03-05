const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.menu-btn');
	const mobile_menu = document.querySelector('.mobileNav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

function area1(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 1";
}

function area2(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 2";
}

function area3(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 3";
}

function area4(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 4";
}

function area5(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 5";
}

function area6(){
	document.getElementById('changingTxt')
	.innerHTML="jaja area 6";
}