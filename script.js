// Créer un simulateur de lancés de dé

// Lorsque vous lancer votre page de navigateur, je veux voir apparaitre le résultat la face d'un dé à 6 face (faire apparaitre une image).

// Quelques conseils pour réussir l'exercice :

// Essayez de décomposer au maximum le projet et allez y étape par étape.
// Faites votre structure HTML avec votre image
// Changer la source de votre image à l'aide de JS
// Récupérer dans la console un nombre aléatoire entre 1 et 6
// Adapter votre changement de source d'image par rapport au résultat du random (if)


// Bonus :

// Utilisez les inputs de type radio pour sélectionner le nombre de face (6, 12 ou 20). Lors d'un click sur un bouton, afficher l'image avec le résultat du dé.

//     input type radio
//     addeventlistner -> click
//     event.preventdefault()

    // Generer un nombre entre 1 et 6:
    // Utilisation de Math.random pour générer un chiffre aléatoire entre 0 et 1, contenant une vrgule.
    // Utilisation de Math.floor pour arrondir le chiffre au palier
    // Utilisation de *6 +1

    
let nombreRandom = Math.floor(Math.random() * 6) + 1;
            console.log(nombreRandom);
            
      
            // images de dés de 1 a 6


    const imagedes = 'images/de' + nombreRandom + '.png';
    
    document.querySelectorAll('img')[0].setAttribute('src',imagedes)

   if (nombreRandom=1)
   {image.src= 'images/de1.png'
}

if(nombreRandom=2) 
{image.src = 'images/de2.png'
}

if(nombreRandom=3) 
{image.src = 'images/de3.png'
}

if(nombreRandom=4) 
{image.src = 'images/de4.png'
}

if(nombreRandom=5) 
{image.src = 'images/de5.png'
}

if(nombreRandom=6) 
{image.src = 'images/de6.png'
}

function rolldice(){

    let boutonlancer = document.getElementById("boutonlancer")

    boutonlancer.addEventListener("click", clicksurbouton)
}
