const obj = {
    name: 'Bruze',
    age: 25,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name)
    }
}
obj.hobby = 'football';
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()

//Object.keys(), values(), entries()

/* Big-O :
Insert/Remove/Access - O(1)
Search - O(n)
Object.keys() / values() / entries() - O(n)

*/