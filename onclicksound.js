document.addEventListener("click", function(event) {
    var clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0;
    clickSound.play();
  });