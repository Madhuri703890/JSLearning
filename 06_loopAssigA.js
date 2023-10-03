//Count Vowels
console.log("==================Vowels in String=================");
var str = "I am very good It Developer";
var vowelsCap = "AEIOU";
var vowelsLower = "aeiou";
var count = 0;
for (let index = 0; index < str.length - 1; index++) {
  var char = str.charAt(index);
  if (vowelsCap.includes(char) || vowelsLower.includes(char)) {
    count = count + 1;
  }
}
console.log("Number of vowels are", count);

//sum of cube
console.log("=====================Sum of cube numbers from 1 to 5=======");
count = 0;
for (let index = 0; index <= 5; index++) {
  count = count + index * index * index;
}
console.log("Sum of cubes are=", count);

//odd position characters
console.log("================odd position characters are=================");
var str1;
//var charIndex=0;
var print = " ";
var newString = 0;
function oddPositionChars(str1) {
  for (let index = 1; index < str1.length - 1; index += 2) {
    //For space remove
    var newString = str1.split(" ").join("");
    //console.log("new",newString);

    var print = newString.charAt(index);
    console.log(print);
  }

}

oddPositionChars("hard work always pays back");
console.log("====================Odd position data=========");
oddPositionChars("Soon I will be UI IT Champ");
