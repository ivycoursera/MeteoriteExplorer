import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meteorite from './Meteorite';

const LandingPage = () => {
  const [meteorites, setMeteorites] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);

  function sortByName(data) {
    return data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  useEffect(() => {
    if (!meteorites.length) {
      const callApi = async () => {
        await axios
          .get('/api')
          .then((response) => {
            console.log(response.data);
            console.log(sortByName(response.data));
            !meteorites.length && setMeteorites(sortByName(response.data));
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      callApi();
    }
  });

  function meteoriteList() {
    if (filteredList.length) {
      return filteredList.sort().map((currentmeteorite) => {
        return (
          <Meteorite meteorite={currentmeteorite} key={currentmeteorite.id} />
        );
      });
    } else {
      return meteorites.map((currentmeteorite) => {
        return (
          <Meteorite meteorite={currentmeteorite} key={currentmeteorite.id} />
        );
      });
    }
  }

  function handleSearch(name) {
    setFilteredList(
      meteorites.filter(
        (meteorite) =>
          meteorite.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      )
    );
  }

  return (
    <div>
      <label>{`Search Meteorite by name `}</label>
      <input type="search" onChange={(e) => handleSearch(e.target.value)} />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="text-left">Name</th>
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
