import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1E4',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});