import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import {CustomTextInput, WeatherSearch, WeatherInfo} from './components/components' // Ambil component lain
import { styles } from './components/style'
import axios from 'axios'
import { BASE_URL, API_KEY } from './components/constant'

function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [weatherDataData, setWeatherDataData] = useState(null)

  async function searchWeather(location){
    try {
      const data = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      //console.log(data)
      setWeatherData(data) // Pada pencarian kedua baru masuk hook
      console.log(weatherData.status)
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} setWeatherData={setWeatherData}/>
      {/* Tampilkan data cuaca ketika ada weatherData */}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      <WeatherInfo />
    </View>
  )
}


export default App