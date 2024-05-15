// [11, 12, 13, 14, 15, 16, 17]
// [12, 13, 14, 14, 15, 17, 18]


let arr = [11, 12, 13, 14, 15, 16, 17]

for ( let i = 0; i in arr; i++ ){

    if ( arr[i] >= 11 && arr[i] < 14 ) {
        console.log(arr[i])
        arr[i] = arr[i] + 1
    }

    else if ( arr[i] >= 16 ){
        arr[i] = arr[i] + 1
    }
}

console.log(arr)
