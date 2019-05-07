import rootReducer from '../reducers';
import { Weather } from './weather';

export type AppState = ReturnType<typeof rootReducer>;
export interface WeatherState {
  data: Weather | null;
  error: string | null;
  loading: boolean;
};
