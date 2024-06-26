const arr = [1, 2, 3, 'abc'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift()

for(const item of arr){
    console.log(item);
}

//map, filter, reduce, concat, slice and splice

/* Big-O : 
Insert/remove from end - O(1)
Insert/remove from beginning - O(n)
Access - O(1)
Search - O(n)
Push/Pop - O(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

*/