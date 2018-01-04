/**
 * Created by mathi on 04/01/2018.
 */

var heart = document.querySelector('.heart');

if (heart !== undefined) {
    var hue = Math.floor(Math.random()*360);
    heart.style.color = "hsl(" + hue + ", 100%, 50%)";
}