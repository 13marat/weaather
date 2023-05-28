import React, { useContext, useEffect, useState } from 'react'
import { CountryContext } from '../Contexts/CountryContext'
import Image from './Image'
import Population from './Population'
import Name from './Name'
import { country } from '../Types/Types'
import { NavLink } from 'react-router-dom'
import Input from './Input'
import { FilterContext } from '../Contexts/FilterContext'
const Country = () => {
    
    const dataContext = useContext(CountryContext)

    const [filter, setFilter] = useState<any>([])

    useEffect(() => {
        setFilter(dataContext)
    }, [dataContext])

    return (
        <>
            <FilterContext.Provider value = {[filter, setFilter]}>
                <Input/>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", rowGap: "30px"}}>
                        {filter.map((country: country): JSX.Element => {
                        return(
                            <div key={country.index}>
                                <Image image = {country.image}/>
                                <NavLink style={{textDecoration: "none", color: "black"}}  to = {country.name}>
                                    <Name name = {country.name}/>
                                </NavLink>
                                <Population population = {country.population}/>
                            </div>
                        )
                        })}
                    </div>
            </FilterContext.Provider>

        </>
  )
}

export default Country