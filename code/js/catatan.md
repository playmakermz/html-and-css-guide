## Catatan export dan import

1. Pada package.json 
```
{
  "type": "module"
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
function halo(){
  console.log('halo');
}

export {halo};
```
