import React, { useState } from 'react';
import Meteorite from './Meteorite';

const LandingPage = ({ meteorites }) => {
  const [filteredList, setFilteredList] = useState([]);

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
