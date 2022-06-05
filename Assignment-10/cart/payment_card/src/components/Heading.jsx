import React from 'react'
import Styles from './Heading.module.css'
export const Heading = ({heading,color}) => {
  return (
    <div className={color=="golden"?Styles.golden:Styles.grey}>
        <h1>{heading}</h1>
    </div>
  )
}
