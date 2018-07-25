/**
 * Created by mathi on 08/03/2018.
 */

createAboutSideBar();


function createAboutSideBar() {

    let header = document.querySelector('header');

    let sideBar = document.createElement('div');
    sideBar.setAttribute('class', 'sidebar-about');
    // tableOfContentWidth = window.getComputedStyle(tableOfContent, null).getPropertyValue('width')
    // console.log('tableOfContentWidth');
    // console.log(window.getComputedStyle(tableOfContent, null));

    let headerWidth = '300px';
    sideBar.style.right = headerWidth; // we don't need the 'px' if we use getComputedStyle
    sideBar.textContent = "A propos";
    header.appendChild(sideBar);
    header.style.right = '-' + headerWidth;


    let sidebarAbout = document.querySelector(".sidebar-about");
    sidebarAbout.addEventListener('click', toggleAboutSideBar);

    function toggleAboutSideBar(e) {

        console.log('toggle');
        console.log(e);

        let header = document.querySelector('header');

        if(header.style.right === 0 || header.style.right === '0px') {
            header.style.right = '-' + headerWidth; // we don't need the 'px' if we use getComputedStyle
        } else {
            header.style.right = 0;
        }
        // tableOfContent.classList.toggle('visible');


    }

}
