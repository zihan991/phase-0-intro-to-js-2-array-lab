// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
     cats.push(name)
}
// console.log(destructivelyAppendCat("Bubbles"))
// console.log(cats)

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return [...cats, name]
}

console.log(appendCat("bubbles"))
console.log(cats)
function prependCat(name){
    return [name, ...cats]
}

console.log(prependCat('poppy'))

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}

console.log(removeLastCat(cats))

function removeFirstCat(){
    return cats.slice(1)
}
console.log(removeFirstCat())