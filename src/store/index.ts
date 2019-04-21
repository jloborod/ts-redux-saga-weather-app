import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { helloReduxSaga } from './sagas';

// Dev Tools
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  () => {}, // your rootReducer
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(helloReduxSaga);

export default store;
