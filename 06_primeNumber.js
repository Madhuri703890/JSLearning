//prime number
var num;
function primeNumber(num) {
    for (let index = 1; index <=num; index++) {
        
        if (num%index==0) {
            console.log("prime");
        } else {
            console.log("not prime");
        }
    }
}
primeNumber(12);