// let names = ["Bill", "John", "Jen", 
//             "Jason", "Paul", "Frank", 
//             "Steven", "Larry", "Paula", 
//             "Laura", "Jim"];

// for () {

  
//   if () {
    
//   } else {
    
//   }
// }

let names = ["Bill", "John", "Jen", 
            "Jason", "Paul", "Frank", 
            "Steven", "Larry", "Paula", 
            "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  let currentName = names[i];
  
  if (currentName.charAt(0).toLowerCase() === 'j') {
    personGoodBye.speakGoodbye(currentName);
  } else {
    personGreeter.speakHello(currentName);
  }
};


console.log("--------------Для нової вибірки----------------");
console.log("Нова вибірка була здійснена по залежності від останньої літери імені людини. У даному випадку, по літері 'a'");

let names_new = ["Bill", "John", "Jen",
                "Jason", "Paul", "Frank",
                "Steven", "Larry", "Paula",
                "Laura", "Jim"];

for (let i = 0; i < names_new.length; i++) {
 let currentName = names_new[i];
  
 if (currentName.charAt(0).toLowerCase() === 'j') {
    personGoodBye.speakGoodbye(currentName);
 } else if (currentName.charAt(currentName.length - 1).toLowerCase() === 'a') {
    personGoodBye.speakGoodbye(currentName);
 } else {
    personGreeter.speakHello(currentName);
 }
};