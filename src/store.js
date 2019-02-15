import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { appStateReducer } from "./appStateReducer";

export function configureStore() {
  return createStore(
    appStateReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
}
