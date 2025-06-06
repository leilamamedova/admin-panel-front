import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import ErrorBoundary from "components/errorHandlers/ErrorBoundary";
import { authReducer } from "store/reducers/AuthReducer";

export const rootReducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const Wrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => (
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  </BrowserRouter>
);
