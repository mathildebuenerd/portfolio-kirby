/**
 * Created by mathi on 04/01/2018.
 */

/* This script manages the layout of the homepage (projects page)
* Ce script régit la mise en pages de la page d'accueil, qui est la page "projets"*/

var projects = document.querySelectorAll('.single-project');
var projectsObj = [];
var projectWidth = projects[0].offsetWidth;
var projectHeight = projects[0].offsetHeight;
var alltags;

// setup();

function setup() {

    giveRandomPosition();
    makeLinks();
    createCanvas(windowWidth, windowHeight); // p5.js function to create a canvas in order to see the lines

//     for(var i=0; i<projects.length; i++) {
//         projectsObj.push(new Project(projects[i])); // we have created a Project class, in order to make it move smoothly
//     }
 }


function draw() {

    background(0);

    for (var k=0; k<alltags.length; k++) {
        // we iterate through all the projects with the same tag in order to link them
        if (alltags[k].projects !== undefined) { // if a category is shared by more than one person
            for (var l=0; l<alltags[k].projects.length; l++) {
                if (l !== alltags[k].projects.length-1) {
                    var x1 = alltags[k].projects[l].offsetLeft;
                    var y1 = alltags[k].projects[l].offsetTop;
                    var x2 = alltags[k].projects[l+1].offsetLeft;
                    var y2 = alltags[k].projects[l+1].offsetTop;
                } else {
                    var x1 = alltags[k].projects[l].offsetLeft;
                    var y1 = alltags[k].projects[l].offsetTop;
                    var x1 = alltags[k].projects[0].offsetLeft;
                    var y1 = alltags[k].projects[0].offsetTop;
                }
                // console.log(x1 + " " + y1 + " " + x2 + " " + y2);
                stroke(255);
                strokeWeight(1);
                // text()
                line(x1, y1, x2, y2);
            }
        }
    }
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

    var projects = document.querySelectorAll(".single-project");
    alltags = listAllUsedTags();

    function listAllUsedTags() {
        var alltags = document.querySelectorAll('.alltags');
        var differentTags = [];
        for (var i = 0; i < alltags.length; i++) {
            var singleTags = alltags[i].querySelectorAll('span');
            for (var j = 0; j < singleTags.length; j++) {
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

    var allSimilarProjects = []; // we create an array to store all projects that have the same tag
    // it's gonna look like
    // allSimilarProjects = [
    //     tag1: [
    //         element1,
    //         element2
    //     ],
    //     tag2: [
    //         ...
    //     ]
    // ]

    for (var i=0; i<alltags.length; i++) {
        var similarProjects = [];
        for (var j=0; j<projects.length; j++) {
            if ((projects[j].textContent).includes(alltags[i].tag)) { // we check if the tag i is in the project j
                similarProjects.push(projects[j]);
            }
        }

        if (similarProjects.length > 1) { // if there're at least 2 projects with the same tag
            alltags[i].projects = similarProjects; // we had the element to the big array
        }

    }

    console.log(alltags);
    console.log(alltags[3].projects[0]);





    // console.log(alltags);



}



// Other functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}