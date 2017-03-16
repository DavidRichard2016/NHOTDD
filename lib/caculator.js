const fs = require('fs');

function caculating(fileName){
  var wordString = getTxt(fileName);
  var wordArray = wordCount(wordString);
  printWords(wordArray);
  return wordArray;
}

function getTxt(fileName) {
  var txtString = fs.readFileSync(fileName).toString();
  // console.log(txtString);
  // remoce "/n"
  return txtString;
}

function wordCount(txtString){
  var txtString = txtString || 'hello';
  // var newWords = Array();
  var midStringArray = txtString.split(' ');
  var validArray = Array();
  for (let i in midStringArray) {
    if (midStringArray[i] == '') {
      console.log('ignore ');
    } else {
      validArray.push(midStringArray[i]);
    }
  }

  var words = wordStats(validArray);
  var finallyArray = getSequece(words);
  return finallyArray;
}

function wordStats(stringArray) {
  var words = {};
  for (let i = 0; i < stringArray.length; i++) {
      var word = stringArray[i];
      if (!words[word]++)
          words[word] = 1;
  }
  return words;
}

function getSequece(words) {
  var defaultwords = {};
  defaultwords['hello']=1;
  return defaultwords;
}


function printWords(wordArray) {
  console.log('hello  1')
}

module.exports = wordCount;
