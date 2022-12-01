import React from 'react';
import {
  Table,
  TableContainer,
  Thead,
  Th,
  Td,
  Tr,
  Tbody,
} from '@chakra-ui/react';
import {
    format,
  } from 'date-fns';
export default function CalendarDisplay({inputedDate, nextDay, prevDay , xmasDay, weekDay, zodiacSign}) {
  return (
    <TableContainer maxWidth="600px" margin="0 auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Inputed Date</Td>
            <Td>{format(new Date(inputedDate), 'yyyy-MM-dd')}</Td>
          </Tr>
          <Tr>
            <Td>Next Date</Td>
            <Td>{format(new Date(nextDay), 'yyyy-MM-dd')}</Td>
          </Tr>
          <Tr>
            <Td>Previous Date</Td>
            <Td> {format(new Date(prevDay), 'yyyy-MM-dd')}</Td>
          </Tr>
          <Tr>
            <Td>Shopping Days</Td>
            <Td> {xmasDay}</Td>
          </Tr>
          <Tr>
            <Td>Day</Td>
            <Td> {weekDay}</Td>
          </Tr>
          <Tr>
            <Td>Zodiac Sign</Td>
            <Td> {zodiacSign}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
