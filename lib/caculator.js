const fs = require('fs');

var caculator = {
}

caculator.caculating = function (fileName){
  var wordString = getTxt(fileName);
  var wordArray = wordCount(wordString);
  printWords(wordArray);
  return wordArray;
}

caculator.getTxt = function (fileName) {
  var txtString = fs.readFileSync(fileName).toString();
  return txtString;
}
caculator.datatransform = function (strings) {
  var midTxt = strings.split(/\s/);
  // trim blank
  var newTxt = midTxt.filter(
    function(data){
       if (data !== '')
       return true ;
    }
  );
  return newTxt;
}
caculator.wordCount = function (txtString){
  var txtString = txtString || 'hello';
  var words = {};
  for (let i = 0; i < txtString.length; i++) {

      var word = txtString[i];
      if (!words[word]++)
          words[word] = 1;
  }
  console.log(words);
  var newwords = []
  for (var key in words) {
    // console.log('key is' + key);
    newwords.push({
      name:key,
      count:words[key]
    })
  }
  return newwords;
}

caculator.getSequece = function (property) {
  return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
  }
}
caculator.print = function(wordsarray) {
  for (let i in wordsarray) {
    let word = wordsarray[i];
    console.log( word['name'] + ':' +  word['count']);
  }
}
// caculator.getTxt('./data/word.txt')
// a = 'hello test test word word'
// b = a.split(' ')
// console.log(b);
// caculator.wordCount(b)
module.exports = caculator;
