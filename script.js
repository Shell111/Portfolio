// Mobile menu script
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})

// Mobile project hover effect
const projectOverlay = document.getElementsByClassName("project__overlay")[0]

projectOverlay.addEventListener("touchstart", function() {
  projectOverlay.classList.add("project__overlay--mobile-hover")
})

projectOverlay.addEventListener("touchend", function() {
  projectOverlay.classList.remove("project__overlay--mobile-hover")
})


const projectOverlayTwo = document.getElementsByClassName("project__overlay")[1]

projectOverlayTwo.addEventListener("touchstart", function() {
  projectOverlayTwo.classList.add("project__overlay--mobile-hover")
})

projectOverlayTwo.addEventListener("touchend", function() {
  projectOverlayTwo.classList.remove("project__overlay--mobile-hover")
})


const projectOverlayThree = document.getElementsByClassName("project__overlay")[2]

projectOverlayThree.addEventListener("touchstart", function() {
  projectOverlayThree.classList.add("project__overlay--mobile-hover")
})

projectOverlayThree.addEventListener("touchend", function() {
  projectOverlayThree.classList.remove("project__overlay--mobile-hover")
})


const projectOverlayFour = document.getElementsByClassName("project__overlay")[3]

projectOverlayFour.addEventListener("touchstart", function() {
  projectOverlayFour.classList.add("project__overlay--mobile-hover")
})

projectOverlayFour.addEventListener("touchend", function() {
  projectOverlayFour.classList.remove("project__overlay--mobile-hover")
})