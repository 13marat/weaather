import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { apis } from './Api/APIs';
import axios from 'axios';
import { CountryContext } from './Contexts/CountryContext';
import useAxios from './Hooks/useAxios';
import { country } from './Types/Types';
import localDataCreator from './Helpers/localDataCreator';
import Country from './Components/Country';
import { Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import CountryInfo from './Components/CountryInfo';
import Weather from './Components/Weather';

const App = () => {
   
  const {data, loading, error} =  useAxios(apis.countryes)
  const [localState, setLocalState] = useState<country[]>([])

  useEffect(() => {
      if(!loading && data){
        const localData = localDataCreator(data, 50)
        setLocalState(localData)
      }
  }, [data])

  return (
        <CountryContext.Provider value={localState}>
            {loading && !error?
              <Loading/>
              :
              <>
                <Routes>
                  <Route path='/' Component={Country}/>
                  <Route path=':countryName' Component={CountryInfo}/>
                  <Route path=':countryName/:weather' Component={Weather}/>
                </Routes>
              </>
              }
        </CountryContext.Provider> 
  )
}

export default App