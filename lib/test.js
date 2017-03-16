var arr = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}
b = arr.sort(compare('age'))
for (var v in b) {
  s = b[v]
  console.log(s);
  console.log( s['name'] + ':' +  s['age'])

}
