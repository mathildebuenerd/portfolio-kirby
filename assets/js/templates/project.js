/**
 * Created by mathi on 18/03/2018.
 */

// console.log("salut");

// quand on scroll ça passe à l'image suivante de la galerie

var allimages = document.querySelector('.allimages');
var current = 0; // l'index de l'image
var speed = 750; // Durée de l'animation (en ms)





document.body.addEventListener('click', function(e) {
    var cible = document.querySelectorAll('figure')[current+1]; // Page cible
    if (cible !== undefined) {
        $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
        current++;
    } else {
        cible = document.querySelectorAll('figure')[0]; // Page cible
        $('html, body, .allimages').animate( { scrollLeft: $(cible).offset().left }, speed ); // Go
        current = 0;
    }
});




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
