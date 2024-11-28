import java.io.File;   // Import the FileWriter class
import java.io.FileNotFoundException;  // Import the IOException class to handle errors
import java.io.FileWriter;  // Import the File class
import java.io.IOException;  // Import this class to handle errors
import java.util.ArrayList;  // Import the File class
import java.util.List;
import java.util.Scanner;





class MenuItem {

    int id;
    String nama;
    double harga;
    String kategori;



    public MenuItem(int id, String nama, double harga, String kategori) {

        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.kategori = kategori;

    }

    public void tampilMenu() {
        System.out.println("ID: " + this.id + ", Nama: " + this.nama + ", Harga: " + this.harga + ", Kategori: === " + this.kategori + " ===");
    }
}


class Makanan extends MenuItem {
    String jenisMakanan;

    public Makanan(int id, String nama, int harga, String kategori) {

        super(id, nama, harga, kategori);

        this.jenisMakanan = "Makanan";

    }

}



class Minuman extends MenuItem {

    String jenisMinuman;



    public Minuman(int id, String nama, int harga, String kategori) {

        super(id, nama, harga, kategori);

        this.jenisMinuman = "Minuman";

    }

}



class Diskon extends MenuItem {

    double jenisDiskon;



    public Diskon(int id, String nama, int harga, String kategori) {

        super(id, nama, harga, kategori);

        this.jenisDiskon = 0.10;

    }



    public double Value(List<MenuItem> a) {

        double abc = 0;

        for (MenuItem item : a) {

            abc += item.harga * Integer.parseInt(item.kategori); // assuming kategori holds the quantity

        }

        if (abc >= 100000) {

            System.out.println("Dengan tambahan pajak 10% : " + (abc * 0.10));

            System.out.println("dikarenakan pembelian diatas Rp. 100.000, medapatkan diskon 10% : " + (abc * this.jenisDiskon));

        } else {

            abc = abc + (abc * 0.10);

            System.out.println("Dengan tambahan pajak 10% : " + (abc * 0.10));

        }



        if (abc > 50000) {

            System.out.println("Dapat 1 bonus minuman special, Silahkan diambil di kasir");

        }

        return abc;

    }

}



class Menu {

    public void Main() {

        List<MenuItem> menuList = new ArrayList<>();
        menuList.add(new MenuItem(1, "bakso", 10000, "makanan"));
        menuList.add(new MenuItem(2, "sate", 10000, "makanan"));
        menuList.add(new MenuItem(3, "ayam goreng", 10000, "makanan"));
        menuList.add(new MenuItem(4, "bebek goreng", 10000, "makanan"));
        menuList.add(new MenuItem(5, "es teh anget", 5000, "minuman"));
        menuList.add(new MenuItem(6, "es jeruk", 5000, "minuman"));
        menuList.add(new MenuItem(7, "es buah", 5000, "minuman"));
        menuList.add(new MenuItem(8, "es kelapa", 5000, "minuman"));

        System.out.println("\n\n================= Resto Open Source =====================");
        System.out.println("Menambahkan Menu baru kedala Restoran kami:");
        System.out.println("=========================================================\n\n");


        Scanner scanner = new Scanner(System.in);
        System.out.print("Masukan nama menu baru : ");
        String inputL = scanner.nextLine();
        System.out.print("Masukan Harga : ");
        int inputH = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.print("Masukan kategori : ");
        String inputKat = scanner.nextLine();
        System.out.print("Masukan code Id : ");
        int inputId = scanner.nextInt();



        menuList.add(new MenuItem(inputId, inputL, inputH, inputKat));

        // ======================== Input kedalam TXT ==========

        try {
            FileWriter myWriter = new FileWriter("Menu.txt");

            for (MenuItem item : menuList){
                myWriter.write("ID: " + item.id + ", Nama: " + item.nama + ", Harga: " + item.harga + ", Kategori: === " + item.kategori + " ===" + "\r\n");
                } 
            myWriter.close();
            System.out.println("Successfully wrote Menu to the file.");
          } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
          }

        // ===================== Inpu kedalam TXT ==================

        

    }

}

// =================================== File ======================


class CFC {
    public static void main(String wkw) throws IOException {

        try {
            File myObj = new File("Menu.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
              String data = myReader.nextLine();
              System.out.println(data);
            }
            myReader.close();
          } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
          }

    }
}

// ====================================== Read File ===================



class Pesanan {

    public void Main() {

        Diskon diskon = new Diskon(1, "diskon", 10, "diskon");

        List<MenuItem> menuList = new ArrayList<>();

        menuList.add(new MenuItem(1, "bakso", 10000, "makanan"));

        menuList.add(new MenuItem(2, "sate", 10000, "makanan"));

        menuList.add(new MenuItem(3, "ayam goreng", 10000, "makanan"));

        menuList.add(new MenuItem(4, "bebek goreng", 10000, "makanan"));

        menuList.add(new MenuItem(5, "es teh anget", 5000, "minuman"));

        menuList.add(new MenuItem(6, "es jeruk", 5000, "minuman"));

        menuList.add(new MenuItem(7, "es buah", 5000, "minuman"));

        menuList.add(new MenuItem(8, "es kelapa", 5000, "minuman"));



        System.out.println("\n\n================= Resto Open Source =====================");

        System.out.println("List menu yang terdapat didalam restoran kami:");

        System.out.println("=========================================================\n\n");


        // ============================================ Menu List ======================

        CFC laporanP = new CFC();
        // Wajib check keluar masuk
        try {
            laporanP.main("hi");
          } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
          }

        // ======================================= Menu List ===========================



        System.out.println("\n\n================= Resto Open Source =====================");

        System.out.println("Masukan pesanan dengan menuliskan nomor id.");

        System.out.println("ketik 'selesai' untuk menyelesaikan pesanan");

        System.out.println("=========================================================\n\n");



        List<MenuItem> pesananList = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);

        boolean proses = true;



        while (proses) {

            System.out.print("Masukan Nomor id Pesanan : ");

            String inUserN = scanner.nextLine();

            if (inUserN.equals("selesai")) {

                proses = false;

                System.out.println("========= Pemesanan telah selesai ========");

            } else {

                try {

                    int id = Integer.parseInt(inUserN);

                    if (id < 10) {

                        System.out.print("Masukan jumlah pesanan : ");

                        String inUserJ = scanner.nextLine();

                        for (MenuItem item : menuList) {

                            if (item.id == id) {

                                pesananList.add(new MenuItem(item.id, item.nama, item.harga, inUserJ));

                                break;

                            }

                        }

                    } else {

                        System.out.println("Input yang dimasukan adalah salah, Mohon mengulangi lagi!");

                    }

                } catch (NumberFormatException e) {

                    System.out.println("Input yang dimasukan adalah salah, Mohon mengulangi lagi!");

                }

            }

        }



        System.out.println("======================== Nota Pembelian ==========================");


        for (MenuItem item : pesananList){
        MenuItem printer = new MenuItem(item.id, item.nama, item.harga, item.kategori);
        printer.tampilMenu();
        } 
        System.out.println("Total Harga : " + diskon.Value(pesananList));

        // ======================================= Invoice Write ========================

        try {
            FileWriter myWriter = new FileWriter("invoice.txt");

            for (MenuItem item : pesananList){
                myWriter.write("ID: " + item.id + ", Nama: " + item.nama + ", Harga: " + item.harga + ", Kategori: === " + item.kategori + " ===");
                } 

            myWriter.close();
            System.out.println("Successfully wrote invoice to the file.");
          } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
          }



        // ====================================== Text write ===============================

        System.out.println("======================== Nota Pembelian ==========================");

    }

}



public class Main {

    public static void main(String[] args){

        Menu abc = new Menu();
        Pesanan deg = new Pesanan();
        Scanner scanner = new Scanner(System.in); // Sistem input

        System.out.print("===================== Login System ================\n\n");
        System.out.print("1. Owner\n\n");
        System.out.print("2. Client Only\n\n");

        System.out.print("Login sebagai ? : ");
        String startA = scanner.nextLine(); 

        if (startA.equals("1")) {
            abc.Main();
            deg.Main();
        }

        else if (startA.equals("2")) {
            deg.Main();
        } else {
            System.out.println("Sampa Jumpa");
        }

    }

}

