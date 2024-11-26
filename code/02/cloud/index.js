let readline = require('readline-sync')
var fs = require('fs');
// npm install readline-sync
// write on file
class MenuItem {
    constructor(id, nama, harga, kategori) {
      this.id = id;
      this.nama = nama;
      this.harga = harga;
      this.kategori = kategori;
    }

    tampilMenu() {
      console.log(`ID: ${this.id}, Nama: ${this.nama}, Harga: ${this.harga}, Kategori: === ${this.kategori} ===`)
}
}// ============ Class End ===========

class Makanan extends MenuItem {
  constructor(id, nama, harga, kategori) {
    super(id, nama, harga, kategori);
    this.jenisMakanan = "Makanan";
  }
}// ============ Class Makanan End ===========

class Minuman extends MenuItem {
  constructor(id, nama, harga, kategori) {
    super(id, nama, harga, kategori);
    this.jenisMinuman = "Minuman";
  }
}// ============ Class Minuman End ===========

class Diskon extends MenuItem {
  constructor(id, nama, harga, kategori) {
    super(id, nama, harga, kategori);
    this.jenisDiskon = 0.10;
  }

  Value(a){
    let abc = 0
    let i 
    for (i in a){
      abc += a[i].harga * a[i].jumlah // mehitung hasil dari informasi harga dan jumlah
    }
    if (abc >= 100000){
      abc = abc
      console.log('Dengan tambahan pajak 10% : ' + (abc * 0.10) )
      console.log('dikarenakan pembelian diatas Rp. 100.000, medapatkan diskon 10% : ' + (abc * this.jenisDiskon))
    }
    else {
      abc = abc + (abc * 0.10)
      console.log('Dengan tambahan pajak 10% : ' + (abc * 0.10) )
    }
    
    if(abc > 50000){
      console.log('Dapat 1 bonus minuman special, Silahkan diambil di kasir')
    }
    return abc
  }// ============== Akhir method Value ===============
}// ============ Class Diskon End ===========

class Menu {
  Main(){
    // ===========================
    let menuList = require('./my.json')
      console.log(`

      ================= Resto Open Source =====================
      Menambahkan Menu baru kedala Restoran kami:
      =========================================================

      `)

      let inputL = readline.question('Masukan nama menu baru' + ' :') // Input List
      let inputH = readline.question('Masukan Harga ' + ' :') // Input Harga
      let inputKat = readline.question('Masukan kategori' + ' :') // Input kategori
      let inputId = readline.question('Masukan code Id' + ' :') // Input id
  
      let haloInput = {id: parseInt(inputId), nama: inputL, harga: parseInt(inputH), kategori: inputKat}
      menuList.push(haloInput)
      fs.writeFileSync('my.json', JSON.stringify(menuList, null, 2))
      console.log(menuList)

  }// ================ Method Main End ===========
}// ======================== Class Menu End ======================

class Pesanan {
  Main(){
    let restoList = require('./my.json')
    let diskon = new Diskon(1, 'diskon', 10, 'diskon' )
    let menuList = restoList

      console.log(`

      ================= Resto Open Source =====================
      List menu yang terdapat didalam restoran kami:
      =========================================================


      `)

      for (let i = 0; i < menuList.length; i++) {
       if (menuList[i].kategori == 'makanan') {
        let makanan = new Makanan(menuList[i].id, menuList[i].nama, menuList[i].harga, menuList[i].kategori)
        makanan.tampilMenu()
       }// ============== tampilkan list makanan ============ 
       else if (menuList[i].kategori == 'minuman') {
        let minuman = new Minuman(menuList[i].id, menuList[i].nama, menuList[i].harga, menuList[i].kategori)
        minuman.tampilMenu()
       }// tampilkan liist minuman ================
      }

      console.log(`


      ================= Resto Open Source =====================
      Masukan pesanan dengan menuliskan nomor id.
      ketik 'selesai' untuk menyelesaikan pesanan
      =========================================================

      `)
    let pesananList = []
    let proses = true

    while (proses) {
      let inUserN = readline.question('Masukan Nomor id Pesanan :') // Input user nama
        if(parseInt(inUserN) < 15 ){
            let inUserJ = readline.question('Masukan jumlah pesanan ' + ' :') // Input User Jumlah
            pesananList.push({id: inUserN, quantity: inUserJ})
        }
        else if(inUserN == 'selesai') {
            proses = false
            console.log('========= Pemesanan telah selesai ========')
        }
        else {
        console.log('Input yang dimasukan adalah salah, Mohon mengulangi lagi!')
        }
    }
    // ========================== Proses utama ==========================

    let totalPrice = []
let i 
let t 
for (let i in pesananList){
  for (let t in menuList){
    if (pesananList[i].id == menuList[t].id){
      let inMes = {id: menuList[t].id, nama: menuList[t].nama, jumlah: pesananList[i].quantity, harga: menuList[t].harga, kategori:menuList[t].kategori}
      totalPrice.push(inMes)
    }
  }
}
console.log('======================== Nota Pembelian ==========================')
console.log(totalPrice)
console.log('Total Harga : ' + diskon.Value(totalPrice))
console.log('======================== Nota Pembelian ==========================')
    
    // =============== Maijn akhir ===================

  } // ================ Method Main End ===========
}// ============ Class Pesanan End ===========

let abc = new Menu()
let deg = new Pesanan()


abc.Main()
deg.Main()


// Ref: https://stackoverflow.com/questions/17614123/node-js-how-to-write-an-array-to-file
// Ref: https://stackoverflow.com/questions/17614123/node-js-how-to-write-an-array-to-file
// https://www.geeksforgeeks.org/javascript-program-to-write-data-in-a-text-file/
// pastikan JSON mengunakan yang sudah ada, agar nanti bisa diupdate dengan mudah
