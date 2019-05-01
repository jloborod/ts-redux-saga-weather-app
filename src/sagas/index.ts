import { put, call, takeLatest } from 'redux-saga/effects';

import { GetWeatherAction } from '../types/actions';
import { getWeatherByCityName } from '../services/weather';
import { getWeatherSuccess, getWeatherFailure } from '../actions';
import { GET_WEATHER_REQUEST } from '../constants';

export function* weatherSaga(action: GetWeatherAction) {
  try {
    const response = yield call(getWeatherByCityName, action.payload);
    yield put(getWeatherSuccess(response));
  } catch (error) {
    yield put(getWeatherFailure());
  }
}

export default function* watchSaga() {
  yield takeLatest(GET_WEATHER_REQUEST, weatherSaga);
}