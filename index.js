// Write your solution here!
const cats =[ 'Milo', 'Otis', 'Garfield']


function destructivelyAppendCat(name){
  return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let array = [...cats]
    array.push(name)
    return array
}

function prependCat(name){
    let array = [...cats]
    array.unshift(name)
    return array
}

function removeLastCat(name){
    let array = [...cats]
    array.pop(name)
    return array
}

function removeFirstCat(name){
    let array = [...cats]
    array.shift(name)
    return array
}