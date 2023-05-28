import React, { createContext } from 'react'
import { country } from '../Types/Types' 

export const CountryContext = createContext<country[]>([])
