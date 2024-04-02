import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppMapView from '../../Screen/HomeScreen/AppMapView';
import Header from './Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 22,
    left: 0,
    right: 0,
    padding: 10,
    paddingHorizontal: 20,
  },
});
