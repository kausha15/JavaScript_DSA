// Using Recursion
//Big-O : O(n)
function factorial(n){
    if(n === 0) return 1;
    return n*factorial(n-1);
}

console.log(factorial(2))
console.log(factorial(4))
console.log(factorial(7))

//Using for loop
//Big-O : O(n)
function factorialLoop(n){
    let result = 1;
    for(let i = 2; i<=n; i++){
        result = result*i;
    }
    return result
}
