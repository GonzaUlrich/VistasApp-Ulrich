import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation/Navigator';
import { Provider } from 'react-redux';
import React from 'react';
import Tabs from './TabNav/TabNavigator';
import store from './Store'
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Doom': require('./assets/fonts/AmazDooMLeft.ttf'),
    'DoomOutlined': require('./assets/fonts/AmazDooMLeftOutline.ttf'),
  })

if(!fontsLoaded) return <AppLoading/>;

  return (
    <Provider store={store}>
      
      <NavigationContainer>
      <Tabs><Navigator/></Tabs>
      </NavigationContainer>
      
      </Provider> 
  );
}