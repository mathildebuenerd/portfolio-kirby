/**
 * Created by mathi on 04/01/2018.
 */

var heart = document.querySelector('.heart');

if (heart !== undefined) {
    var colorHue = Math.floor(Math.random()*360);
    heart.style.color = "hsl(" + colorHue + ", 100%, 50%)";
}

var socialMediaIcons = document.querySelectorAll('.fa');

for (var i=0; i<socialMediaIcons.length; i++) {
    // couleur random au hover des icones de réseaux sociaux
    socialMediaIcons[i].addEventListener('mouseover', function(e) {
        var colorHue = Math.floor(Math.random()*360);
        e.target.style.color = "hsl(" + colorHue + ", 100%, 50%)";
    });
    socialMediaIcons[i].addEventListener('mouseout', function(e) {
        var color = '#bbb';
        e.target.style.color = color;
    });
}