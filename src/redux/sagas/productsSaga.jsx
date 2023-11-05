import { put, takeEvery, call } from "redux-saga/effects";
import { GET_CATEGORIES_SCHEMA, GET_GOODS_SCHEMA, } from "../../gql";
import { client } from "../../api";
import { toast } from "react-toastify";
import { GET_CATEGORIES, GET_PRODUCTS, setCategoriesAC, setProductsAC } from "../reducers/productReducer";

// WORKERS
function* getProducts(action) {
    try {
      const res = yield call(() => client.query({
        query: GET_GOODS_SCHEMA,
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

function* getCategories(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_CATEGORIES_SCHEMA,
            variables: {
                query: JSON.stringify([{}])
            }
        }))
        yield put(setCategoriesAC({ data: res.data.CategoryFind }));
        // yield call(toast.success, `LOADED ${res.data.GoodFind.length} GOODS`);
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING GOODS");
    }

}

// WATCHER
export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
    yield takeEvery(GET_CATEGORIES, getCategories);
}
