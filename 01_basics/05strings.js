var name="Rana Hassan";
var repocount=3;
//not recommended method of string concatenation :-
console.log("My name is "+ name+ " " +"and my repository count is " + repocount +".");
 
//recommended method for string concatenation (``) "string interpolation"  , ${} :-
console.log(`My name is ${name} and my repository count is ${repocount}.`);


//another way to declare string :-

const gamename = new String("Rana_Khan")

console.log(gamename[3]); //to access keyvalue pair
console.log(gamename.__proto__); // to access prototypes
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(6));
console.log(gamename.indexOf('K'));
const newstring=gamename.substring(0,4);
console.log(newstring);
const anotherstring=gamename.slice(0,6); //we can used negative value in slice method.
console.log(anotherstring);
const string1="     Rana      ";
console.log(string1);

console.log(string1.trimStart());
console.log(string1.trimEnd());
console.log(string1.trim());

const url= "https://rana.com/rana%20khan"
console.log(url);

console.log(url.replace('%20','_'));
console.log(url.includes('khan')); //to check whether it is present or not
console.log(url.includes('5'));
console.log(gamename.split('_'));












