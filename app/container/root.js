import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator,
  StatusBar,
  Text,
  View
} from 'react-native';

import Splash from '../pages/splash';

class CrossKrAxe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderScene(route, navigator) {
    return (
      <route.component navigator={navigator}  {...route.passProps} />
    );
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.VerticalUpSwipeJump;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <Navigator
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    /*alignItems: 'center',*/
    backgroundColor: 'blue',
  }
});

export default CrossKrAxe;