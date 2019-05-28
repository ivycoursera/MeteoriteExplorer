import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meteorite from './Meteorite';

const LandingPage = () => {
  const [meteorites, setMeteorites] = useState([]);

  useEffect(() => {
    if (!meteorites.length) {
      const callApi = async () => {
        await axios
          .get('/api')
          .then((response) => {
            console.log(response.data);
            !meteorites.length && setMeteorites(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      callApi();
    }
  });

  function meteoriteList() {
    return meteorites.map((currentmeteorite) => {
      return (
        <Meteorite meteorite={currentmeteorite} key={currentmeteorite.id} />
      );
    });
  }

  return (
    <div>
      <h2>Meteorite Explorer</h2>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Name Type</th>
            <th>Rec class</th>
            <th>Mass(g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>{meteoriteList()}</tbody>
      </table>
    </div>
  );
};

export default LandingPage;
