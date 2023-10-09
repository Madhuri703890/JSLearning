const num=[11,22,33,44,55];
for (const key in num) {
    if (Object.hasOwnProperty.call(num, key)) {
        const element = num[key];
        console.log(key,element);
    }
}
for (const key in num) {
    
        const element = num[key];
        console.log(element); 
       console.log(`Index=${key},element=${element}`);
    
}



/*console.log(`Find the odd numbers for in loop and log on console`);
let odd = [];
for (let index = 1; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 != 0) odd.push(arrayNumber[index]);
}*/


let even=0;
for (const key in num) {
    //if (Object.hasOwnProperty.call(num, key)) {
        const element = num[key];
       // if(num[key]%2==0);
            console.log(num[element]%2==0);
        
        
}
let result=""
let sum=0;
for (const index in num) {
   if ((num[index])%2==0) {

      const element = num[index];
      result=result+ element+"  "
      sum=sum+element;
   
     }
}

console.log(`Even Numbers Values Are==>>|${result}|`);

