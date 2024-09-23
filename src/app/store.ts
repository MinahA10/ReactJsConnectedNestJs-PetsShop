import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState,
  });
}

export default store;
// Export the store's type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
