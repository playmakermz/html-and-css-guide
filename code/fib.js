let value = [1,2,3,4,5]
let length = value.length + 1

let x = 0
let y = 1

for (let i = 0; i <= length; i++ ){
    i = parseInt(i)
    console.log(x)
    let sum = x + y
    x = y
    y = sum
}
