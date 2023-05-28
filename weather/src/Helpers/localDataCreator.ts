import React from 'react'
import { country } from '../Types/Types'

const localDataCreator = (data: any, count: number) => {
    const localData: country[] = data.slice(0, count).map((country: any, index: number)=> ({
        index: index,
        name: country.name.official,
        population: country.population,
        image: country.coatOfArms.png,
        lat: Math.round(country.latlng[0]),
        lng: Math.round(country.latlng[1])
      }))
      return localData
}

export default localDataCreator