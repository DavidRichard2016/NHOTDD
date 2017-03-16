function caculating(fileName){
  return words;
}

function getTxt(fileName) {
  let txtString = "w";
  return txtString;
}

function wordCount(txtString){
  var txtString = 'hello';
  // var newWords = Array();
  var midStringArray = txtString.split(' ');
  var validArray = Array();
  var finallyArray = Array();
  for (let i in midStringArray) {
    if (midStringArray[i] == '') {
      console.log('ignore ');
    } else {
      validArray.push(midStringArray[i]);
    }
  }

  finallyArray.push(['hello',1])
  debugger;
  return finallyArray;
}


function printWords() {
  console.log('w 1')
}

module.exports = wordCount;
