// Soal
// Input = [1,2,3,4,5,6,7]
// output = [ 1,3,4,6,6,7 ]
//
// Gunakan if statement, loop, array


let arr = [1,2,3,4,5,6,7]

for (let i = 0; i in arr; i++){

    if (  i >= 1 && i < 5 ){
        console.log('masuk if', arr[i])
        arr[i] = arr[i] + 1
    }

}



console.log(arr)


