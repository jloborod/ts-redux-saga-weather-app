import { Weather } from './weather';

export interface WeatherState {
  data: Weather | null;
  loading: boolean;
  error: boolean;
};
