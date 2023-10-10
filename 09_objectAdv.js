//How to get all entries from objects
const person={
    name:'mr.john',
    age:20,
};
var entriObject=Object.entries(person);
console.log(entriObject);
var keyObject=Object.keys(person);
console.log(keyObject);
var valueObject=Object.values(person);
console.log(valueObject);

const array0th = entriObject[0]; //how access array element
console.log(array0th);
const array1st = entriObject[1];
console.log(array1st);

for (const element of  entriObject) {
    console.log(element[0],element[1]); //nested array
}
//for in loop=traversing an object
for (const key in person) {
   console.log(key,person[key]);
}

const isNameAvailable =  'name' in person;
console.log(isNameAvailable);

const isMarriedAvailable='married' in person;
console.log(isMarriedAvailable);

//one reference variable cant point
const personJenny={
    name:"Jenny",
    age : 22,
    isMarried:true,
    city:"pune"
}
personJenny.age = 25;
console.log(personJenny);
personJenny.city='satara';
console.log(personJenny.city);
console.table(personJenny);
//changing value of constatnt
personJenny.name='abc';
console.log(personJenny.name);

// personJenny= {};//constant value which is not allowed
// const city = "Pune";
// city = "Mumbai";  

//freeze object=freez it provides variable or object to no change policy.
Object.freeze(personJenny);
personJenny.city = "Lucknow";
console.log(personJenny);

//object assigned
console.log(`object.assigned()`);
let elon ={
    name:"elon",
    age : 54,
    isMarried:true,
    city:"USA"
}
//clone=cloning means copy all data or object as it is in second object
const elonClone = Object.assign({},elon) //step5 sbidetails
 console.log(elonClone);

 //conacate assign merge method
console.log(`merging an object`);
let stew ={
    name:"elon",
    age : 54,
    isMarried:true,
    city:"USA"
}
const address ={
    pin: 234567,
    city:"Austin Texas"
}
Object.assign(stew,address);
console.table(stew);


for (const iterator of object) {
    
}