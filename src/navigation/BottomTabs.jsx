import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// import HomeDrawer from './HomeDrawer';

import BookingScreen from '../screens/BookingScreen';
import AartiScreen from '../screens/AartiScreen';
import AIAssistantScreen from '../screens/AIAssistantScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#FFF1E4',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
        },

        tabBarActiveTintColor: '#C94B13',
        tabBarInactiveTintColor: '#A87558',
      }}
    >
      {/* HOME + DRAWER */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* BOOKINGS */}
      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        initialParams={{ bookingType: 'Darshan' }}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ticket"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AI Assistant"
        component={AIAssistantScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="sparkles"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* AARTI */}
      <Tab.Screen
        name="Aarti"
        component={AartiScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="flame"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
