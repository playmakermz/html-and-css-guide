// Soal
// Input = [1,2,3,4,5,6,7]
// output = [ 1,3,4,5,6,6,7 ]
//
// Gunakan if statement, loop, array


let arr = [1,2,3,4,5,6,7]

for (let i = 0; i in arr; i++){

    if (  arr[i] >= 2 && arr[i] < 6 ){
        console.log('masuk if', arr[i])
        arr[i] = arr[i] + 1
    }

}



console.log(arr)


