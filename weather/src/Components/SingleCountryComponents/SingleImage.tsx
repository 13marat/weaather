import React from 'react'

const SingleImage = ({props}: any) => {
  return (
    <div>
        <img height={"200px"} src={props} />
    </div>
  )
}

export default SingleImage