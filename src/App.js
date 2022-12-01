import React, { useState } from 'react';
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
import {
  isDate,
  add,
  sub,
  format,
  differenceInDays,
  getYear,
  getMonth,
  differenceInBusinessDays,
  differenceInCalendarWeeks,
  getDate,
  getDay,
  isThursday,
} from 'date-fns';
import { days, zodiacSignsArr, monthsArr } from './utils/utils';

function App() {
  const [showCalendarInput, setShowCalendarInput] = useState(false);
  const [showTextInput, setShowTextInput] = useState(true);
  const [inputedDate, setInputedDate] = useState('');
  const [showInputedDate, setShowInputedDate] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessageI, setErrorMessageI] = useState('');
  const [nextDay, setNextDay] = useState(null);
  const [prevDay, setPrevDay] = useState(null);
  const [xmasDay, setXmasDay] = useState(null);
  const [weekDay, setWeekDay] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  console.log(days, monthsArr, zodiacSignsArr);
  const checkDate = date => {
    if (new Date(date) !== 'Invalid Date' && !isNaN(new Date(date))) {
      if (isDate(new Date(date))) {
        setShowInputedDate(true);
        setNextDay(
          add(new Date(inputedDate), {
            years: 0,
            months: 0,
            weeks: 0,
            days: 1,
          })
        );
        setPrevDay(
          sub(new Date(inputedDate), {
            years: 0,
            months: 0,
            weeks: 0,
            days: 1,
          })
        );
        setXmasDay(getShoppingDays(inputedDate));
        setWeekDay(days[getDay(new Date(inputedDate))]);
        getZodiacSign(inputedDate);
      }
    } else {
      setShowError(true);
      if (date.length === 0) {
        setErrorMessageI('Enter a date');
      } else {
        setErrorMessageI('Invalid Date');
      }
    }
  };
  const handleChange = event => {
    setInputedDate(event.target.value);
    setShowError(false);
    setShowInputedDate(false);
  };
  const getShoppingDays = date1 => {
    const day1 = new Date(date1);
    const thanksgiving = getThanksgivingDay(date1);
    const month = getMonth(new Date(date1));
    const day = getDate(new Date(date1));
    const currentYear = getYear(new Date(date1));
    const year = month === 11 && day > 25 ? currentYear + 1 : currentYear;
    const christmasDay = new Date(year, '11', '25');
    if (
      day1.getDate() === christmasDay.getDate() &&
      day1.getMonth() === christmasDay.getMonth() &&
      day1.getYear() === christmasDay.getYear()
    ) {
      return 0;
    }
    const businessDays = differenceInBusinessDays(
      christmasDay,
      new Date(date1)
    );
    const numberOfSaturdays = differenceInCalendarWeeks(
      christmasDay,
      new Date(date1)
    );
    const saturdays = numberOfSaturdays;
    const totalShoppingDays = saturdays + businessDays;
    const removeThanksgiving = differenceInDays(new Date(date1), thanksgiving);
    return removeThanksgiving < 0
      ? totalShoppingDays - 2
      : totalShoppingDays - 1;
  };
  const getThanksgivingDay = date1 => {
    if (date1) {
      const currentYear = getYear(new Date(date1));
      let numberOfThursday = 0;
      let thanksgiving;
      for (let i = 1; i++; i < 31) {
        const n_date = new Date(currentYear, '10', i);
        if (isThursday(n_date)) {
          numberOfThursday += 1;
        }
        if (numberOfThursday === 4) {
          thanksgiving = n_date;
          break;
        }
      }
      return thanksgiving;
    }
  };
  const getZodiacSign = date1 => {
    const monthInd = getMonth(new Date(date1));
    const month = monthsArr[monthInd];
    const day1 = getDate(new Date(date1));
    for (let i = 0; i < zodiacSignsArr.length; i++) {
      if (
        (zodiacSignsArr[i].start.split(' ')[0] === month &&
          zodiacSignsArr[i].start.split(' ')[1] <= day1) ||
        (zodiacSignsArr[i].end.split(' ')[0] === month &&
          zodiacSignsArr[i].end.split(' ')[1] >= day1)
      ) {
        setZodiacSign(zodiacSignsArr[i].name);
      }
    }
  };
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
        >
          Is Date??
        </Button>
        {showInputedDate && !errorMessageI && (
          <Box>
            <Text> Today: {format(new Date(inputedDate), 'yyyy-MM-dd')}</Text>

            <Text> Next Date: {format(new Date(nextDay), 'yyyy-MM-dd')}</Text>

            <Text>
              Previous Date: {format(new Date(prevDay), 'yyyy-MM-dd')}
            </Text>
            <Text> Days to christmas: {xmasDay}</Text>
            <Text> Day: {weekDay}</Text>
            <Text> Zodiac Sign: {zodiacSign}</Text>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
