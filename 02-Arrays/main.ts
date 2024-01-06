let arr: number[] = [1, 2, 3, 4, 5] // this is good and IDE supported
let anotherArr: Array <number | string> = []
// here the anotherArr is statically typed

// interface Array<T> where T is Type!

let session: Array<string> = ['lohit', 'abhijay', 'keshav', 'mehul', 'karmik', 'indram'] // this is preferred

const tuple: [number, number, number] = [2711, 9321, 345] // ✅
// const anotherTuple: [number, number, number] = [2711, 9321, 345, 999] // ❌
// source has 4 elements but targeted only three

console.log(session)