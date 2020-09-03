let bolsdesoupe = document.querySelectorAll(".soupe p") 
let boutonboire = document.querySelector("#boire") 


function boire(bolaboire) { 
    bolaboire.innerHTML = bolaboire.innerHTML.replace("plein", "vide") 
}

function onclick () { 
    for(let i = 0; i < bolsdesoupe.length; i++) {
        let bol = bolsdesoupe[i]; 
        if (bol.innerHTML.match("plein")) { 
            boire(bol) 
            break 
        }
    }
}

boutonboire.addEventListener("click", onclick); 







let fauteuilneuf = document.querySelectorAll(".fauteuil p")
let boutonreposer = document.querySelector("#reposer")

function reposer(assis) {
	assis.innerHTML = assis.innerHTML.replace("neuf","occupé")
}

function onclick2 () {
	for(let i = 0; i < fauteuilneuf.length; i++) {
		let fauteuil = fauteuilneuf[i];
		if (fauteuil.innerHTML.match("neuf")){
			reposer(fauteuil)
			break
		}
	}
}

boutonreposer.addEventListener("click", onclick2);



let litfait = document.querySelectorAll(".lit p")
let boutondormir = document.querySelector("#dormir")

function dormir(dodo) {
	dodo.innerHTML = dodo.innerHTML.replace("fait","confortable")
}

function onclick3 () {
	for(let i = 0; i < litfait.length; i++) {
		let lit = litfait[i];
		if (lit.innerHTML.match("fait")){
			dormir(lit)
			break
		}
	}
}


boutondormir.addEventListener("click", onclick3);




/*let litfait = document.querySelectorAll (".lit p");
let boutondormir = document.querySelector ("#dormir");

function dormir (dodo) {
	dodo.innerHTML = dodo.innerHTML.replace ("fait","confortable");
}

function onclick3 (){
	for(let i = 0; i < litfait.length; i++){
		let lit = litfait[i];
		if (lit.innerHTML.match("confortable")){
			dormir(lit);
			break;
		}
	}

}

boutondormir = addEventListener("click", onclick3);




/*
const soupe = document.querySelectorAll(".soupe p")
const boire = document.querySelector("#boire")

const fauteuil = document.querySelectorAll(".fauteuil p")
const reposer = document.querySelector("#reposer")

const lit = document.querySelectorAll(".lit p")
const dormir = document.querySelector("#dormir")

boire.addEventListener("click", ()=> {
    soupe.forEach((elt)=> {
        elt.textContent = "Bol vide"
    })
})

reposer.addEventListener("click", ()=> {
    fauteuil.forEach((elt)=> {
        elt.textContent = "fauteuil souillé"
    })
})

dormir.addEventListener("click", ()=> {
    lit.forEach((elt)=> {
        elt.textContent = "lit défait"
    })
})*/


/*function boire(){
	let soupe =  querySelectorAll(".soupe p");
	console.log("#soupe");
	for (var i = 0 ;  i < soupe.length ; i++){    soupe.items (i).soupe.innerHTML = rep; }
	document.querySelector("#soupe").innerHTML = "Ce bol est vide";
}*/