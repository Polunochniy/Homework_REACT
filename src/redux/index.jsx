
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from './reducers/userReducer';
import navigationReducer from './reducers/navigationReducer';
import productReducer from './reducers/productReducer';


const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: combineReducers({
      user: userReducer,
      products: productReducer,
      navigation: navigationReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga)
  return store
}

export default getStore