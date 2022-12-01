import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/react';
export default function CalendarHeader({setShowCalendarInput, setShowTextInput}) {
  return (
    <>
      <Heading my="3rem">Calendar App</Heading>
      <Flex
        maxWidth={'600px'}
        margin="30px auto"
        justifyContent={'space-between'}
      >
        <Button
          height="60px"
          textTransform={'uppercase'}
          width="240px"
          mb="2rem"
          mr={'2rem'}
          px={'1.5rem'}
          background="blue"
          _hover={{ background: 'blue.700' }}
          _active={{ background: 'blue.700' }}
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
          width="240px"
          textTransform={'uppercase'}
          mb="2rem"
          px={'1.5rem'}
          background="green"
          onClick={() => {
            setShowCalendarInput(false);
            setShowTextInput(true);
          }}
          color="white"
          _hover={{ background: 'green.700' }}
          _active={{ background: 'green.700' }}
        >
          Enter date
        </Button>
      </Flex>
    </>
  );
}
