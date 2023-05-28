import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosWeather from '../Hooks/useWeatherAxios'
import Temperature from './SingleCountryComponents/Temperature'
import Time from './SingleCountryComponents/Time'

const Weather = () => {
    const {weather} = useParams()
    const lat = weather?.slice(7,9)
    const lng = weather?.slice(9, 12)

    const {data} = useAxiosWeather(lat, lng)

  return (
    <div>
      <Time time = {data?.hourly.time[0]}/> 
      <Temperature temperature = {data?.hourly.temperature_2m[0]}/>
    </div>
  )
}

export default Weather