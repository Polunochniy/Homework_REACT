import { put, takeEvery, call } from "redux-saga/effects";
import { setUserTokenAC, GET_TOKEN_ACTION, GET_NEW_USER_ACTION } from "../reducers/userReducer";
import { GET_TOKEN, GET_NEW_USER } from "../../gql";
import { client } from "../../api";
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
    yield put(navigateAC('/goods'));
  } catch (error) {
    console.log(`ERROR WITH GETTING TOKEN, ${error?.message}`);
  }
};

function* setUser(action) {
  try {
    const { login, password } = action.payload.user;
    const res = yield client.mutate({
      mutation: GET_NEW_USER,
      variables: { user: { login, password } },
    });

    if (res.data.UserUpsert._id) {
      const resToken = yield client.query({
        query: GET_TOKEN,
        variables: { login, password },
      });
      if (resToken.data.login) {
        yield put(setUserTokenAC(resToken.data.login));
        yield put(navigateAC('/login'));
      }
    }
  } catch (error) {
    console.error('Error in setUser saga:', error);
    alert(error);
  }
};

// WATCHER
export function* userSaga() {
  yield takeEvery(GET_TOKEN_ACTION, getToken);
  yield takeEvery(GET_NEW_USER_ACTION, setUser);
};
