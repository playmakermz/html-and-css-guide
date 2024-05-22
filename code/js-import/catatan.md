# Catatan export dan import

Terdapat dua cara ex/im yaitu dengan 

CommonJS | ES Module 
--- | --- 
Lebih compatible dengan nodejs | lebih compatible dengan web browser
No import functionality | Must use a require statement to access exported functions and properties


1. Pada package.json 
```
{
  "type": "module" // ES module 
  "type": "commonjs" // commonjs
}
```

***
# Cara kedua untuk export module (Recommended at some case)
dalam cara kedua, pengguna tidak perlu untuk melakukan perubahan pada 'package.json'. Lebih simple

## Ini digunakan untuk export module
```
let mysql = require('mysql2');

let main = mysql.createConnection({
    host: 'localhost',
    user: 'node',
    password: 'root'
});

module.exports = main;
```

## Ini digunakan untuk import module
```
//require {db} from './ex.js';
let db = require('./ex')

db.connect();

db.query (`SHOW DATABASES;`, function(err, result, field){
    if (err) throw err;
    console.log(`Hasil Field: /n`, field);
    console.log(`Hasil result \n`, result);
})

db.end()
```

## Contoh lain commonjs, export dua atau lebih  

```
// ex.js 
class math{
    constructor(a,b){
        this.x = a
        this.y = b
    }

    tampilkan(){
        console.log(this.x + this.y)
    }
}

class sleep{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    tampilkan(){
        return this.a + this.b
    }
}

module.exports = {
    math,
    sleep
}


// ====================================
// im.js 

let mathh = require('./ex')

let abc = new mathh.math(1,1)

abc.tampilkan()

```

***
## Cara ketiga (Telah dipelajari)

Jika mengunakan konsep module seperti code dibawah ini, pada kolom form kita harus buat dengan **sangat detail nama filenya**

```Javascript
// ex.js 
class math{
    constructor(a,b){
        this.x = a
        this.y = b
    }

    tampilkan(){
        console.log(this.x + this.y)
    }
}


export default  math

```

Lalu export ke 

```
import math from './ex.js'

let abc = new math(1,1)

abc.tampilkan()

```

### Contoh lain ES module 

```
// ex.js 

class math{
    constructor(a,b){
        this.x = a
        this.y = b
    }

    tampilkan(){
        console.log(this.x + this.y)
    }
}

class sleep{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    tampilkan(){
        return this.a + this.b
    }
}

export default  {
    math,
    sleep
}

// =========================================
// im.js 

import mathh from './ex.js'

let abc = new mathh.math(1,1)

abc.tampilkan()

```

## contoh ES module untuk module luar
**Readline-sync**

```
import buah from './ts.js'
import Readline from 'readline-sync'


let abc = new buah()

let aa = Readline.question('hi')

abc.tampilkan()

```

refrensi: 
- [new reference](https://dev.to/lico/how-to-import-and-export-in-commonjs-and-es-modules-43m1)
- https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
- https://exerror.com/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-importing-ecmascript-6/
- https://www.tutorialsteacher.com/nodejs/nodejs-local-modules
- https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
