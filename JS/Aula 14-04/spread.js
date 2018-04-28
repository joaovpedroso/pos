var a = [10,20,30];
var b = ['a','b',a];

console.log(b);

var b = ['a','b',...a];
console.log(b);

spread = [...a, ...b];
console.log(spread);