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

    console.log(alltags);
 }


function draw() {

    background(0);

    for (var k=0; k<alltags.length; k++) {
        // we iterate through all the projects with the same tag in order to link them
        if (alltags[k].projects !== undefined) { // if a category is shared by more than one person
            for (var l=0; l<alltags[k].projects.length; l++) {
                var x1 = '';
                var y1 = '';
                var x2 = '';
                var y2 = '';
                if (l !== alltags[k].projects.length-1) {
                    x1 = alltags[k].projects[l].offsetLeft;
                    y1 = alltags[k].projects[l].offsetTop + (alltags[k].projects[l].offsetHeight)/2;
                    x2 = alltags[k].projects[l+1].offsetLeft;
                    y2 = alltags[k].projects[l+1].offsetTop + (alltags[k].projects[l+1].offsetHeight)/2;
                } else {
                    x1 = alltags[k].projects[l].offsetLeft;
                    y1 = alltags[k].projects[l].offsetTop + (alltags[k].projects[l].offsetHeight)/2;
                    x2 = alltags[k].projects[0].offsetLeft;
                    y2 = alltags[k].projects[0].offsetTop + (alltags[k].projects[0].offsetHeight)/2;
                }
                // console.log(x1 + " " + y1 + " " + x2 + " " + y2);

                // The color of the word/the stroke depends on the type of relationship between the elements : tags, thematics or categories
                var color;
                if(alltags[k].cat === 'tags') {
                    color = 100;
                } else if (alltags[k].cat === 'thematics') {
                    color = '#560bed';
                } else {
                    color = '#0000ff';
                }


                stroke(color);
                strokeWeight(1);
                line(x1, y1, x2, y2);

                // display the relationship in text (which category is similar)
                var xtext = x1 + (x2-x1)/2;
                var ytext = y1 + (y2-y1)/2;

                noStroke();
                fill(color);
                text(alltags[k].tag, xtext, ytext);

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
    // console.log('alltags');
    // console.log(alltags);
    function listAllUsedTags() {
        var alltags = document.querySelectorAll('.alltags'); // takes all the tag list for each project

        var differentTags = [];
        for (var i = 0; i < alltags.length; i++) {
            var singleTags = alltags[i].querySelectorAll('span');
            for (var j = 0; j < singleTags.length; j++) {
                var tag = (singleTags[j].textContent).replace(/\s/g, ''); // at that moment the tag contain some spaces and \n before and after, so we remove it

                // we check that the tag is not already in the array before adding it, in order to not have duplicate tags
                // console.log("tag " + tag);
                var isNewTag = funcIsNewTag();
                function funcIsNewTag() {
                    for (var k=0; k<differentTags.length; k++) {
                        if (differentTags[k].tag === tag) {
                            return false;
                        }
                    }
                    return true;
                }

                if(isNewTag) {
                    // we create an object that contain the tag and the category (tag, category or thematic)
                    var atag = {
                        tag: tag,
                        cat: singleTags[j].parentNode.className
                    };
                    differentTags.push(atag);
                }
                // console.log('differentTags');
                // console.log(differentTags);


            }
        }

        return differentTags;
    }

    var relationshipsBlock = document.createElement('section');
    relationshipsBlock.classList.add('all-relationships');
    document.body.appendChild(relationshipsBlock);

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

        // creates the html lists of relationships between projects
        if (alltags[i].projects !== undefined) { // if a category is shared by more than one person
            for (var l=0; l<alltags[i].projects.length; l++) {
                var project1 = '';
                var project2 = '';
                if (l !== alltags[i].projects.length-1) {
                    project1 = alltags[i].projects[l];
                    project2 = alltags[i].projects[l+1];
                } else {
                    project1 = alltags[i].projects[l];
                    project2 = alltags[i].projects[0];
                }

                // format the ids to give a clean class
                // for example, 'Front des éditions' becomes 'frontdeséditions'
                project1 = project1.id;
                project1 = project1.replace(/\s/g, '');
                project1 = project1.toLowerCase();
                project2 = project2.id;
                project2 = project2.replace(/\s/g, '');
                project2 = project2.toLowerCase();

                // console.log(newproject1);

                var relationship;
                console.log("." + project1 + "-" + project2);
                console.log(document.querySelector('.newpretender-asb-bag'));
                if (document.querySelector('.' + project1 + '-' + project2) === null
                 && document.querySelector('.' + project2 + '-' + project1) === null ) { // if the relationship doesn't already exist (thanks to another cat for example)
                    console.log('if');
                    relationship = document.createElement('ul');
                    relationship.classList.add(project1 + '-' + project2);
                    relationship.classList.add('relationship');
                    relationshipsBlock.appendChild(relationship);
                } else {
                    console.log('else');
                    console.log('.' + project1 + '-' + project2);
                    relationship = document.querySelector('.' + project1 + '-' + project2); // if the class already exist, we select it
                    if (relationship === null) { // as the relationship could be either 'project1-project2' or 'project2-project1' we try both
                        relationship = document.querySelector('.' + project2 + '-' + project1);
                    }
                    console.log(relationship);
                }

                var relation = document.createElement('li');
                relation.setAttribute('class', 'rel-' + alltags[i].cat);
                relation.textContent = alltags[i].tag;
                relationship.appendChild(relation);
                // relationshipsBlock.appendChild(relationship);
            }

        }
    }



}



// Other functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}