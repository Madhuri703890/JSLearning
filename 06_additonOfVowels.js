//Count vowels
var str="I am ui developer";
var count=0;
for (let index = 0; index <str.length-1; index++) {
    var char=str.charAt(index);
    if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U') {
      count=count+1;  
    }
    
    
}
console.log("Total vowels in string are",count);

//second way to count vowels

var str="I am ui developer";
var count=0;
var vowelsCap="AEIOU";
var vowelsLower="aeiou";
for (let index = 0; index <str.length-1; index++)
 {
    var char=str.charAt(index);
    if(vowelsCap.includes(char)||vowelsLower.includes(char)){
        count=count+1;
    }
    
}
console.log("Number of vowels are",count);