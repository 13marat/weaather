import React from 'react'
import { country } from '../Types/Types'

const onChange = (event: React.FormEvent<HTMLInputElement>, data: country[]) => {
    const val = event.currentTarget.value
    const temp = data.filter((country: any) => country.name.toLowerCase().startsWith(val))
    return temp
}

export default onChange