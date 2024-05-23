# Version Control Git 

Git adalah version control yang digunakan untuk melakukan tracking perubahan (sama seperti save data pada game) pada folder project. Dengan git kita bisa melihat siapa yang melakukan perubahan, kapan dilakukan perubahan, dan apa yang dirubah. 

Version control system adalah software yang digunakan untuk membantu kita mengetahui history perubahan pada project. Dengan ini kita bisa melihat dan membandingkan perubahan dari file. Dan mempermudah kolaborasi dengan orang lain dengan lebih efektif. 

Git mengunakan sistem distribusi, yaitu memperbolehkan kita untuk melakukan perubahan saat offline dan "merge" perubahan tersebut saat kita sudah siap dan online. Dengan ini kita sebagai developer tidak perlu terlalu takut jika tidak ada internet. 

Beberapa command line git yang paling sering digunakan:

- `git init` Sebagai pembuka git (mengaktifkan git) pada folder 
- `git add` menambahkan perubahan pada "stagin area"
- `git commit` menulis nama untuk save data | menulis judul / alasan perubahan 
- `git push` upload repository git ke internet. 
- `git pull` mendownload perubahan dari repository yang berada dari luar 
- `git branch` membuat "branch" baru, dan beberapa hal tentang branch 
- `git merge` menggabungkan branch 1 dan yang lainnya

  > Merge is best used when the target branch is supposed to be shared.

Git juga dilengkapi fitur untuk melakukan pull request (untuk melakukan kolaborasi dengan orang lain) dan code reviews (melihat / membadingkan code). Dengan mode ini kita akan lebih mudah untuk bekerja dengan orang lain.

Secara garis besar git adalah alat yang sangat bermanfaat untuk kita secara jangka panjang. 


## Git dan github 

Git adalah suatu version control system yang dirancang untuk menangani berbagai macam bentuk project. Pengembangan awal pada tahun 2005 oleh Linus Torvalds, Git menjadi titik awal dalam version control pada source code.

Git dapat membantu kita untuk melacak perubahan pada "source code", dan bisa membantu kita untuk kembali pada versi sebelumnya jika dibuthkan.
Ini adalah fungsi yang sangat dibutuhkan oleh para developer untuk membantu mereka mengerjakan semua pekerjaan dengan sangat efektif. 

Pada sisi lain terdapat github yang menjadi sistem berbasis hosting untuk project-project "source code". Github dimulai pada tahun 20008, github menjadi salah satu platfrom hosting yang sangat reliable untuk melakukan colaborasi dengan banyak project, penyelesaian masalah, dan mengelolah code.

Pada github, terdapat fitur "Pull Request" dimana kita sebagai user bisa melakukan collaborasi, dan akan menunggu hasil collaborasi diterima oleh owner. Oleh karena fitur tersebut, colaborasi pada github bisa memiliki aturan sesuai dengan apa yang kita ingin kan. 



## Mengenai savepoint

Konsep sederhana dari Git adalah savePoint. 

Dimana pada suatu game, kita bisa melakukan savepoint untuk menyimpan progress kita, dan kita bisa kembali ke save point sebelumnya jika character yang kita gunakan kalah, atau alasan lainnya. 

Konsep pada git juga sama seperti itu.

dengan, kita bisa melihat "history" atau id savepoint sebelumnya.
```
git log
```

dengan, kita bisa berpindah ke savepoint sebelumnya. 
```
git checkout [commit_id] # Manual 
git checkout master # atau main, untuk kembali ke savepoint paling baru
```



## Mengenai Rebase

Jika terdapat dua perubahan, semisal pada local dan repository.

terdapat conflict history dimana bagian repository telah berada pada versi selanjutnya, sedangkan bagian local tertinggal.

Kita bisa menggunakan perintah
```
git add .
git commit -am 'new'
git pull --rebase 
```
dimana selama tidak terdapat conflict pada baris code, antara bagian baru dan lama maka masalah akan dapat diselesaikan dengan sangata mudah.

## Mengenai Rebase ( Jika terdapat conflict pada baris )

mereka akan secara otomatis akan memberikan tanda seperti ini. dimana terdapat informasi bagian head (Repository) dan local diberi tanda pada file yang kita upload. 

Semisal pada baris ke 20, terdapat dua versi code. Terdapat yang baru dan lama.

```
<<<<<<< HEAD
halo saya mau conflict disini
=======
halo saya dari branch belakang apa bisa
>>>>>>> ca838f0 (conf)
```

## Perbedaan Rebase dan Merge

- `git pull --rebase` adalah fungsi rebase
- `git pull --no-rebase` adalah fungsi merge

Rebase | Merge
--- | ---
Mereka akan menulis ulang history | Mereka akan menyimpan history
Sangat disarankan untuk menyelesaikan masalah private | sangat disarankan untuk menyelesaikan masalah public
conflict pada satu branch yang sama | conflict pada branch yang berbeda

Kapan mereka harus digunakan?

- Terkadang pada open source mereka menambahkan aturan khusus untuk collaborator. untuk menggunakan `rebase` agar mendapatkan git linear clean history
- Terkadang pada project yang membutuhkan banyak collaborator akan membutuhkan git merge.

## Cara manual alternative repot dari Rebase

Semisal terdapat conflict antara local dan repository.
kita bisa lakukan

- copy code yang kita rasa penting dari locale
- masukan code tersebut secara manual kedalam repository
- hapus keseluruhan code
- lalu clone code dari repository


<!-- 
Todo list 
- https://www.simplilearn.com/git-rebase-vs-merge-article#:~:text=Git%20merge%20keeps%20the%20commit,more%20organized%2C%20linear%20project%20history.
- Buat satu repository, satu lakukan editing langsung, satunya editing manual
- Manual jangan pull, hinga editing repo selesai 

-->

### Reference
- https://www.simplilearn.com/git-rebase-vs-merge-article#:~:text=Git%20merge%20keeps%20the%20commit,more%20organized%2C%20linear%20project%20history.

- https://binarysiddhant.hashnode.dev/demystifying-git-pull-rebase-and-git-pull-no-rebase
