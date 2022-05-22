import React from 'react'
// pass the values like date, logo, heading, subheading, devices, and color as props from parent

import styles from './card.module.css';
import Heading from './Heading';
import Mobile from './Mobile';
const Card = ({date,logo,heading,subheading,devices}) => {
  return (
    <>
       
        <div className={styles.card}>
            <span className={styles.flex}>
                <p>{date}</p>
                <img src={logo} alt="logo" />
            </span>    
             <h2 className={styles.blackBox}>Case Study</h2>
             <Heading txt = {heading} subTxt = {subheading} />
             <Mobile brand={devices} />
             {/* <FontAwesomeIcon icon="fa-light fa-arrow-right" />  */}
        </div>

    </>
  )
}

export default Card