import { call, put, all, takeLatest } from "redux-saga/effects";

import {
  transformCollectionFromFireStore,
  getCollectionSnapShotFromFireStore,
} from "../../../../firebase/firebase";

import { GET_COLLECTION_START } from "../types/food.types";
import {
  getCollectionFailedAC,
  getCollectionSuccessAC,
} from "../actions/food.actions";

function* getCollection() {
  try {
    const snapSotCollection = yield call(getCollectionSnapShotFromFireStore);

    const transformCollection = yield call(
      transformCollectionFromFireStore,
      snapSotCollection
    );

    yield put(getCollectionSuccessAC(transformCollection));
  } catch (error) {
    yield put(getCollectionFailedAC(error));
  }
}
function* getCollectionSaga() {
  yield takeLatest(GET_COLLECTION_START, getCollection);
}

export default function* foodSagas() {
  yield all([call(getCollectionSaga)]);
}
