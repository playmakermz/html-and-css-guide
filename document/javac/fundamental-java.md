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

```
public class Main {
  public static void main(String[] args) {
    int myNum = 100000;
    System.out.println(myNum);
  }
}

```



--- 
### Switch

```
public class Main {
  public static void main(String[] args) {
    int day = 4;
    switch (day) {
      case 6:
        System.out.println("Today is Saturday");
        break;
      case 7:
        System.out.println("Today is Sunday");
        break;
      default:
        System.out.println("Looking forward to the Weekend");
    }
  }
}

```
--- 
### float 


---
### Array 

```
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    // Create array cars
    cars[0] = "Opel";
    // overwrite index 0 from arrays cars
    System.out.println(cars[0]);

    for (String i : cars) {
      System.out.println(i);
    }
    // print each item on array
  }
}

```

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

```
public class Main {
  public static void main(String[] args) {
    // This is single line a comment

    /* The code below will print the words Hello World
    to the screen, and it is amazing */
    
    System.out.println("Hello World");
  }
}

```

---
### Expression 

--- 
### Operator 

--- 
### if statement 

```
public class Main {
  public static void main(String[] args) {
    int time = 22;
    if (time < 10) {
      System.out.println("Good morning.");
    } else if (time < 18) {
      System.out.println("Good day.");
    }  else {
      System.out.println("Good evening.");
    }
  }
}
```

--- 
### loop

- while loop 

```
public class Main {
  public static void main(String[] args) {
    int i = 0;
    while (i < 5) {
      System.out.println(i);
      i++;
    }  
  }
}

```

- For loop 
```
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
      System.out.println(i);

    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    for (String i : cars) {
      System.out.println(i);
    }  
  }
}

```

- break a loop 

```
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
      if (i == 4) {
        break;
      }
      System.out.println(i);
    }  
  }
}

```

- continue a loop

```
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
      if (i == 4) {
        continue;
      }
      System.out.println(i);
    }  
  }
}
```


---
# Reference

- https://www.w3schools.com/java/java_examples.asp (fundamental command) 
