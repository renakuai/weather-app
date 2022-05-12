import React, { useEffect, useState, useContext } from 'react';
import { ZipDispatchContext, ZipContext } from '../controls/ZipContext';
import env from "react-dotenv";
import {H2, H3, SearchWrapper, Input, SearchBtn, ErrorDiv} from '../themes/theme'

export default function LocationTitle(props) {
  const {city, error, setError} = props;

  const [zipText, setZipText] = useState('75010');
  const dispatch = useContext(ZipDispatchContext);
  const zip = useContext(ZipContext);


  function handleClick(e) {
    const zipURL = 'https://app.zipcodebase.com/api/v1/search?apikey=7e316e70-d20c-11ec-b975-63c0bd3c77a4&country=us&codes=' + zipText;
    fetch(zipURL)
      .then(res =>res.json())
      .then(data => {
        if (data.results.length === 0) {
          setError('Please enter a valid US zip code.');
          const prevZip = zip;
          dispatch({
            type: 'searched',
            zip: prevZip
          })
        }
        else {
          setError('');
          dispatch({
            type: 'searched',
            zip: zipText
          })
        }
      })
      .catch(err => {
        setError('Something went wrong. Please try again.');
        return
      })
    }

  return (
    <section>
      <SearchWrapper>
        <H3>Showing weather for</H3>
        <Input
          placeholder="Zip code"
          value={zipText}
          type="number"
          onChange={e => setZipText(e.target.value)}
          required/> 
        <SearchBtn onClick={e => handleClick(e)}>Search</SearchBtn>
      </SearchWrapper>
      {error && <ErrorDiv>{error}</ErrorDiv>}
      <H2>{city}</H2>
    </section>
  );
}