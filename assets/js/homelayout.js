/**
 * Created by mathi on 04/01/2018.
 */

/* This script manages the layout of the homepage (projects page)
* Ce script régit la mise en pages de la page d'accueil, qui est la page "projets"*/

var projects = document.querySelectorAll('.single-project');
var projectWidth = projects[0].offsetWidth;
var projectHeight = projects[0].offsetHeight;

// setup();

function setup() {

    giveRandomPosition();
    makeLinks();

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

    stroke(255);

    var alltags = listAllUsedTags();
    function listAllUsedTags() {
        var alltags = document.querySelectorAll('.alltags');
        var differentTags = [];
        for (var i=0; i<alltags.length; i++) {
            var singleTags = alltags[i].querySelectorAll('span');
            for (var j=0; j<singleTags.length; j++) {
                var tag = (singleTags[j].textContent).replace(/\s/g, ''); // at that moment the tag contain some spaces and \n before and after, so we remove it

                // we check that the tag is not already in the array before adding it, in order to not have duplicate tags
                if (!differentTags.includes(tag)) {
                    // we create an object that contain the tag and the category (tag, category or thematic)
                    var atag = {
                        tag: tag,
                        cat: singleTags[j].parentNode.className
                    };
                    differentTags.push(atag);
                }
            }
        }

        return differentTags;
    }

    console.log(alltags);



    // console.log(alltags);



}



// Other functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}