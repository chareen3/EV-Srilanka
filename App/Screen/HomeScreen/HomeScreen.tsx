import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppMapView from '../../Screen/HomeScreen/AppMapView';
import Header from './Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
