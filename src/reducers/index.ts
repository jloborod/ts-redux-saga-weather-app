import {
  InitAction,
  WeatherAction,
} from '../types/actions';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants';
import { WeatherState } from '../types/states';

export const initialState: WeatherState = {
  data: null,
  error: null,
  loading: false,
};

const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherAction | InitAction,
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case GET_WEATHER_FAILURE:
      return {
        data: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
