import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({ handleSearch, handleClear }) => {
  return (
    <div className="buttons">
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      <Button variant="contained" color="secondary" onClick={handleClear}>Clear</Button>
    </div>
  );
}

export default Buttons;

