(function() {
   var modal = document.querySelector('#myModal');
   var playerContainer = modal.querySelector('.modal-content');
   var player = modal.querySelector('#video-player');

   var buttons = document.querySelectorAll('.button-watch');
   buttons.forEach(function(button) {
     button.addEventListener("click", function(event) {
       var video = event.target.getAttribute('data-video');
       loadVideo(video);
     }, false);
   });

   function resizeVideo(width) {
     var diff = width * 0.032;
     var widthAttribute = width - diff;
     var heightAttribute = width *9 / 16 - diff * 9 / 16;
     var windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
     if(heightAttribute > windowHeight) {
        heightAttribute = windowHeight*0.9;
        widthAttribute = 16 * heightAttribute / 9;
     }
     player.setAttribute('width', widthAttribute);
     player.setAttribute('height', heightAttribute);
   }

   function loadVideo(video) {
     modal.style.display = "block";
     resizeVideo(playerContainer.offsetWidth)
     player.src = "http://jonathan-giamporcaro.com/videos/"+video+".mp4";
   }

   window.onclick = function(event) {
    if(event.target !== modal)
      return;
    player.pause();
    modal.style.display = "none";
   }
})();
