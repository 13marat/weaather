import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxiosWeather = (lat: any, lng: any): any => {
    const [data, setData] = useState<any>()
    const [loading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    const fetchData = () => {
        try {
          axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`).then((res: any) => setData(res.data))
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          setError("ERROR")
        }finally{
          setIsLoading(false)
        }
    }
    
  useEffect(() => {
    fetchData()
  }, [])
    return {data, loading, error}
}

export default useAxiosWeather

