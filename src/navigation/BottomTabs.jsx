import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BookingScreen from '../screens/BookingScreen';
import AartiScreen from '../screens/AartiScreen';
import AIAssistantScreen from '../screens/AIAssistantScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
     screenOptions={{
  headerShown: false,

  sceneStyle: {
    paddingBottom: 110,
  },

  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#FFF1E4',
    borderTopWidth: 0,
    height: 70 + insets.bottom,
    paddingBottom: insets.bottom + 8,
    paddingTop: 8,
    elevation: 15,
    shadowOpacity: 0.1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  tabBarActiveTintColor: '#C94B13',
  tabBarInactiveTintColor: '#A87558',

  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
  },
}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        initialParams={{ bookingType: 'Darshan' }}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AI Assistant"
        component={AIAssistantScreen}
        options={{
          tabBarLabel: 'AI',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Aarti"
        component={AartiScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}