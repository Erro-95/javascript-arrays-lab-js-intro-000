var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
kittens.push(name)
}

function destructivelyPrependKitten(name) {
kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
kittens.pop()
return kittens
}

function destructivelyRemoveFirstKitten() {
kittens.shift()
return kittens
}

function appendKitten(name) {
return [...kittens, name]
}

function prependKitten(name) {
return [name, ...kittens]
}

function removeLastKitten() {

}

function removeFirstKitten() {

}
