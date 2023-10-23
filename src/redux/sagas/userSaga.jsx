import { put, takeEvery, call } from "redux-saga/effects";
import {
  setUserTokenAC,
  GET_TOKEN_ACTION,
} from "../reducers/userReducer";
import { GET_TOKEN } from "../../gql";
import { client } from "../../api";
import { history } from "../..";
import { toast } from "react-toastify";

// WORKERS
function* getToken(action) {
  const res = yield call(() => client.query({
    query: GET_TOKEN,
    variables: {
      ...action.payload
    }
  }))
  yield put(setUserTokenAC(res.data.login));
  yield call(history.push, "/contacts")
}

// WATCHER
export function* userSaga() {
  yield takeEvery(GET_TOKEN_ACTION, getToken);
}