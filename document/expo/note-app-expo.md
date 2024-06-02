# Catatan pembuatan project note

tujuan adalah membuat aplikasi note, seperti TodoApp. dimana kita akan melakukan
- Input data 
- Membuat form baru 
- close form 
- submit input 
- tampilkan hasil submit

***
# Tahap 1
***
- Membuat file khusus untuk css
- aturan css pada file khusus
- configurasi file 


Expo App yang digunakan berasal dari React template codespace.
```
> /(tabs)
> index.tsx
> > /components
> > Style.tsx 
> > Home.tsx 
> > customTextInput.tsx 
> > customButton.tsx 
```

dimana disana kita akan membuat folder baru bernama `/components` dan 4 file didalamnya. 

penjelasan file:
- `Style.tsx` - disini hanya akan fokus untuk css, dan tidak akan menyentuh komponen lain. 


**Aturan css**:
- tidak ada file dengan format css pada native 
- property seperti `backgroundColor` bisa digunakan pada container 
- tetapi container tidak bisa modifikasi property `color` pada item.
- oleh karena itu `backgroundColor` gunakan untuk container, dan `color` gunakan untuk item

***
# bagian 2
***
- Menyiapkan button 
- Menyiaopkan form 
- Menyiapkan home, yang akan menerima button dan mengatur tata letak mereka.


## Referensi 
- https://medium.com/@yildizfatma/handling-user-input-in-react-native-expo-text-input-buttons-6e7931bc227a

- [Todoapp](https://medium.com/nerd-for-tech/make-todo-list-application-using-react-native-expo-for-ios-and-android-device-1de436168f86)
- [React native and css](https://codeflarelimited.com/blog/use-external-style-sheet-in-react-native/)
