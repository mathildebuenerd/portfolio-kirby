/**
 * Created by mathi on 13/03/2018.
 */

// Add a personnalized content on the homepage/ index page

addContentToHomepage();

function addContentToHomepage() {

    let title = document.createElement('h1');
    title.textContent = "Converser à l'ère de l'autocomplétion";

    let pipe = document.createElement('span');
    pipe.setAttribute('id', 'pipe');
    pipe.textContent = '|';
    title.appendChild(pipe);

    let start = document.createElement('a');
    start.setAttribute('id', "start");
    start.textContent = "Commencer la lecture";
    let firstSection = document.querySelectorAll('section.content')[1];
    start.href = '#' + firstSection.id;


    let author = document.createElement('h2');
    author.textContent = "Mathilde Buenerd";
    let paragraphe = document.createElement('p');
    paragraphe.textContent = "Verson numérique de mémoire de master Media Design, tutoré par Nicolas Nova. 2018 - HEAD Genève.";
    let description = document.createElement('p');
    description.textContent = "Ce site expérimental présente ma"

    let blockContent = document.createElement('div');
    blockContent.setAttribute('id', 'intro');
    blockContent.appendChild(title);
    blockContent.appendChild(start)
    // blockContent.appendChild(author);
    // blockContent.appendChild(paragraphe);
    document.body.appendChild(blockContent);

}