import Reactotron from '../Configs/ReactotronConfig';
import {createStore, applyMiddleware, compose} from 'redux';
import Config from '../Configs/DebugConfig';
import rootReducer from './Reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let store = null;
  if (Config.useReactotron) {
    store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()));
  } else {
    store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
