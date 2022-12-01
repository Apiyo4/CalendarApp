import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Calendar from './components/Calendar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Calendar />
    </ChakraProvider>
  );
}

export default App;
