console.log("=============Function with no argument & no return type============");
console.log("=================Que1==============");
function add()
{

}
function Submit()
{

}
console.log("NO Any Output showing");
console.log("=============Q.2personalDetails Function==============");
function personalDetails(firstName,lastName,collegeName)
 {
var firstName="Madhuri";
var lastName="Yadav";
var collegeName="Sinhgad";
console.log(firstName)
console.log(lastName)
console.log(collegeName)  
}
console.log("========================Q.3====================");
function swapValues(value1, value2)
{
    console.log("Value befor swap==>",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("value after swap==>", value1,value2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("==================Q.4=================");
function addThreeValues(v1,v2,v3)
{
    var add=v1+v2+v3;
    console.log("Addition=>", add);
}
addThreeValues(10.23,600,40)
addThreeValues("Hello", "Good", "Morning")
