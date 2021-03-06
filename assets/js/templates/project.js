/**
 * Created by mathi on 18/03/2018.
 */

var allimages = document.querySelector(".allimages");
var current = 0; // l'index de l'image
var speed = 750; // Durée de l'animation (en ms)
var blocimage = document.querySelector(
  "#container-for-hiding-scrollbar-project"
);

setup();

function setup() {
  calculateHiddenContainerWidth();
  if (document.querySelector(".single-press")) {
    formatPress();
  }
}

document.addEventListener("click", function(e) {
  // console.log(e.target);
});

// Quand on clic sur le body, ça passe à l'image suivante
blocimage.addEventListener("click", function(e) {
  var cible = document.querySelectorAll("figure")[current + 1]; // Page cible

  if (cible !== undefined) {
    // si cible n'est pas undefined, ça veut dire qu'il y a encore des images après
    $("html, body, .allimages").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
    current++;
  } else {
    // sinon ça veut dire qu'il n'y en a plus donc on revient au début
    cible = document.querySelectorAll("figure")[0]; // Page cible

    $("html, body, .allimages").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
    current = 0;
  }
});

window.addEventListener("resize", calculateHiddenContainerWidth);

// Functions
function calculateHiddenContainerWidth() {
  if (window.innerWidth > 767) {
    var hiddenContainer = document.querySelector(
      "#container-for-hiding-scrollbar-project"
    );
    var leftBar = document.querySelector("#nav-languages");
    var rightBar = document.querySelector("#nav-social-media");

    hiddenContainer.style.left = leftBar.offsetWidth;
    hiddenContainer.style.width =
      window.innerWidth - leftBar.offsetWidth - rightBar.offsetWidth + "px";
  }
}
function formatPress() {
  var allPressArticles = document.querySelectorAll(".single-press");
  // console.log(allPressArticles);
  // console.log(allPressArticles.length);
  // on formate un par un chaque article
  for (var i = 0; i < allPressArticles.length; i++) {
    var newspaper = document.querySelectorAll(".newspaper")[i];
    var url = document.querySelectorAll(".url")[0]; // l'url est toujours la numéro zéro car on enlève la balise du DOM après avoir injecté son contenu dans le href du titre de l'article
    var language = document.querySelectorAll(".language")[i];
    var articleName = document.querySelectorAll(".artcl")[i];

    // console.log(document.querySelector('.single-press'));

    articleName.href = url.textContent;
    articleName.setAttribute("target", "_blank");
    newspaper.textContent = newspaper.textContent + ", ";
    language.textContent = " (" + language.textContent + ")";
    allPressArticles[i].removeChild(url);
    // console.log('j"ai tout fait');
  }
}

//
// Pour controler avec des flèches
//      |  |
//      V  V

// var leftArrow = document.querySelector('#left-arrow');
// var rightArrow = document.querySelector('#right-arrow');

// leftArrow.addEventListener('click', function() {
//     var cible = document.querySelectorAll('figure')[current+1]; // Page cible
//     if (cible !== undefined) {
//         $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
//         current++;
//     } else {
//         cible = document.querySelectorAll('figure')[0]; // Page cible
//         $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
//         current = 0;
//     }
// });
//
// rightArrow.addEventListener('click', function() {
//     var cible = document.querySelectorAll('figure')[current-1]; // Page cible
//     if (cible !== undefined) {
//         $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
//         current--;
//     } else {
//         var lastImageIndex = document.querySelectorAll('figure').length;
//         cible = document.querySelectorAll('figure')[lastImageIndex-1]; // Page cible
//         $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
//         current = lastImageIndex-1;
//     }
// });
