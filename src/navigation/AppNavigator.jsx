import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import AuthScreen from "../screens/AuthScreen";

import BottomTabs from "./BottomTabs";

import HomeScreen from "../screens/HomeScreen";
import GuidesScreen from "../screens/GuidesScreen";
import RoomsScreen from "../screens/RoomsScreen";
import VehiclesScreen from "../screens/VehiclesScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import TravelHistoryScreen from "../screens/TravelHistoryScreen";
import DevotionalContentScreen from "../screens/DevotionalContentScreen";
import PlacesScreen from "../screens/PlacesScreen";
import MapScreen from "../screens/MapScreen";
import NewsScreen from "../screens/NewsScreen";

import TemplesPage from "../screens/TemplesPage";
import AartiSlotsPage from "../screens/AartiSlotsPage";
import GhatsPage from "../screens/GhatsPage";
import CharityPage from "../screens/CharityPage";
import KundsPage from "../screens/KundsPage";
import BhawansPage from "../screens/BhawansPage";
import AshramsPage from "../screens/AshramsPage";
import DarshanBookingScreen from "../screens/DarshanBookingScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* Auth */}
      <Stack.Screen name="Auth" component={AuthScreen} />

      {/* Main App */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Extra Screens */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Temples" component={TemplesPage} />
      <Stack.Screen name="AartiSlots" component={AartiSlotsPage} />

        <Stack.Screen name="DarshanBooking" component={DarshanBookingScreen} />

      <Stack.Screen name="RoomDetails" component={RoomsScreen} />
      <Stack.Screen name="GuideDetails" component={GuidesScreen} />

      <Stack.Screen name="Guides" component={GuidesScreen} />
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen name="Vehicles" component={VehiclesScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />

      <Stack.Screen name="Ghats" component={GhatsPage} />
      <Stack.Screen name="Charity" component={CharityPage} />
      <Stack.Screen name="Kunds" component={KundsPage} />
      <Stack.Screen name="Bhawans" component={BhawansPage} />
      <Stack.Screen name="Ashrams" component={AshramsPage} />

      <Stack.Screen name="TravelHistory" component={TravelHistoryScreen} />
      <Stack.Screen
        name="DevotionalContent"
        component={DevotionalContentScreen}
      />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}



