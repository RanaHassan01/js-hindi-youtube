//Java Script (JS) is dynamic typed language.

//There are 2 types of data in JS. 

  // i. Primitive Data Types          ii. Non Primitive Data Types(Reference Type)


//i. PRIMITIVE DATA TYPES : -

 //    7 types;

  //1.String  -  

  const str1 = "Thos cannot be changed.";  
  let str2 ="My name";

  //2.Number  -  
  
  const score = 100;  
  const scorevalue = 100.10;

  //3.Boolean -  
  
  const ISloggedIN = false;

  //4.Symbol  -   
  const id = Symbol('1234');  
  const anotherid = Symbol('1234') 
   // both are uniques because of "Symbol data type". To verify we can simple do - 
   console.log(id===anotherid);

  //5.Null    -  
  const temperature = null;

  //6.BigInt  -  
   const bigNumber = 26353248327263136n;
   
  //7.Undefined -
   let email;  
   let useremail = undefined;


  //ii. NON PRIMITIVE DATA TYPES :-

 // 1.Array     -   
 const superheros = ["Krish", "G-One", "Shaktiman"];
  //2.function  -   
  function greet(greetings,name) {
    console.log(greetings + ","  + name + "!");
  }
  
  greet("Good Morning","Alice"); 
  
  //3.Objects   -  
   const studentDetail ={ name : "Rana Hassan",  rollNUmber:'2345', age:21 }


console.log(typeof superheros);
console.log(typeof greet);
console.log(typeof studentDetail);

console.log(typeof (str1,str2));
console.log(typeof (score, scorevalue));
console.log(typeof ISloggedIN);
console.log(typeof (id,anotherid));
console.log(typeof temperature); //null is object type.
console.log(typeof bigNumber);
console.log(typeof (email,useremail));



//link for understanding types of -     https://262.ecma-international.org/5.1/#sec-11.4.3