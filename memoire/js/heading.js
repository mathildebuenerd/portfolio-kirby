/**
 * Created by mathi on 05/03/2018.
 */

createHeading();

// creates the html elements of the top nav bar
function createHeading() {

    let chapterBar = document.createElement('div');
    chapterBar.setAttribute('id', 'chapterBar');
    let bigTitle = document.querySelectorAll('h1')[0]; // the name of the document is the name of the first h1
    let titleElement = document.createElement('h1');
    titleElement.textContent = bigTitle.textContent;
    chapterBar.appendChild(titleElement);

    let currentChapter = document.createElement('p');
    currentChapter.setAttribute('id', 'currentChapter');
    chapterBar.appendChild(currentChapter);

    document.body.appendChild(chapterBar);

    console.log(document.querySelectorAll('h1'));

}




// for display the name of the current chapter at the top of the page
// window.addEventListener('scroll', (e) => {
//     // console.log(e.pageY);
//
//     let chapters = document.querySelectorAll('h1'); // every chapter should begin with a h1
//     let currentChapterNumber = findCurrentChapter(e.pageY);
//
//
//     function findCurrentChapter(scrollPosition) {
//         // we compare the scroll position to the offset position of all h1 in order to know what is the chapter currently read
//         for (let i=0; i<chapters.length; i++) {
//             if (scrollPosition < chapters[i].offsetTop) {
//                 return i-1;
//             }
//         }
//     }
//     let currentChapter = '';
//     let currentContent = document.querySelectorAll('#TOC > ul > li > ul > li');
//
//     // if it equals -1, it means we are before the first h1, so we display nothing instead
//     if (currentChapterNumber === -1) {
//         currentChapter = '';
//     } else {
//         currentChapter = chapters[currentChapterNumber].textContent;
//         // console.log(currentContent[5]);
//
//         // we highlight the current chapter in the table of content
//         for (let i=0; i<chapters.length; i++) {
//             if (i !== currentChapterNumber && currentContent[i].classList.contains('current')) {
//                 currentContent[i].classList.remove('current');
//             } else if (i === currentChapterNumber) {
//                 currentContent[i].classList.add('current');
//             }
//         }
//
//     }
//
//     // update the current chapter displayed in the timeline
//     let chapterBar = document.querySelector('#currentChapter');
//     chapterBar.textContent = currentChapter;
//
//     // find at which percentage of the current chapter we are, in order to display it
//     let percentageBar = document.querySelector('#percentageBar');
//     let scrollPos = e.pageY;
//     let posChapt = chapters[currentChapterNumber].offsetTop;
//     let posNextChapt = '';
//     if (chapters[currentChapterNumber+1]) {
//         posNextChapt = chapters[currentChapterNumber+1].offsetTop;
//     } else {
//         posNextChapt = window.innerHeight;
//     }
//     let currentPercentage = (scrollPos-posChapt)*100/(posNextChapt-posChapt);
//     percentageBar.style.width = currentPercentage + 'vw';
//
//
// });