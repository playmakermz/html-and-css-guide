## Pengenalan

![image02](../aset/02.png)

HTML ( HyperText Markup Language )  adalah suatu instruksi untuk menulis document agar bisa ditampilkan ke dalam web browser. web browser akan mengambil file HTML dari penyimpanan local dan akan diubah menjadi halaman website.

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
- `<head> </head>` data yang biasannya berada di dalamnya adalah title, css-source code, javascript-source code, 'META' data, data font style dan lain-lain.
- `<body> </body>` TAG ini digunakan untuk menyimpan informasi atau data sebelum di olah menjadi halaman website.
- `<p> </p>` TAG ini digunakan untuk menulis paragraph biasa didalam document.


## Apa itu HTML Element?

Html element dimulai dari tag pertama, beberapa content, dan diakhiri dengan tag penutup.
Html **element** adalah segala yang berada diantara tag pembuka dan  penutup.

> Untuk beberapa element, terkadang dipanggil sebagai empty element "<br>" karena tidak memiliki content dan tag penutup 

Pada structur page HTML, semua yang berada didalam "<body>" akan ditampilkan pada halaman browser. Sedangkan 
semua content yang berada didalam element "<title>" akan muncul pada browser title

## CheatSheet

Tag | Element | Description
h1 - h6 | `<h1> ... </h1>` | Heading 
p | `<p> ... </p>` | Paragraph



#### Refrensi 
- https://id.wikipedia.org/wiki/HTML
- https://www.w3schools.com/tags/tag_doctype.asp
- https://id.wikipedia.org/wiki/Pranala
- https://html.spec.whatwg.org/multipage/introduction.html#introduction
- https://github.com/jgthms/web-design-in-4-minutes
- https://github.com/jgthms/marksheet
<https://www.internetingishard.com/> <br>
<https://github.com/Asabeneh/30-Days-Of-HTML> <br>
<https://www.w3schools.com/html/>
