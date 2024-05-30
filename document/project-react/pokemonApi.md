# PokeApi 

ujiCoba membuat aplikasi dimana kita bisa melakukan akses data API, dan mengunakan data tersebut untuk membuat halaman website yang berisi dengan informasi beberapa pokemon yang kita pilih. 

Informasi File: 
- App.js 
- components/PokeList.js 
- components/PokeDetail.js 

***
# Bagian 1 
***

Tujuan:
- Membuat Antar Muka sederhana
- gunakan function `App()` dan modify 

tahap pertama 

```Js
import { useState, useEffect } from "react"
import PokeList from "./components/PokeList"

function App(){
    let [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results))
    .catch((err) => console.log(err))
    }, [])

    return(
    <div style={styles.container}>
      <h2>PokeAPI</h2>
      <PokeList pokemonList={pokemonList} />
    </div>
    )
}

let styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
}

export default App
```
Break:
- `useEffect()` adalah fungsi dimana kita akan menjalankan API, dan mengambil data untuk sementara. 
- `res.json()` mengambil data JSON
- `setPokemonList(data.results)` simpan data tersebut ke state `pokemonList`
- `[]` API hanya digunakan pada bagian awal, saat website awal load. 

## Selanjutnya 

```Js
function PokeList({pokemonList}) {
  return (
    <div style={style.gridContent}>
    {pokemonList.map((item) => (
      <div key={item.name} style={style.card}>
        {item.name}
      </div>
    ))}
  </div>
  )
}

const style = {
  gridContent: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
  },
  card: {
    padding: "16px 8px",
    backgroundColor: "aquamarine",
    borderRadius: "8px",
    cursor: "pointer",
  },
}

export default PokeList
```
Informasi: 
- `pokemonList` kita dapatkan dari `App.js`. dimana itu adalah state `pokemonList`

Break: 
- `pokemonList.map((item)` - digunakan untuk memangil semua item item, dan akan dibuatkan elemen berdasarkan itu. 

***
# Bagian 2 
***

Tujuan: mengambil data API dan menampilkan informasi kedalam halaman. 

### 01 
```Js
// App.js 
const [selectedPokemonName, setSelectedPokemonName] = useState("")
```
siapkan state dan event 

### 02 
```Js
// App.js 
{/* Memasuakan data state */}
     <PokeList
        pokemonList={pokemonList}
        setSelectedPokemonName={setSelectedPokemonName}
      />
      {/* Menampilkan nama pokemon yang dipilih */}
      <p>{selectedPokemonName}</p>
```

kirim data state kedalam component `PokeList`

### 03 

```Js
// PokeList.js 
{pokemonList.map((item) => (
        // Tambahkan onClick event ke dalam div
        <div
          key={item.name}
          style={style.card}
          onClick={() => setSelectedPokemonName(item.name)}
        >
          {item.name}
        </div>
      ))}
```
lakukan perubahan pada map(), dimana kita akan membuat informasi lebih detail pada output.

***
# Bagian 3 
***

Tujuan adalah mendapatkan informasi pokemon yang lebih spesifik dari input button user. secara garis besar, API pertama digunakan untuk mengambil informasi list pokemon. Setelah itu API kedua dijalankan disaat user telah memilih pokemon. 

### 1. 
```Js
// App.js
const [pokemonDetail, setPokemonDetail] = useState()
```
buat state baru, untuk menyimpan data API ke 2 

### 2. 
```Js
// App.js 
 useEffect(() => {
    if (!selectedPokemonName) return
    // URL harus dalam satu baris
    fetch(`https://pokeapi.co/api/v2/
           pokemon/${selectedPokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err))
  }, [selectedPokemonName])
```
tujuan adalah untuk mendapatkan informasi lebih detail dari pokemon yang user pilih. dimana API 1 hanya untuk mengambil list pokemon, API 2 akan mengambil secara spesifik pokemon tersebut. 

Break: 

- ` if (!selectedPokemonName)` - adalah untuk memastikan API ke 2, tidak dijalankan disaat webpage awal load. API ke 2 akan dijalankan setelah user memilikih pokemon. 

### 3. 
```Js
//App.js 

{/* Menampilkan detail pokeon jika ada */}
      {pokemonDetail && <p>{pokemonDetail.name}</p>}
```

dua persyaratan, jika `pokemonDetail` memiliki nilai value, maka print. 

***
# bagian 4 
***

Tujuan: 
- tambahkan fungsi "clear()"
- tampilkan `pokemonDetail` jika ada value 
- tambahkan style untuk clear buttomn (optional)

### 1. 

```Js
// App.js 
// function()
function clear() {
    setSelectedPokemonName("")
    setPokemonDetail()
  }
```
hapus element informasi, dan mulai halaman seperti pada awal. 


### 2. 
```Js
// App.js 
// App return 
{pokemonDetail && (
        <div>
          <h2>Pokemon Detail</h2>
          <PokeDetail pokemonDetail={pokemonDetail} />
          <button style={styles.button} onClick={() => clear()}>
            Clear
          </button>
        </div>
      )}
```
menampilkan pokemon detail. 

### 3. 

isi component `PokeDetail` dengan informasi relevant disaat kita menampilkan mereka

***
# Bagian akhir dan latihan
***

Buat App sama dengan, pendekatan yang berbeda. 

[Contoh](../../code/jsPro/pokeball)
