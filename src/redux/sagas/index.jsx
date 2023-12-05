import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { productsSaga } from "./productsSaga";
import { cartSaga } from "./cartSaga";

export function* rootSaga() {
    yield all([userSaga(), productsSaga(), cartSaga()]);
};