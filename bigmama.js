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
document.addEventListener("DOMContentLoaded", function() {
  var profilePicture = document.getElementById("profile");
  var typedText = "";

  document.addEventListener("keydown", function(event) {
    if (event.key.length === 1) {
      typedText += event.key.toLowerCase();
      if (typedText.slice(-4) === "spin") {
        profilePicture.classList.toggle("spin-animation");
        typedText = "";
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var cssLink = document.getElementById('css-link');
  var typedText = "";

  document.addEventListener("keydown", function(event) {
    if (event.key.length === 1) {
      typedText += event.key.toLowerCase();
      if (typedText.slice(-4) === "lsd") {
        cssLink.href = 'lsd.css';
        typedText = "";
      }
    }
  });
});
fetch('https://api.lanyard.rest/v1/users/810404168702361611')
.then(response => response.json())
.then(data => {
    if (data.success && data.data.discord_user) {
        const avatarHash = data.data.discord_user.avatar;
        const status = data.data.discord_status;
        const avatarUrl = `https://cdn.discordapp.com/avatars/810404168702361611/${avatarHash}.png`;
        document.getElementById('profile').src = avatarUrl;
        const statusElement = document.getElementById('status');
        statusElement.textContent = "Status: " + status;
        statusElement.className = status === 'online' ? 'online' : status === 'dnd' ? 'dnd' : 'offline';
    } else {
        console.error('Error: Unable to fetch user data');
    }
})
.catch(error => {
    console.error('Error:', error);
});