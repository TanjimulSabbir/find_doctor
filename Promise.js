// console.log("Program start");

// const promise = new Promise((resolve, reject) => {
//     resolve("Program is running")
// })
// // promise.then(result => console.log(result))
// async function getResult() {
//     try {
//         const result = await promise
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getResult()

// console.log("Program finished");

// javascript synchronous method

// console.log("program is start");
// console.log("program is running");
// console.log("program is finished");

// javascript asynchronous method
console.log("program is start");

const promise = new Promise((resolve, reject) => {
    const myFavourit = "I Love Gargening"
    resolve(myFavourit)
})
// .then
// promise.then(result=>console.log(result));

// asynce/await
const getPromise = async () => {
    try {
        const result = await promise;
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
getPromise();

console.log("program is finished");