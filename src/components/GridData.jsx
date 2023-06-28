import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function GridData({ data, filters }) {
  const filteredData = data.filter(car => {
    let isMatch = true;
    for(let key in filters) {
      if (filters[key] !== '' && car[key] !== filters[key]) {
        isMatch = false;
        break;
      }
    }
    return isMatch;
  });

  return (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Make</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((car) => (
            <TableRow key={car.id}>
              <TableCell component="th" scope="row">{car.make}</TableCell>
              <TableCell align="right">{car.model}</TableCell>
              <TableCell align="right">{car.type}</TableCell>
              <TableCell align="right">{car.location}</TableCell>
              <TableCell align="right">{car.year}</TableCell>
              <TableCell align="right">{car.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridData;
