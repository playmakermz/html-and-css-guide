# Pengenalan Database

dengan adannya miliaran pengguna internet saat ini,
sebuah sistem atau perangkat penggelo yang bisa mengatur
, mendata, mengelompokan data pengguna itu
sangat dibutuhkan.

Peningkatan pembuatan dan penggunan data meningkat sangat
tajam. Untuk membuat suatu decision/pilihan, banyak
organisasi membutuhkan orang yang bisa mengelola data
( business analsysts, data enginer, dan lain-lain )

SQL adalah bahasa program dan suatu aplikasi
penggelola data yang telah diandalkan oleh para
developer dalam waktu yang lama, meskipun SQL
adalah teknologi lama akan tetapi para developer
secara terus menerus mengembangkannya.

## Penejelasan Database

secara umum database, adalah koleksi dari informasi yang terkait.
sebagai contoh( buku nomor telphon, list belanja/shopping list, Todo list, 
Absensi kelas), Database bisa disimpan dimana saja sebagai contoh: 
- Di atas kertas
- didalam kepala
- didalam komputer
- PowerPoint ini 
- bagian komen

Ada banyak sekali cara untuk mengatur database dan banyak sekali tipe database
yang didesain untuk tujuan tertentu. Contohnnya:

Jika kau menggunakan Excel, kau harus sudah terbiasa dengan table, mirip seperti spreadsheet.
table memiliki row dan columns. Database tables, harus diatur dengan column, dan setiap column
harus memiliki nama unik(Primary key).

Kesimpulan: database adalah sebuah koleksi dari informasi terkait dan bisa 
disimpan dimana saja. 

## Dataset

Cara mudah untuk menganalisa data?
adalah dengan menjalankan side by side pada dataset!

>> Tambahkan Contoh Dataset

Penggunaan SQL database bisa berada dibanyak sekali
bidang.

## Databaes Management System (DBMS)

Special software yang akan membantu pengguna mengelola database.
Membantu menambahkan, menghapus, mengubah data yang berada di database


## CRUD

Change, Read, Update, dan delete.


## Two type of database

*   Relational Database (SQL)
    mengatur data menjadi satu atau lebih table. setiap table memiliki columns dan rows.
    kata kunci khusus mengidentifikasi setiap baris. Relational database 
    adalah database yang berdasarkan data yang terhubung atau sudah ditentukan 
    sebelumnnya. Berbagai item disusun menjadi satu set tabel dengan kolom 
    dan baris. Tabel digunakan untuk menyimpan informasi tentang object yang 
    akan dipresentasikan dalam database.

*   Non-Relational ( noSQL/ tidak hanya SQL )
    *   menyimpan kata kunci
    *   Document (JSON, XML)
    *   Graphs
    *   flexibel Tables

## Relational Database 

*   Student Table

ID | Name  |  Major
--- | --- | ----
1. | Jack  |  Biology
2. | Kate  |  Sociology
3. | Claire | English
4. |Jhon   | Chemistry

* User Table 

Username |  Password  |  Email |
---     |   ---   |   ---
1.jsmith22  |  wordpass |   ...
2.catlover45|  apple223  |  ...
3.gamerkid  |  ...    |     ...
4.giraffe   |  ...   |      ...

Relational Database Management System (RDBMS)
  membantu pengguna membuat dan mengelola relasi database
contoh: mysql, oracle, postgresql, mariaDB

## Non-Relational Databases (noSQL)

*   Non-relational database management system (NRDBMS)
    membantu pengguna membuat dan mengatur non-relational database
    contoh; mongoDB, dynamoDB, apache cassandra

*   Implementation specific
    *   setiap non-relational database masuk kategori ini, tidak ada
        bahasa standart.

    *   kebanyakan NRDBMS akan mengunakan bahasa program mereka untuk
        menjalankan CRUD dan administrative operations pada database.

## Apa itu SQL?

SQL(Structures Query Language)  adalah salah satu bahasa untuk Membuat desain 
aturan di dalam relational database. Ini sudah ada sejakl 1970s dan cara umum untuk 
mengakses data didalam database. fitur yang sering dipakai dalam SQL adalah 
baca, manipulasi, mengubah data. Beberapa alsan SQL bisa menjadi popular: 

- semantik dan mudah dipahami
- Bisa mengakses data yang besar secara langsung dari tempat penyimpanan
- Jika dibandigkan dengan spreadsheet tools, analisa data lebih mudah dilakukan 
  dalam SQL karena mudah melakukan audit dan replika data
- SQL itu bagus dalam database language untuk menyimpan data kedalam database 
- SQL adalah alat yang bagus untuk website seperti PHP, Phython, Java, ASP dan lain-lain 
  untuk membuat dynamis website

Peringkat SQL dalam penggunaan di dunia data science tools berada di pringkat kedua
dilansir dari https://research.aimultiple.com/data-science-competition/ 
(community data science competitions) dalam surveynya berjudul '2020 Data 
Science and Machine Learning Survey'(https://www.kaggle.com/paultimothymooney/2020-kaggle-data-science-machine-learning-survey)

## SQL process flow

disaat kau menjalankan SQL query pergi ke dalam SQL server. SQL server bekerja untuk
mengelola database, dan lain-lain. SQL server memangil database table dan return hasilnya.
(https://way2tutorial.com/sql/sql-introduction.php)

## contoh perintah pada sql
dalam penulisan SQL, pengguna tidak perlu memperhatikan besar atau kecilnya suatu huruf karena SQL tidak mengunakan 'case sensitiv'.
Contoh Perintah penting dalam SQL:
- 'SELECT' - ekstrak data dari database
- 'UPDATE' - Perbarui data dari database
- 'DELETE' - hapus data dari database
- 'INSERT INTO' - masukan data baru ke database
- 'CREATE DATABASE' - Buat database baru
- 'ALTER DATABASE' - ubah databse
- 'CREATE TABLE' - buat table baru
- 'ALTER TABLE' - ubah table
- 'DROP TABLE' - delete table
- 'CREATE INDEX' - buat index (kata kunci)
- 'DROP INDEX' - hapus index


## Database queries

queris adalah permintaan yang dibuat oleh database management system untuk
informasi spesifik.

dengan semakin complex database tersebut, akan lebih sulit untuk mendapatkan
sebuah informasi.

Secara mudahnnya, queries adalah set instruksi pada database

## Type primary key 
Student id    | name    |   manjor
---           | ---     |   ---
1   | Jack    | Biology
2   | Kate    | Sociology
3   | claire  | English
4   | Jack    | biology
5   | Mike    | comp. sci


Primary key is important in database table. pastikan primary key adalah informasi
yang pasti berbeda untuk setiap row. jika dengan contoh diatas maka primary key adalah
'student id'.

## Natural key number

Natural key number adalah kata kunci yang telah ada sebelumnnya di dunia 
nyata. Sebagai contoh Nomor KTP adalah kata kunci yang telah ada didunia
nyata dan bisa digunakan sebagai natural key.

## Surrogate key 
adalah kata kunci yang tidak memiliki bentuk didunia nyata.

## candidate key 
adalah kandidat kata kunci, kita bisa sebut sebagai identitas yang bisa 
membedakan object satu dengan yang lain. Sebagai contoh: 
jika kita ingin membedakan orang dengan menggunakan data pribadi, 
kita bisa menggunakan nomor KTP, atau menggunakan nomor handphone mereka,
atau bisa menggunakan alamat email mereka. Setiap data tersebut bisa 
membedakan satu dengan yang lainnya. ketiga primary key diatas bisa 
disebut sebagai candidate key yang akan dipakai sebagai primary key,
atau alternate key. 

## Alternate key 
bisa dikenal sebagai secondary key, ini adalah identitas pembeda 
didalam row/baris dalam table

## Foregein Key

adalah attribute yang bisa kita simpan pada database table. Yang akan menghubungkan
dengan database table lain.

Ini digunakan untuk menyimpan primary key kedalam row database table lain.

*   employee
    emp-id  |   name    |   branch-id | super-id
    ---     |  ----     |   ---  |   ---
    103     | budi      | 1       | 102
    101     | alva      | 2       | 103
    102     | rangga    | 3       | 101

*   Branch
    branch-id | branch-name   | mgr-id
    ---       | ---           | ---
    3         | Bambang        | 102
    2         | nasi-gorengeng | 101
    1         | soto           | 103

Foregein key penting untuk menghubungkan atau mendefinisikan hubungan antara tables.
dengan contoh diatas; column 'branch-id' adalah Foregein key yang akan menghubungkan
dengan database table bernama 'Branch'.

Didalam contoh diatas. ini juga mendefinisikan siapa supervisor untuk setiap orang,
102,103,101. budi employee id '103' supervisor id is 102 'rangga'.

## composite key

jika ada primary key yang terdiri dari 2 atau lebih column, biasa disebut sebagai
composite key. ini digunakan untuk membuat primary key tetap unik, diantara
banyak data yang memiliki kesamaan.

sebagai contoh; untuk memngidentifikasi setiap murid dibutuhkan nama depan dan
nama belakang. akan sulit atau tidak mungkin bisa untuk membedakan murid
jika hanya dari nama depan atau nama belakangnya saja.

Jika ada murid yang memiliki nama depan yang sama dengan murid lain akan sulit
untuk membedakaanya. Dengan digunakannya composite Key kita bisa mengurangi
kemungkinan salah mebedakan orang.

Teknik tersebut sangat berguna untuk membedakan setiap data dengan data yang lain.
didalam suatu sistem database tidak boleh ada kesamaan dari primary key,
setiap primary key itu harus unik dan berbeda dengan yang lain.

tidak harus primary key saja yang bisa mengunakan composite key.
gabungan dari 2 atau lebih column bisa menjadi composite key juga

<!--menit ke 41:47 -->

## wrap Up

*   database adalah koleksi informasi
*   computer bagus dalam menyimpan database
*   DBMS membuat database lebih mudah diatur dan lebih aman
*   DBMS memperbolehkan CRUD operasi
*   rational database dan non-rational database
1. RDBMS (Relational Databse Management System)
2. Data Integrity ( Menyimpan data sekali dan menjauhi duplikasi)
3. SQL Constraints ( Constraints adalah aturan yang dipasangkan kepada table column
  untuk menyimpan data dan menghindari pengguna untuk menyimpan data yang tidak valid kedalam
  column)
4. Better Security (Menetapkan memberikan atau hak kepada pengguna individu. 
  Mengunakan ini pengguna bisa menyimpan data penting kedalam table menggunakan username
  dan password)
5. Database Normalization (Adalah proses untuk menyimpan database dengan efisien. 
  Tidak perlu menyimpan data yang sama lebih dari satu)
6. Beberapa type relationships( one to one, one to many, many to many)
  - One to one relationship: Mengabungkan dua table  -
  - One to many relationship: membuat foreign key dari parent table ke 
    child table
  - Many to many relathionship: membuat relation table baru 
*   Structured query language (SQL)
    *   bahasa standart untuk berinteraksi dengan RDBMS
    *   digunakan untuk menjalankan C.R.U.D operasi.
    *   digunakan untuk menjelasakan table dan struktur
    *   SQL code biasannya digunakan dengan satu RDBMS tidak bisa untuk
        yang lain.
*   Row adalah baris yang melintang horisontal
    Kanan ke kiri

*   Column adalah baris melintang vertikal, dimulai dari atas ke bawah.

## Pranala menarik
*   https://en.wikipedia.org/wiki/Composite\_key
*   https://www.kelasexcel.id/2014/09/pengertian-row-column-cell-dan-range-excel.html
*   https://www.youtube.com/watch?v=HXV3zeQKqGY\&t=1504s
- <https://www.w3schools.com/sql/sql_syntax.asp>
- https://mode.com/sql-tutorial/introduction-to-sql/
- https://www.analyticsvidhya.com/blog/2020/07/8-sql-techniques-data-analysis-analytics-data-science/
- https://www.studytonight.com/dbms/introduction-to-sql.php
- https://www.sqlshack.com/introduction-to-sql/
- https://way2tutorial.com/sql/sql-introduction.php
- https://aws.amazon.com/id/relational-database/
- http://www.agiledata.org/essays/keys.html
