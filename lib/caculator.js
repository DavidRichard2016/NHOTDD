const fs = require('fs');

var caculator = {}

caculator.caculating = function (fileName){
  var wordString = getTxt(fileName);
  var wordArray = wordCount(wordString);
  printWords(wordArray);
  return wordArray;
}

caculator.getTxt = function (fileName) {
  var txtString = fs.readFileSync(fileName).toString();
  // console.log(txtString);
  // remoce "/n"
  return txtString;
}
caculator.wordCount = function (txtString){
  // var txtString = txtString || 'hello';
  // // var newWords = Array();
  // var midStringArray = txtString.split(' ');
  // var validArray = Array();
  // for (let i in midStringArray) {
  //   if (midStringArray[i] == '') {
  //     console.log('ignore ');
  //   } else {
  //     validArray.push(midStringArray[i]);
  //   }
  // }
  //
  // var words = {};
  // for (let i = 0; i < stringArray.length; i++) {
  //     var word = stringArray[i];
  //     if (!words[word]++)
  //         words[word] = 1;
  // }
  // var finallyArray.sort(getSequece('count'));
  // return finallyArray;
  var words = [
    {name:'hello',count:4},
    {name:'test',count:3},
  ];
  return words;
}

caculator.getSequece = function (property) {
  return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
  }
}
caculator.print = function(wordsarray) {
  for (let i in wordsarray) {
    let word = wordsarray[i];
    console.log( word['name'] + ':' +  word['count']);
  }
}

module.exports = caculator;
