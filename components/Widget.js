import React, { useEffect, useState, useMemo } from 'react';
import LocationContext from '../App.js';
import { ZipContext } from '../controls/ZipContext';
import { Temperature, TemperatureMain, Paragraph, TemperatureWrapper, TemperatureUnits, WeatherWidget, WidgetHighlight, WidgetDetails, WidgetHeaderWrapper, TempBtn, TempBtnSelected, ParagraphTime } from '../themes/theme'



export default function Widget(props) {
  const { weatherData, units, setUnits } = props;

  const memoizedTime = useMemo(() => {
    const today = new Date();
    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return time;
  }, []);

  function handleUnits(e) {
    e.preventDefault();
    if (e.target.id === 'Imperial') {
      setUnits('imperial')
    }
    else {
      setUnits('metric')
    }
  }

  return (
    <WeatherWidget>
      <WidgetHeaderWrapper>
        <header>
          <ParagraphTime>Today at {memoizedTime}</ParagraphTime>
          <TemperatureWrapper>
            <TemperatureMain>
              <Temperature>{weatherData.main.temp.toFixed(1)}</Temperature>
              {units === 'imperial' ? <TemperatureUnits>
                <TempBtnSelected id="Imperial" onClick={(e) => handleUnits(e)}>°F</TempBtnSelected>
                <TempBtn id="Metric" onClick={(e)=> handleUnits(e)}>°C</TempBtn></TemperatureUnits> : <TemperatureUnits><TempBtn id="Imperial" onClick={(e)=> handleUnits(e)}>°F</TempBtn>
                <TempBtnSelected id="Metric" onClick={(e)=> handleUnits(e)}>°C</TempBtnSelected></TemperatureUnits>}
            </TemperatureMain>
            <article>
              <Paragraph>Humidity: {weatherData.main.humidity}</Paragraph>
              <Paragraph>Wind: {weatherData.wind.speed.toFixed(1)}mph</Paragraph>
            </article>
          </TemperatureWrapper>
        </header>
      </WidgetHeaderWrapper>

      <WidgetDetails>
        <p>{weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</p>
        <WidgetHighlight>
          <Paragraph>High: {weatherData.main.temp_max.toFixed(1)}°</Paragraph>
          <Paragraph>Low: {weatherData.main.temp_min.toFixed(1)}°</Paragraph>
          <Paragraph>Feels like: {weatherData.main.feels_like.toFixed(1)}°</Paragraph>
        </WidgetHighlight>
      </WidgetDetails>
    </WeatherWidget>
  );
}