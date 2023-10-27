import React from 'react';
import './ListTable.css'

function ListTable(props) {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Check-in</th>
          <th>Check-Out</th>
          <th>image_url_in</th>
          <th>image_url_out</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.tanggal}</td>
            <td>{item.check_in}</td>
            <td>{item.check_out}</td>
            <td>{item.image_url_in}</td>
            <td>{item.image_url_out}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListTable;
