document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

var titleText = "Stabosa⁸⁷";
var titleSpeed = 250;
var intervalId;
var isDeleting = true;

function animateTitle() {
  var titleLength = titleText.length;
  var counter = titleLength;

  intervalId = setInterval(function() {
    if (isDeleting) {
      document.title = "@" + titleText.substring(0, counter);
      counter--;
      if (counter < 0) {
        isDeleting = false;
        counter = 0;
      }
    } else {
      document.title = "@" + titleText.substring(0, counter);
      counter++;
      if (counter > titleLength) {
        isDeleting = true;
        counter = titleLength;
      }
    }
  }, titleSpeed);
}

animateTitle();
