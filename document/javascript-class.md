# javascript class 



### Class 
Secara simple "class" pada javascript adalah sebuah blueprint untuk membuat object yang memiliki kemiripan pada properties dan kebiasaan. Dengan "class" kita bisa membuat properties dan method yang dapat dibagikan dengan instance "class" lainnya. 

Teman-teman bisa bayangkan class adalah sebuah cetakan kue ataupun cetakan es krim yang bisa kita gunakan untuk membuat banyak kue dengan rasa yang berbeda-beda tetapi memiliki bentuk kue yang sama.

Dengan class kita bisa mengatur sebuah project code yang besar dengan lebih effisient. 

### Method 

### Paramether 

### Argument 

### instance 

### 



## OOP memiliki empat konsep utama 

1. "encapsulation": digunakan agar code kita lebih private, memberikan informasi kepada developer lain bahwa kode ini tidak boleh dirubah. Bisa berwujud local variabel ( kebalikan dari global variabel )

2. "inheritance": adalah proses untuk membuat kelas baru tetapi memiliki karaktersitik dari class yang menjadi parent. 

3. "Polymorphism": adalah bentuk dari inheritance, tetapi class childer telah melakukan perubahan pada method dari class parent.

contoh:
```
class Animal {
  sound() {
    console.log('This animal makes a sound');
  }
}
class Dog extends Animal {
  sound() {
    console.log('Bark! Bark!');
  }
}
class Cat extends Animal {
  sound() {
    console.log('Meow!');
  }
}
const animal1 = new Animal();
const dog1 = new Dog();
const cat1 = new Cat();
animal1.sound(); // Output: This animal makes a sound
dog1.sound(); // Output: Bark! Bark!
cat1.sound(); // Output: Meow!
```

- "abstration": Dengan abstration kita bisa lebih fokus ke prosesnya daripada menggenai menulis detail data secara manual. Dengan abstraction kita bisa memasukan parameter ke object secara langsung. Dengan begitu object akan lebih berfariasi daripada tipe diatas 

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    throw new Error("makeSound method must be implemented");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks: ${this.sound}`);
  }
}
const dog = new Dog("Buddy", "Woof woof!");
// insert paramter ^
dog.makeSound();
```

### Konsep OOP dengan garbage collection 

OOP dan garbage collection itu berbeda. 
Garbage collection digunakan untuk membersihkan penggunaan memory dari aplikasi yang tidak berjalan.

