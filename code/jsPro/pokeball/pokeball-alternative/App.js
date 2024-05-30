import { useState, useEffect } from "react"

function App() {
  let [pokemonList, setPokemonList] = useState([])
  let [selectedPokemonName, setSelectedPokemonName] = useState("")
  let [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results))
    .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
      if (!selectedPokemonName) return
      // URL harus dalam satu baris
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
        .then((res) => res.json())
        .then((data) => setPokemonDetail(data))
        .catch((err) => console.log(err))
    }, [selectedPokemonName])

    function clear() {
      setSelectedPokemonName("")
      setPokemonDetail()
    }

  return(
    <div className="mainCo">
      <div className="secCo">

      {pokemonList.map((item) => (
        <div key={item.name} className="pokeItem" onClick={() => {setSelectedPokemonName(item.name)}}>
          <p>{item.name}</p>
          </div>
      ))}

    </div>
    {/* Menampilkan detail pokeon jika ada */}
    {pokemonDetail &&
    (<div>
      <img
      src={pokemonDetail.sprites.front_default}
      height={200}
      alt={pokemonDetail.name}
    />
    <h3>{pokemonDetail.name}</h3> <button onClick={() => {clear()}}>Clear</button> </div>)
    }

    </div>
  )
}

export default App
