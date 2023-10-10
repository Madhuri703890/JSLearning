//class for vehicle
class vehicle{
brand;
chasinumber;
model;
fuel;
average;
constructor(brand,chasinumber,model,fuel,average)
{
    this.brand=brand;
    this.chasinumber=chasinumber;
    this.model=model;
    this.fuel=fuel;
    this.average=average;
}
}
console.log(`===========================Model-1============================`);
let model1=new vehicle("honda",1234,"1990","petrol",27);
console.log(model1);
console.log(`===========================Model-2============================`);
let mode2=new vehicle("Mahindra",1564,"1995","petrol",28);
console.log(mode2);
console.log(`===========================Model-3============================`);
let model3=new vehicle("honda",3690,"1990","disel",37);
console.log(model3);
console.log(`===========================Model-3============================`);
let model4=new vehicle("mahindra",1234,"2005","petrol",17);
console.log(model4);
console.log(`===========================Model-5============================`);
let model5=new vehicle("Bajaj",6674,"1990","petrol",30);
console.log(model5);
console.log(`==============================Q.2==========================`);
//class for collge
class collge{
    collegeName;
    branch;
    location;
    brand;
    constructor(collegeName,branch,location,brand)
    {
        this.collegeName=collegeName;
        this.branch=branch;
        this.location=location;
        this.brand=brand;
    }
    display()
    {
        console.log(`I love my college ${this.collegeName}`);
        console.log(`College having ${this.branch} branch`);
        console.log(`Address=${this.location}`);
        console.log(`brand is ${this.brand}`);
    }
}
let collge1=new collge("SKN","CSE","Pune","Sinhgad");
console.log(collge1);
let collge2=new collge("SPSPM","MECH","SATARA","MIT");
console.log(collge2);
let collge3=new collge("SKSCOE","CIVIL","SATARA","ORCHID");
console.log(collge3);
let collge4=new collge("SPSPM","ELECTRICAL","PANDHARPUR","SINHGAD");
console.log(collge4);



//collge.display();
let display1=collge1.display();
console.log(`====================Function call=====================`);
function traverseObject(collge) {
    for (const key in collge) {
        const element = collge[key];
            console.log(`${key}=> ${element}`);
            //console.log( `${key}=> ${collge.branch}`);
        
    }
}
var t1=traverseObject(collge1);
console.log(`======================================`);
var t2=traverseObject(collge2);
console.log(`======================================`);
var t3=traverseObject(collge3);
console.log(`======================================`);
var t4=traverseObject(collge4);
//console.log(t1);

