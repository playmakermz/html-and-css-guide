## Table of content 
1. [Ruby](#ruby)

# Ruby 

Ruby adalah salah satu bahasa computer yang bisa digunakan secara cross-platfrom 
Oleh karena itu teman-teman tidak perlu khawatir dengan code yang dibuat. 
karena akan bisa dijalankan disemua platfrom. 

## Untuk apa sih memakai Ruby Language?

Ruby adalah salah satu bahasa programm yang bisa digunakan untuk 
berbagai macam kebutuhan, Dengan kata lain ini bisa digunakan 
sebagai: 

- Web development

Ruby memiliki Web development framework bernama Ruby on Rails. 
Rilis sejak tahun 2005.

Ruby on Rails membuat web development cepat dan mudah. 
Seorang developer bisa langsung membuat web application tanpa 
harus menyesuaikan setting ( sebagai contoh setting LocalHost, dan lain-lain)
karena sudah dipersiapkan dari sana. Dan juga disediakan pre-built code 
libraries yang dapat membantu mempercepat pengembangan code. 

- DevOps 

Ruby juga digunakan pada DevOps ( Singkatan dari Software development(Dev) dan IT operations(Ops).)
Bertujuan untuk memperpendek system development life cycle dan menyediakan 
software yang dapat diandalkan setiap saat. 

- Automation

Ruby adalah salah satu bahasa program yang dapat diandalkan. 
Developer bisa membuat script untuk melakukan sesuatu secara otomatis. 
Karena Ruby mudah untuk ditulis, script yang simple dan bisa dikerjakan dengan cepat.

- Web Scraping and crawling

Ruby juga bisa digunakan untuk melakukan crawling pada halaman website. 
Mengambil data dari element tertentu dan mendownload halaman website secara cepat. 
Sebagai contoh, kau bisa menggunakan Nokogiri untuk extract 
structured data dari HTML pada halaman website.

- Data processing 

Ruby language sangat cocok untuk melakukan prosessing data, cleaing, dan 
fileterin. Ada beberapa fitur yang sudah tersedia dalam ruby, seperti map, 
reduce, and select. Fungsi ini sangat membantu untuk melakukan pemrosesan data


## Ruby Cheat sheet

Anda bisa membayangkan ruby sebagai laci yang digunakan untuk menyimpan sesuatu.

`myvariabel = 1`

Terdapat banyak sekali tipe data didalam Ruby. 
- Boolean 
- Integer
- float
- string

## Ruby install Rails 

```
sudo apt install ruby-full
sudo apt-get install libsqlite3-dev
sudo gem install sqlite3-ruby
gem list # Check sqlite3 and sqlite3-ruby if is installed

gem install rails
sudo rails new myapp 
cd myapp
bin/rails server # http://localhost:3000

```

Ruby Basic Syntax

## Print something
` puts 'Hello World!' `

# Variabel 

Didalam Ruby untuk melakukan deklarasi variabel tidak perlu membuat type secara spesifik ( variabel constant yang tidak bisa dirubah atau variabel normal yang bisa dirubah sewaktu waktu ). Variabel ruby bisa menyimpan semua tipe data (Boolean, float, integer, string dan lain-lain). 

Sebagai contoh:
- ` nama_variabel = 'Hello world'`
atau 
- `namaVariabel ='Hello world'`

Hampir semua fitur didalam ruby adalah object ~Atau memang object semua~ 
object variabel bisa diubah kapan saja.

sebagai contoh:
```
umur_ku = 89 
# dua tahun kemudian
umur_ku = 91
# Hasil yang akan dikeluarkan adalah 91
# atau bisa menggunakan cara seperti ini
umurt_ku += 2
# ini disebut sebagai Operators, hasil yang akan dikeluarkan adalah 89 + 2 
# cara ini juga bisa digunakan pada string object

```

Didalam Variabel kita tidak perlu mengatakan tipe data apa yang sedang dipakai, cukup tulis data tersebut dan biarkan system yang akan mencari tau.

Contoh tipe data: 
- `'ini adalah string'` = tipe data string
- `383123` = ini adalah tipe data integer 
- `23.42` = ini adalah tipe data float 
- `true` = ini adalah tipe data boolean

```
title = 'teks'
title.upcase # hasikan TEKS secara sementara 
title.upcase! # hasilkan TEKS secara permanent, tersimpan didalam memory
title.downcase! 
```

## Cara melakukan manipulasi string 
 
Metode ini dapat mempermudah pengabungan antara dua atau lebih variabel menjadi satu. ( String interpolation )

```
nama_makanan = 'nasi goreng'
jumlah_makanan = '3'
hasil = "#{nama_makanan} beli #{jumlah_makanan}"
# output: 'nasi goreng beli 3'
# Perlu diingat gunakan " bukan '
```

## Menulis variabel Constants
Metode ini hanya menyerupai constant tidak sama persis. Didalam constant variabel nilai tidak dapat diubah setelah sudah ditulis. 

didalam RUBY anda bisa menulis sebuah variabel yang akan memberikan notifikasi jika ada perubahan pada variabel yang dituju. 
Contoh penulisan :
```
TEST_CONST = 12
# jika ada perubahan di variabel diatas maka akan ada notifikasi pada terminal
TEST_CONST = 14 
# Akan ada notifikasi jika kita mengubah nilai didalam variabel tersebut

```
Penulisan variabel harus penuh huruf besar

## Control-Flow

Pada penulisan sebuah instruksi terkadang diperlukan untuk menambahkan fungsi atau tindakan untuk mengontrol gimana sebuah instruksi tersebut dilakukan. 

sebagai contoh, mari kita buat sebuah perumpamaan: 

Jika kita ingin pergi ke sekolah, disana terdapat 2 cara untuk menuju ke sekolah 
1. Kita bisa menggunakan jalur paling dekat ke sekolah akan tetapi jalan raya tersebut banyak lubang
2. Kita bisa menggunakan jalur paling jauh ke sekolah akan tetapi jalan raya tersebut lebih lancar

Tentu ini adalah sebuah opsi, kedua jalan tersebut dapat menghasilkan sebuah hasil yang sama akan tetapi proses dilakukannya itu berbeda.

** Cara melakukan control flow **

cara melakukannnya adalah dengan menggunakan If statement,
sebagai contoh:

```
umur_udin = 17

if umur_udin < 19 
    puts " udin adalah anak sma"

elseif umur_udin > 30 
    puts " udin adalah seorang salah satu karyawan dari F.A.N.G"

else 
    puts " Udin adalah seorang mahasiswa"
end
```

Hasil yang akan dikeluarkan adalah "udin adalah anak sma",
karena disitu umur udin dibawah 19 

didalam If statement akan dilakukan checking Data tersebut benar atau salah, Seperti contoh diatas, karena umur udin kurang dari 19 maka hasil dari **if** itu benar dan akan dilakukan instruksi selanjutnnya.

Bisa dikatakan jika sebuah persyaratan sudah terpenuhi maka instruksi selanjutnya akan dilakukan. 

dengan menggunakan If statement kita bisa membuat program memiliki sebuah opsi persyaratan khusus sebelum menjalankan instruksi. 

Beberapa symbol untuk melakukan perbandingan nilai 

```
> # Lebih besar dari 
< # Kurang dari 
== # sama besar dengan 
>= # lebih besar atau sama besar dengan 
<= # lebih kecil atau sama besar dengan 
```

Didalam If statement anda bisa menambahkan banyak sekali opsi, **elsif** untuk memberikan program opsi instruksi apa yang akan dilakukan selanjutnnya.

Cara menulisa if statement dalam satu baris
```
IPK = 4
if IPK == 4 then puts 'Nilai yang memuaskan' else puts 'ayo belajar lebih giat' end
```
Atau menggunakan cara ini
```
IPK = 4 
puts IPK == 4 ? 'Nilai bagus' : 'coba lagi'
# ini adalah Ternary Expression
```

untuk format penulisannya seperti ini 
`Kondisi_persyaratan ? true : false`
1. kondisi persyaratan adalah nilai yang akan di seleksi ( di contoh pertama tadi adalah `IPK == 4` )
2. symbol `?` adalah syntax untuk mengenali bahwa ini adalah Ternary Expression
3. kolom `true` akan dijalankan jika persyaratan telah terpenuhi
4. kolom `:` adalh bagian dari syntax jangan dirubah
4. kolom `false` akan dijalankan jika persyaratan tidak terpenuhi

Contohnya seperti ini 
```
nilai = 2 + 3
hasil = a == 5 ? 'jawaban benar' : 'jawaban salah'
```

## unless 

adalah cara lain untuk melakukan If statement. Didalam unless yang dipakai 
adalah nilai yang berisi 'false' atau bisa dikatakan nilai yang tidak memenuhi persyaratan. 

jika didalam if statement maka yang akan dipakai adalah nilai True (nilai yang sudah memenuhi persyaratan), sedangakan 'unless' adalah nilai false ( nilai yang tidak memenuhi persyaratan )

```
a = 10
unless a > 30
  puts "#{a} hasil dari false, karena 10 tidak lebih dari 30"
end
```

## Case 

```
nilai = 10

case nilai # ini adalah parameter

when 1..100
  puts 'nilai berada di jarak antara 1 - 100'

end
```

atau bisa menjalankan ruby case tapa mengisi paramter

```
nilai = 10
when nilai < 10 
    puts 'nilai kurang dari 10'
when nilai == 10 
    puts 'nilai sama dengan 10'
end
```

Dengan menggunakan instruksi diatas maka akan dilakukan flow control yang cukup mirip dengan if statement, jika persyarataan terpenuhi maka akan dijalankan. 


src : 
- https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1
- https://www.geeksforgeeks.org/ruby-case-statement/

src: https://www.rubyguides.com/2019/10/ruby-ternary-operator/#:~:text=What%20is%20a%20ternary%20operator,just%20one%20line%20of%20code.



## Task 
### Devops tool chain 
- https://en.wikipedia.org/wiki/DevOps_toolchain 
- https://en.wikipedia.org/wiki/DevOps 

***
### Source

- https://stackoverflow.com/questions/948135/how-to-write-a-switch-statement-in-ruby?rq=1
- https://www.rubyguides.com/2015/10/ruby-case/
- https://github.com/training-mode/ruby
- https://github.com/rails/rails
- https://stackoverflow.com/questions/17350837/ruby-on-rails-add-gem-sqlite3-to-your-gemfile
- https://www.codecademy.com/resources/blog/should-i-learn-ruby/#:~:text=Ruby%20is%20a%20popular%20language,framework%20called%20Ruby%20on%20Rails.&text=Ruby%20on%20Rails%20makes%20web,of%20time%20setting%20things%20up. 
- https://en.wikipedia.org/wiki/DevOps 
