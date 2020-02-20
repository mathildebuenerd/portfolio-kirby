/**
 * Created by mathi on 04/01/2018.
 */

const heart = document.querySelector(".heart");

if (heart !== undefined) {
  const colorHue = Math.floor(Math.random() * 360);
  heart.style.color = "hsl(" + colorHue + ", 100%, 50%)";
}

const socialMediaIcons = document.querySelectorAll(".fa");

for (let i = 0; i < socialMediaIcons.length; i++) {
  // couleur random au hover des icones de réseaux sociaux
  socialMediaIcons[i].addEventListener("mouseover", function(e) {
    const colorHue = Math.floor(Math.random() * 360);
    e.target.style.color = "hsl(" + colorHue + ", 100%, 50%)";
  });
  socialMediaIcons[i].addEventListener("mouseout", function(e) {
    const color = "#bbb";
    e.target.style.color = color;
  });
}
