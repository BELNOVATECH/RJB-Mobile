import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import GuidesScreen from '../screens/GuidesScreen';
import RoomsScreen from '../screens/RoomsScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import TravelHistoryScreen from '../screens/TravelHistoryScreen';
import DevotionalContentScreen from '../screens/DevotionalContentScreen';
import PlacesScreen from '../screens/PlacesScreen';
import MapScreen from '../screens/MapScreen';
import NewsScreen from '../screens/NewsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="Guides" component={GuidesScreen} />
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen name="Vehicles" component={VehiclesScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="TravelHistory" component={TravelHistoryScreen} />
      <Stack.Screen name="DevotionalContent" component={DevotionalContentScreen} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}
