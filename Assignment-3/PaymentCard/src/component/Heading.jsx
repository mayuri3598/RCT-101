import React from 'react'

const Heading = ({txt,subTxt}) => {
  return (
      <>  

           <h1 className='heading'>{txt}</h1>
           <h2 className='heading'>{subTxt}</h2>
      </>
   
  )
}

export default Heading