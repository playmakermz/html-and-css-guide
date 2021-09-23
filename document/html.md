## Pengenalan

HTML ( HyperText Markup Language )  adalah suatu instruksi untuk menulis document yang akan ditampilkan ke dalam web browser. web browser akan mengambil HTML dari penyimpanan local dan akan diubah menjadi halaman website.

Fitur HTML:
1. Menulis text
1. Memberikan ukuran dan ketebalan kedalam text
1. Membuat table
1. memanbahkan gambar 
1. Menambahkan Pranala ( lebih kita kenal dengan embedded link  )
1. Menambahkan data suara
1. menambahkan Form yang dapat diisi

##### Contoh source code HTML 
```
<!doctype html>
<html lang="en">
<head>
  <title>Homepage</title>
</head>
<body>
  <p>Hello, World!</p>
</body>
</html>
```

Mari kita pahami sedikit. 
- `<!doctype html>` ini bukan HTML tag, dibutuhkan untuk memberi informasi kepada web browser tentang document apa ini.
- `<html lang='en>` Ini untuk membantu mesin pencari dan web browser dalam mengelola. Untuk informasi lebih banyak https://www.w3schools.com/tags/ref_language_codes.asp.
'<html>' data yang berada didalam sini adalah inti dari document html.
- `<head> </head>` data yang biasannya berada di dalamnya adalah title, css-source code, javascript-source code, 'META' data, data font style dan lain-lain.
- `<body> </body>` TAG ini digunakan untuk menyimpan informasi atau data sebelum di olah menjadi halaman website.
- `<p> </p>` TAG ini digunakan untuk menulis paragraph biasa didalam document.


Refrensi 
~~~
- https://id.wikipedia.org/wiki/HTML
- https://www.w3schools.com/tags/tag_doctype.asp
- https://id.wikipedia.org/wiki/Pranala
- https://html.spec.whatwg.org/multipage/introduction.html#introduction
- https://github.com/jgthms/web-design-in-4-minutes
- https://github.com/jgthms/marksheet
<https://www.internetingishard.com/> <br>
<https://github.com/Asabeneh/30-Days-Of-HTML> <br>
<https://www.w3schools.com/html/>
