import * as React from 'react';

import './Error.css';

type Props = {
  error: string;
};

const Error: React.FC<Props> = ({ error }) =>
  <span className='Error'>{error}</span>;

export default Error;
