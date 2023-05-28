import React, { useContext, useEffect } from 'react'
import { FilterContext } from '../Contexts/FilterContext'
import { CountryContext } from '../Contexts/CountryContext'
import onChange from '../Helpers/onChange'

const Input = () => {
  const [filter, setFilter] = useContext(FilterContext)
  const data = useContext(CountryContext)

  return(
    <>
      <input type="text" onChange={(event: React.FormEvent<HTMLInputElement>) => {setFilter(onChange(event, data))}}/>
    </>
    )
}

export default Input