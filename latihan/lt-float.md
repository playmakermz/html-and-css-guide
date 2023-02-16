# Latihan FLoat 

Float property pada CSS digunakan untuk mendefinisikan bagaimana element harus ditempatkan dengan referensi dari element lainnya. Perlu diperhatikan disaat element bertipe float maka dia akan keluar dari arus / flow normal pada halaman website dan bisa digerakan ke kiri atau ke kanan dari posisi semula.

Informasi dan panduan yang perlu diingat saat menggunakan CSS float:

1. Property "float" bisa kita set "value" ke "left" atau "right", Tergantung dengan arah yang kita inginkan. 

2. Disaat element bertipe "float", maka element lainnya pada halaman akan mengikuti arah dari element tersbut. Ini bisa menjadi manfaat disaat kita inginkan atau bisa menjadi masalah jika kita salah perhitungan. 

3. Penting untuk memahami teknik "clearfix" saat kita menggunakan element "float". Disaat semua element pada container menggunakan "float" maka ketinggian dari "container" akan hilang. Biasannya kejadi hilangnnya ketinggian dari container disebut sebagai "element collapsing CSS" (https://www.geeksforgeeks.org/how-to-prevent-parents-of-floated-elements-from-collapsing-in-css/). 

Untuk menyelesaikan masalah tersebut kita bisa menggunakan teknik "clearfix" untuk memaksa container agar melebar dan menyesuaikan dengan tinggi dan lebar dari "float element". 
Contoh dan referensi: 
(https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix2)

Secara Garis besar CSS float akan sangat dapat membantu kita dalam beberapa kondisi. Tetapi sebagai developer kita juga harus menggunakannya dengan teliti agar kekurangan dari float tidak menjadi halangan. 
Setiap fitur akan memiliki kekurangan dan kelebihan itu adalah hal yang pasti, dan harus kita belajar pertimbangkan.




