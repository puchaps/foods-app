import { all, call } from 'redux-saga/effects';

import foodSagas from '../reducer/food/sagas/food.sagas';

export default function* rootSagas() {
  yield all([
    call(foodSagas)
  ]);
};