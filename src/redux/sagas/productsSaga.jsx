import { put, takeEvery, call } from "redux-saga/effects";
import { GET_CATEGORIES_SCHEMA, GET_GOODS_SCHEMA, } from "../../gql";
import { client } from "../../api";
import { GET_CATEGORIES, GET_PRODUCTS, setCategoriesAC, setProductsAC, SET_SELECTED_CATEGORY, getProductsAC } from "../reducers/productReducer";

// WORKERS
function* getProducts(action) {
    try {
      const res = yield call(() => client.query({
        query: GET_GOODS_SCHEMA,
        variables: {
          query: JSON.stringify([
            {},
            {
              limit: [action.payload.limit],
              skip: [action.payload.skip]
            }, 
          ])
        }
      }))
      yield put(setProductsAC({ data: res.data.GoodFind }));
      yield call(`LOADED ${res.data.GoodFind.length} GOODS`);
    } catch (error) {
      yield call("ERROR WITH GETTING GOODS");
    }
  
}

function* getCategories(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_CATEGORIES_SCHEMA,
            variables: {
                query: JSON.stringify([
                    {},
                    {
                        limit: [action.payload.limit],
                        skip: [action.payload.skip],
                    },
                ])
            }
        }))
        yield put(setCategoriesAC({
            data: res.data.CategoryFind,
            limit: action.payload.limit,
            skip: action.payload.skip,
        }));
    } catch (error) {
        yield call("ERROR WITH GETTING GOODS");
    }
}

function* setSelectedCategory(action) {
    try {
      yield put(getProductsAC(70, 0, action.payload.selectedCategory));
    } catch (error) {
      console.error("Error in setSelectedCategory saga", error);
    }
}

// WATCHER
export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
    yield takeEvery(GET_CATEGORIES, getCategories);
    yield takeEvery(SET_SELECTED_CATEGORY, setSelectedCategory);
}
