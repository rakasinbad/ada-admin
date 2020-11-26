import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  login: require('./LoginRedux').reducer,
});

export default () => {
  let finalReducers = reducers;

  let { history, store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('.').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return {
    history,
    store
  };
};
