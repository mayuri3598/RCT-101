import {
  Box,Flex,Spacer,
  Grid,GridItem,
  Heading,Text,Image
} from '@chakra-ui/react';

export const CreditCard=({formData})=> {
    return (
      <Box w="100%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Heading>Credit Card</Heading>
        <Box bg='tomato' w='80%' p={4} color='white'>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
  
  <GridItem colStart={4} colEnd={6} ><Heading><Text as='cite'>VISA</Text></Heading></GridItem>
</Grid>

<Grid templateColumns='repeat(4, 1fr)' gap={6}>
  
  <GridItem colStart={1} colEnd={2}><Image height="45px" src='https://th.bing.com/th?q=Chip+Card+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' alt='chip' /></GridItem>
</Grid>

<Grid templateColumns='repeat(4, 1fr)' gap={6}>
  
  <GridItem colStart={1} colEnd={6}>{formData.cardnumber}
  {`${!formData.cardnumber ? "7831 2543 5674 8967" : formData.cardnumber}`}
  </GridItem>
</Grid>

<Flex>
  
  <Box p='4' bg='red.400'>
    <Text>Card Holder</Text>
    {`${!formData.name ? "Priya Ranjan" : formData.name}`}
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    <Text>Expiry Date</Text>
    {`${!(formData.month) ? "07" : formData.month}/`}
    {`${!(formData.year) ? "/26" : formData.year}`}
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    <Text>CVV</Text>
    {`${!formData.cvv ? "783" : formData.cvv}`}
  </Box>
</Flex>
</Box>
  
        
      </Box>
    )
  }