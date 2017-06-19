import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import About from './components/About'

export default class App extends React.Component {
  render() {
    return (
        <About/>
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
