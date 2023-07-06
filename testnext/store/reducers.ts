/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";

import { InjectedReducersType } from "../utils/types/injector-typings";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { searchReducer } from "./slice/getNewsItemList";

const persistConfig = {
  key: "state",
  version: 1,
  storage,
  blacklist: [],
};

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  if (Object.keys(injectedReducers).length === 0) {
    return (state) => state;
  } else {
    const rootReducer = combineReducers({
      ...injectedReducers,
    });
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    return persistedReducer;
  }
}
