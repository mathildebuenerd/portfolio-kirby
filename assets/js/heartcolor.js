/**
 * Created by mathi on 04/01/2018.
 */

var heart = document.querySelector('.heart');

if (heart !== undefined) {
    var colorHue = Math.floor(Math.random()*360);
    heart.style.color = "hsl(" + colorHue + ", 100%, 50%)";
}