import React from 'react'
import './DisplayBox.css'

const DisplayBox = (props) => {
  const { valueName, value } = props
  return (
    <div className="displayBox">
      <h1>{value}</h1>
      <h4>{valueName}</h4>
    </div>
  )
}

export default DisplayBox
