import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Button, Image, Text } from 'react-native'
import {styles} from './style'

export function CustomTextInput({
    text,
    onChange,
    multiline = false,
    placeholder,
    numberOfLines,
  }) 
  {

    return(
        <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
    )

} // ====================== End CustomTextInput



export function WeatherSearch({searchWeather}) {
  const [location, setLocation] = useState('')
    return (
      <View>
        <CustomTextInput
          placeholder="Search the weather of your city"
          numberOfLines={1}
          text={location}
        onChange={setLocation}
        />
        <View style={styles.buttonWrapper}>
          {/* Jalankan function searchWeather dengan parameter location */}
        <Button
          title="Search"
          onPress={() => searchWeather(location)}
        />
        </View>
      </View>
    )
  } // ============================= End  WeatherSearch


  export function WeatherInfo(weatherData){
    console.log(weatherData.status)
    return (
      <View style={styles.marginTop20}>
        <Text style={styles.text}>The weather of {weatherData.status}</Text>
        <Text style={[styles.temperature, styles.marginTop20]}>15 C</Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Image
            source={{ uri: 'https://openweathermap.org/img/w/04d.png' }}
            style={styles.weatherIcon}
          />
          <Text style={[styles.text, styles.bold]}>Clouds</Text>
        </View>
        <Text style={styles.text}>overcast clouds</Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>Visibility : {weatherData.clouds}</Text>
          <Text style={[styles.text, styles.marginLeft15]}>10 km</Text>
        </View>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
          <Text style={[styles.text, styles.marginLeft15]}>10 m/s</Text>
        </View>
      </View>
    )
  } // ================== End Weather Info
  