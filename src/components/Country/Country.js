import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const {name, population, region, flag} = props.country;
  //console.log(props.country);
  
  const countryStyle = {
    padding: '20px',
    margin: '15px',
    border: '1px solid lightgray',
    borderRadius: '30px',
  } 

  return (
    <div style={countryStyle}>
      <img style={{height:'100px'}} src={flag} alt="flag-img" />
      <h1>Country Name: {name}</h1>
      <h4>Population: {population}</h4>
      <p>Region: {region}</p>
      <Link to={`/country/${name}`}>
        <button>Country Details</button>
      </Link>
    </div>
  );
};

export default Country;