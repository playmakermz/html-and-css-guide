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


class Clientt {
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }

    MesinPesanan(pesanan, namaM, jumlahM){
        let order1 = parseInt(namaM)
        let Order1quest = parseInt(jumlahM)
        pesanan.push({id: order1, quantity: Order1quest})
      }
    // ===================== Pesanan input ==============

      Value(a){
        let abc = 0
        let i 
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
    // =========================== Hasil akhir ======================


    Main(){
        // ============================ Algoritma makanan ==========================

        console.log(
          `
          ======================= List Menu Resto =============================
          `
          )

        let hg
        for (hg in menuList){
          console.log(menuList[hg])
        }
        
console.log(
    `
    
    Masukan pesanan dengan menuliskan nomor id.
    ketik 'selesai' untuk menyelesaikan pesanan
    ================================================================================
    `
    )
    // ================================ Akhir dari print ==================================
    
// Prosess ver 2

// ================================ Algoritma pemesanan ==================================
let pesanan = [] // digunakan untuk menyimpan input
let proses = true

while (proses) {
    let inUserN = readline.question('Masukan Nomor id Pesanan :') // Input user nama
      if(parseInt(inUserN) < 10 ){
          let inUserJ = readline.question('Masukan jumlah pesanan ' + ' :') // Input User Jumlah
          this.MesinPesanan(pesanan, inUserN, inUserJ)
      }
      else if(inUserN == 'selesai') {
          proses = false
          console.log('========= Pemesanan telah selesai ========')
      }
      else {
      console.log('Input yang dimasukan adalah salah, Mohon mengulangi lagi!')
      }
  }
    
    // ================= Menghitung pengeluaran ================

let totalPrice = []
let i 
let t 
for (let i in pesanan){
  for (let t in menuList){
    if (pesanan[i].id == menuList[t].id){
      let inMes = {id: menuList[t].id, nama: menuList[t].nama, jumlah: pesanan[i].quantity, harga: menuList[t].harga, kategori:menuList[t].kategori}
      totalPrice.push(inMes)
    }
  }
}
console.log('======================== Nota Pembelian ==========================')
console.log(totalPrice)
console.log('Total Harga : ' + this.Value(totalPrice))
console.log('======================== Nota Pembelian ==========================')
    }
    // =============== Maijn akhir ===================

}

// ============================= Owner class =================
class Owner{
  Main(){
    // menuList   {id: 1, nama: 'bakso', harga: 10000, kategori: 'makanan' },
    let inputL = readline.question('Masukan nama menu baru' + ' :') // Input List
    let inputH = readline.question('Masukan Harga ' + ' :') // Input Harga
    let inputKat = readline.question('Masukan kategori' + ' :') // Input kategori
    let inputId = readline.question('Masukan code Id' + ' :') // Input id

    menuList.push({id: parseInt(inputId), nama: inputL, harga: parseInt(inputH), kategori: inputKat})
    
    
  }
}



// ================ Object List!!! ============================
const Toko = new Clientt('John', 30);
const Own3r = new Owner()

console.log(`
================ Login Interface =========================
Akun yang tersedia:

1. Owner
2. Client

Masukan Nomor ID yang sesuai berdasarkan informasi diatas
===========================================================
`)

let startA = readline.question('Login sebagai ? ' + ' :') // Input List

if(startA == '1'){
  Own3r.Main()
  Toko.Main()
}
else if(startA == '2'){
  Toko.Main()
}
else{
  console.log('Demi keamanan Toko, pengguna yang tidak dikenali tidak diperbolehkan masuk..')
}
