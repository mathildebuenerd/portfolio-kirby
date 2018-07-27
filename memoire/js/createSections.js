/**
 * Created by mathi on 06/03/2018.
 */

createSections();
displayOneSectionAtATime();

function createSections() {

    let counter = document.querySelectorAll('h1').length;

    while (counter > 0) {

        // A section is a part of document that begins with a H1 and ends at the next H1
        // So we iterate through the DOM to create those sections
        // There's an exception : there's a kind of

        let bodyTags = document.querySelectorAll('body > h1, body > h2, body > h3, body > h4, body > h5, body > h6, body > p, body > blockquote, body > figure, body > ul, #refs');
        let newSection = document.createElement('section');
        newSection.setAttribute('class', 'content');

        for (let i=0; i<bodyTags.length; i++) {
            if (bodyTags[i].tagName !== 'H1' || i === 0 || bodyTags[i].id === 'refs') { // the first element always go inside the section, because it's usually a h1
                newSection.appendChild(bodyTags[i]);
            } else {
                break;
            }
        }

        addNavigation();

        function addNavigation() {
            let mynav = document.createElement('nav');
            mynav.setAttribute('class', 'bottomNav');
            let next = document.createElement('button');
            next.setAttribute('class', 'next');
            let prev = document.createElement('button');
            prev.setAttribute('class', 'prev');

            mynav.appendChild(next);
            mynav.appendChild(prev);
            newSection.appendChild(mynav);
        } // we add a little menu at the bottom of each section

        document.body.appendChild(newSection);

        counter--;

    }

    giveIdToSections();

    function giveIdToSections() {

        let sections =  document.querySelectorAll('section.content');

        for (let i=0; i<sections.length; i++) {
            let sectionId = '';
            if (sections[i].firstChild.textContent !== '') {
                sectionId = sections[i].firstChild.textContent; // take the textcontent of the first element, that is supposed to be a h1
                sectionId = formatString(sectionId);
                sections[i].setAttribute('id', 'chap-' + sectionId); // we add a 'chap-' before, to be sure it's different from the id generated by pandoc
                // console.log("sectionId " + sectionId);
            } else {
                let letters = new RegExp(/([a-z])/, 'gi');
                for (let j=1; j<sections[i].childNodes.length; i++) {
                    if (letters.test(sections[i].childNodes[j].textContent)) { // we check if the first tag contains a text
                        sectionId = sections[i].childNodes[j].textContent;
                        sectionId = formatString(sectionId);
                        sections[i].setAttribute('id', 'chap-' + sectionId);
                        break;
                    }
                }
            }

            console.log('sec ' + sectionId);
            document.styleSheets[0].insertRule('#chap-' + sectionId + ' { display:none; }', 0);
            document.styleSheets[0].insertRule('#chap-' + sectionId + ':target { display:block; }', 0);
            // sections[i].style.display = 'none';

        }

        function formatString(stringToFormat) {

            stringToFormat = stringToFormat.replace(/([,.;:'"?!|#=><+’…])/g,""); // remove the punctuation
            stringToFormat = stringToFormat.replace(/\s/g, '-'); // replace spaces with -

            return stringToFormat;

        }

    }

}

function displayOneSectionAtATime() {

    let sections = document.querySelectorAll('section:not(.footnotes):not(#control-panel)');

    console.log(sections[0]);
    sections[0].style.top = '100px';
    for (let i=1; i<sections.length; i++) {
        // sections[i].style.display = 'none';
    }

    window.addEventListener('scroll', (e) => {
        // console.log(e);
    });




}