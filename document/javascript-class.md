# javascript class 



### Class 
Secara simple "class" pada javascript adalah sebuah blueprint untuk membuat object yang memiliki kemiripan pada properties dan kebiasaan. Dengan "class" kita bisa membuat properties dan method yang dapat dibagikan dengan instance "class" lainnya. 

Teman-teman bisa bayangkan class adalah sebuah cetakan kue ataupun cetakan es krim yang bisa kita gunakan untuk membuat banyak kue dengan rasa yang berbeda-beda tetapi memiliki bentuk kue yang sama.

Dengan class kita bisa mengatur sebuah project code yang besar dengan lebih effisient. 

### Method 

Method pada javascript adalah sebuah function yang berada didalam object. 
Method memiliki kemampuan untuk mengakses method lain atau properties yang ada didalam object. Method dan function itu sama, yang membedakan adalah cara pemanggilan. Function bisa dipanggil secara langsung, sedangkan method harus dipanggil melalui object 

```
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.

```

### Paramether and argument 

Pada javscript paramter adalah sebuah nilai yang digunakan oleh function sebagai pintu masuk (input data). Disaat kita membuat function parameter adalah variabel yang kita tulis diantara kurung buka dan kurung tutup. 

Sedangkan Argument adalah nilai asli yang akan dimasukan dan diproses oleh function. 


example:
```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

```

- 'name' pada function adalah parameter 
- "John" nilai asli ini adalah argument


### Private and public Properties

pada dasarnnya semua properties dari object adalah berbentuk public, yang berarti mereka bisa dimodifikasi dan digunakan dari luar object tersebut. Tetapi kita juga bisa membuat sebuah properties menjadi private pada javascript menggunakan method. 

Membuat private properties dengan method. 
1. Declarasi sebuah variabel didalam method
2. Variabel tersebut hanya akan bisa diakses dari method itu saja

Contoh: 
```
function Person(age) {
  let myName = 'budi'; // private property

  this.getAge = function() {
    return age; // public method
  };

  this.getName = function() {
    return myName; // private method
  };
}

console.log(myName); // error in this line
```

Seperti pada kode diatas, jika kita mencoba mengakses private variabel seperti itu maka akan terjadi error.


### instance (blue print)

### Object (litterlay object)

Pada javasscript, object adalah sebuah koleksi dari data dan fungsi yang berhubungan, yang biasannya berbentuk seperti pasangan attribute-nilai ( ini seperti property dan value pada css ). Data bisa berbentuk string, numbers, arrays, atau bahkan object lain. Object adalah bagian penting pada javscript, yang akan dapat membantu teman-teman membuat representasi dari bagian code yang complex. Object tersebut memiliki kelibahan encapsulation dan inheritance. 


pada javascript terdapat setidaknnya 5 cara untuk membuat sebuah object:

- Object Literal syntax

contoh object literal syntax
```
// creating an object using object literal syntax
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

// accessing object properties and calling methods
console.log(person.name); // output: "John"
console.log(person.address.city); // output: "New York"
person.sayHello(); // output: "Hello, my name is John!"
```

- Constructor function syntax

```
// Define a constructor function for creating person objects
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  // A method of the Person object
  this.greet = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  };
}

// Use the constructor function to create a new person object
let john = new Person("John", "Doe", 30);

// Call the greet method of the person object
john.greet(); // Output: "Hello, my name is John Doe and I am 30 years old."
```

- ES6 Class syntax

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.greet(); // output: "Hello, my name is John and I am 30 years old."

```

- Object.create() method

```
// Define a person object
const person = {
  greeting: 'Hello!',
  sayHello() {
    console.log(this.greeting);
  }
};

// Create a new object using the person object as its prototype
const john = Object.create(person);

// Add a new property to the john object
john.name = 'John';

// Call the sayHello method on the john object
john.sayHello(); // Output: Hello!
```

- Factory function pattern.

```
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
  };
}

// create new person objects using the factory function
let person1 = createPerson('John', 30);
let person2 = createPerson('Jane', 25);

// call the greet method on each person object
person1.greet(); // output: Hello, my name is John and I am 30 years old.
person2.greet(); // output: Hello, my name is Jane and I am 25 years old.

```

### Constructor

### Super 




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



## Reference:
- ChatGPT
- Freecodecamp 
- https://en.wikipedia.org/wiki/Name%E2%80%93value_pair
