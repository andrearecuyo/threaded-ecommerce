let index = 1;
showSlides(index);

function nextSlide(n) {
  //increments or decrements 
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  //checks if the provided n is greater than the total number of slides (slides.length). If so, it sets index to 1, effectively wrapping around to the first slide
  if (n > slides.length) {index = 1}    
  //checks if n is less than 1. If so, it sets index to the last slide index (slides.length), allowing backward wrapping.
  if (n < 1) {index = slides.length}
  // loops through all the slides and sets their display style property to "none", hiding them from view.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //removes the "active" class from their className property
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //sets the display style property of the slide at index index-1 to "block", making it visible
  slides[index-1].style.display = "block";  
  //adds the "active" class to the dot at index index-1, highlighting it to indicate the current slide.
  dots[index-1].className += " active";
}