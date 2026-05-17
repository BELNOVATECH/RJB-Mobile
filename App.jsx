import 'react-native-gesture-handler';
// import 'react-native-reanimated';
// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import BottomTabs from './src/navigation/BottomTabs';
import AppNavigator from './src/navigation/AppNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}