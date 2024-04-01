import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:20,
        fontFamily:'poppins'
        }}>Hello Chareen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
