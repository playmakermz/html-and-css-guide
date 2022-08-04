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

**nested HTML  Elment** adalah sebuah element yang memiliki element lain didalam nya. 
Contoh: 
```
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
```

> Untuk beberapa element, terkadang dipanggil sebagai empty element "<br>" karena tidak memiliki content dan tag penutup 

HTML tidak melakukan "CaseSensitive", Anda bisa menggunakan huruf besar atau kecil sesuka hati, tetapi usahakan untuk 
consistent, agar code terlihat rapih.

Pada structur page HTML, semua yang berada didalam "<body>" akan ditampilkan pada halaman browser. Sedangkan 
semua content yang berada didalam element "<title>" akan muncul pada browser title

## HTML attribute

Semua element HTML bisa memiliki attribute, untuk memberikan instruksi tambahan atau informasi tambahan. 
- Attribute selalu ditambahkan pada tag pembuka 
- attribute biasannya ber format `attribute_name = "value"`
Contoh attribute pada HTML
```
<img src="img_mountain.jpg" alt="this is himalaya mountain">
```

Dalam SRC secara online, URL memiliki dua tipe:
- Absolute URL - adalah link yang didapatkan dari platfrom hosted atau website yang bukan milik kita
    Contoh: saya mengunakan link gambar yang berada di wikipedia untuk menjadi sampul halaman website blogspot saya 
- Relative URL - adalah link yang image / data yang sudah ada di dalam website kita sendiri


## CheatSheet

Tag | Element | Description
--- | --- | --- |
h1 - h6 | `<h1> ... </h1>` | Heading 
p | `<p> ... </p>` | Paragraph
a | `<a href="#"> ` | Link
img | `<img src="#" alt="text">` | Image 
hr | `<hr>` | Horizontal Rule, memberikan gari luru secara horizontal
br | `<br>` | Sebagai line break
pre | <pre> this is line </pre> | akan menghasilkan fixed text, sama persis dengan content yang didalamnya. jarak tulisan tidak akan diataur oleh komputer



attribute | Description 
--- | --- 
`href="#"` | Digunakan untuk menambahkan hyperlink / path ke sumber tujuan
`src="#"`  | Digunakan untuk memberi tau hyperlink / path yang menuju sumbur gambar
`width="#"` | Menujukan ukuran Lebar
`height=#` | menujukan ukuran tinggi
`alt="this is text"` | Biasannya digunakan untuk element "img", jika gambar gagal dimunculkan text ini akan muncul 
`style="#"` | Digunakan untuk  menambahkan style pada element, dengan css 
`title="this is title"` | Ini akan memunculkan pop-up kecil saat anda mengarahkan mouse ke element tersebut




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
