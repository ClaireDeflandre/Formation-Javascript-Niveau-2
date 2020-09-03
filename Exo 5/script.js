function recuperation (numpoisson) {
	var poisson = document.getElementById ("poisson" + numpoisson);
	
	return (poisson);
}
	

function eliminer (poisson) {
	var texterase = poisson.innerHTML;
	var rep = texterase.replace("vivant","mort");
	poisson.innerHTML = rep;
}


