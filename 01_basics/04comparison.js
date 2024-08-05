//Basic comparisiom (with same data types)//

console.table([2>1,2<1,2>=1,2<=1,2!=1,2==1])


//Comparision with different data types (chances to get stuck) //

console.table(["2">1, "2"<1,"02">1,"02"<1, 2<"01",02>"1"])

//Output is unpredictable (because firstly it converts (conversion is differentP) and then it compares.... These types of comparisions are very confusing so it should be avoided .//

console.table([null>0, null<0, null<=0,null>=0]) //working syntax  of == and <,>are different in JS//
console.table([undefined>0,undefined<0,undefined<=0,undefined>=0])


//Strict Check(===)  conversion will not be done in strict check , it will not compare as both have different data types //

console.log("2"===2)
