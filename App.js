import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import Widget from './components/Widget';
import Background from './components/Background';
import LocationTitle from './components/LocationTitle';
import { ZipContext} from './controls/ZipContext';
import env from "react-dotenv";
import { Main, Body } from './themes/theme';
import { ThemeProvider } from "styled-components";
import { clearTheme, cloudsTheme, atmosphereTheme, rainTheme, drizzleTheme, thunderstormTheme, snowTheme } from './themes/theme';


function App() {
  const [city, setCity] = useState('')
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [units, setUnits] = useState('imperial');
  const [selectedTheme, setSelectedTheme] = useState(clearTheme);

  const zip = useContext(ZipContext);

  useEffect(() => {
    const geoURL = 'http://api.openweathermap.org/geo/1.0/zip?zip=' + zip + '&appid=' + env.API_KEY;
    fetch(geoURL)
      .then(res => res.json())
      .then(data => {
        setCity(data.name);
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&units=${units}&lon=${data.lon}&appid=${env.API_KEY}`;
        return fetch(weatherURL);
      })
      .then(res => res.json())
      .then(data => 
        setWeatherData(data))
      .catch(err => {
        console.log('err');
        setError('Something went wrong. Please try again.');
        console.log(error);
      })
  }, [zip, units])

  useEffect(() => {
    if (weatherData) {
      switch (weatherData.weather[0].main) {
        case ('Clouds'):
          setSelectedTheme(cloudsTheme);
          break;
        case ('Thunderstorm'):
          setSelectedTheme(thunderstormTheme);
          break;
        case ('Drizzle'):
          setSelectedTheme(drizzleTheme);
          break;
        case ('Rain'):
          setSelectedTheme(rainTheme);
          break;
        case ('Snow'):
          setSelectedTheme(snowTheme);
          break;
        case ('Atmosphere'):
          setSelectedTheme(atmosphereTheme);
          break;
        case ('Clear'):
          setSelectedTheme(clearTheme);
          break;
        default:
          break;
      }
    }
  }, [weatherData])

  return (
    <ThemeProvider theme={ selectedTheme }>
      <Body>
      {weatherData ?
        <Main>
          <Widget weatherData={weatherData} setUnits={setUnits} units={units} />
          <LocationTitle city={city} error={error} setError={setError}/>
          </Main> : <Main>Data is loading...</Main>}
      {weatherData && <Background weatherData={weatherData} />}
      </Body>
    </ThemeProvider>
  );
}

export default App;

