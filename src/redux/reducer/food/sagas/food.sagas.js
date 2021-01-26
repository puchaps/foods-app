import { call, put, all, takeLatest } from 'redux-saga/effects';

import { 
  converCollectionFromFireStore,
  getCollectionSnapShotFromFireStore
} from '../../../../firebase/firebase';

import { GET_COLLECTION_START } from '../types/food.types';
import { getCollectionFailedAC, getCollectionSuccsesAC } from '../actions/food.actions';

//////////////////--GET_COLLECTION--//////////////////
function* getCollection() {
  try {
    const snapSotCollection = yield getCollectionSnapShotFromFireStore(); 

    const converdCollection = yield call(converCollectionFromFireStore, snapSotCollection);
    
    yield put(getCollectionSuccsesAC(converdCollection));
  } catch(error) {
    yield put(getCollectionFailedAC(error));
  }
};
function* getCollectionSaga() {
  yield takeLatest(GET_COLLECTION_START, getCollection);
};
//////////////////--GET_COLLECTION--//////////////////

export default function* foodSagas() {
  yield all([
    call(getCollectionSaga)
  ]);
};