class FPB{
  constructor(dataX,dataY){
    this.x = dataX;
    this.y = dataY;
  }

  hasil(){
    const listX = []
    const listY = []
    let jawaban = []
    for (let i = 1; i <= this.x; i++){
      if (this.x % i === 0){
        //listX.push()
        listX.push(i)
      }
    }// akhir loop x

    for (let i = 1; i <= this.y; i++){
      if(this.y % i === 0){
        listY.push(i)
      }
    }// akhir loop y
    let hasil = []
    for (let i of listX){
      if (listY.includes(i)){
        hasil.push(i)
      }
    }
    console.log(hasil)
    jawaban = Math.max(...hasil)
    return jawaban
  }// akhir function
}// akhir class

obj = new FPB(60, 96)
console.log(obj.hasil())


// 12
// test https://matematikamudah10.blogspot.com/2019/05/contoh-soal-fpb-dan-penyelesaiannya.html
// https://matematikamudah10.blogspot.com/2019/05/contoh-soal-fpb-dan-penyelesaiannya.html
