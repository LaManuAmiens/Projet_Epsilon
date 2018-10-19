
function openfolder() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf114;";
  setTimeout(function () {
    a.innerHTML = "&#xf115;";
  }, 1000);
}
openfolder();
setInterval(openfolder, 2000);
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
xw  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// function numberGen (on page load){
// var randomNumber = Math.floor(Math.random()*15 + 1);
//    if (randomNumber == 1) {
//     display link produit at div;
//    } else if (randomNumber == 2) {
//       display link produit at div
//    } else if (randomNumber == 3) {
//       display link produit at div
//    } else if (randomNumber == 4) {
//       display link produit at div
//    } else if (randomNumber == 5) {
//       display link produit at div
//    } else if (randomNumber == 6) {
//       display link produit at div
//    } else if (randomNumber == 7) {
//       display link produit at div
//    } else if (randomNumber == 8) {
//       display link produit at div
//    } else if (randomNumber == 9) {
//       display link produit at div;
//    } else if (randomNumber == 10) {
//       display link produit at div;
//    } else if (randomNumber == 11) {
//       display link produit at div;
//    } else if (randomNumber == 12) {
//       display link produit at div;
//    } else if (randomNumber == 13) {
//       display link produit at div;
//    } else if (randomNumber == 14) {
//       display link produit at div;
//    } else {
//      display link produit at div;
// }
// }

