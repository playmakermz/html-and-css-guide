# Latihan 1

latihan pertama adalah menghubungkan file CSS (eksternal css) ke dalam document HTMl.
Lakukan latihan di local computer agar dapat memahami materi dengan lebih baik.

- Buat document HTML dengan kerangka dasar:
```
<!DOCTYPE html>
<html lang='en'>

<head>
</head>

<body>
</body>

</html>
```

- Buat file css di samping file html
```
    /* File CSS sederhana */

    body { 
        color: white; 
    }
```

Breakdown:
    - element Body: untuk melakukan configurasi tampilan pada element body di file HTML.
    - Property color: untuk melakukan configurasi warna pada element tersebut

- Untuk memanggil file CSS ke dalam document:
```
    <link rel="stylesheet" href="folder/file.css"/>
```
Breakdown:
    - element "link" berfungsi sebagai definisi antara document, dan sumber luar. Tetapi sebagian besar digunakan untuk memanggil stylesheet dan logo (https://www.w3schools.com/tags/tag_link.asp)
    - attribute "rel" berfungsi untuk menjelaskan secara spesifik hubungan antara document dan document yang dipanggil (https://www.w3schools.com/tags/att_a_rel.asp)

Perlu diperhatikan, element link tersebut harus berada di dalam container `<head>`

```
<head>
    <meta charset='UTF-8' />
    <title>Some Web Page</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
```

## Kesimpulan
- Buat file HTML
- Buat file CSS
- Panggil file css kedalam document HTML.
- lakukan improvisasi hingga terlihat bahwa file css dapat terbukti terhubung dengan document.
