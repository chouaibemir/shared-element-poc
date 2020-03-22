// @flow
import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Router, NavBar, ListItem, Colors, Heading3} from '../components';
import {TilesScreen} from './TilesScreen';
import {TestsScreen} from './TestsScreen';
import {TestScreen} from './TestScreen';
import {PagerScreen} from './PagerScreen';
import {CardScreen} from './CardScreen';
import {Tests} from '../tests';
import {TestImage} from '../tests/image';
import type {Test} from '../types';
import {fadeIn, fromRight} from '../transitions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: Platform.select({
    ios: {
      flex: 1,
      backgroundColor: Colors.empty,
    },
    android: {
      flex: 1,
    },
  }),
  back: {
    color: Colors.blue,
    marginLeft: 20,
  },
});

type PropsType = {
  navigation?: any,
  footer?: any,
};

export class MainScreen extends React.Component<PropsType> {
  static navigationOptions = {
    title: 'React Navigation',
    headerLeft: () => (
      <TouchableOpacity onPress={() => Router.pop()}>
        <Heading3 style={styles.back}>Back</Heading3>
      </TouchableOpacity>
    ),
  };

  render() {
    const {footer, navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" animated />
        {/*
        {!navigation ? (
          <NavBar title="Shared Element Demo" back="none" />
        ) : (
          undefined
        )}
        */}
        <ScrollView style={styles.content} endFillColor={Colors.empty}>
          {Platform.OS === 'web' ? (
            <ListItem
              label="Quick Test"
              description="Immediately start the current development test"
              onPress={this.onPressQuickTest}
            />
          ) : (
            undefined
          )}
          <TilesScreen
            type="card2"
            title="Card Demo 2"
            transitionConfig={fadeIn(0, true)}
            DetailComponent={CardScreen}
          />
          {/*<ListItem
            label="Avatar Demo"
            description="Reveal multiple elements from a single source"
            onPress={this.onPressAvatarDemo}
          />*/}
          {footer}
        </ScrollView>
      </View>
    );
  }
  /*

  onPressQuickTest = () => {
    const {navigation} = this.props;
    const test: Test = {
      name: 'Simple move',
      description:
        'The most basic form of a shared-element transition. The image should move smoothly without flickering from the start- to the end state, and back',
      start: <TestImage />,
      end: <TestImage end />,
    };

    if (navigation) {
      navigation.push('Test', {
        test,
      });
    } else {
      Router.push(<TestScreen test={test} />, {
        transitionConfig: fromRight(100),
      });
    }
  };
  onPressTests = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.push('Tests', {
        tests: Tests,
      });
    } else {
      Router.push(<TestsScreen tests={Tests} />);
    }
  };

  onPressTilesDemo = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.push('Tiles', {type: 'tile'});
    } else {
      Router.push(
        <TilesScreen
          type="tile"
          title="Tiles Demo"
          DetailComponent={PagerScreen}
        />,
      );
    }
  };

  onPressCardDemo = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.push('Tiles', {
        type: 'card',
      });
    } else {
      Router.push(
        <TilesScreen
          type="card"
          title="Cards Demo"
          DetailComponent={CardScreen}
        />,
      );
    }
  };
*/
  onPressCardDemo2 = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.push('Tiles', {
        type: 'card2',
      });
    } else {
      Router.push(
        <TilesScreen
          type="card2"
          title="Card Demo 2"
          transitionConfig={fadeIn(0, true)}
          DetailComponent={CardScreen}
        />,
      );
    }
  };
  /*
  onPressAvatarDemo = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.push('Tiles', {
        type: 'avatar',
      });
    } else {
      Router.push(
        <TilesScreen
          type="avatar"
          title="Avatar Demo"
          transitionConfig={fadeIn(0, true)}
          DetailComponent={CardScreen}
        />,
      );
    }
  };
  */
}
