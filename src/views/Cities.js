import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CITIES } from '../queries';
import Card from '../components/CityCard';

export default function Cities () {
  const { loading, error, data } = useQuery(CITIES);
  
  const [search, setSearch] = useState('');

  if (loading) return (
    <div style={{height: '70vh'}} className="d-flex justify-content-center align-items-center">
      <img src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="loading"/>
    </div>
  )

  if (error) return (
    <div style={{height: '70vh'}} className="d-flex justify-content-center align-items-center">
      <p>Error</p>
    </div>
  )

  return (
    <>
      <form>
        <div className="form-group w-25 mt-3">
          <input type="text" className="form-control ml-5" id="search" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
      </form>
      <div className="container row ml-3">
        { data.cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => <Card key={city.id} data={city} />) }
      </div>
    </>
  )
}