import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
  storage,
  lifeSpan: 5000
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)