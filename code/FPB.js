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

    jawaban = Math.max(...hasil)
    return jawaban
  }// akhir function
}// akhir class

obj = new FPB(30, 15)
console.log(obj.hasil())

/*
      for (let i of hasil){
      //console.log(this.x, this.y)
      //console.log(hasil)
      if (i !== this.x && i !== this.y){
        jawaban.push(i)
      }
*/
