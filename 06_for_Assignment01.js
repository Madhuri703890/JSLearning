console.log("========Q.1=========");
var result1="";
for(let index = 0; index < 15; index++) {
    result1=result1+ index+" ";
    //console.log(index );
    
}
console.log(result1);

console.log("========Q.2========");
var result2="";
for (let index = 50; index >= 40; index--) {
   result2=result2+index+" ";
  // console.log(index); 
    
}
console.log(result2);

console.log("============1st 10 even number======");
var result="";
for (let index = 2; index <= 20; index+=2) {
   result=result+ index +" ";
   //console.log(index);
}
console.log(result);

console.log("====================1st 15 odd number=============");
var result3="";
for (let index = 1; index <=31; index+=2) {
   result3=result3+ index+ " ";   
}
console.log(result3);

console.log("=============table of 5==========");
var table5="";
for (let index = 5; index <= 50; index+=5) {
   table5=table5+index+" ";
}
console.log(table5);

console.log("==============table of 10=============");
var table10="";
for (let index = 10; index <100; index+=10) {
   table10=table10+index+" ";
   
}
console.log(table10);

console.log("===============Reverse table of 10============");
var tablerev="";
for (let index = 100; index >= 10; index-=10) {
   ;   tablerev=tablerev+index+" ";
}
console.log(tablerev);