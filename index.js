document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  
  document.onkeydown = function (e) {
    if (e.keyCode == 123) { // F12 key
      return false;
    }
  };

  (function() {
    var isInspecting = false;
    setInterval(function() {
      if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        isInspecting = true;
      
      }
    }, 1000);
  })();
  

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.mob-elem');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isActive = navLinks.classList.contains('active');
  openIcon.style.display = isActive ? 'none' : 'inline';
  closeIcon.style.display = isActive ? 'inline' : 'none';
});

      window.addEventListener("load", function() {
          document.getElementById("preloader").style.display = "none";
});


// Close popup when the X button is clicked
  document.getElementById('closeImagePopup').onclick = function() {
    document.getElementById('imagePopup').style.display = 'none';
  };

  // Show popup on page load
  window.onload = function() {
    document.getElementById('imagePopup').style.display = 'flex';
  };