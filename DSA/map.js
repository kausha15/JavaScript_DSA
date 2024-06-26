const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3)
map.delete('b')
console.log(map.has('a'))
console.log(map.size)
map.clear()

for(const [key,value] of map){
    console.log(`${key} : ${value}`)
}