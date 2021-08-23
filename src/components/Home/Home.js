import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then( data => {
      const first10 = data.slice(0, 10);
      setCountries(first10);
    })
  },[])

  return (
    <div>
      <h5>Country Length: {countries.length}</h5>
      {
        countries.map(country => <Country key={country.area} country={country}></Country>)
      }
    </div>
  );
};

export default Home;