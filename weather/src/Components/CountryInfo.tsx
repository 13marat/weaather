import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import localDataCreator from '../Helpers/localDataCreator'
import { apis } from '../Api/APIs'
import useAxios from '../Hooks/useAxios'
import { country } from '../Types/Types'
import Loading from './Loading'
import SingleImage from './SingleCountryComponents/SingleImage'
import SingleName from './SingleCountryComponents/SingleName'
import SingleText from './SingleCountryComponents/SingleText'
import SingleButton from './SingleCountryComponents/SingleButton'

const CountryInfo = () => {
  const {countryName} = useParams()
  const {data, loading, error} =  useAxios(apis.country + countryName)
  const [initialState, setInitialState] = useState<country>()
  
  useEffect(() => {
    if(!loading && data){
      const [local]: any = localDataCreator(data, 1)
      setInitialState(local)
    }
  }, [data])
  return(
      <>
      {
        loading && <Loading/>
      }
        {
          <div>
              <SingleImage props = {initialState?.image}/>
              <SingleName props = {initialState?.name}/>
              <SingleText/>
              <SingleButton props = {initialState?.lat + "" + initialState?.lng}/>
          </div>
        }
      </>
  ) 


}

export default CountryInfo