(function(window) {
  var speakWord = "Good Bye";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  window.speakGoodBye = speak;

})(window);