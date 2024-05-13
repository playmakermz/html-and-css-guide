# AJAX Asynchronous JavaScript And XML

AJAX bukanlah sebuah programming language tetapi sebuah fitur teknologi yang membantu kita untuk membangun aplikasi web dengan lebih interaktif.

Extensible Markup Language (XML) adalah format untuk menyimpan dan mengirim data dari web server.

## Makna dari AJAX

pada dasarnya Asynchronous adalah konsep dimana aplikasi dapat menjalankan 2 atau lebih proses secara bersamaan.

Sedangkan pada AJAX adalah, Aplikasi dapat mengirim dan menerima data dari webserver tanpa harus melakukan refresh pada halaman aplikasi tersebut.
Proses dibalik background ini yang akan menjadi fitur utama pada AJAX.

## Cara Kerja AJAX

AJAX menggunakan tool yang sudah tersedia pada browser untuk melakukan request data kepada web server dan akan menampilkan pada user.

- `XMLHttpRequest object` : adalah Form API berbentuk Object yang akan membantu dalam transfer data antara web browser dan web browser. 
- `HTMLDOM` : disaat kita melakukan load pada halaman browser, Browser akan secara otomatis document Object Model dari page tersebut.


**cara Membuat XMLHttpRequest object:**
```
var xhttp = bew XMLHttpRequest();
```

**cara untuk melakukan request kepada web server, kita gunakan open() dan send() method pada object XMLHttpRequest.**

```
xhttp.open("GET", "content.txt", true)
xhttp.send();
```

**Buat Function changeContent() menggunakan JavaScript:**

```
function changeContent() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200){
    document.getElementById("foo").innerHTML = this.responseText;
    }
    }

    xhttp.open("GET", "content.txt", true)
    xhttp.send()
}
```

## Stutus code 
- 200: OK 
- 403: Forbidden 
- 404: Not Found


### Source code 

```
<!DOCTYPE html>
<html>
<body>

<div id="foo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="changeContent()">Change Content</button>
</div>

<script>
function changeContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("foo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "content.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
```



## Reference:

- https://www.freecodecamp.org/news/ajax-tutorial/
