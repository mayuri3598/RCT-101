import React from 'react'
import styles from './card.module.css';
// let url = "https://cutewallpaper.org/24/arrow-png-red/186615538.jpg";
const Mobile = ({brand}) => {
  return (
   <>
       <div className={styles.flex}>
          <h3> {brand} - Mobile </h3>
          {/* <img src={url} alt="right-arrow2" /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}


          
       </div>
   </>
  )
}

export default Mobile