function greaterNumber(num1,num2)
 {
 var num1;
 var num2;

 var result=num1>num2?'gearter':'smaller';
 console.log(num1,"is", result,"than",num2);   
}
console.log("===========================Q.1===============");
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("==========================Q.2=================");
function isEvenOrOddNum(value1)
 {
var value1;
var result= value1 % 2===0? 'Even':'odd';  
console.log(value1,"is",result,"number");  
}
//console.log(isEvenOrOddNum(29));
//console.log(isEvenOrOddNum(44));
//console.log(isEvenOrOddNum(0));
//console.log(isEvenOrOddNum(101));
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("============================Q.3=====================");
function evenOddLength(str1)
 {
var str1;
var strLength=str1.length;
var evenOddString=strLength%2===0?'Even':'Odd';  
console.log(str1,"having string length is",evenOddString);  
}
evenOddLength("JavaScript");
evenOddLength("developer");
evenOddLength("Google");

