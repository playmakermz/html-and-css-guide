# Latihan Flexbox 

Flexbox adalah "layout System" pada CSS yang dapat membantu untuk membuat flexibel dan responsive "layout" dengan mudah. Flexbox sudah diperkenalkansejak CSS3 dan menjadi "layout System" yang populer untuk membuat website dinamis. 

Flexbox bekerja dengan cara Menyelaraskan dan mendistribusikan jarak diantara item didalam container.
Container didefinisikan dengan property `display: flex`
, dan "child item" yang berada didalam container. Flex item bisa kita atur bisa kita atur dengan berbagai macam properti yang telah ada pada flexbox. 

Konsep utama dari flexbox adalah kemampuan untuk mempermudah pekerjaan dalam mengatur "width" dan "height" pada item didalam container. Dengan ini kita bisa mengatur item berdasarkan tersediannya jarak didalam container. Sebagai tambahan kita juga bisa mengatur penempatan dan distribusi properti untuk mengatur jarak item didalam container. 

Properti yang terkenal pada flexbox yang paling sering digunakan :

- `Justify-content`
digunakan untuk mengatur element pada garis / sumbu x (main-axis / horizontal).

src: https://www.w3schools.com/cssref/css3_pr_justify-content.php


- `align-items`
digunakan untuk mengatur element pada garis / sumbu y (cross-axis / vertical).

flexbox juga menyediakan properti untuk megatur urutan dari item, mengautr jarak antara item, mengatur ukuran dari individual item pada container. 

Salah satu kelebihan dari flexbox adalah kemampuan untuk membuat dan mengatur layout html dengan sangat mudah. Dengan flexbox kita bisa menyiapkan berbagai macam skema layout untuk berbagai macam device. Klebihan ini adalah salah satu alasan besar kenapa flexbox sangat digemari. 

## Persyaratan 

## Instruksi 

1. Buat fondasi dari halaman website.

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

2. Buat element container untuk flexbox nanti.

```
<div class="menu-container">

</div>
```

3. Buat element container ke dua untuk flexbox. 

```
<div class="menu">


</div>
```

4. Buat element child dan salash satu sibling adalah container 

```
<div class='date'>Aug 14, 2016</div>
            <!-- 02 item -->
            <div class='links'>
                <!-- 03 container & 02 item -->
                <div class='signup'>Sign Up</div>
                <!-- item 03 -->
                <div class='login'>Login</div>
                <!-- item 03 -->
</div>
```

**CSS Phase** 

1. Pastikan element body dan element lainnya memiliki standart format tanpa padding, dan margin.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
**Breakdown**
box-sizing - digunakan untuk memastikan agar lebar dan tinggi element sesuai dengan permintaan. 

2. mengatur "main-container". Mengaktifkan flexbox dan mengatur tampilan

```
.menu-container {
            display: flex;
            justify-content: center;
            color: #fff;
            background-color: #5995DA;
            /* Blue */
            padding: 20px 0;
        }
```
**Breakdown** 
- display flex - digunakan untuk mengaktifkan flexbox pada container. 
- justify-content center - disini digunakan untuk mengatur letak item yang berada didalam container. 

3. Mengatur flexbox dan tampilan pada container "menu"

```
.menu {
            border: 1px solid #fff;
            /* For debugging */
            width: 900px;
            /* height: 50px; */
            display: flex;
            justify-content: space-between;
            /* Space-between akan memberikan jarak antar element, tidak termasuk border */
            /* space-around akan memberikan jarak antar element dan border  */
            /* align-items: center; */
        }
```

- Space-between akan memberikan jarak antar element, tidak termasuk border.
- space-around akan memberikan jarak antar element dan border

4. pada element link diubah menjadi display flex. Dengan begitu item didalamnnya akan berubah menjadi display "inline".

```
.links {
            display: flex;
            /* border: 1px solid red; */
        }
```

5. mengatur jarak pada element "login"
```
.login {
            margin-left: 20px;
        }
```



### Command Wrap Up


- `display: flex;`  // wajib untuk container
- `justify-content: [ flex-start, center, flex-end, space-around, space-between ];` //  mengatur koordinate dari element didalam container ( horizontal ).
- `align-items: [ flex-start, center, flex-end, stretch ]; ` // Sama seperti justify content, tetapi digunakan untuk mengatur secara vertikal.
- `flex-wrap: wrap;`  // digunakan untuk memastikan element pada container tidak keluar dari batas. dengan kata lain bisa merapikan element otomatis.
- `gap: 10px 20px; /* row-gap | column gap */` // digunakan untuk memberikan jarak antara element, tidak termasuk border. 
- `flex-direction: [ column, row, row-reverse, column-reverse ];` // default yang dipakai adalah horizontal. dengan property ini kita bisa mengubah menjadi row ( vertikal )
- `flex: 1;` // digunakan untuk mengatur lebar dari element. < **Yang bisa pakai: child element!** >
- `align-self: [ auto | flex-start | flex-end | center | baseline | stretch ];` // Untuk mengatur penempatan pada element spesifik. < **Yang bisa pakai: child element!** >


## Contoh Source code 
[Click Source Code](../code/flexbox-test/index.html)


## Reference
- https://internetingishard.netlify.app/html-and-css/flexbox/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
