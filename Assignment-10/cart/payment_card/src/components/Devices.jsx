import React from 'react'
import Styles from './Devices.module.css'
export const Devices = ({devices,arrow,color}) => {
  return (
    <div className={`${Styles.device_container} ${color=="golden"?Styles.golden:Styles.grey} `}>
        <h5>{devices}</h5>
        <img src={arrow} alt="" />
    </div>
  )
}
