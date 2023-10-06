//declaring array
const arrayFruits=["banana","orange","Apple","Mango","Water melon"];
console.log("=====================Q1.log first and last element=================");
console.log(`Given array is =${arrayFruits}`);
var firstElement=arrayFruits[0];
console.log(`First elelment of array is=${firstElement}`);
console.log(`Last index element is=${arrayFruits[arrayFruits.length-1]}`);

console.log(`=================Q2.Add papaya before banana==============`);
arrayFruits.splice(0,0,"papaya");
console.log(arrayFruits);

console.log(`================Q.3 remove mango from array==========`);
arrayFruits.splice(4,1);
console.log(arrayFruits);

console.log(`================Q.4 insert element at last-pinapple=====`);
arrayFruits.push("pinapple");
console.log(arrayFruits);

console.log(`================Q.5 insert dragon fruit before water melon======`);
arrayFruits.splice(4,0,"dragon Fruit");
console.log(arrayFruits);

console.log(`================Q.6. replace orange with kiwi===================`);
arrayFruits.splice(2,1,"kiwi");
console.log(arrayFruits);

console.log(`================Q.7 element from 1 to4 index=====================`);
var sliceElement=arrayFruits.slice(1,5);
console.log(sliceElement);
//console.log(arrayFruits.indexOf("dragon fruit"));

console.log(`================Q.8.last 3 element==================`);
//var lastElement=arrayFruits[arrayFruits.length-1];
//console.log(lastElement);
console.log(arrayFruits[arrayFruits.length-1],arrayFruits[arrayFruits.length-2],arrayFruits[arrayFruits.length-3]);