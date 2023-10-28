import { put, takeEvery, call } from "redux-saga/effects";
import {
  setUserTokenAC,
  GET_TOKEN_ACTION,
} from "../reducers/userReducer";
import { GET_GOODS, GET_TOKEN } from "../../gql";
import { client } from "../../api";
import { toast } from "react-toastify";
import { navigateAC } from "../reducers/navigationReducer";
import { GET_PRODUCTS, setProductsAC } from "../reducers/productReducer";

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

function* getProducts(action) {
  try {
    const res = yield call(() => client.query({
      query: GET_GOODS,
      variables: {
        query: JSON.stringify([
          {},
          // {
          //   $or: [{ title: "/Apple/" }, { description: "/and/" }]
          // },
          {
            limit: [action.payload.limit],
            skip: [action.payload.skip]
          },

        ])
      }
    }))
    yield put(setProductsAC({ data: res.data.GoodFind }));
    yield call(toast.success, `LOADED ${res.data.GoodFind.length} GOODS`);
  } catch (error) {
    yield call(toast.warn, "ERROR WITH GETTING GOODS");
  }

}

// WATCHER
export function* userSaga() {
  yield takeEvery(GET_TOKEN_ACTION, getToken);
  yield takeEvery(GET_PRODUCTS, getProducts);
}
