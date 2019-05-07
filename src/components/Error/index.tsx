import * as React from 'react';

import './Error.css';

type Props = {
  error: string;
};

const Error: React.FC<Props> = ({ error }) =>
  <p className='Error'>{error}</p>;

export default Error;
