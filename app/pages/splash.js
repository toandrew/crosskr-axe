'use strict';

import React, { Component } from 'react';

import {
	Dimensions,
	Image,
	InteractionManager,
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import AppMain from './appMain'

var {height, width} = Dimensions.get('window');

class Splash extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	componentDidMount() {
		const {navigator} = this.props;

		this.timer = setTimeout(()=>{
			InteractionManager.runAfterInteractions(()=>{
				navigator.resetTo({
					component: AppMain,
					name: 'AppMain'
				});
			});
		}, 2500);
	}

	render() {
		return (
			<View style={styles.container}>
	      <Image
	        style={styles.welcome}
	        source={require('../imgs/ic_welcome.jpg')}
	        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default Splash;