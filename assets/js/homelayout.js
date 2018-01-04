/**
 * Created by mathi on 04/01/2018.
 */

/* This script manages the layout of the homepage (projects page)
* Ce script régit la mise en pages de la page d'accueil, qui est la page "projets"*/

var projects = document.querySelectorAll('.single-project');
var projectWidth = projects[0].offsetWidth;
var projectHeight = projects[0].offsetHeight;

setup();

function setup() {

    giveRandomPosition();

}

function giveRandomPosition() {
    // donne une position random à chaque projet
    // give a random position to each project
    for (var i=0; i<projects.length; i++) {
        var posX = getRandomInt(0, (window.innerWidth)-projectWidth);
        var posY = getRandomInt(0, (window.innerHeight)-projectHeight);
        projects[i].style.position = "absolute";
        projects[i].style.left = posX + "px";
        projects[i].style.top = posY + "px";
    }
}

function makeLinks() {

}



// Other functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}