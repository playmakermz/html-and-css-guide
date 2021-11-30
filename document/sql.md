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

## Daftar Pustaka
1. [Penjelasan database](#penejelasan-database)
2. [Dataset](#dataset)
3. [Database Management System](#databaes-management-system-dbms)
4. [CRUD](crud)
5. [Two type of database](#two-type-of-database)
6. [Relational Database](#relational-database)
7. [Non-Relational Databases](#non-relational-databases-nosql)
8. [Apa itu SQL?](#apa-itu-sql?)
9. [SQL process flow](#sql-process-flow)
10. [contoh perintah pada sql](#contoh-perintah-pada-sql)
11. [Database queris](#database-queries)
12. [Type primary key](#type-primary-key)
13. [Natural Key number](#natural-key-number)
14. [Surrogate key](#surrogate-key)
15. [candidate key](#candidate-key)
16. [alternate key](#alternate-key)
17. [Foregein key](#foregein-key)
1. [composite key](#composite-key)
  2. [Wrap up](#wrap-up)
1. [Data definition language](#ddl-data-definition-language)
1. [DML data manipulation language](#dml-data-manipulation-language)
1. [DCL data control language](#dcl-data-control-language)
1. [Field or column](#field-or-column-kolom)
1. [Record or Row](#record-or-row-baris)
1. [SQL constraint](#sql-constraint)
1. [Backup database](#generate-backup-database)
1. [Restore database](#restore-database)
1. [Operator perbandingan](#operator-perbandingan)
1. [LIKE mengambil data yang mirip](#like)
1. [Baris NULL](#kolom-null)
1. [ORDER BY](#order-by)
1. [LIMIT](#limit)
  2. [Wrap up rangkuman 2](#wrap-up-rangkuman)
## Penjelasan Database

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
1 | Jack  |  Biology
2 | Kate  |  Sociology
3 | Claire | English
4 |Jhon   | Chemistry

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

## DDL (Data Definition Language)
beberapa contoh
- CREATE 
  Membuat Table atau object baru
- ALTER
  Memodifikasi database object seperti table 
- DROP 
  hapus seluruh table atau objek lain 
- USE 
  Digunakan untuk memilih dan mengunakan object 

## DML (Data manipulation Language)
- SELECT 
  Mengambil Satu atau lebih kolom. sebagai contoh mengambil 
  kolom dari table 
- INSERT 
  Membuat / memasukan data Record(baris) baru
- UPDATE 
  Mengubah object pada database. Sebagai contoh digunakan untuk update table  
- DELETE 
  Menghapus object pada datbase 

## DCL (Data control Language)
- GRANT 
  Memberikan hak istimewa kepada pengguna 
- REVOKE 
  mengambil kembali hak istimewan dari pengguna 

## Field or column (kolom) 
Field adalah kolom table yang didesain untuk mengelola informasi 
spesifik untuk record table (ID, name)

## RECORD or ROW (Baris)
RECORD adalah garis horizontal(lurus) pada table.

## SQL constraint
Digunakan untuk memberikan aturan secara spesifik data dalam table 
ini untuk memastikan akurasi dan reliability data dalam table.

###  contoh beberapa constraint: 
- NOT NULL 
- UNIQUE
- PRIMARY KEY 
- FOREIGN KEY 

contoh format: 
`CREATE TABLE nama_table(field_name {tipe_data} {constraint});`

## Generate backup database 
tulis code ini pada terminal, untuk menjalankan aplikasi 
mysqldump
`mysqldump -U root -P nama_database > nama_file_backup.sql`

## Restore database 
1. sebelum restore database, siapkan database kosong
2. `CREATE DATABASE nama_database`
3. pada terminal, jalankan perintah beriku ini 
    `mysql -U root -P nama_database < nama_file_backup.sql`

cara diatas digunakan untuk backup database 

## Untuk melihat isi table 
`SELECT * FROM nama_table;`

untuk melihat seluruh List dalam melihat data dalam table, 
nilai ROW dan COLUMN 

nama | harga 
--- | ---
soto | 5000 
rawon | 5000

## Data integrity 
contoh data integrity pada database 
- entity integrity 
- Domain integrity 

## contoh pengambilan data
`SELECT nama_kolom FROM nama_table;`
Di gunakan untuk mengambil data dalam nama kolom yang dituju 

## Operator perbandingan 
`SELECT * FROM purchases
WHERE price >= 10;
`
- a < b   - Mencari a lebih kecil dari b 
- a <= b  - Mencari lebih kecil atau sama dengan b 
- a > b   - Mencari a lebih besar dari b 
- a >= b  - Lebih besar atau sama dengan b 

Contoh 
`SELECT * FROM nama_database
WHERE nama_kolom <= '1000';
/* 1000 adalah data INT */
`
Ini digunakan untuk mengambil data INT dibawah 
1000 

## LIKE 
digunakan untuk mengambil data yang mirip 

`SELECT * FROM nama_database 
WHERE nama_kolom LIKE %kunci%;
`
Data yang akan diambil akan memiliki kemiripan atau kata kunci 
'kunci'. Sama seperti `*` adalah whildcard digunakan untuk bypass
melewati kata kunci sebelumnya atau selanjutnnya sesuai dengan 
penempatan whildcard. 

Contoh 
- `name%`
kata kunci yang dilewati atau bypass adalah setelah dari 
'name'
- `%name`
kata kunci yang dilewati atau bypass adalah sebelum dari 'name'
- `%name%`
kata kunci yang dilewati atau bypass adalah sebelum dan sesudah 
dari 'name'

## Kolom NULL 

record atau row yang tidak menyimpan data, bisa disebut 'NULL'

kolom atau baris tidak menyimpan nilai apapun. maka kolom atau 
baris adalah NULL.  

## Menampilkan baris yang berisi NULL 
`SELECT * FROM nama_database
WHERE nama_kolom IS NULL;
`
untuk memilih baris yang berisi 'NULL' atau kosong

`SELECT * FROM nama_database
WHERE nama_kolom IS NOT NULL;
`
untuk mengambil baris yang tidak 'NULL' atau kosong

## AND 

`SELECT * FROM nama_database
WHERE nama_kolom = 'kata kunci'
AND nama_kolom = 'kata kunci ke 2';
`
digunakan untuk menambah opsi, pengunaanya seperti '&&'
pada javascript language (if statement). 
Saat mengunakan 'AND' tidak perlu menulis 'WHERE' dibelakangnnya 

## ORDER BY 
`SELECT * FROM nama_database
WHERE nama_kolom = 'kata kunci'
ORDER BY nama_kolom DESC;
`
Jika tanpa 'WHERE'
`SELECT * FROM nama_database
ORDER BY nama_kolom DESC;
`
Digunakan Untuk mengurutkan data pada kolom yang dipilih sesasu 
degan METHOD yang dipilih. 
- ASC ( menaik, dari bawah ke atas) [1,2,3,4,5,6,7,8]
- DESC (Menurun, dari atas ke bawah) [8,7,6,5,4,3,2,]

## LIMIT 
menentukan jumlah baris yang akan dikeluarkan sebgai output. 
Dengan menggunakan 'LIMIT' 

`SELECT * FROM nama_database
WHERE nama_kolom ='kata kunci'
LIMIT 5;
`

## SQL query 

pada akhir sql statement atau sql query, tulis semicolon 
(;) pada akhir statement. 

queris adalah set instruksi yang diberikan pada RDBMS
mengenai informasi apa yang mau diambil. 

## Wrap up Rangkuman
- `WHERE` digunakan untuk mencari kata kunci yang dituju 
- `ORDER BY` digunakan untuk membuat atau mengurutkan data 
- `SELECT` digunakan untuk memilih atau mengambil kolom 
- `FROM` digunakan untuk mengambil atau memilih table 
- `USE` digunakan untuk mengambil atau memilih object seperti database
- `CREATE` digunakan untuk membuat object, seperti database 
- `LIKE` digunakan untuk mengambil data yang mirip
  + Format `WHERE nama_kolom LIKE '%nama%'`
- `IS NULL` digunakan untuk mengambil data kolom yang memiliki nilai 
  Null atau kosong 
    + Format `WHERE nama_kolom IS NULL`
- `AND` digunakan untuk menambahkan opsi pada queri sama seperti di 
  'if statement' pada programming language
  + Format `WHERE nama_kolom = 'str' AND nama_kolom = 'STR'`
- `LIMIT` digunakan untuk membatasi data yang keluar (output)
  + format `WHERE nama_kolom = 'str' LIMIT 5`



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
- https://www.w3schools.com/sql/sql_examples.asp
- https://www.codepolitan.com/membuat-database-dan-tabel-di-mysql-5884222be38fa
- https://www.tutorialspoint.com/sql/sql-rdbms-concepts.htm
- https://www.tutorialspoint.com/sqlite/sqlite_python.htm

