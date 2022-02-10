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

```

Didalam Variabel kita tidak perlu mengatakan tipe data apa yang sedang dipakai, cukup tulis data tersebut dan biarkan system yang akan mencari tau.

Contoh tipe data: 
- `'ini adalah string'` = tipe data string
- `383123` = ini adalah tipe data integer 
- `23.42` = ini adalah tipe data float 
- `true` = ini adalah tipe data boolean


## Task 
### Devops tool chain 
- https://en.wikipedia.org/wiki/DevOps_toolchain 
- https://en.wikipedia.org/wiki/DevOps 

***
### Source

- https://github.com/rails/rails
- https://stackoverflow.com/questions/17350837/ruby-on-rails-add-gem-sqlite3-to-your-gemfile
- https://www.codecademy.com/resources/blog/should-i-learn-ruby/#:~:text=Ruby%20is%20a%20popular%20language,framework%20called%20Ruby%20on%20Rails.&text=Ruby%20on%20Rails%20makes%20web,of%20time%20setting%20things%20up. 

- https://en.wikipedia.org/wiki/DevOps 
