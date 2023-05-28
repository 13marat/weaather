import React from 'react'

const Image = ({image}: {"image": string}) => {
  return (
    <img height={"120"} src={image}/>
  )
}

export default Image