/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, 
  Text,
  useColorScheme
} from 'react-native';


import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/Navigation';


const App = () => {  
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
   flex:1,
   backgroundColor: '#F9FBFC'
 }
});

export default App;
