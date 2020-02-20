/**
 * Created by mathi on 04/01/2018.
 */

/* This script manages the layout of the homepage (projects page)
 * Ce script régit la mise en pages de la page d'accueil, qui est la page "projets"*/

const projects = document.querySelectorAll(".single-project");
const projectsObj = [];
const projectWidth = projects[0].offsetWidth;
const projectHeight = projects[0].offsetHeight;
let alltags;
const rightarrow = document.querySelector(`#rightarrow`);
const leftarrow = document.querySelector(`#leftarrow`);

const totalProjects = document.querySelectorAll(".single-project").length;
let currentProject = 0; // le projet le plus à gauche, pour savoir à quel projet doivent aller les flèchess
const speed = 750; // Durée de l'animation (en ms)

setup();

window.addEventListener("resize", calculateContainerWidth);

// go to next project
rightarrow.addEventListener("click", function() {
  let cible = document.querySelectorAll(".single-project")[currentProject + 1]; // Projet cible

  if (cible !== undefined && currentProject !== totalProjects - 3) {
    // si cible n'est pas undefined, ça veut dire qu'il y a encore des images après
    $("html, body, #preview-projects").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
    currentProject += 1;
  } else {
    // sinon ça veut dire qu'il n'y en a plus donc on revient au début
    currentProject = 0;
    cible = document.querySelectorAll(".single-project")[currentProject]; // Page cible
    $("html, body, #preview-projects").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
  }
});

// go to previous project
leftarrow.addEventListener("click", function() {
  let cible = document.querySelectorAll(".single-project")[currentProject - 1]; // Projet cible

  if (cible !== undefined && currentProject !== 0) {
    // si cible n'est pas undefined, ça veut dire qu'il y a encore des images après
    $("html, body, #preview-projects").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
    currentProject -= 1;
  } else {
    // sinon ça veut dire qu'il n'y en a plus donc on revient au début
    currentProject = totalProjects - 3;
    cible = document.querySelectorAll(".single-project")[currentProject]; // Page cible
    $("html, body, #preview-projects").animate(
      { scrollLeft: cible.offsetLeft },
      speed
    ); // Go
  }
});

function setup() {
  if (document.querySelector("#container-for-hiding-scrollbar")) {
    calculateContainerWidth();
  }

  // console.log(alltags);
}

function calculateContainerWidth() {
  if (window.innerWidth > 767) {
    // container width
    const hiddenContainer = document.querySelector(
      "#container-for-hiding-scrollbar"
    );
    const previewProjects = document.querySelector("#preview-projects");
    const leftBar = document.querySelector(".leftbar");
    const rightBar = document.querySelector(".rightbar");

    hiddenContainer.style.left = leftBar.offsetWidth + "px";
    hiddenContainer.style.width =
      window.innerWidth - leftBar.offsetWidth - rightBar.offsetWidth + "px";
    previewProjects.style.width =
      window.innerWidth - leftBar.offsetWidth - rightBar.offsetWidth + "px";

    // single-project width
    const singleProject = document.querySelectorAll(".single-project");
    const marginSingleProject = Number(singleProject[0].style.marginRight);
    // La largeur d'un projet est égale à la largeur totale de la fenetre, moins les deux brodures à droite et gauche, moins la marge entre chaque projet
    const singleProjectWidth =
      (window.innerWidth -
        leftBar.offsetWidth -
        rightBar.offsetWidth -
        marginSingleProject * 2) /
      3;
    for (let i = 0; i < singleProject.length; i++) {
      singleProject[i].style.width = singleProjectWidth + "px";
    }
  }
}

// Other functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
