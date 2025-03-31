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
        alert('Please don’t inspect elements.');
      }
    }, 1000);
  })();
  
  