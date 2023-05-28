import React from 'react'

const Temperature = ({temperature}: any) => {
  return (
    <h1>{temperature && temperature + "C"}</h1>
  )
}

export default Temperature