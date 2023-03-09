# CSS Position 

terdapat 5 tipe penempatan:
- static
- relative
- fixed
- absolute
- sticky

Setiap penempatan memiliki fitur yang berbeda, tetapi memiliki cara configurasi properti css yang hampir sama.

Dengan fitur css position kita bisa mengatur dimana element tersbut diletakan dengan spesifik. Kita juga bisa menggatur agar element tersebut tidak hilang kalau kita scroll ke bawah.

Secara default tipe position yang akan dipakai adalah static. 

## Relative & Absolute 


Relative property bisa kita gunakan untuk mengatur penempatan element sesuai dengan koordinat yang kita inginkan. Relative position tidak akan menghilangkan element tersbut dari flow website. Secara simple, tempat tinggal relative element masih ada, dan tidak akan dipakai oleh element lainnya. 

Sedangkan Property absolute akan kehilangan tempat dia tinggal dan tempat tinggal dari absolute element akan dipakai oleh element lainnya. 
Fungsi absolute hampir sama dengan relative. Perbedaan ada di mana acuan koordinasi mereka. 

Relativ position akan menggunakan container sebagai acuan awal untuk koordinasi tempat. 

Absolute position akan menggunakan element body sebagai acuan awal.

seperti pada contoh.

[contoh code](../code/latihan-html/index-lt-position.html)

## Sticky dan fixed 

sticky dan fixed bisa kita gunakan untuk mengatur agar element tersebut tidak hilang jika kita scroll kebawah ataupun ke atas.

Meskipun memiliki tujuan fungsi yang sama, tetapi mereka memiliki cara kerja yang berbeda. 

Fixed, memiliki chiri khas seperti "absolute". karena jika kita pakai ini maka element akan kehilangan tempat tinggalnya, dan akan diisi oleh element lainnya. 
Pengaturan top, bottom, left, right dari fixed sama seperti absolute yang menggunakan element body sebagai acuan. 

Sticky, bisa dikatakan gabungan dari fixed dan relative. Awal pergerakan sticky akan menggunakan chiri khas dari relative. Setelah mencapai titik tertentu akan berubah menjadi fixed. 

## Referensi: 
https://developer.mozilla.org/en-US/docs/Web/CSS/position#try_it 



