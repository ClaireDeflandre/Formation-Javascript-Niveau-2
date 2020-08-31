//Les variables
    //nombre
    var nombre = 42;
    console.log(nombre);
    //tableau
    var tab = [2, 5, 6, 7, 9]
    console.log(tab);
    //chaine de caracteres
    var chaine = "ceci est une chaine de caractères"
    console.log(chaine);

//Conditions

    //if, else if ,else
    var nombre = prompt ("Veuillez entrer un nombre");
    if      (nombre >= 50 ) 
        console.log ("super moimoit");
    else if (nombre <= 40 )
        console.log ("Peux mieux faire");
    else 
        console.log ("la grande réponse");


    //switch

    switch (tab.length) {
            case 10:console.log ("il y a 10 éléments dans le tableau");
            
            break;

            case 5:console.log ("il y a 5 éléments dans le tableau");
            
            break;

            case 0:console.log ("le tableau est vide");
            
            break;

            default:
            console.log ("Je ne connais pas le nombre d'éléments du tableau");
    }


//Boucles

    //while

    let cpt = 0;
   
    while (cpt<=4){
    cpt++;
    console.log ("Messire on en a gros");
}

    //for

    var tab = [2, 5, 6, 7, 9]
    for (var i=0; i<tab.length;i++){
        console.log(tab[i]);
    }
    