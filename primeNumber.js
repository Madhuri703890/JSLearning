/*var num;

function primeNumber(num) {
     for (let index = 2; index <=num; index++) {
       if
       (num%index==0)
        {return false;}
        return true;
     }     

}
console.log(primeNumber(11));
console.log(primeNumber(12));
console.log(primeNumber(22));*/

/*function test_prime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(test_prime(37));
  console.log(test_prime(21));*/

  function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  
}}

console.log(test_prime(21));