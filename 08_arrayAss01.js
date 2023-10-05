console.log("Given array is=");
let arrayNumber=[22,11,44,55,77,33];
console.log(arrayNumber);

console.log(`Q.1Even number positon number`);
for (let index = 0; index < arrayNumber.length; index+=2) {
    const element = arrayNumber[index];
    console.log(element);
}

console.log(`Q.2Sum of array elements`);
var sum=0;
for (let index = 0; index < arrayNumber.length; index++) {
    //const element = arrayNumber[index];
    sum=sum+arrayNumber[index];
    
}console.log(`sum of array element is=${sum}`);