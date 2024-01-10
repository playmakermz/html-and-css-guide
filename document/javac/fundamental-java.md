# Java Fundamental

disini akan merangkum mengenai point penting mendasar pada java.
menyelimuti var, tipe data, array, if statement, loop

--- 
### Variabel 

Variabel adalah sebuah konsep dimana kita menyimpan data kedalam memory, dengan name address. Bisa diumpamakan menyimpan barang kedalam laci umum di perpustakaan, Dimana setiap laci memiliki nomor.

```
// String: sequence of characters
let greeting = "Hello, World!";

// Number: numeric data type
let age = 25;
let price = 99.99;

// BigInt: large integers beyond the safe integer limit for Numbers
let bigNumber = 1234567890123456789012345678901234567890n;

// Boolean: true or false
let isAvailable = true;

// Undefined: a variable that has not been assigned a value
let user;

// Null: a variable with a null value
let empty = null;

// Symbol: a unique and immutable primitive value
let sym = Symbol('description');

// Object: key-value pairs of collection of data
let person = {
  name: "Alice",
  age: 30
};

// Array: list-like objects
let colors = ["red", "green", "blue"];

// Function: block of code designed to perform a particular task
function greet(name) {
  return "Hello " + name + "!";
}

```

> contoh mengubah value didalam variabel 

```
int myNumber = 10; // Initial declaration and assignment
myNumber = 15;     // Changing the value of the variable
```

--- 
### String 

```
public class Main {
  public static void main(String[] args) {
    String name = "John";
    name = "Bukan John"; // menimpa data sebelumnya
    System.out.println("Hallo" + name); // text dan variabel
  }
}
```

--- 
### integer 


--- 
### float 


---
### Array 

--- 
### Boolean 

```
public class Main {
  public static void main(String[] args) {
    boolean isJavaFun = true;
    boolean isFishTasty = false;
    System.out.println(isJavaFun);
    System.out.println(isFishTasty);

    System.out.println(isJavaFun == true);
    // simple if statement
  }
}
```
---
### comment 

---
### Expression 

--- 
### Operator 

--- 
### if statement 

--- 
### loop


---
# Reference

- https://www.w3schools.com/java/java_examples.asp (fundamental command) 
