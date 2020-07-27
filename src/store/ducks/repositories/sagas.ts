import { put, call } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/fndcaique/repos');
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
