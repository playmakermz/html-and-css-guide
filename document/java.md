# Mari Belajar Bahasa Jawa ( java language )




## point penting pada java 
- jangan lupa semicolon pada setiap perintah

## Tahapan Belajar
- disediakan set code 
- dilakukan breakdown setiap baris ( jika telah dijelaskan pada kesempatan sebelumnya, maka baris tersebut tidak akan dijelaskan lagi )
- catatan kecil mengenai hal baru yang telah dipelajari
- untuk latihan lakukan penyelesaian kasus menggunakan ilmu yang telah dipelajari ( contoh kasus akan diberikan pada akhir halaman )

## Public, class, static, void ?

```
public class start { // Java run start
    public static void main(String[] args) {
        // Membuat variabel integer dengan nama 'angka' dan memberinya nilai 7
        int nilai = 1945; // variabel "nilai"

        // Menampilkan nilai variabel ke dalam terminal
        System.out.println("Nilai didalam variabel adalah" + nilai);
    }
}
// javac start.Java
// java start
```

> hasil breakdown 

Tentu, berikut adalah penjelasan untuk setiap baris kode tersebut:

- public class start :(awalan, deklarasi wajib sebuah publik class, yang dapat diakses oleh file atau class lainnya)

- public static void main(string[] args) :(ini adalah kelompok pertama yang akan dieksekusi oleh file bernama "main", sedangkan args digunakan untuk menerima perintah yang masuk)

- int nilai = 1945; :( int digunakan untuk memberi tau java tipe data apa yang akan di input nanti, "nilai" adalah variabel, "1945" adalah value )

- System.out.printLn("string bro " + nilai); :(bertujuan menampilkan nilai didalam kurung buka)

}: Menutup blok kode untuk metode main.

}: Menutup blok kode untuk kelas start.

// javac start.Java: Komentar yang menunjukkan perintah untuk mengkompilasi file Java. Namun, perlu diperhatikan bahwa Java bersifat case-sensitive, jadi seharusnya perintahnya adalah javac start.java.

// java start: Komentar yang menunjukkan perintah untuk menjalankan program Java yang telah dikompilasi.

> point penting

```
public class start { // Java run start
    public static void main(String[] args) {
        // Membuat variabel integer dengan nama 'angka' dan memberinya nilai 7
        int nilai = 1945; // variabel "nilai"
```




---


## array satu dimensi 

Tentu, saya akan menjelaskan setiap baris dari kode Java yang Anda berikan:

```java
public class start { // Mendeklarasikan kelas dengan nama "start"
    public static void main(String[] args) { // Metode utama yang akan dijalankan oleh JVM (Java Virtual Machine)
        // Membuat variabel array
        int[] arraySatu = {12,10,40}; // Inisialisasi array "arraySatu" dengan tiga elemen: 12, 10, dan 40

        // Menampilkan nilai variabel ke dalam terminal
        System.out.print("Array: ["); // Mencetak teks "Array: [" tanpa baris baru di akhir
        for (int i = 0; i < arraySatu.length; i++) { // Perulangan for untuk mengakses setiap elemen array
            System.out.print(arraySatu[i]); // Mencetak elemen saat ini dari array "arraySatu"
            if (i < arraySatu.length - 1) { // Jika ini bukan elemen terakhir dari array,
                System.out.print(", "); // maka cetak koma dan spasi
            }
        }
        System.out.println("]"); // Mencetak tanda kurung tutup "]" dan baris baru
    }
}
```

> breakdown

- `public class start`: Ini mendeklarasikan kelas dengan nama `start`. Di Java, setiap file harus memiliki setidaknya satu kelas, dan nama kelas harus sama dengan nama file jika kelas tersebut adalah kelas publik.
- `public static void main(String[] args)`: Ini adalah metode `main` yang merupakan titik masuk dari setiap aplikasi Java. `String[] args` adalah parameter yang digunakan untuk menerima argumen baris perintah saat menjalankan program.
- `int[] arraySatu = {12,10,40};`: Ini mendeklarasikan dan menginisialisasi sebuah array integer bernama `arraySatu` dengan tiga nilai: 12, 10, dan 40.
- `System.out.print("Array: [");`: Ini mencetak string `"Array: ["` ke konsol tanpa menambahkan baris baru di akhir.
- `for (int i = 0; i < arraySatu.length; i++)`: Ini adalah perulangan `for` yang digunakan untuk mengiterasi melalui setiap elemen dari array `arraySatu`.
- `System.out.print(arraySatu[i]);`: Ini mencetak elemen saat ini dari array `arraySatu` ke konsol.
- `if (i < arraySatu.length - 1)`: Ini adalah kondisi yang memeriksa apakah elemen saat ini bukan elemen terakhir dari array. Jika tidak, maka cetak koma dan spasi.
- `System.out.println("]");`: Ini mencetak tanda kurung tutup `"]"` dan menambahkan baris baru di akhir.

Perintah `// javac start.Java` digunakan untuk mengkompilasi file `start.Java` dan `// java start` digunakan untuk menjalankan kelas `start` yang telah dikompilasi. Pastikan bahwa nama file dan nama kelas sesuai, dan perhatikan bahwa Java peka terhadap huruf besar/kecil, jadi `start.Java` harus ditulis sebagai `start.java`.


> point penting 

```
int[] arraySatu = {12,10,40}; // Inisialisasi array "arraySatu" dengan tiga elemen: 12, 10, dan 40

        // Menampilkan nilai variabel ke dalam terminal
        System.out.print("Array: ["); // Mencetak teks "Array: [" tanpa baris baru di akhir
        for (int i = 0; i < arraySatu.length; i++) { // Perulangan for untuk mengakses setiap elemen array
            System.out.print(arraySatu[i]); // Mencetak elemen saat ini dari array "arraySatu"
            if (i < arraySatu.length - 1) { // Jika ini bukan elemen terakhir dari array,
                System.out.print(", "); // maka cetak koma dan spasi
            }
```
