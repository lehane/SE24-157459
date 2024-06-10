// console.log("Hello")

// Ternaire
// let nb = 5;
// let test = (nb === 4) ? "nb égal à 5" : "diff 5";
// console.log(test)


// Variables

// function varTest() {
//     const x = 1;
//     if(true) {
//         const x = 5
//         console.log(x)
//     }
//     x = 2
//     console.log(x)
// }
// varTest()

// Array

// let array = [1,2]
// console.log(array)

// let copy = [...array,3,4]
// console.log(copy)

// destructuration
// let [a,b] = copy
// console.log(a,b)

// Fonctions fléchées

// function foo() {
//     console.log("test")
// }

// const foo2 = () => {
//     console.log("test")
// }
// foo()
// foo2()

// le map
// const array = [1,2,3]
// for(let i =0; i < array.length;i++) {
//     console.log(array[i])
// }

// array.map(i => console.log(i))

// var name = "monnom"
// var test = "je suis "


// console.log(`fdgkjndflkgj ${name}`)

// ES6 Promesse
const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

// const asyncFunc = () => {
//     console.log('début')
//     sleep(3000).then(() => {
//         console.log('fin')
//     })
   
// }
// asyncFunc()

const asyncFunc2 = async () => {
    console.log('début')
    await sleep(3000)
    console.log('fin')
}
asyncFunc2()