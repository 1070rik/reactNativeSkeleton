import {AppRegistry} from 'react-native';
import App from './App/Screens/App';
import './App/Configs/ReactotronConfig';
import './App/Configs/ApiConfig'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
