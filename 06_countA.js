//count A or a
/*var str1;
var count=0;
function countCharA(str1) {
    for (let index = 0; index <str1.lenght-1; index++) {
       var char=str1.charAt(index);
       if (char=='a'||char=='A') {
        count=count+1;
        
       }//console.log("String having",count,"a/A");
       
    }
}console.log(count);

//countCharA("I am learning JavaScript,The Language of internet");
countCharA("madhuri");*/

var str; //="I am ui developer";
var count = 0;
var aplpha = "a";
function charCountA(str) {
  for (let index = 0; index < str.length - 1; index++) {
    var char = str.charAt(index);
    // if (char=='a'||char=='A') {
    if (aplpha.includes(char)) {
      count = count + 1;
    }
  }
}

console.log("Total vowels in string are", count);
charCountA("madhuri");
