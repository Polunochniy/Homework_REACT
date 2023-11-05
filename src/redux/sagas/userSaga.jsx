import { put, takeEvery, call } from "redux-saga/effects";
import {
  setUserTokenAC,
  GET_TOKEN_ACTION,
} from "../reducers/userReducer";
import { GET_TOKEN } from "../../gql";
import { client } from "../../api";
import { toast } from "react-toastify";
import { navigateAC } from "../reducers/navigationReducer";

// WORKERS
function* getToken(action) {
  try {
    const res = yield call(() => client.query({
      query: GET_TOKEN,
      variables: {
        ...action.payload
      }
    }))
    yield put(setUserTokenAC(res.data.login));
    yield call(toast.success, "TOKEN WAS UPDATED");
    yield put(navigateAC('/goods'));
  } catch (error) {
    yield call(toast.warn, `ERROR WITH GETTING TOKEN, ${error?.message}`);
  }
}


// WATCHER
export function* userSaga() {
  yield takeEvery(GET_TOKEN_ACTION, getToken);
}
