import React from 'react'
import Styles from './Casestudy.module.css'
export const Casestudy = ({color}) => {
  return (
    <div className={color=="golden"?Styles.golden:Styles.grey}>
        <button>Case Study</button>
    </div>
  )
}
