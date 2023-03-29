## Catatan export dan import

1. Pada package.json 
```
{
  "type": "module" // type ini sudah ditingalkann
  "type": "commonjs"
}
```

2. pada ex.js // sebagai export module 
```
function halo(){
  console.log('halo');
}

export {halo};

```

3. pada im.js // sebagai import module / penerima module 
```
import { halo } from './ex.js';

halo()

```

***
# Cara kedua untuk export module
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


refrensi: 
- https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
- https://exerror.com/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-importing-ecmascript-6/
- https://www.tutorialsteacher.com/nodejs/nodejs-local-modules
- https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
