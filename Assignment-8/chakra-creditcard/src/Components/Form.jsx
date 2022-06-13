import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Image,
    InputGroup,
    Input,Text,Flex,
    Grid, GridItem,Heading, Spacer
  } from '@chakra-ui/react';
  import {CreditCard} from "./CreditCard";

const Form = () => {
  const [formData,setFormData]=useState({});
  const handleOnChange=(e)=>{
    const {value,name}=e.target;
      setFormData({
        ...formData,
        [name]:value,
      });
        
  }
  return (
    <div>
      <Flex>
      <CreditCard formData={formData} />
      
     <Spacer/>
      
        <FormControl>
        <Heading>Payment Details</Heading>
  <FormLabel htmlFor='name'>CARD-HOLDER NAME</FormLabel>
  <br />
  <InputGroup borderBottom="1px solid red">
  <Image
  borderRadius='full'
  marginRight="10px"
  boxSize='25px'
  src='https://th.bing.com/th?q=User+Avatar+Icons&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
  alt='Dan Abramov'
/>
    <Input type='text' border="none" name="name" onChange={handleOnChange} placeholder='Enter Name...' />
  </InputGroup>
  <br />
  <FormLabel htmlFor='name'>CARD NUMBER</FormLabel>
  <br />
  <InputGroup borderBottom="1px solid red">
  <Image
  borderRadius='full'
  marginRight="10px"
  boxSize='25px'
  src='https://th.bing.com/th/id/OIP.uw8xOW3DC53wLK6dU35URgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7'
  alt='Dan Abramov'
/>
    <Input type='text' border="none" name="cardnumber"
  onChange={handleOnChange} placeholder='Enter Card Number...' />
  </InputGroup>
  <br />

  <Grid templateColumns='140px 140px 140px' gap={15}>
  <GridItem >
  <FormLabel htmlFor='name'>EXPIRY MONTH</FormLabel>
  <br />
  <InputGroup borderBottom="1px solid red">
  <Image
  borderRadius='full'
  marginRight="2px"
  boxSize='25px'
  src='https://www.bing.com/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'
  alt='Dan Abramov'
/>
    <Input type='number'  onChange={handleOnChange} name="month" border="none" />
  </InputGroup>
  </GridItem>
  <GridItem >
  <FormLabel htmlFor='name'>EXPIRY YEAR</FormLabel>
  <br />
  <InputGroup borderBottom="1px solid red">
  <Image
  borderRadius='full'
  marginRight="2px"
  boxSize='25px'
  src='https://www.bing.com/th?id=OIP.lChqN_G5mk469LFZ7ZFmUAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'
  alt='Dan Abramov'
/>
    <Input type='number' onChange={handleOnChange} name="year" border="none" />
  </InputGroup>
  </GridItem>
  <GridItem >
  <FormLabel htmlFor='name'>CVV</FormLabel>
  <br />
  <InputGroup borderBottom="1px solid red">
  <Image
  borderRadius='full'
  marginRight="2px"
  boxSize='25px'
  src='https://www.bing.com/th?q=Red+Lock+Icon&w=100&h=100&c=7&o=5&dpr=1.25&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate'
  alt='Dan Abramov'
/>
    <Input type='number'  name="cvv" onChange={handleOnChange} border="none" />
  </InputGroup>
  </GridItem>
  
</Grid>
<br />

<Flex>

  <Text p='4'>
  Payment Amount :
  </Text>
  <Text p='4' color='tomato'>
  12300 Rs.
  </Text>
  
</Flex>


<br />

          <button style={{backgroundColor:"tomato", width:"150px", color:"white", padding:"5px", fontSize:"18px",  borderRadius:"10px", border:"none"}}>PAY</button>

</FormControl>
</Flex>
    </div>
  )
}

export default Form;