// Using Remainder - O(logn)
function isPowerOfTwo(n){
    if(n < 1) return false; 

    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

// Using Bitwise - optimal solution - O(1)
function isPowerOfTwoBitwise(n){
    if( n < 1) return false;
    return (n & (n-1)) === 0;
}


console.log(isPowerOfTwoBitwise(1)); //true
console.log(isPowerOfTwoBitwise(2)); //true
console.log(isPowerOfTwoBitwise(5)); //false