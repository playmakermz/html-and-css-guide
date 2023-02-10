# Mengenal lebih dalam menggenai CSS Box model

"CSS box model" adalah set aturan yang berfungsi untuk mengatur bagaimana suatu element pada halaman website di tampilkan. CSS menganggap semua komponent yang ada pada document HTML adalah sebuah kotak (box) dengan beberapa "properties" yang akan menentukan lokasi penempatan.

Secara garis besar semuanya yang ada pada halaman website adalah urutan dimana "element" ditampilkan satu demi satu. Tetapi dengan fungsi "box model" kita dapat mengatur penempatan "element".

Memahami Konsep "CSS box model" itu sangat penting untuk mempermudah pembelajaran kita nanti menggenai grid, flexbox, dll. 

## Mengenal Block Element dan Inline element


Setidaknnya terdapat dua pondasi layout yang 
akan dipilih untuk membangun halaman website.

Yang terdiri dari: 
- Block
- inline

kedua tipe itu adalah standart layout yang sudah dipasang pada element HTML. Semisal element "p" memiliki layout "Block".

Kebanyakan element HTML yang sudah kita pelajari sebelumnya merupakan tipe layout "block". 

Kita dapat mencari tau layout yang diapakai oleh "element HTML" dengan cara Mebuka fitur "inspeksi"" dan ambil fitur "computed" 


[Contoh inline dan block](../aset/contoh in-bl.png)

> Teman-teman bisa lihat code gambar diatas di sini [Klik-okay](./bl-in.html)

Seperti pada gambar yang berada di atas. Kita dapat melihat perbedaan dari prilaku mereka pada penempatan layout.

Perbedaan yang sangat terlihat:
- "Block" jika yang dipakai adalah element block, maka element selanjutnya akan mengambil posisi di bawah element tersebut.
- "Inline" Jika yang dipakai adalah tipe element inline maka element selanjutnya bisa berada di samping element tersebut.

- "BLock" Lebar dari element block adalah lebar keseluruhan dari container parent.
- "Inline" Lebar dari element inline akan menyesuaikan secara otomatis dengan content yang dia bawa.

## Menggenal div dan span

Selain menggunakan semantic yang sudah tersedia nama dan fungsinnya kita juga bisa menambahkan semantic dengan model kita sendiri, dengan cara menggunakan div atau span.

Semisal kita ingin membuat container yang berisi 2 semantic "main" dan "aside" kita bisa menggunakan "div" sebagai container.

> Contoh untuk kondisi diatas [klik-okay](../code/latihan-html/index-LT-03.html)

oleh karena itu kita perlu memahami fungsi dan gimana mereka bekerja.

"div" dan "span" mereka berdua adalah element HTML yang digunakan untuk mengatur layout dan design, tapi memiliki perbedaan cara penyelesaian.

- "div" adalah layout "BLock" yang bisa digunakan untuk mengelompokan banyak element menjadi satu. Perlu diketahui "div" akan berlaku seperti layout "Block" menggambil seluruh lebar dari parent.

- "span" adalah layout "inline" yang bisa digunakan untuk menyatukan element tanpa merebut seluruh jarak lebar dari parent. "span" biasannya digunakan untuk mengatur bagian kecil tanpa harus menggangu element / content di sampingnnya.

Kesimpulan, "div" akan dipakai jika ingin mengatur layout besar, sedangkan "span" akan digunakan untuk mengatur style pada bagian kecil.

## Menggenal Content. Padding, Border, dan Margin

[Contoh](../aset/co-padding.png)

pada pengaturan ukuran element terdapat setidaknya empat property dasar:content,  padding, border, dan margin.

Property:

- Content adalah tulisan, gambar ataupun media yang barada didalam content.

- padding adalah jarak dari content didalam element ke bagian border.
` padding: 1px 1px 1px 1px;`

- Border adalah batas luar dari content. Kita dapat melihat border, dengan mendefinisikan border ke dalam element tersebut.
``` border: 1px solid red; ```

- Sedangkan margin adalah jarak antara element satu dengan yang lainnya.
`margin: 1px 1px 1px 1px;`

kita bisa mengatur jarak atas, bawah, kanan, dan kiri pada property padding dan margin.


Dibawah ini adalah format untuk value padding dan margin:

```
 padding: 40px 20px 20px 40px;
  // Format penempatan : padding-top, padding-right, padding-bottom, and padding-left

```


