import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from 'redux-persist';
import appReducers from '..';


export const persistConfig = {
  key: 'app',
  storage: storageSession,
  blacklist: ['errorResponse'],
};

const persistedReducer = persistReducer(persistConfig, appReducers);

const configureStore = () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default configureStore();
