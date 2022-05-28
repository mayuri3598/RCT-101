import React from 'react'
import './Reset.css'
export const Reset = ({reset}) => {
  return (
    <button className="reset-btn" onClick={()=>reset()}>Reset</button>
  )
}
