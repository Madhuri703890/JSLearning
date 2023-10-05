let array=[10,20,30,40,50,60];
console.log(typeof array);
console.log(array);

//lenght of array
console.log(array.length);
console.log(`Ayyay length is ${array.length}`);

console.log(`====Accessing and updating array value=========`);
console.log(`Second element in array ${array[1]}`);
console.log(`last index value ${array[array.length-1]}`);

//update array values
array[2]=100;
console.log(array);

//index of array
console.log(`=======================index=============`);
console.log(array.indexOf(100));

//traversing and visiting array
console.log(`==============traversing array============`);
let arrayNum=[22,11,44,55,77];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
}
console.log(`=========traversing array in reverse order========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

