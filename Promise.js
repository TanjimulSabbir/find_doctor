
const promise = new Promise((resolved, rejected) => {
    // resolved("I have got the Job");
    rejected(new Error("finally I didn't take."))
})

promise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error.message)
})

function randomNumberGen(max, min) {

    console.log((max - min + 1))
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumberGen(6, 3))