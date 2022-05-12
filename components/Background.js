import { useEffect, useState } from 'react';
import { BackgroundImage, Grass, Bush1, Bush2, Bush3, Bush4, Bush5, Bush6, Bush7, Bush8, Bush9, Bush10, Bush11, Clouds, NoOverflow, Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Snow, Snowflake1, Snowflake2, Snowflake3, Snowflake4, Snowflake5, Snowflake6, Snowflake7, Snowflake8, Snowflake9, Snowflake10, Snowflake11, Snowflake12, Snowflake13, Snowflake14, Snowflake15, Snowflake16, Snowflake17, Snowflake18, Snowflake19, Snowflake20 } from '../themes/theme'
import BackgroundClouds from './BackgroundClouds';
import BackgroundSnow from './BackgroundSnow';
import BackgroundSun from './BackgroundSun';
import BackgroundRain from './BackgroundRain';

export default function Background(props) {

  const { weatherData } = props;

  return (
    <BackgroundImage>
      {weatherData.weather[0].main === 'Clouds' && <BackgroundClouds />}
      {weatherData.weather[0].main === 'Clear' && <BackgroundSun/>}
      {weatherData.weather[0].main === 'Clear' && <BackgroundClouds/>}
      {weatherData.weather[0].main === 'Atmosphere' && <BackgroundClouds />}
      {weatherData.weather[0].main === 'Rain' && <BackgroundRain />}
      {weatherData.weather[0].main === 'Drizzle' && <BackgroundRain />}
      {weatherData.weather[0].main === 'Thunderstorm' && <BackgroundRain />}
      {weatherData.weather[0].main === 'Snow' && <BackgroundSnow />}
      <Grass>
        <Bush1 />
        <Bush2 />
        <Bush3 />
        <Bush4 />
        <Bush5 />
        <Bush6 />
        <Bush7 />
        <Bush8 />
        <Bush9 />
        <Bush10 />
        <Bush11 />
      </Grass>
    </BackgroundImage>
  );
}