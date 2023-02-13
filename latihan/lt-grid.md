# Mengenal Grid layout 

CSS Grid adalah layout sistem 2 dimensi yang digunakn untuk melakukan pengaturan design pada halaman website.
    CSS Grid memberikan kemampuan kepada developer untuk mebuat dan mengatur kolom.
Dengan menggunakan CSS Grid kita bisa membuat suatu sistem komplex dengan mudah.

CSS Grid juga diserta dengan fitur seperti gap dan span, Yang dapat mengatur jarak antara element.

Sebelum kita mulai mempelajari mengenai penggunaan Grid, kita harus paham menggenai konsep dari "Container" dan "Item".

- Grid Conteiner:

    Untuk menggunakan fungsi layout Grid kita harus mendefinisikan Container terlebih dahulu. 

    ```
    <div class="Container">
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>

</div>
    ```

## Pengaturan luas dan jarak dengan grid

[contoh aturan grid](../aset/at-grid-01.jpg)

Didalam mengatur layout pada grid kita harus benar-benar memahami penempatan garis.
Karena garis tersebut akan jadi nilai yang menjadi acuan sistem dalam mengatur layout.

Sebagai contoh gambar diatas terdapat garis berwarna merah dan biru. Garis merah digunakan untuk melambangkan "Baris / row", Sedangkan garis biru melambangkan "Kolom / column".

Kotak berwna "grey" tersebut adalah contoh element jika berada di dalam "grida".

Break down dari gambar di atas:
- Terdapat 3 kolom, dan 4 garis kolom (Garis warna Biru)
- Terdapat 4 baris / row, dan 5 garis baris (row line) (Garis warna merah)





***
Reference: 
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://www.w3schools.com/css/css_grid.asp
