import React from 'react'
import Styles from "./LogoConatiner.module.css";
export const LogoContainer = ({date,logo,color}) => {
  return (
    <div className={`${Styles.logo_container} ${color=="golden"?Styles.golden:Styles.grey}`}>
        <h5 className={Styles.h5}>{date}</h5>
       <img src={logo} alt="" />
    </div>
  )
}
