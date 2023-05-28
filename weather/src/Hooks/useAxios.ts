import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxios = (url: string): any => {
    const [data, setData] = useState<any>()
    const [loading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    const fetchData = () => {
        try {
          axios.get(url).then((res: any) => setData(res.data))
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

export default useAxios





