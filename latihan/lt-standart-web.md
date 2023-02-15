# Standart Website format

Pada latihan kali ini kita akan berlatih menggunakan HTML dan CSS bersama untuk membuat halaman website Yang berkualitas.

Jangan Khawatir jika masih belum menguasai latihan ini sepenuhnnya, Karena yang paling penting adalah mendapatkan dasar dari pemahaman.

## Mengenal CSS 
CSS atau Cascading Style Sheets adalah teknologi fundamental yang digunakan pada design website. Ini digunakan untuk mengatur layout, warna, fonts, dan element visual lainnya. Dengan adannya CSS kita sebagai developer bisa Membuat halaman website yang dinamis dan responsif untuk berabagai macam perangkat komputasi.

Struktur dari css terdiri dari:
- Selector, Adalah target alamat dari element HTML
- Declaration, adalah definisi / protokol untuk pengaturan tampilan pada element tersebut. 

CSS Juga menyediakan sebuah sistem untuk memberikan kebebasan kepada developer untuk menampilkan fitur yang sesuai dengan ukuran device. Sebagai contoh, untuk Handphone akan memiliki layout yang berbeda dengan apa yang ada pada komputer. Fitur ini disebut sebagai "CSS media queries" yang akan jadi fondasi pada halaman website responsif.

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

Pada panduan kali ini element main dan aside akan dimasukan kedalam satu container untuk mempermudah pengaturan tampilan selanjutnnya. ( Saran dari author, untuk setiap element tersebut diberi tanda "comment" agar mempermudah dalam pengembangan nantinnya ).

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



