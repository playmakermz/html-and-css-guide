# R language 

## Ubuntu installation
```
sudo apt install r-base
```

untuk menjalankan integreted r di terminal tekan 
```
R
```

Untuk keluar ide 
```
q()
```


## Untuk menjalankan r script 
```
Rscript namafile.r
```

## COntoh code R 

```
# Membuat data frame dengan kolom "nama" dan "usia"
dataframe <- data.frame(
  nama = c("Andi", "Budi", "Cindy", "Dini"),
  usia = c(25, 30, 27, 24)
)

# Menampilkan isi data frame
print(dataframe)

```

## Mencari Akar dengan SQRT
`sqrt(9) # output: 3`

## Membuat array 
```
## Bottom is array

x <- c(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

y <- c(-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8)

z <- c(1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0)

p <- c(3, 7, 8, 15)

q <- rep(9, times = 6)

print(q)
```

## Membuat dataframe

```
# Create variables
jurusan <- c("Komputer", "Fisika", "Komputer", "Fisika", "Komputer",  "Fisika", "komputer", "Fisika")
asal_daerah <- c("Bogor", "Bogor", "Bandung", "Bandung", "Bogor", "Bogor", "Bandung", "Bandung")
usia <- c(25, 25, 25, 25, 26, 26, 26, 26)

# Combine variables into a data frame
df <- data.frame(jurusan, asal_daerah, usia)

print(df)


## Above is dataframe
```


## Membuat matriks 
```
# Array Matriks A
A <- matrix(c(7, 8, 9, 10, 11, 12, 13, 14, 14, 16, 17, 18), nrow=3, ncol=4, byrow=TRUE)
# Array Matriks B
B <- matrix(c(10, 14, 11, 15, 12, 16, 13, 17), nrow=4, ncol=2, byrow=TRUE)
# Tampilkan kedua nilai
print(A)
print(B)
```

## Membuat tabel 
```
quarter <- data.frame(
Qtr1 = c(-11, -7, -3, 1, 5, 9),
Qtr2 = c(-10, -6, -2, 2, 6, 10),
Qtr3 = c(-9, -5, -1, 3, 7, 11),
Qtr4 = c(-8, -4, 0, 4, 8, " "),
row.names = c(2010:2015) # row object harus berada dibagian bawah sendiri.
)
# menampilkan variabel quarter
print(quarter)
```

Qtr, akan mengisi baris 1

Qtr1 | Qtr2 | Qtr3 | Qtr4 
--- | --- | --- | ---
-11 | -10 | -9 | -8 

![image](https://github.com/playmakermz/warkop-website/assets/60807663/ae55eafa-aaa5-447c-953f-2f059103dce9)

#### Contoh tabel

```
# Build date column
Jan <- c("", 21)
Feb <- c(10, 22)
Mar <- c(11, 23)
Apr <- c(12, 24)
May <- c(13, 25)
Jun <- c(14, 26)
Jul <- c(15, 27)
Aug <- c(16, 28)
Sep <- c(17, 29)
Oct <- c(18, 30)
Nov <- c(19, "")
Dec <- c(20, "")

# Manage column, and convert to dataframe
dataset <- data.frame(Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)

# Memberikan label baris dari dataset yang telah ada
rownames(dataset) <- c("2020", "2021")

# print dataframe into terminal
print(dataset)
```

## ls pat
code 1: `ls(pat="y")`

---

kode ls() pada R dapat kita gunakan untuk mencari object pada einvronment (script) yang sedang berjalan saat ini. Berfungsi untuk membantu kita mencari tau, apakah nama object tersebut sudah ada yang memakai atau belum.

Parameter `pat="y"` ini digunakan untuk mencari tau apakah ada object yang memiliki huruf "y" pada nama mereka.

Sebagai contoh dengan code diatas, kita akan mendapatkan list dari object yang telah kita buat sebelumnnya.

![image](https://user-images.githubusercontent.com/60807663/234479345-ce45cbe3-dd35-4f73-9af3-dbd1876bd3a8.png)


code 2: `for (i in 1:30) {print(i)}`

---
![image](https://user-images.githubusercontent.com/60807663/234479737-336e7aa9-a8be-4849-8b6c-a5a8221fbcb6.png)

Kode diatas digunakan untuk melakukan loop yang akan berjalan dari 1 hingga 30. Dengan menampilkan nilai "i".

Sedangkan nilai "i" itu sendiri adalah loop counter, maka nilai 1 hingga 30 akan ditampilkan secara terpisah dan satu persatu.

"i" tersebut digunakan sebagai iteration, atau loop counter.

code 3: `setwd("C:\B")`

---

pada kode `setwd("C:\B")`, terdapat kesalah pada penulisan backslah(\), Karena pada R penempatan dan 1 backslah(\) memiliki makna dan kegunaan spesial. Oleh karena itu perlu ada tambahan backslah agar bisa dibaca sebagai path.

Kode yang diharapkan `setwd("C:\\B")`. Kode ini berfungsi untuk berpindah directori pada R language. Fungsinya hampir sama dengan `dir` pada CMD windows, atau `ls` pada linux terminal.

Dibawah ini adalah contoh setwd pada linux chromebook saya
```
setwd("/home/yukina")

list.files()
```

Hasilnya:

![image](https://user-images.githubusercontent.com/60807663/234482474-61f571b7-5e5d-4621-89b4-af634ef34bd4.png)


## Melakukan perhitungan gaussian ellimination.

```
# deklarasi matriks M
M <- matrix(c(9, 2, 8, 3, 0, 10, 7, 6, 0, 0, 10, 9, 0, 0, 0, 12), nrow = 4, ncol = 4, byrow =
# deklrarasi matriks identitas I
I <- matrix(c(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,1 ,0 ,0 ,0, 0, 1), nrow = 4, ncol = 4, byrow = TRUE
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil <- M %*% I
# tampilkan hasil
print(hasil)
```

dari matriks 

```
9 2 8 3
0 10 7 6
0 0 10 9
0 0 0 12
```

menjadi 

![image](https://github.com/playmakermz/warkop-website/assets/60807663/09b4fe53-cdcd-4404-9f90-87fb9a2a9c9b)



## Matriks transpose code

```
# deklarasi matriks M
M <- matrix(c(9, 2, 8, 3, 0, 10, 7, 6, 0, 0, 10, 9, 0, 0, 0, 12), nrow = 4, ncol = 4, byrow =
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil <- t(M)
# tampilkan hasil
print(hasil)
```

## Matriks inverse 

```
# deklarasi matriks M
M <- matrix(c(9, 2, 8, 3, 0, 10, 7, 6, 0, 0, 10, 9, 0, 0, 0, 12), nrow = 4, ncol = 4, byrow =
# Operasi perkalian matriks ini akan menghasilkan matriks yang sama dengan matriks awal
hasil <- solve(M)
# tampilkan hasil
print(hasil)
```

## Penjumlahan pada matriks N 
```
## Deklrasi matriks N
N <- matrix(c(2, 1, 8, 6, 7, 2), nrow = 2, byrow = TRUE)
# matriks d
e <- matrix(c(0, 0, 0, 0, 6, 3), nrow =2, byrow = TRUE)
# Hasil
N4 <- N + e
# print N
N4
```

## Membuat box container dengan ukuran yang berbeda-beda 
![image](https://github.com/playmakermz/warkop-website/assets/60807663/204301a2-b692-432b-9f26-a42fe89889c6)

```
# Disini mengatur tinggi dengan "nrow" dan mengatur lebar "ncolumn"
layout(matrix(c(1, 2,2, 3,3, 4), nrow = 3, ncol = 2), heights = c(1,2))
layout.show(4)
```

## Membuat graf

![image](https://github.com/playmakermz/warkop-website/assets/60807663/05af3724-23b7-4544-82fd-9805a19b1c94)

```
x <- c(2,1,2,4,1,2,3,4,2,3,1)
y <- c(4,3,4,4,3,4,5,4,4,5,3)
sunflowerplot(x,
y,
main = "Diskusi 5",
xlab = "X",
ylab = "Y")
```

## Mengambil data matriks dari file txt 

```
scanMatriks <- scan("data2.txt") # ambil data dari file
hasil <- matrix(scanMatriks, nrow = 4, ncol = 10, byrow = TRUE) # masukan variabel ke matriks
print(hasil) # tampilkan ke terminal
```

## Membaca data CSV 

```
Data <- read.csv("penjualan.csv", header=TRUE)
View(Data)
print(Data)
```

# Referensi:
- https://www.geeksforgeeks.org/calculate-square-root-of-a-number-in-r-language-sqrt-function/
