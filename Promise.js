
const promise = new Promise((resolved, rejected) => {
    // resolved("I have got the Job");
    rejected(new Error("finally I didn't take."))
})

promise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error.message)
})

