let personalDetails={
    fname:"Madhuri",
    lName:"Yadav",
    Location:"Pandharpur",
    pin:413304,    
};
console.log(personalDetails);
let collegeDetails={
    collegeName:"Sinhgad",
    graduation:"BCS",
    postGraduation:"MCA",
    grade:"First classwith distinction",

};
//merge two object
let mergeObject=Object.assign({},personalDetails,collegeDetails)
console.table(mergeObject);
//freex method
console.log(`array of friend name & freez`);
let friend=['Smita','Rudhira','Guari','Prjakta'];
Object.freeze(friend);
//friend.push('madhuri');
//for of loop-iterarte array
console.log(friend);
for (const iterator of friend) {
    console.log(iterator);
}
//string reverse
var str='Codmind Technology';
var indexstring=str.indexOf('Technology');
var tech=str.slice(8,str.length);
//console.log(tech);
//console.log(indexstring);

console.log("By using string methods revresr of technology");
    var splitStr=tech.split("");
    console.log(splitStr);
    var techReverse=splitStr.reverse("");
    console.log(techReverse);
    var joinTech=techReverse.join("");
    console.log(joinTech);


//for loop
console.log('reversing by for loop');
let reserved="";
for (let index = tech.length-1; index>=0; index--) {
  reserved=reserved+tech[index]+"";
  
    
}console.log(`Technology revers by=${reserved}`);