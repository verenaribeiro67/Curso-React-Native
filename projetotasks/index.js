import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';
import TaskList from "./src/screens/TaskList";

AppRegistry.registerComponent(appName, () => Navigator);
