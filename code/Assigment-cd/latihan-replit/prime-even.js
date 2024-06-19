/*
=============== Q1 ===============
input:
11, 12, 4, 8, 1, 20, 17, 9
12, 11, 15, 14, 8, 4, 20, 17,

output:
1,4,8,9,12,12,18,20 // 11
4,8,12,12,14,15,18,20 // 11 17
*/

function isPrime(num){
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false
    }
    return true
}

function isConf(num = []){
    let abc = num.sort((a,b) => a - b)
    let aac = abc.filter((num) => isPrime(num))
    let aaa = abc.map((num) => {
    for(let item of aac){
        if(num === item){
            return num + 1
        }
    }
    return num // untuk aaa
})

    return aaa // hasil akhir proses
}

let x  = [11, 12, 4, 8, 1, 20, 17, 9]
let y = [12, 11, 15, 14, 8, 4, 20, 17]

console.log(isConf(x))
// Sukses
console.log(y)


/*
================ Q2 ===============
input:
11, 12, 4, 8, 1, 20, 17, 9
12, 11, 15, 14, 8, 4, 20, 17,

output:
1,5,9,9,11,13,17,21
4,9,11,13,15,15,17,21
*/

function isEven(num){
    if ((num % 2) === 0) {
        return false
    }
    else {
        return false
    }
}

function q2(num = []){
    let abc = num.filter((a,b) => a-b)
    let aac = abc.filter((num) => {
        if((num % 2) === 0){
            return true
        }
        else {
            return false
        }
    })
    let aaa = abc.map((num) => {
        for ( let item of aac ){
            if(num == item){
                return num + 1
            }
        }
        return num
    })

    return aaa // Hasil akhir
}

let q2x = q2(x)

console.log('==================== Q2 =============')
console.log(q2x)



