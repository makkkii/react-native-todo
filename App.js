import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './app/utils/Colors';
import Main from './app/Main';




export default class App extends React.Component {
  render() {
    return <Main />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
