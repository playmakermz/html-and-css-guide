# Mari Belajar Bahasa Jawa ( java language )

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

### hasil breakdown 

Tentu, berikut adalah penjelasan untuk setiap baris kode tersebut:

public class start {: Mendeklarasikan sebuah kelas publik dengan nama start. Kelas ini dapat diakses oleh kelas lainnya.
public static void main(String[] args) {: Ini adalah metode utama yang akan dieksekusi pertama kali ketika program dijalankan. String[] args digunakan untuk menerima argumen baris perintah.
int nilai = 1945;: Mendeklarasikan variabel bertipe integer dengan nama nilai dan memberinya nilai 1945.
System.out.println("Nilai didalam variabel adalah" + nilai);: Menampilkan teks “Nilai didalam variabel adalah” diikuti dengan nilai dari variabel nilai ke terminal.
}: Menutup blok kode untuk metode main.
}: Menutup blok kode untuk kelas start.
// javac start.Java: Komentar yang menunjukkan perintah untuk mengkompilasi file Java. Namun, perlu diperhatikan bahwa Java bersifat case-sensitive, jadi seharusnya perintahnya adalah javac start.java.
// java start: Komentar yang menunjukkan perintah untuk menjalankan program Java yang telah dikompilasi.


---



