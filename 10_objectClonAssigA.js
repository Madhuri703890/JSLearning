let bankSbi = {
  bankName: "SBI",
  IFSCCode: 123456,
  bankLocation: "Pune",
  bankManager: "Mrs.Jenny",
};

let bankLocation = {
  street: "Shivaji road",
  city: "Pune",
  pin_code: 413304,
};
var clonebank = Object.assign({}, bankSbi, bankLocation);
console.table(clonebank);
const rateOfInterest = {
  homeLoanInterest: 12,
  personalLoanInterest: 7,
  dueInterest: 8,
};

let sbiDeatails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDeatails);
for (const key in sbiDeatails) {
  const element = sbiDeatails[key];

  console.log(`${key}=>${element}`);
}
