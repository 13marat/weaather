import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SingleButton = ({props}: any) => {
  return (
      <NavLink to = {"weather" + props}>WEATHER</NavLink>
  )
}

export default SingleButton