'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './home'

class AppMain extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
		};
	}

	render() {
		return (
			<TabNavigator>
				<TabNavigator.Item
					title='首页'
					selected={this.state.selectedTab === 'home'}
					selectedTitleStyle={styles.selectedTextStyle}
					titleStyle={styles.textStyle}
					renderIcon={() => <Image source={require('../imgs/ic_tab_home.png')} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require('../imgs/ic_tab_home_press.png')} style={styles.iconStyle}/>}
					onProgress={() => this.setState({selectedTab: 'home'})}
				>
				<Home {...this.props}/>
				</TabNavigator.Item>

				<TabNavigator.Item
					title='订单'
					selected={this.state.selectedTab === 'order'}
					selectedTitleStyle={styles.selectedTextStyle}
					titleStyle={styles.textStyle}
					renderIcon={() => <Image source={require('../imgs/ic_tab_order.png')} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require('../imgs/ic_tab_order_press.png')} style={styles.iconStyle}/>}
					onProgress={() => this.setState({selectedTab: 'order'})}
				>
				</TabNavigator.Item>

				<TabNavigator.Item
					title='购物车'
					selected={this.state.selectedTab === 'cart'}
					selectedTitleStyle={styles.selectedTextStyle}
					titleStyle={styles.textStyle}
					renderIcon={() => <Image source={require('../imgs/ic_tab_cart.png')} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require('../imgs/ic_tab_cart_press')} style={styles.iconStyle}/>}
					onProgress={() => this.setState({selectedTab: 'cart'})}
				>
				</TabNavigator.Item>

				<TabNavigator.Item
					title='我的'
					selected={this.state.selectedTab === 'center'}
					selectedTitleStyle={styles.selectedTextStyle}
					titleStyle={styles.textStyle}
					renderIcon={() => <Image source={require('../imgs/ic_tab_center.png')} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require('../imgs/ic_tab_center_press.png')} style={styles.iconStyle}/>}
					onProgress={() => this.setState({selectedTab: 'center'})}
				>
				</TabNavigator.Item>
			</TabNavigator>
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
    color: '#333333'
	},

	iconStyle: {
		width: 26,
		height: 26
	},

	textStyle: {
		color: '#999'
	},

	selectedTextStyle: {
		color: 'black'
	}
});

export default AppMain;
