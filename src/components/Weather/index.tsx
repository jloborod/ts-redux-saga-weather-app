import * as React from 'react';
import { connect } from 'react-redux';

import { WeatherState } from '../../types/states';
import WeatherTable from '../WeatherTable';
import Error from '../Error';
import Loading from '../Loading';

import './Weather.css';

type Props = WeatherState;

export const Weather: React.FC<Props> = ({
  data,
  error,
  loading,
}) => (
  <div className='Weather'>
    { data && (
      <WeatherTable data={data} />
    )}
    { error && (
      <Error error={error} />
    )}
    { loading && (
      <Loading />
    )}
  </div>
);

const mapStateToProps = (state: WeatherState) => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(Weather);
