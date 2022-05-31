import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterByCode } from '../../config';
import './info.css';


export const Info = (props) => {
    const {
      name,
      nativeName,
      flag,
      capital,
      population,
      region,
      subregion,
      topLevelDomain,
      currencies = [],
      languages = [],
      borders = [],
      navigate,
    } = props;
  
    const [neighbors, setNeighbors] = useState([]);
  
    useEffect(() => {
      if (borders.length)
        axios
          .get(filterByCode(borders))
          .then(({ data }) => setNeighbors(data.map((c) => c.name)));
    }, [borders]);
  
    return (
      <div id='info-section'>
        <img className='info-image' src={flag} alt={name} />
  
        <div>
          <h1 className='info-title'>{name}</h1>
          <div className='list-group'>
            <ul className='list'>
              <li className='list-item'>
                <b>Native Name:</b> {nativeName}
              </li>
              <li className='list-item'>
                <b>Population</b> {population}
              </li>
              <li className='list-item'>
                <b>Region:</b> {region}
              </li>
              <li className='list-item'>
                <b>Sub Region:</b> {subregion}
              </li>
              <li className='list-item'>
                <b>Capital:</b> {capital}
              </li>
            </ul>
            <ul className='list'>
              <li className='list-item'>
                <b>Top Level Domain</b>{' '}
                {topLevelDomain.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </li>
              <li className='list-item'>
                <b>Currency</b>{' '}
                {currencies.map((c) => (
                  <span key={c.code}>{c.name} </span>
                ))}
              </li>
              <li className='list-item'>
                <b>Top Level Domain</b>{' '}
                {languages.map((l) => (
                  <span key={l.name}>{l.name}</span>
                ))}
              </li>
            </ul>
          </div>
          <div className='meta'>
            <b>Border Countries</b>
            {!borders.length ? (
              <span>There is no border countries</span>
            ) : (
              <div className='tag-group'>
                {neighbors.map((b) => (
                  <span className='tag' key={b} onClick={() => navigate(`/country/${b}`)}>
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  