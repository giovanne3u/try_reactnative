import React from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'

import About from './components/About'
import Search from './components/Search'

const Tabs = TabNavigator({
    Search: { screen: Search},
    About: { screen: About}
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
