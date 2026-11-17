/*
Author: Charles Fache
File Name: script.js
Date: 11/16/2026
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}

// Set up every slider on the page, each with its own state
document.querySelectorAll('.slider').forEach(slider => {
  const track = slider.querySelector('.slider__track');
  const slides = track.querySelectorAll('a');
  let index = 0;
 
  function goTo(i) {
    // Wrap around: past the last image -> first, before the first -> last
    index = (i + slides.length) % slides.length;
    slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
 
  slider.querySelector('.slider__btn--prev').addEventListener('click', () => goTo(index - 1));
  slider.querySelector('.slider__btn--next').addEventListener('click', () => goTo(index + 1));
 
  // Keep `index` correct when the user swipes or uses the keyboard instead of the buttons
  track.addEventListener('scroll', () => {
    index = Math.round(Math.abs(track.scrollLeft) / track.clientWidth);
  }, { passive: true });
});