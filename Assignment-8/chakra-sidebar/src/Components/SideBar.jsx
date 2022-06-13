import React from 'react';
import { Grid, GridItem,Image } from '@chakra-ui/react'
import { SettingsIcon, StarIcon } from '@chakra-ui/icons';
import "../App.css";

const SideBar = () => {
  return (
    <div>
        
        <Grid className='gird'
  templateAreas={`"logo"
                  "home"
                  "trending"
                  "explore"
                  "fav"
                  "setting"`}
                  gridTemplateRows={'50px 50px 50px 50px 50px 50px' }
  gridTemplateColumns={'180px'}
  height="100vh"
  width='200px'
  paddingLeft="20px"
  alignItems="center"
 gap="1"
  color='blackAlpha.700'
  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
>
  <GridItem className='gridItem' pl='2' bg='orange.300' area={'logo'}>
    Logo
  </GridItem>
  <GridItem  className='gridItem' pl='2' bg='pink.300' area={'home'}>
      
     <Image src="https://www.bing.com/th?id=OIP.6WEzaQE8gJGDANTNOEM4hAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" width="15px" alt="home"/> 
    
    Home
    
  </GridItem>
  <GridItem className='gridItem' pl='2' bg='green.300' area={'trending'}>
      <Image width="15px" src="https://www.bing.com/th?id=OIP.2XS7E8Ukmobz8Vqshj9cFAHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="trending"/>
    Trending
  </GridItem>
  
  <GridItem className='gridItem' pl='2' bg='blue.300' area={'explore'}>
      <Image width="15px" src="https://th.bing.com/th/id/OIP.iQOV-qgZwnNWhfwWxBzyzQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="explore"/>
    Explore
  </GridItem>
  
  <GridItem className='gridItem' pl='2' bg='green.300' area={'fav'}>
      <StarIcon/>
    Favourite
  </GridItem>
  
  <GridItem className='gridItem'pl='2' bg='blue.300' area={'setting'}>
  <SettingsIcon />
    Setting
  </GridItem>
  
</Grid>
    </div>
  )
}

export default SideBar;