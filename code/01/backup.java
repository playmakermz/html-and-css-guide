import java.util.*;
import java.util.Scanner;

class MenuItem {
    int id;
    String nama;
    int harga;
    String kategori;
    int jumlah;

    public MenuItem(int id, String nama, int harga, String kategori) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.kategori = kategori;
    }
}

class Order {
    int id;
    int quantity;

    public Order(int id, int quantity) {
        this.id = id;
        this.quantity = quantity;
    }
}

class Client {
    String name;
    int age;

    public Client(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void mesinPesanan(List<Order> pesanan, int namaM, int jumlahM) {
        pesanan.add(new Order(namaM, jumlahM));
    }

    public int value(List<MenuItem> a) {
        int abc = 0;
        for (MenuItem item : a) {
            abc += item.harga * item.jumlah;
        }
        if (abc > 100000) {
            System.out.println("Dengan tambahan pajak 10% : " + (abc * 0.10));
            System.out.println("dikarenakan pembelian diatas Rp. 100.000, medapatkan diskon 10%");
        } else {
            abc = abc + (int)(abc * 0.10);
            System.out.println("Dengan tambahan pajak 10% : " + (abc * 0.10));
        }
        
        if (abc > 50000) {
            System.out.println("Dapat 1 bonus minuman special, Silahkan diambil di kasir");
        }
        return abc;
    }

    public void main() {
        Scanner scanner = new Scanner(System.in);
        
        List<MenuItem> menuList = new ArrayList<>();
        menuList.add(new MenuItem(1, "bakso", 10000, "makanan"));
        menuList.add(new MenuItem(2, "sate", 10000, "makanan"));
        menuList.add(new MenuItem(3, "ayam goreng", 10000, "makanan"));
        menuList.add(new MenuItem(4, "bebek goreng", 10000, "makanan"));
        menuList.add(new MenuItem(5, "es teh anget", 5000, "minuman"));
        menuList.add(new MenuItem(6, "es jeruk", 5000, "minuman"));
        menuList.add(new MenuItem(7, "es buah", 5000, "minuman"));
        menuList.add(new MenuItem(8, "es kelapa", 5000, "minuman"));
        

        System.out.println("\n======================= List Menu Resto =============================\n");

        for (MenuItem item : menuList) {
            System.out.println(item.id + ". " + item.nama + " - Rp" + item.harga + " (" + item.kategori + ")");
        }

        System.out.println("\nMasukan pesanan dengan menuliskan nomor id.");
        System.out.println("ketik 'selesai' untuk menyelesaikan pesanan");
        System.out.println("================================================================================\n");

        List<Order> pesanan = new ArrayList<>();
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
                        int inUserJ = Integer.parseInt(scanner.nextLine());
                        mesinPesanan(pesanan, id, inUserJ);
                    } else {
                        System.out.println("Input yang dimasukan adalah salah, Mohon mengulangi lagi!");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Input yang dimasukan adalah salah, Mohon mengulangi lagi!");
                }
            }
        }

        List<MenuItem> totalPrice = new ArrayList<>();
        for (Order order : pesanan) {
            for (MenuItem item : menuList) {
                if (order.id == item.id) {
                    MenuItem inMes = new MenuItem(item.id, item.nama, item.harga, item.kategori);
                    inMes.jumlah = order.quantity;
                    totalPrice.add(inMes);
                }
            }
        }

        System.out.println("======================== Nota Pembelian ==========================");
        for (MenuItem item : totalPrice) {
            System.out.println(item.nama + " x" + item.jumlah + " - Rp" + (item.harga * item.jumlah));
        }
        System.out.println("Total Harga : " + value(totalPrice));
        System.out.println("======================== Nota Pembelian ==========================");
    }
}

class Owner {
    public void main(List<MenuItem> menuList) {
        
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Client toko = new Client("John", 30);
        Owner owner = new Owner();
        List<MenuItem> menuList = new ArrayList<>();
        menuList.add(new MenuItem(1, "bakso", 10000, "makanan"));
        menuList.add(new MenuItem(2, "sate", 10000, "makanan"));
        menuList.add(new MenuItem(3, "ayam goreng", 10000, "makanan"));
        menuList.add(new MenuItem(4, "bebek goreng", 10000, "makanan"));
        menuList.add(new MenuItem(5, "es teh anget", 5000, "minuman"));
        menuList.add(new MenuItem(6, "es jeruk", 5000, "minuman"));
        menuList.add(new MenuItem(7, "es buah", 5000, "minuman"));
        menuList.add(new MenuItem(8, "es kelapa", 5000, "minuman"));

        System.out.println("\n================ Login Interface =========================");
        System.out.println("Akun yang tersedia:");
        System.out.println("\n1. Owner");
        System.out.println("2. Client");
        System.out.println("\nMasukan Nomor ID yang sesuai berdasarkan informasi diatas");
        System.out.println("===========================================================\n");

        System.out.print("Login sebagai ? : ");
        String startA = scanner.nextLine();

        if (startA.equals("1")) {
            System.out.println("=============     Selamat datang owner        =========");
            System.out.print("Masukan nama menu baru : ");
            String inputL = scanner.nextLine();
            System.out.print("Masukan Harga : ");
            int inputH = Integer.parseInt(scanner.nextLine());
            System.out.print("Masukan kategori : ");
            String inputKat = scanner.nextLine();
            System.out.print("Masukan code Id : ");
            int inputId = Integer.parseInt(scanner.nextLine());
    
            menuList.add(new MenuItem(inputId, inputL, inputH, inputKat));
            toko.main();
        } else if (startA.equals("2")) {
            toko.main();
        } else {
            System.out.println("Demi keamanan Toko, pengguna yang tidak dikenali tidak diperbolehkan masuk..");
        }
    }
}
