# Note Tgs 03 


## Melakukan transaksi 

Pastikan engine adalah "InnoDB", informasi ini ada pada bagian "Type".

## Store Prosedure 

adalah object yang disimpan pada basis data mySQL, dan diawali dengan "begin" lalu diakhiri dengan "end". 

## Commit 

commit adalah sebuah perintah yang menandakan bahwa transaksi telah selesai dilaksananan.

Semisal 

```
BEGIN
START TRANSACTION;
INSERT INTO `pasien` (`id_pasien`, `nama_pasien`,
`alamat_pasien`, `jenis_kelamin`)
VALUES (6, 'Tito', 'Jl.Pakis', '1');
SELECT * FROM pasien; 
END
```

tahpan :
- ROUTINE 
- 'create routine'
- go

Setelah itu jika sukses akan bertambah 1 store prosedur pada routine.


## Menjalankan transaksi 

Setelah melakukan store prosedur seperti tahapan diatas, lakukan transaksi.

tahapan: 
- Menu SQL 
- ketik `CALL transaksi1;`

dengan begitu kita bisa melihat hasil dari informasi pasien, akan tetapiu informasi pasien tersebut tidak akan masuk kedalam tabel pasien.

untuk memastikan informasi pasien masuk, digunakan 'commit'.

dengan contoh seperti ini 

```
BEGIN
START TRANSACTION;
INSERT INTO `pasien` (`id_pasien`, `nama_pasien`,
`alamat_pasien`, `jenis_kelamin`)
VALUES (6, 'Tito', 'Jl.Pakis', '1');
SELECT * FROM pasien; 
COMMIT;
END
```

selanjutnya klik "GO", jangan lupa isi "Routine name" dengan "transaksi2"

lalu lakukan `CALL transaksi2`

### Jika terjadi erorr disaat memasukan transaksi1 

ketik ini di terminal 
```
mysql_upgrade --force --force
```

ref: https://stackoverflow.com/questions/4088857/mysql-upgrade-5-0-45-to-5-1-42-error


## ROLLBACK 

Update data, tetapi tidak tersimpan 

```
BEGIN
START TRANSACTION;
UPDATE pasien

SET nama_pasien='Dana'
WHERE id_pasien='1';

ROLLBACK;
COMMIT;
SELECT * FROM pasien;
END
```

data dimasukan pada routine form. 


## new insert dan rollback 

```
BEGIN
START TRANSACTION;
INSERT INTO `pasien` (`id_pasien`, `nama_pasien`,
`alamat_pasien`, `jenis_kelamin`)
VALUES (2, 'Hani', 'JL.baba', '1');
ROLLBACK;

UPDATE pasien
SET nama_pasien='Septin'
WHERE id_pasien='1';
COMMIT;
SELECT * FROM pasien;
END
```

Setelah itu `CALL transaksi` gunakan yang paling baru

## SAVEPOINT 

```
BEGIN
START TRANSACTION;

INSERT INTO `pasien` (`id_pasien`, `nama_pasien`, `alamat_pasien`, `jenis_kelamin`)
VALUES (7, 'Hanif', 'Jl.Babakan loa no 22', '1');
SAVEPOINT POINT1;

INSERT INTO `pasien` (`id_pasien`, `nama_pasien`, `alamat_pasien`, `jenis_kelamin`)
VALUES (8, 'Tina', 'Jl.Sangkuriang no 45', '2');
ROLLBACK TO SAVEPOINT POINT1;

INSERT INTO `pasien` (`id_pasien`, `nama_pasien`, `alamat_pasien`, `jenis_kelamin`)
VALUES (9, 'Lutfhi', 'Jl. Dipenogoro 24', '1');
COMMIT;
SELECT * FROM pasien;
END
```

Dengan code diatas kita bisa melihat data dimasukan pada id pasien `7`, dan `9`. Sedangkan `8` tidak masuk karena ROLLBACK

## Trigger 

digunakan untuk memicu perubahan data.

Masukan code SQL 

```
CREATE TABLE obat ( id_obat
INT(6) AUTO_INCREMENT
PRIMARY KEY,
kode_obat VARCHAR(5),
nama_obat VARCHAR(30),
harga integer(10),
stok integer(5)
)
```

dan masukan lagi code SQL 
```
CREATE TABLE transaksi_obat (
id_transaksi int(3)
AUTO_INCREMENT PRIMARY
KEY,
id_pasien INT(3),
id_obat INT(3),
jumlah int(10),
total_harga int(10)
)
```

Kemudian kedua tabel tersebut relasikan dengan tabel yang lainnya dengan cara
klik menu designer → kemudian klik show / hide table list
→ ceklist seluruh tabel

buat relasi antara tabel, seperti contoh Gambar 28.

Contoh Trigger code 

```
DELIMITER $$
CREATE TRIGGER tg_jual AFTER INSERT
ON transaksi_obat
FOR EACH ROW
BEGIN
UPDATE obat SET stok = stok - new.jumlah
WHERE id_obat=new.id_obat;
END $$
DELIMITER ;
```

Contoh Trigger alternative dengan menu PHPmyadmin 

- Pilih menu 'triggers'
- 'add trigger'
- isi dengan 

```
UPDATE obat SET stok = stok - new.jumlah
WHERE id_obat=new.id_obat;
```
- go 


untuk mencoba trigger anda bisa masukan code dibawah kedalam tabel rumah sakit. 

```
INSERT INTO `transaksi_obat`
(`id_transaksi`, `id_pasien`, `id_obat`, `jumlah`, `total_harga`)
VALUES (NULL, '1', '2', '5', '0');
```

maka data akan stok akan mengalami perubahab 


## Tahap selanjutnya adalah export dan import sampai hal 39. 


## Tahapn selanjutnya adalah replikasi database 

<!-- ========= Progress sampai hal 40 ============== -->
