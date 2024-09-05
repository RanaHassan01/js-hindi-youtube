const score=400;
const balance= new Number (200);
console.log(balance);
console.log(score);
console.log(score.toString().length);
console.log(score.toFixed(2));

const othernum= 123.9876;
console.log(othernum.toPrecision(4))

const hundred =10000000;
console.log(hundred.toLocaleString()); //for US standard values
console.log(hundred.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(String.MAX_VALUE);
console.log(String.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//Maths -
//console.log(Math);
//console.log(Math.abs(-5));
//console.log(Math.abs(5));
//console.log(Math.round(4.5));
//console.log(Math.round(4.7));
//To specify round off
//console.log(Math.ceil(4.3)); //Roundoff to top(next number)
//console.log(Math.floor(4.3)); //Roundoff to lower like here 4
//console.log(Math.max(18,39,55,33,3388,94946,24005));
//console.log(Math.min(2343,05,39350,3563,2294,433));

//Math library is mostly used in random
console.log(Math.random()); //values is always 0-1 range ;decimal value like o.82727
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min +1))+min)








