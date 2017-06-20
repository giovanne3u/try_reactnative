import React from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'

import About from './components/About'
import Search from './components/Search'

const Tabs = TabNavigator({
    Search: { screen: Search},
    About: { screen: About}
}, {
    // Default on iOS
    tabBarPosition: 'bottom',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        style:{
            backgroundColor: "#A2273C",
            borderTopWidth:1,
            borderColor: "#3F101C"
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar hidden={true}/>
            <Tabs/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
