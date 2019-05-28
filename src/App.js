import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MeteoriteList from './components/MeteoriteList';
import axios from 'axios';
import Loading from './components/Loading';

function App() {
  const [meteorites, setMeteorites] = useState([]);
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

  return (
    <div className="Container text-center">
      <h1>Meteorite Explorer</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MeteoriteList meteorites={meteorites} />
        </div>
      )}
    </div>
  );
}

export default App;
