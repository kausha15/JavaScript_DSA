//Iterative Solution - O(n) - optimal solution
function fibonacci(n){
    const fib = [0,1];
    for(let i=2; i<n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
    
  }

  //Recursive Solution - O(2^n)
  function recursiveFibonacci(n){
    if(n < 2) return n;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
  }
  
  console.log(fibonacci(0))
  console.log(fibonacci(1))
  console.log(fibonacci(6))