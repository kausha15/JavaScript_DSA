
//Big-O : O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod){
    //n = no of disks
    if(n === 1){
        console.log(` Move disk 1 from ${fromRod} to ${toRod} `);
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod);

}

console.log(towerOfHanoi(3, 'A', 'C', 'B'))