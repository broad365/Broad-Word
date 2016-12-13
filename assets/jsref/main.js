$(document).ready(function(){
  $(".fullscreen").click(function(){
    chrome.app.window.current().fullscreen();
  });
});
