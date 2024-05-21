# Synchronous dan Asynchronous

Synchronous adalah proses dasar yang kita gunakan dalam pembuatan program dengan javascript. Yaitu dimana semua baris perintah akan dijalankan secara bergantian. 

contoh sederhana adalah seperti ini 

```
console.log('a')
console.log('b')
```

Sedangkan **Asynchronous** adalah kebalikannya, yaitu dimana kita bisa menjalankan dua proses atau lebih secara bersamaan.

sebagai contoh code dengan mengunakan fungsi 

```
setTimeout(() => {console.log('hai')}, 300)
console.log('hai juga')

// hai juga
// hai
```

dimana pada code diatas, perintah baris kedua akan menghasilkan output, lalu dilanjutkan dengan perintah baris pertama.

proses tersebut dilakukan pada waktu yang sama.

***
## Promise

Mari kita membuat perumpamaan sederhana.

terdapat suatu band musik yang memiliki banyak pengemar. para pengemar band musik tersebut setiap hari mengirim surat untuk ingin mendengarkan album baru band.

untuk meredakan antusiasme dari pengemar, perwakilan band memberikan formulir kepada para pengemar, yang dimana pada pada formulir tersebut pengemar bisa menuliskan alamat email, dan address mereka. Jika terdapat perkembangan kita bisa mendapatkan informasi dari mereka.

semisal album baru telah rilis, atau tertunda karena beberapa hal.

sekarang kita hubungkan dengan code: 
- "Producing code" adalah band musik 
- "Consuming code" adalah pengemar 
- "Promise" adalah yang menghubungkan mereka semua

selanjutnya terdapat dua fungsi dasar promise.
- `resolve(value)` - jika proses sukses
- `reject(error)` - jika proses gagal

detail identitas pada promise.
- `state`
    - "pending" adalah default
    - "fullfilled" adalah karena resolve
    - "rejected" adalah karena reject 

- `result`
    - "undefined" adalah default 
    - "value" adalah karena resolve 
    - "error" adalah karena reject

### Promise code 

perhitakian callback function berikut ini.

```
function tampilkan(item){
    console.log(item)
}

function math(x,y){
    setTimeout(() => {
        return x ** y
}, 1000)
}

let abc = math(1,2)
tampilkan(abc)
```

Tidak ada error, tetapi kita tidak juga mendapatkan output yang diharapkan. 

karena function `tampilkan()`telah selesai melakukan proses terlebih dahulu sebelum proses dari `math()`. Mereka berjalan secara bersamaan.

**dengan mengunakan promise** kita bisa menyelesaikan masalah tersebut. 

```
function tampilkan(data) {
    console.log(data)
}

function proses(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

proses(1,1)

.then(
        (result) => {console.log(result)},
        (error) => {console.log(error)}
    )
```

**atau ditulis seperti ini**

```
function tampilkan(data) {
    console.log(data)
}

function proses(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}


proses(1, 2).then(
        (result) => {console.log(result)},
        (error) => {console.log(error)}
    )
```


## promise code (sukses)

```
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('its done'), 1000)
})

promise.then(
    (result) => {console.log(result)}, // Akan menghasilkan
    (error) => {console.log(error)} // tidak jalan
)
```

## promise code (reject)

```
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('upss')) , 1000)
})

promise.then(
    (result) => {console.log(result)}, // 
    (error) => {console.log(error)} // akan jalan
)
```

## finally

Finally tidak terpengaruh dengan hasil dari promise.

```
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('upss')) , 1000)
})

promise.finally(() => {console.log('saya hanya pemberitahuan, tidak terpengaruh dengan result atau error')})

promise.then(
    (result) => {console.log(result)}, // Akan menghasilkan
    (error) => {console.log(error)} // tidak jalan
)
```


### Reference 
- https://javascript.info/promise-basics
