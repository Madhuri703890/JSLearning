const numArray=[1,2,3,4,5,];
console.log(`=============while loop===========`);
let index=0;
while (index<numArray.length) {
    console.log(numArray[index]);
    index++;
}

console.log(`=============do while loop===========`);
//let key=0;
do {
    console.log(numArray[index]);
} while (index<numArray.length);
index++;