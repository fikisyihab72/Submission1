
// Kode Javascript untuk dropdown
function toggleDropdown(event) {
  event.preventDefault();
  var dropdownContent = event.target.nextElementSibling;
  dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
}


// Kode Javascript untuk Image Slider
document.addEventListener("DOMContentLoaded", function(){

  tampilSlide(indeksSlide);
  
});

var indeksSlide = 1;

function tommbolSlide(n) {
  tampilSlide(indeksSlide += n);
}

function tampilSlide(n) {
  var i;
  var x = document.getElementsByClassName("imageSlider");
  if (n > x.length) {
    indeksSlide = 1
  }
  if (n < 1) {
    indeksSlide = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[indeksSlide-1].style.display = "block";  
}