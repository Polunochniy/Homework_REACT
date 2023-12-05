import { put, takeEvery, select, call } from "redux-saga/effects";
import {ADD_PRODUCT_TO_CART, DECREASE_QUANTITY, updateProductClickCount, removeProductFromCart, SEND_ORDER } from "../reducers/cartReducer";
import { GET_ORDER } from "../../gql";
import { orderDataUpdate } from "../../utils/helpers";
import { client } from "../../api";

// WORKERS
function* handleAddProductToCart(action) {
  const { product } = action.payload;
  const currentQuantity = yield select(state => {
    const item = state.cart.items.find(item => item._id === product._id);
    return item ? item.quantity : 0;
  });

  if (currentQuantity === 0) {
    yield put({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        product,
      },
    });
  }
  yield put(updateProductClickCount(product._id, currentQuantity + 1));
};

function* sendOrderToServer(action) {
  try {
    const token = yield select(state => state.user.token);
    const { items } = action.payload;

    const res = yield call(() =>
      client.mutate({
        mutation: GET_ORDER,
        variables: { goods: orderDataUpdate(items) },
        context: {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      })
    );
    const responseData = res.data;
    console.log("Response from server:", responseData);
  } catch (error) {
    console.error('Error sending order:', error.message);
  }
};

// WATCHER
export function* cartSaga() {
  yield takeEvery(ADD_PRODUCT_TO_CART, handleAddProductToCart);
  yield takeEvery(SEND_ORDER, sendOrderToServer);
};