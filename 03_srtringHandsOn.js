console.log();
function stringHandsOn()
 {
    
}
stringHandsOn();
var v1="  Hey you are doing good, keep it up  ";
console.log("Given String is===>",v1);
var  length=v1.length;
console.log("Lenght of string is ",length);
var spaceRemmove=v1.trim();
var afterTrim=spaceRemmove.length;
console.log("After removing space string looking like==>",spaceRemmove,"Having length=",afterTrim);
var numberOfSpaces=v1.split(" ").length;
console.log("Extra spaces count=",numberOfSpaces);
var firstChar=spaceRemmove.charAt(0);
var lastChar=spaceRemmove.charAt(spaceRemmove.length-1);
console.log("First Character=",firstChar,"LastChar=",lastChar);
var index=spaceRemmove.indexOf("good");
console.log("Indx string is=>",index);
var substring=spaceRemmove.substring(22);
console.log("Substring at 22==>",substring);
var stringend=spaceRemmove.endsWith("up");
console.log("String end with up=>",stringend);
var stringstart=spaceRemmove.startsWith("Hey");
console.log("String start with Hey=>",stringstart);
var wordCount=spaceRemmove.split(" ").length+2;
console.log("Total word count=>",wordCount);