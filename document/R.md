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



