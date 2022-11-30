import React from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  theme,
  Heading,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import isDate from 'date-fns/isDate';

function App() {
  const [showCalendarInput, setShowCalendarInput] = React.useState(false);
  const [showTextInput, setShowTextInput] = React.useState(true);
  const [inputedDate, setInputedDate] = React.useState('');
  const [showInputedDate, setShowInputedDate] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const [errorMessageI, setErrorMessageI] = React.useState('')
  const checkDate = date => {
    console.log(new Date(date))
    debugger;
    if((new Date(date) !== "Invalid Date") && !isNaN(new Date(date))){
      if (isDate(new Date(date))){

      setShowInputedDate(true)
      
      }
    }
    else{
      debugger
      console.log('Noooo')
      setShowError(true)
      if(date.length === 0){
        setErrorMessageI('Enter a date')
      }else{
        setErrorMessageI('Invalid Date')
      }
    }
  };
  const handleChange = (event)=> {
    setInputedDate(event.target.value);
    setShowError(false)
    setShowInputedDate(false)
  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" m="0 auto">
        <Heading my="2rem">Calendar App</Heading>
        <Button
          height="60px"
          textTransform={'uppercase'}
          mb="2rem"
          mr={'2rem'}
          px={'1.5rem'}
          background="blue"
          _hover={{background: "blue.700"}}
          _active={{background: "blue.700"}}
          onClick={() => {
            setShowTextInput(false);
            setShowCalendarInput(true);
          }}
          color="white"
        >
          Select date
        </Button>
        <Button
          height="60px"
          textTransform={'uppercase'}
          mb="2rem"
          px={'1.5rem'}
          background="green"
          onClick={() => {
            setShowCalendarInput(false);
            setShowTextInput(true);
          }}
          color="white"
        >
          Enter date
        </Button>
        <Flex width="18%" margin="0 auto" flexDirection="column">
          {showCalendarInput && <Input  value={inputedDate} type="date" mb="2rem"  onChange={handleChange} />}
          {showTextInput && (
            <Input value={inputedDate} type="text" placeholder="Enter Date..." mb="2rem" onChange={handleChange}/>
          )}
        </Flex>
        {showError && <Text mb='1rem' color='red'textAlign={'center'}>{errorMessageI}</Text>}
        <Button
          height="60px"
          textTransform={'uppercase'}
          onClick={() => checkDate(inputedDate)}
          mb="2rem"
          mr={'2rem'}
          px={'1.5rem'}
          background="#fff"
          border='2px solid blue'
        >
          Is Date??
        </Button>
        {showInputedDate && <Text> Inputed Date: {inputedDate}</Text>}
      </Box>
    </ChakraProvider>
  );
}

export default App;
