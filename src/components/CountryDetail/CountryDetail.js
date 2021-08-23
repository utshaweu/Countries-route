import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const {name} = useParams();

  const [country, setCountry] = useState([]);
  //console.log(country);
  const {area, population, region} = country;

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      //setCountry(data[0]);
      //console.log(data)
      const {area, population, region} = data[0];
      const  newData = {
        area: area,
        population: population,
        region: region,
      }
      setCountry(newData);

    }) 
    .catch(error => console.log(error));
  },[]);
  

  return (
    <div>
      <h1>Country Name: {name}</h1>
      <p>Area: {area}</p>
      <p>region: {region}</p>
      <span>Population: {population}</span>
      
    </div>
  );
};

export default CountryDetail;