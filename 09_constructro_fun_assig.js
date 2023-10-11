//function constructor bank
function bank(bankName,location,ifscCode,branchCode)
{
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
//creating object
let yesbank=new bank("yesBank", "Satara", 42847865479,1234);
let sbibank=new bank("sbibank", "Pune", 42847865479,1234);
let mahbank=new bank("mahbank", "Kolhapur", 42847865479,1234);
let axisbank=new bank("axisbank", "Mumbai", 42847865479,1234);
//log object
console.log(`BankDeatials are ${yesbank.bankName},${yesbank.location},${yesbank.ifscCode},${yesbank.branchCode}`);
console.table(sbibank);
console.log(mahbank);
console.log(axisbank);

//prototype
bank.prototype.openTime="9 am IST";
console.table(sbibank);
console.log(`Axis bank openeing time =${axisbank.openTime}`);
console.log(`Mha bank openeing time =${mahbank.openTime}`);
//prototype
bank.prototype.closeTime="6 PM IST";
console.log(`SBI bank closing time=${sbibank.closeTime}`);
console.log(`Bank Name==>${yesbank.bankName}Branch Code==>${yesbank.branchCode}Banck opening time==>${yesbank.openTime}`);