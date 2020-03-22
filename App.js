// @flow
import * as React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Router, ListItem} from './src/components';
import {MainScreen} from './src/screens';
import {TilesScreen} from './src/screens/TilesScreen';
//import {ReactNavigationScreen} from './src/screens/ReactNavigationScreen';

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

export default class App extends React.Component {
  render() {
    return <Router initialNode={<MainScreen type="card2" />} />;
  }
}
