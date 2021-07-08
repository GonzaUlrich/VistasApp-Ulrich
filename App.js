import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Navigator from './Navigation/Navigator';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Doom': require('./assets/fonts/AmazDooMLeft.ttf'),
    'DoomOutlined': require('./assets/fonts/AmazDooMLeftOutline.ttf'),
  })

if(!fontsLoaded) return <AppLoading/>;

  return (
    <Navigator></Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
