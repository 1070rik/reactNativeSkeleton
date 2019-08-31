import Reactotron, {openInEditor} from 'reactotron-react-native';
import Config from './DebugConfig';
import tronsauce from 'reactotron-apisauce';
import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';

let reactotron = null;

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  reactotron = Reactotron.configure({
    name: 'React native Skeleton',
    host: 'localhost',
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(openInEditor())
    .useReactNative()
    .use(tronsauce())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  Reactotron.onCustomCommand('Force crash', () => {
    throw new Error('Forced crash');
  });

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
} else {
  console.tron = console;
}

export default reactotron;
