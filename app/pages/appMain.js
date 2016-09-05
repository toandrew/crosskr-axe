'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class AppMain extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
	      <Text style={styles.text}>
	      	This is main UI.
	      </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
	}
});

export default AppMain;