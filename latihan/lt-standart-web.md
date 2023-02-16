# Standart Website format

Pada latihan kali ini kita akan berlatih menggunakan HTML dan CSS bersama untuk membuat halaman website Yang berkualitas.

Jangan Khawatir jika masih belum menguasai latihan ini sepenuhnnya, Karena yang paling penting adalah mendapatkan dasar dari pemahaman.

## Mengenal CSS
CSS atau Cascading Style Sheets adalah teknologi fundamental yang digunakan pada design website.Ini digunakan untuk mengatur layout, warna, fonts, dan element visual lainnya.Dengan adannya CSS kita sebagai developer bisa Membuat halaman website yang dinamis dan responsif untuk berabagai macam perangkat komputasi.

Struktur dari css terdiri dari:
- Selector, Adalah target alamat dari element HTML 
- Declaration, adalah definisi / protokol untuk pengaturan tampilan pada element tersebut.

CSS Juga menyediakan sebuah sistem untuk memberikan kebebasan kepada developer untuk menampilkan fitur yang sesuai dengan ukuran device.Sebagai contoh, untuk Handphone akan memiliki layout yang berbeda dengan apa yang ada pada komputer.Fitur ini disebut sebagai "CSS media queries"
yang akan jadi fondasi pada halaman website responsif.

## Persyaratan
- menggunakan semantic dasar halaman

## Instruksi

1. Membuat Struktur dasar untuk halaman website

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>

    <style>

    </style>
</head>
<body>
    
</body>
</html>

```

2. Masukan Semantic element dasar halaman website yang terdiri dari:

- header 
- navbar 
- main 
- aside 
- footer

Pada panduan kali ini element main dan aside akan dimasukan kedalam satu container untuk mempermudah pengaturan tampilan selanjutnnya.(Saran dari author, untuk setiap element tersebut diberi tanda "comment"
    agar mempermudah dalam pengembangan nantinnya).

```
<header></header>

<nav></nav>

<div class="main-parent">

<main></main>

<aside></aside>

</div>

<footer></footer>
```

3. Menambahkan Judul untuk Header

```
<h1> This is Title</h1>
```

4. Menambahkan list menu pada navbar

```
<ul>
            <li>
                <a href="#"> Homepage</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>

        </ul>
```

5. Menambahkan class kedalam element main untuk dilakukan configurasi nantinnya.
```
class="main-area-left"
```

Menambahkan konten kedalam element main
```
<p>
                Amet minima dolorum eos itaque vel. Totam dolores a unde dolor nesciunt? Dignissimos
                nesciunt eos eaque perferendis esse, distinctio asperiores reprehenderit.
                Nemo expedita dolor dicta consectetur beatae. Quam quisquam delectus!
            </p>

            <p>
                Lorem sit dolores dolor odit quaerat. Illo ad accusamus reprehenderit ea necessitatibus
                harum deserunt doloremque animi? Mollitia expedita earum quod minus
                eligendi? Porro asperiores nemo illum voluptate ducimus fugit dolore.
            </p>

            <p>
                Adipisicing at eum nostrum fuga deleniti suscipit. Incidunt adipisci enim distinctio
                voluptates velit Nihil officiis asperiores repellendus voluptatum
                odio Distinctio quibusdam hic quibusdam laborum ea! Nihil beatae
                nostrum ea iusto?
            </p>
```

6. Menambahkan kontent kedalam sidebar

Sebelum menambahkan kotent tambahkan class terlebih dahulu untuk sidebar. 
```
class="main-area-right"
```
Tambahkan kotent kedalam sidebar

```
<p>
Sit cumque iure nostrum omnis nihil nisi Provident perspiciatis rerum sapiente ullam quaerat? Maiores itaque culpa ipsam similique mollitia, quae At quis necessitatibus vitae eos ipsam Molestiae nesciunt eum magnam!
</p>
```

7. Menambahkan contoh Kepimilikan pada footer

```
<p>©Copyright 2050 by nobody. All rights reversed.</p>
```

8. Setelah kita mengisi semua semantic element dengan kontent, kita bisa lanjut untuk melakukan modifkasi pada style dengan css.

Configurasi BIsa dilakukan dengan Internal atau eksternal css.Pada latihan kali ini metode yang dipakai adalah internal CSS.

Pastikan Tag "style"
sudah ada pada element "head".

Untuk selector Kita bisa gunakan metode selector seperti ini `.class1 .class2`. Dengan cara ini kita bisa menargetkan element "class2" yang berada didalam "class1".
(https://www.w3schools.com/cssref/css_selectors.php)


9. Buat Selector untuk element "body".dengan Declaration seperti dibawah ini

```
body {  
box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            }
```
**BreakDown**:
- box-sizing - Akan digunakan untuk memaksa agar lebar dan tinggi element sesuai dengan permintaan, tanpa ada tambahan dari padding, dll.Untuk lebih jelas bisa dilihat lagi pada chapter HTML[Click okay](.. / document / html.md) 
- Margin - Digunakan agar element tidak memiliki gap / jarak dengan yang lain(optional). 
- padding - digunakan agar kita dapat mengunakan lebar asli dari element body untuk pengembangan desain nanti.


10. Mengatur Desain header.
```
header {
            padding: 0px;
            background-color: Black;
            Padding: 0px;
            color: white;
            text-align: center;
            height: 50px;
        }
```
**Breakdown** 
- Background-color - sesuai namannya digunakan untuk mengatur warna backgroud dari element
- color - digunakan untuk melakukan configurasi warna pada text
- text-align - digunakan untuk mengatur penempatan text. 
- Height - digunakan untuk mengatur tinggi dari element 

11. mengatur agar element h1 tidak membuat jarak dengan element diatasnnya.

```
header h1 {
            margin: 0px;
        }
```

12. Mengatur desain pada navbar 
```
nav {
            padding: 0px;
            margin: 0px;
            background-color: grey;
            padding: 0px;
            height: 30px;
        }
```

13. Mengatur element "ul" (list) agar sesuai dengan navbar.

```
nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
```

14. Mengatur item untuk menjadi menu button pada navbar.

```
/*Contoh untuk mendapatkan alamat selector */
/* nav ul li {} */

nav ul li {
            display: inline;
            color: white;
            margin: 0px 2% 0px 2%;
        }
```

- display - disini digunakan untuk menggubah dari "block" ke "inline"

15. Mengatur warna link pada navbar 
```
nav a {
            color: white;
        }
```

16. Mengatur untuk "main-parent" dan disiapkan untuk kontent utama. 

```
.main-parent {
            padding: 1%;
height: 20%;
            width: 100%;
        }
```

161. Mennambahkan clearfix agar ketinggian dari container tidak collapse

```
/* Menggunakan Clearfix agar container tidak collapse */
        .clearfix:after {
            content: "";
                clear: both;
                    display: table;
        }
```

- clear - digunakan untuk mengembalikan flow pada element menjadi kembali normal. Karena perlu diingat pemakaian float akan mengubah flow element.


17. Mengatur layout dan jarak pada element main. Mengatur element "main"

```
main {
            box-sizing: border-box;
            float: left;
            width: 80%;
        }
```

**Breakdown**
- float - digunakan untuk mengatur penempatan pada element. Perlu diperhatikan 

18. Mengatur layout dan jarak pada element aside. 
```
aside {
            box-sizing: border-box;
            width: 20%;
            float: right;
        }
```

19. Mengatur Area footer agar terlihat formal 
```
footer {
            padding: 10px;
            background-color: Black;
            color: white;
        }
```

## COntoh lengkap 
[script lengkap](../code/latihan-html/index-LT-03.html)
