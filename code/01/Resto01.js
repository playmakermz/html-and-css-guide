let readline = require('readline-sync')
// npm install readline-sync

let menuList = [
{id: 1, nama: 'bakso', harga: 10000, kategori: 'makanan' },
{id: 2, nama: 'sate', harga: 10000, kategori: 'makanan' },
{id: 3, nama: 'ayam goreng', harga: 10000, kategori: 'makanan' },
{id: 4, nama: 'bebek goreng', harga: 10000, kategori: 'makanan' },
{id: 5, nama: 'es teh anget', harga: 5000, kategori: 'minuman' },
{id: 6, nama: 'es jeruk', harga: 5000, kategori: 'minuman' },
{id: 7, nama: 'es buah', harga: 5000, kategori: 'minuman' },
{id: 8, nama: 'es kelapa', harga: 5000, kategori: 'minuman' },
]


// ============================ Algoritma makanan ==========================
console.log(
`
======================= List Menu Resto =============================
{id: 1, nama: 'bakso', harga: 10000, kategori: 'makanan' },
{id: 2, nama: 'sate', harga: 10000, kategori: 'makanan' },
{id: 3, nama: 'ayam goreng', harga: 10000, kategori: 'makanan' },
{id: 4, nama: 'bebek goreng', harga: 10000, kategori: 'makanan' },
{id: 5, nama: 'es teh anget', harga: 5000, kategori: 'minuman' },
{id: 6, nama: 'es jeruk', harga: 5000, kategori: 'minuman' },
{id: 7, nama: 'es buah', harga: 5000, kategori: 'minuman' },
{id: 8, nama: 'es kelapa', harga: 5000, kategori: 'minuman' },

Masukan pesanan dengan menuliskan nomor id.
ketik 'selesai' untuk menyelesaikan pesanan
================================================================================
`
)

// ================================ Algoritma pemesanan ==================================
let pesanan = [] // digunakan untuk menyimpan input
let proses = true

function MesinPesanan(namaM, jumlahM){
  let order1 = parseInt(namaM)
  let Order1quest = parseInt(jumlahM)
  pesanan.push({id: order1, quantity: Order1quest})
}

`
while (proses) {
  let inUserN = readline.question('Masukan Nomor id Pesanan :') // Input user nama
    if(inUserN == 'selesai'){
        proses = false
        console.log('========= Pemesanan telah selesai ========')
    }
    else if() {
    }
  else {
    let inUserJ = readline.question('Masukan jumlah pesanan ' + ' :') // Input User Jumlah
    MesinPesanan(inUserN, inUserJ)
  }
}
`

// Prosess ver 2

while (proses) {
  let inUserN = readline.question('Masukan Nomor id Pesanan :') // Input user nama
    if(parseInt(inUserN) < 10 ){
        let inUserJ = readline.question('Masukan jumlah pesanan ' + ' :') // Input User Jumlah
        MesinPesanan(inUserN, inUserJ)
    }
    else if(inUserN == 'selesai') {
        proses = false
        console.log('========= Pemesanan telah selesai ========')
    }
    else {
    console.log('Input yang dimasukan adalah salah, Mohon mengulangi lagi!')
    }
}



// ============================================================================================

// ============================ Summary total ==========================

function Value(a){
  let abc = 0
  for (i in a){
    abc += a[i].harga * a[i].jumlah // mehitung hasil dari informasi harga dan jumlah
  }
  if (abc > 100000){
    abc = abc
    console.log('Dengan tambahan pajak 10% : ' + (abc * 0.10) )
    console.log('dikarenakan pembelian diatas Rp. 100.000, medapatkan diskon 10%')
  }
  else {
    abc = abc + (abc * 0.10)
    console.log('Dengan tambahan pajak 10% : ' + (abc * 0.10) )
  }
  
  if(abc > 50000){
    console.log('Dapat 1 bonus minuman special, Silahkan diambil di kasir')
  }
  return abc
}
// ================= Menghitung pengeluaran ================

let totalPrice = []

for (i in pesanan){
  for (t in menuList){
    if (pesanan[i].id == menuList[t].id){
      let inMes = {id: menuList[t].id, nama: menuList[t].nama, jumlah: pesanan[i].quantity, harga: menuList[t].harga, kategori:menuList[t].kategori}
      totalPrice.push(inMes)
    }
  }
}


console.log('======================== Nota Pembelian ==========================')
console.log(totalPrice)
console.log('Total Harga : ' + Value(totalPrice))
console.log('======================== Nota Pembelian ==========================')



// Ref: https://idx.google.com/guide-6170701
