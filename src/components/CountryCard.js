import React, {useState} from 'react';

export default function Card ({ data }) {
  const [detail, setDetail] = useState(false)

  function changePopulation(num) {
    let retVal = [];
    let x = 0
    num = num.toString();

    for (let i = num.length - 1; i >= 0; i--) {
      x++
      if (x === 3) {
        retVal.push(num[i]);
        i !== 0 && retVal.push(',');
        x = 0;
      } else {
        retVal.push(num[i]);
      };
    };

    return retVal.reverse().join("")
  };

  return (
    <div className="card mb-3 ml-3 mr-3" style={{width: '500px'}}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className="d-flex justify-content-between mb-2" style={{width: '440px'}}>
              <p className="card-text">Capital: {data.capital ? data.capital.name : "-"}</p>
              <p className="card-text"> Continent: {data.continent.name}</p>
            </div>
            { detail &&
              <div>
                <div className="d-flex justify-content-between mb-2" style={{width: '440px'}}>
                  <p className="card-text"> Currency: {data.currencies.map(currency => currency.name).join(", ")}</p>
                  <p className="card-text"> Population: {changePopulation(data.population)}</p>
                </div>
                <div className="d-flex justify-content-between mb-2" style={{width: '440px'}}>
                  <p className="card-text"> Languages: {data.languages.map(language => language.name).join(", ")}</p>
                  <p className="card-text"> Call Code: {data.callingCodes}</p>
                </div>
                <div className="d-flex justify-content-between mb-2" style={{width: '440px'}}>
                  <p className="card-text"> Location: lat({data.location.lat}), long({data.location.long})</p>
                </div>
              </div>
            }
            <button className="btn-sm btn-secondary" onClick={() => setDetail(!detail)}>{ detail ? "Close" : "See"} Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}
