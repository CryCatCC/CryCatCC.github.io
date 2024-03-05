// let speakWord = "Hello";


// function speak(name) {
//   console.log(speakWord + " " + name);
// }


// let speakWordHello = "Hello";

// function speakHello(name) {
//   console.log(speakWordHello + " " + name);
// }

(function (window) {
  let personGreeter = {};
  personGreeter.speakWordHello = "Hello";

  personGreeter.speakHello = function (name) {
    console.log(personGreeter.speakWordHello + " " + name);
  }

  window.personGreeter = personGreeter;

})(window);