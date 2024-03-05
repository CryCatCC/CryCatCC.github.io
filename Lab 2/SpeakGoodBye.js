// let speakWord = "Good Bye";


// function speak(name) {
//   console.log(speakWord + " " + name);
// }


// let speakWordGoodbye = "Good Bye";

// function speakGoodbye(name) {
//   console.log(speakWordGoodbye + " " + name);
// }


(function (window) {
  let personGoodBye = {};
  personGoodBye.speakWordGoodbye = "Good Bye";

  personGoodBye.speakGoodbye = function (name) {
    console.log(personGoodBye.speakWordGoodbye + " " + name);
  }

  window.personGoodBye = personGoodBye;
})(window);