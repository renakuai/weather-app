import styled from "styled-components";
import { keyframes } from 'styled-components'


//base and themes

const appBase = {
  fonts: ['Inter, san - serif'],
  fontSizes: {
    xlarge: '4rem',
    large: '3.5rem',
    medium: '1.5rem',
    normal: '1rem',
    small: '0.8rem'
  },
  fontWeights: {
    bold: '700',
    semibold: '600',
    regular: '500'
  },
  display: {
    type: 'grid',
    gridLayout: 'minmax(24px, 1fr) minmax(auto, 1000px) minmax(24px, 1fr)'
  }
}

const contentBase = {
  display: {
    type: 'flex',
    gridSpan: '2 / 3',
    flexDirection: 'row',
    gap: '3rem'
  },
  alignment: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  colors: {
    gray: '#F1F1F1',
    purple: '#3A28FF'
  }
}

export const clearTheme = {
  name: 'clear-theme',
  colors: {
    header: '#3A28FF',
    main: '#28282E',
    sky: '#BCEFFF',
    grass: '#189D5D',
    bushes: '#39C280',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    clouds: '#fff'
  }
}

export const cloudsTheme = {
  name: 'clouds-theme',
  colors: {
    header: '#3A28FF',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #95AAB1 0%, #ACC6CF 100%)',
    grass: '#158650',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    bushes: '#27A568',
    clouds: '#E5EEF4',
    cloudShadow: '0px 20px 0px #525D73'
  }
}

export const atmosphereTheme = {
  name: 'atmosphere-theme',
  colors: {
    header: '#FFF',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #274048 0%, rgba(72, 95, 102, 0.8) 100%)',
    grass: '#1A6C45',
    bushes: '#188450',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    clouds: 'rgba(116, 136, 151, 0.8)',
    cloudShadow: '0px 20px 0px #525D73'
  }
}

export const snowTheme = {
  name: 'snow-theme',
  colors: {
    header: '#C031F2',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #7EB2FF 0%, rgba(255, 255, 255, 0) 114.99%)',
    grass: '#FDFEFF',
    bushes: '#FDFEFF',
    bushesShadow: 'drop-shadow(0px 15px 0px #D7E2FF)',
    snow: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
  }
}

export const rainTheme = {
  name: 'rain-theme',
  colors: {
    header: '#FFF',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #456070 0%, rgba(20, 30, 35, 0.7) 100%)',
    grass: '#205139',
    bushes: '#2E694D',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    clouds: 'rgba(112, 133, 148, 0.8)'
  }
}

export const drizzleTheme = {
  name: 'drizzle-theme',
  colors: {
    header: '#FFF',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #5F7B8B 0%, rgba(53, 53, 53, 0.5) 100%)',
    grass: '#205139',
    bushes: '#2E694D',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    clouds: 'rgba(112, 133, 148, 0.8)'
  }
}

export const thunderstormTheme = {
  name: 'thunderstorm-theme',
  colors: {
    header: '#FFF',
    main: '#28282E',
    sky: 'linear-gradient(180deg, #456070 0%, rgba(20, 30, 35, 0.7) 100%)',
    grass: '#205139',
    bushes: '#2E694D',
    bushesShadow: 'drop-shadow(0px 8px 0px #24724C)',
    clouds: 'rgba(112, 133, 148, 0.8)'
  }
}

//styled components
export const Body = styled.section`
  height: 100%;
  display: ${appBase.display.type};
  grid-template-columns: ${appBase.display.gridLayout};
`

export const Main = styled.article`
  width: 100%;
  display: ${contentBase.display.type};
  grid-column: ${contentBase.display.gridSpan};
  flex-direction: ${contentBase.display.flexDirection};
  gap: ${contentBase.display.gap};
  align-items: ${contentBase.alignment.alignItems};
  justify-content: ${contentBase.alignment.justifyContent};
  height: 100vh;
`

export const Temperature = styled.h1`
  font-size: ${appBase.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.main};
  margin: 0;
  line-height: 4rem;
`

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const H2 = styled.h2`
  font-size: ${appBase.fontSizes.large};
  color: ${({ theme }) => theme.colors.header};
  margin: 0;
`

export const H3 = styled.h3`
  font-size: ${appBase.fontSizes.medium};
  color: ${({ theme }) => theme.colors.header};
  margin: 0;
`

export const Paragraph = styled.p`
  margin: 0;
  font-size: 0.85rem;
`

export const ParagraphTime = styled(Paragraph)`
  color: #797979;
`

export const TemperatureMain = styled.article`
  display: flex;
  flex-direction: row;
`

export const TemperatureUnits = styled.article`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  padding-top: 0.35rem;
  padding-left: 0.5rem;
`

export const WeatherWidget = styled.section`
  padding: 2rem;
  width: 300px;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(99, 99, 99, 0.25);
  border-radius: 10px;
`

export const WidgetDetails = styled.article`
  display: flex;
  flex-direction: column;
`

export const WidgetHighlight = styled.article`
  background-color: ${contentBase.colors.gray};
  padding: 1rem 1.25rem 1rem 1.25rem;
`

export const WidgetHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Input = styled.input.attrs({ type: 'number'})`
  border: 1px solid #BFBFBF;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  width: 100px;
  border-radius: 4px;
  font-size: ${appBase.fontSizes.medium};
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${({ theme }) => theme.colors.sky};
  z-index: -1;
`

export const Grass = styled.div`
  width: 100%;
  height: 35%;
  content: '';
  top: 65%;
  position: relative;
  background: ${({ theme }) => theme.colors.grass};
  border-radius: 80% 20% 0% 0% / 50% 10% 0% 0%;
  z-index: 10;
`

export const BushShared = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bushes};
  position: absolute;
  filter: ${({ theme }) => theme.colors.bushesShadow};
`

export const Bush1 = styled(BushShared)`
  height: 36px;
  width: 54px;
  top: 15%;
  left: 10%;
`

export const Bush2 = styled(BushShared)`
  height: 66px;
  width: 80px;
  top: -5%;
  left: 52%;
`

export const Bush3 = styled(BushShared)`
  height: 54px;
  width: 64px;
  top: -1%;
  left: 55%;
`

export const Bush4 = styled(BushShared)`
  height: 48px;
  width: 58px;
  top: -4%;
  left: 57.5%;
`

export const Bush5 = styled(BushShared)`
  height: 64px;
  width: 80px;
  top: -4%;
  left: 62%;
`

export const Bush6 = styled(BushShared)`
  height: 54px;
  width: 70px;
  top: 18%;
  left: 70%;
`

export const Bush7 = styled(BushShared)`
  height: 40px;
  width: 50px;
  top: 17%;
  left: 74%;
`

export const Bush8 = styled(BushShared)`
  height: 60px;
  width: 80px;
  top: 21%;
  left: 77%;
`

export const Bush9 = styled(BushShared)`
  height: 54px;
  width: 60px;
  top: 18%;
  left: 80%;
`

export const Bush10 = styled(BushShared)`
  height: 46px;
  width: 56px;
  top: 20%;
  left: 82.5%;
`

export const Bush11 = styled(BushShared)`
  height: 66px;
  width: 80px;
  top: 16%;
  left: 88%;
`

export const Clouds = styled.div`
  position: relative;
  height: 0;
  white-space: nowrap;
  max-width: 100vw;
  z-index: 1;
`

export const Snow = styled.div`
  position: relative;
  height: 0;
  white-space: nowrap;
  max-width: 100vw;
  z-index: 1;
`

export const NoOverflow = styled.div`
  overflow: hidden;
  width: 100vw;
  position: absolute;
  height: 100vh;
`

const moveAcross = keyframes`
  from {
    transform: translateX(-200px);
  }

  to {
    transform: translateX(4800px);
  }
`

export const CloudShared = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.clouds};
  }
  animation-name: ${moveAcross};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: relative;
  animation-duration: 35s;
`

export const Cloud1 = styled(CloudShared)`
  left: -20px;
  top: 10px;
  opacity: 70%;
`

export const Cloud2 = styled(CloudShared)`
  left: -1200px;
  top: 20px;
`
export const Cloud6 = styled(CloudShared)`
  left: -2300px;
  top: -20px;
  opacity: 80%;
`

export const Cloud3 = styled(CloudShared)`
  left: -3100px;
  top: 60px;
  opacity: 80%;
`

export const Cloud4 = styled(CloudShared)`
  left: -4000px;
  top: 30px;
`

export const Cloud5 = styled(CloudShared)`
  left: -5000px;
  top: 10px;
  opacity: 70%;
  }
`
const snowing = keyframes`
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(800px);
  }
`

export const SnowflakeShared = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.clouds};
  }
  animation-name: ${snowing};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: relative;
  top: -2px
`

export const Snowflake1 = styled(SnowflakeShared)`
  animation-duration: 3s;
  left: 10px;
`

export const Snowflake12 = styled(SnowflakeShared)`
  animation-duration: 6s;
  left: 30px;
`

export const Snowflake13 = styled(SnowflakeShared)`
  animation-duration: 5s;
  left: 50px;
`

export const Snowflake2 = styled(SnowflakeShared)`
  animation-duration: 7s;
  left: 150px;
`

export const Snowflake11 = styled(SnowflakeShared)`
  animation-duration: 2s;
  left: 200px;
`
export const Snowflake15 = styled(SnowflakeShared)`
  animation-duration: 4s;
  left: 420px;
`

export const Snowflake6 = styled(SnowflakeShared)`
  animation-duration: 8s;
  left: 300px;
`

export const Snowflake3 = styled(SnowflakeShared)`
  animation-duration: 2s;
  left: 220px;
`
export const Snowflake10 = styled(SnowflakeShared)`
  animation-duration: 5s;
  left: 100px;
`

export const Snowflake14 = styled(SnowflakeShared)`
  animation-duration: 9s;
  left: 320px;
`

export const Snowflake8 = styled(SnowflakeShared)`
  animation-duration: 3s;
  left: 600px;
`

export const Snowflake4 = styled(SnowflakeShared)`
  animation-duration: 9s;
  left: 1020px;
`

export const Snowflake7 = styled(SnowflakeShared)`
  animation-duration: 8s;
  left: 200px;
`

export const Snowflake9 = styled(SnowflakeShared)`
  animation-duration: 2s;
  left: 650px;
`

export const Snowflake5 = styled(SnowflakeShared)`
  animation-duration: 6s;
  left: 220px;
`

export const Snowflake16 = styled(SnowflakeShared)`
  animation-duration: 3s;
  left: 170px;
`

export const Snowflake17 = styled(SnowflakeShared)`
  animation-duration: 7s;
  left: 120px;
`

export const Snowflake18 = styled(SnowflakeShared)`
  animation-duration: 5s;
  left: 40px;
`

export const Snowflake19 = styled(SnowflakeShared)`
  animation-duration: 3s;
  left: 40px;
`

export const Snowflake20 = styled(SnowflakeShared)`
  animation-duration: 7s;
  left: 70px;
`

export const Sun = styled.svg`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-color: #FFEB80;
  position: absolute;
  z-index: 1;
  left: 60%;
  top: 10%;
`

export const TempBtn = styled.button`
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: none;
  color: #797979;
  height: fit-content;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const TempBtnSelected = styled(TempBtn)`
  color: ${contentBase.colors.purple};
`

export const SearchBtn = styled.button`
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  color: #FFF;
  background-color: #C031F2;
  border: 0px;
  border-radius: 4px;
  &:hover {
    background-color: #A424D0;
    cursor: pointer;
  }
`
export const ErrorDiv = styled.div`
  padding-top: 0.5rem;
  color: red;
  font-weight: 600;
  text-align: right;
`

export const CloudStatic = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.clouds};
  }
  position: relative;
  left: -20px;
  padding-right: 7%;
`
const raining = keyframes`
  from {
    transform: translateX(0px) translateY(-5px);
  }

  to {
    transform: translateX(10px) translateY(800px);
  }
`

const RainShared = styled.div`
  background: linear-gradient(180deg, #B7B7B7 0%, rgba(196, 196, 196, 0.2) 100%);
  width: 1px;
  position: absolute;
  z-index: 5;
  top: -2px;
  animation-name: ${raining};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`

export const Rain1 = styled(RainShared)`
  animation-duration: 0.25s;
  height: 36px;
  left: 5%;
`
export const Rain2 = styled(RainShared)`
  animation-duration: 0.6s;
  height: 45px;
  left: 13%;
  opacity: 0.5;
`
export const Rain3 = styled(RainShared)`
  animation-duration: 1.5s;
  height: 38px;
  left: 20%;
`
export const Rain4 = styled(RainShared)`
  animation-duration: 0.3s;
  height: 23px;
  left: 26%;
  opacity: 0.5;
`
export const Rain5 = styled(RainShared)`
  animation-duration: 0.2s;
  height: 48px;
  left: 31%;
  opacity: 0.75;
`
export const Rain6 = styled(RainShared)`
  animation-duration: 0.7s;
  height: 27px;
  left: 37%;
`
export const Rain7 = styled(RainShared)`
  animation-duration: 1s;
  height: 38px;
  left: 42%;
`

export const Rain8 = styled(RainShared)`
  animation-duration: 0.5s;
  height: 36px;
  left: 49%;
`
export const Rain9 = styled(RainShared)`
  animation-duration: .3s;
  height: 23px;
  left: 58%;
  opacity: 0.5;
`
export const Rain10 = styled(RainShared)`
  animation-duration: 0.6s;
  height: 45px;
  left: 62%;
  opacity: 0.5;
`
export const Rain11 = styled(RainShared)`
  animation-duration: 0.4s;
  height: 27px;
  left: 69%;
`
export const Rain12 = styled(RainShared)`
  animation-duration: 0.2s;
  height: 48px;
  left: 74%;
  opacity: 0.75;
`
export const Rain13 = styled(RainShared)`
  animation-duration: 0.7s;
  height: 45px;
  left: 78%;
  opacity: 0.5;
`
export const Rain14 = styled(RainShared)`
  animation-duration: 0.44s;
  height: 27px;
  left: 82%;
`
export const Rain15 = styled(RainShared)`
  animation-duration: 0.3s;
  height: 45px;
  left: 86%;
  opacity: 0.5;
`
export const Rain16 = styled(RainShared)`
  animation-duration: 0.8s;
  height: 27px;
  left: 92%;
`
export const Rain17 = styled(RainShared)`
  animation-duration: 0.5s;
  height: 38px;
  left: 95%;
`
export const Rain18 = styled(RainShared)`
  animation-duration: 0.7s;
  height: 48px;
  left: 98%;
  opacity: 0.75;
`
