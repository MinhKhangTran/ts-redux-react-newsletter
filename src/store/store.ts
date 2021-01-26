import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

// const Reduxstore = () => {
//   const composeEnhancers =
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(
//     reducer,
//     {},
//     composeEnhancers(applyMiddleware(thunk))
//   );
//   return store;
// };
// export default Reduxstore;

export const store = createStore(reducer, {}, applyMiddleware(thunk));
