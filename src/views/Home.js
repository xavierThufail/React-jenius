import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../images/map.jpg';

export default function Home () {
  const history = useHistory()

  return (
    <>
      <div style={{backgroundImage: `url(${Background})`, height: '92vh'}}>
        <div style={{height: '92vh'}} className="d-flex justify-content-around align-items-center">
          <button onClick={() => history.push('/countries')} className="btn btn-secondary btn-lg">Search Country</button>
          <button onClick={() => history.push('/cities')} className="btn btn-secondary btn-lg">Search City</button>
        </div>
      </div>
    </>
  )
}