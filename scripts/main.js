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

function step1(){
	document.getElementById('titulo1')
	.innerHTML="Paso 1";
	document.getElementById('sub1')
	.innerHTML="DIAGNOSTICO";
	document.getElementById('txt1')
	.innerHTML="A partir de un diagnostico previo se construye un andamiaje de valor volviendo a la empresa más rentable y segura. ";
	document.getElementById('txt1a')
	.style.display = "inline";
	document.getElementById('txt1b')
	.style.display = "inline";
	document.getElementById('txt1c')
	.style.display = "inline";
	document.getElementById('txt1d')
	.style.display = "inline";
	document.getElementById('txt1e')
	.style.display = "inline";
	document.getElementById('txt1f')
	.style.display = "inline";
	document.getElementById('txt1g')
	.style.display = "inline";
	document.getElementById('txt1h')
	.style.display = "inline";
	document.getElementById('txt1i')
	.style.display = "inline";
	document.getElementById('txt1j')
	.style.display = "inline";
	document.getElementById('txt1a')
	.innerHTML="¿Cómo se realiza el diagnostico?";
	document.getElementById('txt1b')
	.innerHTML="Mediante charlas con los socios y personal, auditamos las siguientes áreas de la empresa:";
	document.getElementById('txt1c')
	.innerHTML=">   Área Societaria";
	document.getElementById('txt1d')
	.innerHTML=">   Área Contractual";
	document.getElementById('txt1e')
	.innerHTML=">   Área Financiera y Contable";
	document.getElementById('txt1f')
	.innerHTML=">   Área administrativa y Laboral";
	document.getElementById('txt1g')
	.innerHTML=">   Área ambiental y RSA";
	document.getElementById('txt1h')
	.innerHTML=">   Área Comercio Exterior";
	document.getElementById('txt1i')
	.innerHTML=">   Área Patrimonial y Crédito";
	document.getElementById('txt1j')
	.innerHTML="Duración Paso 1: entre 4 y 10 semanas según empresa.";
	document.getElementById('img1')
	.src="../images/Graupera-Home-05.jpg"
	
}

function step2(){
	document.getElementById('titulo1')
	.innerHTML="Paso 2";
	document.getElementById('sub1')
	.innerHTML="CRONOLOGIA DE ACCIONES.";
	document.getElementById('txt1')
	.innerHTML="A partir de la información recabada se elabora un plan de trabajo conjunto Empresa-Estudio en cada una de las áreas de la empresa, confeccionando contratos, renegociando pasivos, reorganizando recursos humanos, entre otras acciones que dependerán del tipo de empresa y sus unidades de negocios. </br></br> La cronología de acciones y su ejecución dependerá del tipo de empresa. </br></br> Duración Paso 2 - entre 8 y 16 semanas según empresa";
	document.getElementById('txt1a')
	.style.display = "none";
	document.getElementById('txt1b')
	.style.display = "none";
	document.getElementById('txt1c')
	.style.display = "none";
	document.getElementById('txt1d')
	.style.display = "none";
	document.getElementById('txt1e')
	.style.display = "none";
	document.getElementById('txt1f')
	.style.display = "none";
	document.getElementById('txt1g')
	.style.display = "none";
	document.getElementById('txt1h')
	.style.display = "none";
	document.getElementById('txt1i')
	.style.display = "none";
	document.getElementById('txt1j')
	.style.display = "none";
	document.getElementById('img1')
	.src="../images/Graupera-Home-06.jpg"
}

function step3(){
	document.getElementById('titulo1')
	.innerHTML="Paso 3";
	document.getElementById('sub1')
	.innerHTML="MANTENIMIENTO.";
	document.getElementById('txt1')
	.innerHTML="Luego de ejecutado el paso 2, con visitas en la sede de la empresa,  se realiza el mantenimiento y actualización de todas las áreas, logrando así la mejor performance y el crecimiento de tu empresa. </br></br> Por etapa 1 y 2, 100 $250.000 más IVA, la etapa 3 se pacta por separado según facturación y cantidad de personal. Contratando las 3 etapas se bonifica la 1 y 2. </br></br> A pactar por separado: demandas en sede judicial, asesoramiento contable.";
	document.getElementById('txt1a')
	.style.display = "none";
	document.getElementById('txt1b')
	.style.display = "none";
	document.getElementById('txt1c')
	.style.display = "none";
	document.getElementById('txt1d')
	.style.display = "none";
	document.getElementById('txt1e')
	.style.display = "none";
	document.getElementById('txt1f')
	.style.display = "none";
	document.getElementById('txt1g')
	.style.display = "none";
	document.getElementById('txt1h')
	.style.display = "none";
	document.getElementById('txt1i')
	.style.display = "none";
	document.getElementById('txt1j')
	.style.display = "none";
	document.getElementById('img1')
	.src="../images/Graupera-Home-07.jpg"
}
