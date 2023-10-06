const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Find the total elements available or length and log on console`);
console.log(`${arrayNumber.length}`);

console.log(
  `Log the first element and last element in arrayNumbers and log on console`
);
console.log(`${arrayNumber[0]},${arrayNumber[arrayNumber.length - 1]}`);

console.log(
  `Log the third last element using length property and log on console`
);
console.log(`${arrayNumber[arrayNumber.length - 3]}`);

console.log(`Find the all even numbers using for in loop and log on console`);
let even = [];
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 == 0) even.push(arrayNumber[index]);
}

console.log(`even numbers are= ${even}`);

console.log(`Find the odd numbers for in loop and log on console`);
let odd = [];
for (let index = 1; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 != 0) odd.push(arrayNumber[index]);
}
console.log(`odd numbers are= ${odd}`);

console.log(`Find all the even positioned elements from arrayNumbers, sum it and log on console`);
for (let index = 0; index < arrayNumber.length; index+=2) {
    const element = arrayNumber[index];
    console.log(element);
}

console.log(`Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
for (let index = 1; index < arrayNumber.length; index+=2) {
    const element = arrayNumber[index];
    console.log(element);
}

console.log(`Find the sum of all elements from arrayNumbers, log on console`);
var sum=0;
for (let index = 0; index < arrayNumber.length; index++) {
    var sum = sum+arrayNumber[index];
    
}console.log(`Sum=${sum}`);

console.log(`Find the numbers which are multiple of 5`);
var div=0;
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index]%5==0)
    var div = div+arrayNumber[index]+" ";  
}console.log(div);

console.log(`Is number 115 available in arrayNumbers ?`);
console.log(`${arrayNumber.includes(115)}`);

console.log(`Is number 23 available in arrayNumbers ?`);
console.log(`${arrayNumber.includes(23)}`);

console.log(`Insert numbers → 55, 66 before index 3 and log array on console`);
arrayNumber.splice(1,0,55,66);
console.log(arrayNumber);

console.log(`Delete 3 elements starting from index 4 and log arrayNumbers on console`);
arrayNumber.splice(4,3);
console.log(arrayNumber);