import * as React from 'react';

import { Weather } from '../../types/weather';

import './WeatherTable.css';

type Props = {
  data: Weather
};

const WeatherTable: React.FC<Props> = ({ data }) => (
  <table className='WeatherTable'>
    <thead>
      <tr>
        { data.list.map(item =>
          <th key={`th-${item.dt}`}>
            {item.day}<br />{item.time}
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      <tr>
        { data.list.map(item =>
          <td key={`td-${item.dt}`}>
            <img src={item.icon} aria-label='icon' />
            <span>{item.temp} &#8451;</span>
          </td>
        )}
      </tr>
    </tbody>
  </table>
);

export default WeatherTable;
