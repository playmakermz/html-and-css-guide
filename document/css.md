# CSS Introduction

Cascading Style Sheet (CSS) merupakan instruksi penulisan untuk mengatur tata letak dan penampilan document HTML. Dengan adannya Bantuan CSS sebagai pengelola tampilan dari document akan sangat mempermudah penulis menciptakan karyanya. 

Beberapa Fitur CSS:
1. Mengubah warna text maupun background
1. Mengubah ukuran gambar atau text
1. Membuat animasi atau effect
1. Mengatur penempatan object
1. Memberikan border

#### Contoh code CSS
`p { color: red; }`
- `p` CSS akan mengambil object bernama 'p' dari HTML.
- `color` membuat fungsi untuk memilih warna. jika tidak ada 'color' maka warna yang dipakai adalah default.
- `red` memilih warna merah.

Ada tiga cara untuk menghubungkan CSS kedalam document HTML:
1. Inline Style Sheet
Menulis code CSS tepat didalam object yang dituju.
Contoh `<p style='color:red;'> </p>` 
2. Embedded Style sheet
Menulis code CSS didalam TAG HEAD.
contoh:
```html
<head>
<style>
p {color: 'red';}
</style>
</head>
```
3. External CSS
Link menuju tempat penyimpanan CSS kita, ditulis didalam TAG '<head>'.
`<link href='style.css' rel='stylesheet'>`

#### Refrensi
- https://id.wikipedia.org/wiki/Cascading_Style_Sheets
- https://www.w3schools.com/css/css_howto.asp

