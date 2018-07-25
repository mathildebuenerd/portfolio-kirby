const legendes = {
    0: "Traits de personnalité associés aux conversations avec un contact particulier. Comparaison entre la personnalité de soi-même (messages envoyés à Laura) et celle du contact (message reçus de Laura)",
    1: "Comparaison des sentiments associés à l'ensemble des messages envoyés, avec l'ensemble des messages reçus.",
    2: "Comparaison de l'usage d'un même mot entre soi-même et un contact particulier.",
    3: "Si l'application est capable de repérer les moments les plus positifs, elle pourrait aussi inciter à communiquer à ces moments-là.",
    4: "Si l'applciation est capable de repérer les moments les plus négatifs, elle pourrait aussi suggérer d'éviter de communiquer à ces moments là.",
    5: "Positivité associée avec chaque jour de la semaine.",
    6: "Visualisation des analyses directement sur les messages, grâce à un code couleur sur les mots."
};


const myInterface = document.querySelector(`#interface img`);
const myCaption = document.querySelector(`#interface figcaption`);
// const touch = document.querySelector(`#touch`);

const nombreInterfaces = 7;
let counter = 0;
let animationOn = true;

// on fait que les images se changent très vite
let fastImages = setInterval(changeInterface, 1000);


// quand on clique, soit ça stoppe l'animation, soit ça la redémarre
document.addEventListener("click", () => {
    // si l'animation est en cours, alors on l'arrête
    if (animationOn) {
        clearInterval(fastImages);
        animationOn = false;
        myInterface.style.opacity = 1;
        myCaption.style.opacity = 1;
        myCaption.textContent = legendes[counter];
        // touch.style.opacity = 0;
    } else { // si l'animation n'est pas en cours, on la redémarre
        toucher();
        fastImages = setInterval(changeInterface, 1000);
        animationOn = true;
        myCaption.style.opacity = 0;
        // touch.style.opacity = 1;
        // myCaption.textContent = ""; // quand l'animation est en route, on n'affiche pas la légende
    }
});

function toucher() {
    myInterface.style.opacity = 0.5;
    // touch.style.opacity = 0;
}


// on change une fois l'image
function changeInterface() {

    if (counter === nombreInterfaces-1) {
        counter = 0;
    } else {
        counter++;
    }
    myInterface.src = `images/interface-${counter}.jpg`;

}
