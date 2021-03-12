function main() {
  var myNoun = "dog ";
  var myVerb = "ran ";
  var myAdjective = "big ";
  var myAdverb = "quickly.";
  var wordBlanks = "My little " + myNoun + myVerb + "fast but your " + myAdjective + "dog is " + myAdverb;

  return wordBlanks;
}

console.log(main());
module.exports = main;
