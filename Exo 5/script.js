function recuperation (numpoisson) {
	var poisson = document.getElementById ("poisson" + numpoisson);
	
	return (poisson);
}
	

function eliminer (poisson) {
	var texterase = poisson.innerHTML;
	var rep = texterase.replace("vivant","mort");
	poisson.innerHTML = rep;
}


/*
function get(id) {
    return document.getElementById(id)
}

function kill(elt) {
    elt.textContent = "Je suis un poisson mort"
}

kill(get("poisson1"))


function recup (numpoisson) {
    let poisson = document.getElementById("poisson"+numpoisson);
    return poisson
}

function eliminer(poisson) {
    var textdep = poisson.innerHTML;
    var remp = textdep.replace("vivant", "mort");
    poisson.innerHTML = remp;
}*/