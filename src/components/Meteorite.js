import React from 'react';

function Meteorite({ meteorite }) {
  return (
    <tr>
      <td className="text-left">{meteorite.name}</td>
      <td>{meteorite.id}</td>
      <td>{meteorite.nametype}</td>
      <td>{meteorite.recclass}</td>
      <td>{meteorite.mass}</td>
      <td>{meteorite.fall}</td>
      <td>{meteorite.year ? meteorite.year.substr(0, 4) : 'N/A'}</td>
      <td>{meteorite.reclat}</td>
      <td>{meteorite.reclong}</td>
    </tr>
  );
}

export default Meteorite;
