import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, MenuItem } from '@material-ui/core';

function Filters({ setFilters }) {
  const [filters, setLocalFilters] = useState({
    make: '',
    model: '',
    type: '',
    location: '',
    year: '',
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cars')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleChange = (event) => {
    setLocalFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    setFilters(filters);
  };

  const handleClear = () => {
    setLocalFilters({
      make: '',
      model: '',
      type: '',
      location: '',
      year: '',
    });
    setFilters({
      make: '',
      model: '',
      type: '',
      location: '',
      year: '',
    });
  };

  // const distinct = (value, index, self) => {
  //   return self.indexOf(value) === index;
  // };

  const makes = [...new Set(data.map(car => car.make))];
  const models = [...new Set(data.map(car => car.model))];
  const types = [...new Set(data.map(car => car.type))];
  const locations = [...new Set(data.map(car => car.location))];

  return (
    <div className="filters">
      <TextField
        select
        variant="outlined"
        value={filters.make}
        onChange={handleChange}
        label="Make"
        name="make"
      >
        <MenuItem value="">All</MenuItem>
        {makes.map((make) => (
          <MenuItem value={make}>{make}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        variant="outlined"
        value={filters.model}
        onChange={handleChange}
        label="Model"
        name="model"
      >
        <MenuItem value="">All</MenuItem>
        {models.map((model) => (
          <MenuItem value={model}>{model}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        variant="outlined"
        value={filters.type}
        onChange={handleChange}
        label="Type"
        name="type"
      >
        <MenuItem value="">All</MenuItem>
        {types.map((type) => (
          <MenuItem value={type}>{type}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        variant="outlined"
        value={filters.location}
        onChange={handleChange}
        label="Location"
        name="location"
      >
        <MenuItem value="">All</MenuItem>
        {locations.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))}
      </TextField>
      {/* Repeat the same TextField for all other filters (Model, Type, Location, Year) */}
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Button variant="contained" color="secondary" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}

export default Filters;
