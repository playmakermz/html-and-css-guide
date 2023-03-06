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

## Persyaratan 

- Memiliki dua float 
- Dua float berada didalam main 
- Menggunakan teknik "clearfix" untuk memperbaiki "container collapse"

## Instruksi 

1. Buat Fondasi halaman website
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

2. Buat class main untuk meyimpan dua float

```
<main class="clearfix">


</main>

```

3. Float bagian kiri disimpan ke main 

```
<div class="main-text">

            Float Left

            Adipisicing quia consequatur magnam repellat et voluptatibus sequi Perspiciatis
            commodi cum adipisci asperiores vero. Modi soluta molestiae veritatis
            praesentium nulla modi pariatur veritatis Quas eveniet veritatis excepturi
            velit modi alias!

        </div>
```

4. Float bagian kanan disimpan ke main, dan pastikan berada dibawah "main-text"

```
 <div class="side-text">

            Float Right

            Adipisicing deserunt voluptatibus nisi est suscipit! Nulla unde temporibus sequi
            id officia, distinctio Maiores corporis placeat unde quos iste maxime
            laudantium Suscipit unde adipisci atque et deleniti animi ullam minus.

        </div>
```

5. Mengatur padding pada element main dengan internal css.

```
main {
            padding: 10px;
        }
```

*Breakdown* :
- Padding - untuk memberikan jarak dari border ke content

6. Mengggunakan clearfik teknik untuk memperbaiki "height" dari container. 
```
/* clear float */
        .clearfix:after {
            content: "";
            clear: both;
            display: table;
        }
```
Reference (https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix2)

- Property "content" akan digunakan untuk menambahkan kontent tambahan, setelah kontent utama yang kita tulis secara manual
- Property "display:table" "display" digunakan untuk mengatur tampilan sebuah elemen. Pada selector di atas, nilai dari properti "display" adalah "table", artinya elemen akan ditampilkan seperti tabel pada halaman web.

**Contoh dari property content**
```
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```
Dengan style 
```
.new-entry::after {
  content: " New!"; /* The leading space creates separation
                       between the added content and the
                       rest of the content */
  color: red;
}
```

contoh langsung: https://developer.mozilla.org/en-US/docs/Web/CSS/content#targeting_classes

7. Mengatur element "main-text" menjadi element float.
```
 /* Pengaturan Float */
        .main-text {
            box-sizing: border-box;
            float: left;
                width: 60%;
                    border: 1px solid red;
        }
```

*Breakdown* : 
- box-sizing - digunakan untuk memastikan ukuran element sesuai dengan yang didefinisikan yaitu "60%"
- float - digunakan untuk menempatkan element sesuai dengan arah yang dipilih. 
- width - mengatur lebar dari element 
- border - menampilkan border dari element


8. Mengatur element "side-text" menjadi element float. 
```
.side-text {
            box-sizing: border-box;
                float: right;
                width: 40%;
                    border: 1px solid blue;
        }
```


## Source Code 

Contoh Lengkap

[Source Code](../code/latihan-html/index-LT-float.html)


## Referensi 
- https://css-tricks.com/all-about-floats/
