// Mobile menu script
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
})

// Mobile project hover effect

document.querySelectorAll('.project__overlay').forEach(function(imageHoverOn) {
  imageHoverOn.addEventListener('touchstart', function() {
   imageHoverOn.classList.add("project__overlay--mobile-hover")
   console.log(imageHoverOn.innerHTML);
   console.log('clicked')
  });
});

document.querySelectorAll('.project__overlay').forEach(function(imageHoverOff) {
  imageHoverOff.addEventListener('touchend', function() {
   imageHoverOff.classList.remove("project__overlay--mobile-hover")
   console.log('clicked off')
  });
});

