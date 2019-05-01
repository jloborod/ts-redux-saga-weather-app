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
  error: false,
  loading: false,
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction | InitAction,
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    case GET_WEATHER_FAILURE:
      return {
        data: null,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
