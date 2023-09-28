function malMarriageEligibility(gender,age,boyName)
{
    var gender;
    var age;
    var boyName;
   var result= gender=="Male"&& age>=21?"Eligible":"Not eligible";
    console.log("Hey",boyName ,"yor are",result,"for marriage");
}
console.log("======================Q1=================");
malMarriageEligibility("Male",25,"Billgates");
malMarriageEligibility("Male",17,"Stev Jobs");
console.log("======================Q.2================");
function femaleMarriageEligilbility(gender,girl,girlName)
 {
var gender;
var age;
var girlName;
var result1=gender=="Female"&&age>=18?"eligible":"not eligible";
//"Hey" ${girlName}"yor are eligible for marriage":"Sorry"${girlName}"you are not eligible";

console.log("hey",girlName,"you are",result1,"for marriage");    
//console.log(result1);
}
femaleMarriageEligilbility("Female",16,"Jenifer");
femaleMarriageEligilbility("Female",27,"Malinda Gates");