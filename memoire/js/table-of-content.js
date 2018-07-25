/**
 * Created by mathi on 05/03/2018.
 */

let tableOfContentWidth = '';

createTOC();
createSideBar();

let sidebarTOC = document.querySelector(".sidebar-toc");

sidebarTOC.addEventListener('click', toggleTableOfContent);

function createTOC() {

    let TOC = document.querySelector('#TOC ul');
    TOC.innerHTML = '';

    let titles = document.querySelectorAll('h1');

    for (let i=0; i<titles.length; i++) {
        let title = document.createElement('li');
        let linkTitle = document.createElement('a');
        linkTitle.setAttribute('class', 'link-table-of-content');
        linkTitle.textContent = titles[i].textContent;
        linkTitle.href = '#' + titles[i].parentNode.id;
        title.appendChild(linkTitle);
        TOC.appendChild(title);
    }

}

function createSideBar() { // we create the sidebar we have to click on to see the menu

    console.log('je suis lu');
    let tableOfContent = document.querySelector('#TOC');

    let sideBar = document.createElement('div');
    sideBar.setAttribute('class', 'sidebar-toc');
    // tableOfContentWidth = window.getComputedStyle(tableOfContent, null).getPropertyValue('width')
    // console.log('tableOfContentWidth');
    // console.log(window.getComputedStyle(tableOfContent, null));

    tableOfContentWidth = 300;
    sideBar.style.left = tableOfContentWidth + "px"; // we don't need the 'px' if we use getComputedStyle
    sideBar.textContent = "Sommaire";
    console.log(tableOfContentWidth);
    tableOfContent.appendChild(sideBar);
    tableOfContent.style.left = '-' + tableOfContentWidth;

}

function toggleTableOfContent(e) {

    console.log('toggle');
    console.log(e);

    let tableOfContent = document.querySelector('#TOC');

    if(tableOfContent.style.left === 0 || tableOfContent.style.left === '0px') {
        tableOfContent.style.left = '-' + tableOfContentWidth + 'px'; // we don't need the 'px' if we use getComputedStyle
    } else {
        tableOfContent.style.left = 0;
    }
    // tableOfContent.classList.toggle('visible');


}

function hideTableOfContent() {



}