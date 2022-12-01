import React from 'react';
import { Input, Flex, Button, Text } from '@chakra-ui/react';
export default function CalendarForm({
  showCalendarInput,
  inputedDate,
  handleChange,
  showTextInput,
  showError,
  errorMessageI,
  checkDate
}) {
  return (
    <>
      <Flex width="32%" margin="0 auto" flexDirection="column">
        {showCalendarInput && (
          <Input
            value={inputedDate}
            type="date"
            mb="2rem"
            onChange={handleChange}
          />
        )}
        {showTextInput && (
          <Input
            value={inputedDate}
            type="text"
            placeholder="Enter Date..."
            mb="2rem"
            onChange={handleChange}
          />
        )}
      </Flex>
      {showError && (
        <Text mb="1rem" color="red" textAlign={'center'}>
          {errorMessageI}
        </Text>
      )}
      <Button
        height="60px"
        textTransform={'uppercase'}
        onClick={() => checkDate(inputedDate)}
        mb="2rem"
        mr={'2rem'}
        px={'1.5rem'}
        background="#fff"
        border="2px solid blue"
        width="240px"
        mt={'1rem'}
      >
        Is Date??
      </Button>
    </>
  );
}
