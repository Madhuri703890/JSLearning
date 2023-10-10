console.log(`Create the object → ‘bankSbi’ using literals with at least 4 properties`);
const  bankSbi={
    bankBranch:'Pandharpur',
    banckIFSC:12345,
    banckManager:'Mr.John',
    bankLocation:'korti',
};
console.table(bankSbi);

console.log('Create the object → bankLocation using literals with properties: street, city, pin');
let bankLocation={
    street:'Fc Road',
    city:'Pune',
    pin:413307,

};
console.table(bankLocation);

console.log('Clone the step 1 ( bankSbi ) and step 2 ( bankLocation ) objects');
const clonedBank=Object.assign({},bankLocation);
console.table(clonedBank);

console.log(`rateOfInterest with properties`);
const rateOfInterest={
    homeLoanInterest:12,
    personalLoanInterest:7,
    dueInterest:8,
};
console.log(rateOfInterest);
console.log(`Merge the step 1, step 2 and step 4 objects into new object namely`);
const sbiDeatails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDeatails);

console.log(`Traverse this merged object - step 5 using for in loop and log details properly
10`);
for (const key in sbiDeatails) {
    
      console.log(`${key}=>${sbiDeatails}`);  
    
}