import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';
import GridData from './GridData';
import '../styles.css'

function Dashboard() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    type: '',
    location: '',
    year: '',
  });

  useEffect(() => {
    axios.get('http://localhost:3001/cars')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <header className="header">Dummy Dashboard</header>
      <Filters setFilters={setFilters} />
      <GridData data={data} filters={filters} />
    </div>
  );
}

export default Dashboard;
