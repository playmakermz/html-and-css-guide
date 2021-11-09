let obj = new object()
obj.alas = 3
obj.tinggi = 5 
obj.luas = function() { return (obj.alas * obj.tinggi) / 2 }
obj.luas() // 7.5
