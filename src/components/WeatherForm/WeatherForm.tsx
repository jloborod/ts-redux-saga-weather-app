import * as React from 'react';

import './WeatherForm.css';

type Props = {
  city: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: React.FormEvent) => void,
};

const WeatherForm: React.FC<Props> = ({
  city,
  onChange,
  onSubmit,
}) => (
  <form className='WeatherForm' onSubmit={onSubmit}>
    <input
      name='city'
      aria-label='City'
      value={city}
      placeholder='Your city name'
      onChange={onChange}
    />
    <button
      type='submit'
      onSubmit={onSubmit}
    >
      Search
    </button>
  </form>
);

export default WeatherForm;
