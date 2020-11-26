import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
