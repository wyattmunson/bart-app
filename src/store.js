import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger({});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
