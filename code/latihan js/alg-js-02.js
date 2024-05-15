// [11, 12, 13, 14, 15, 16, 17]
// [11, 13, 14, 15, 16, 16, 17]


let arr = [11, 12, 13, 14, 15, 16, 17]

for ( let i = 0; i in arr; i++ ){

    if ( arr[i] >= 12 && arr[i] < 16 ) {
        console.log(arr[i])
        arr[i] = arr[i] + 1
    }
}

console.log(arr)
