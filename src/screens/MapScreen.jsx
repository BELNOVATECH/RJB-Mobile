import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { PLACES } from '../data/places';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="map" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Ayodhya Map</Text>
          <Text style={styles.headerText}>Route snapshot for key pilgrim stops</Text>
        </View>
      </View>

      <View style={styles.mapCard}>
        <View style={styles.routeLine} />
        {PLACES.map((place, index) => (
          <View
            key={place.name}
            style={[
              styles.pin,
              index === 0 && styles.pinOne,
              index === 1 && styles.pinTwo,
              index === 2 && styles.pinThree,
              index === 3 && styles.pinFour,
            ]}
          >
            <Ionicons name={place.icon} size={18} color="#3E1908" />
          </View>
        ))}
        <Text style={styles.mapLabel}>Ram Path</Text>
        <Text style={styles.mapSubLabel}>Temple route view</Text>
      </View>

      <View style={styles.notice}>
        <Ionicons name="walk" size={22} color="#C94B13" />
        <Text style={styles.noticeText}>
          GPS route preview shows key pilgrim stops, walking order, distance hints, and route navigation assistance.
        </Text>
      </View>

      {PLACES.map((place, index) => (
        <TouchableOpacity key={place.name} style={styles.routeCard} activeOpacity={0.85}>
          <Text style={styles.step}>{index + 1}</Text>
          <View style={styles.routeInfo}>
            <Text style={styles.routeTitle}>{place.name}</Text>
            <Text style={styles.routeText}>{place.distance} from current stay - {place.time}</Text>
          </View>
          <Ionicons name="navigate" size={20} color="#C94B13" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1E4',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 58,
    paddingBottom: 40,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#FFF9F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#3E1908',
    fontSize: 25,
    fontWeight: '900',
  },
  headerText: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
  },
  mapCard: {
    height: 250,
    borderRadius: 24,
    backgroundColor: '#FFF9F2',
    overflow: 'hidden',
  },
  routeLine: {
    position: 'absolute',
    left: 60,
    right: 48,
    top: 118,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C94B13',
    transform: [{ rotate: '-16deg' }],
  },
  pin: {
    position: 'absolute',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D35400',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFE2C9',
  },
  pinOne: {
    left: 34,
    top: 138,
  },
  pinTwo: {
    left: 118,
    top: 90,
  },
  pinThree: {
    right: 92,
    top: 132,
  },
  pinFour: {
    right: 28,
    top: 58,
  },
  mapLabel: {
    position: 'absolute',
    left: 18,
    bottom: 42,
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
  },
  mapSubLabel: {
    position: 'absolute',
    left: 18,
    bottom: 20,
    color: '#8A5A3D',
    fontWeight: '800',
  },
  notice: {
    backgroundColor: '#FFE2C9',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  noticeText: {
    flex: 1,
    color: '#70412A',
    lineHeight: 20,
  },
  routeCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  step: {
    width: 34,
    height: 34,
    borderRadius: 17,
    overflow: 'hidden',
    backgroundColor: '#C94B13',
    color: '#FFF1E4',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '900',
  },
  routeInfo: {
    flex: 1,
  },
  routeTitle: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '900',
  },
  routeText: {
    color: '#8A5A3D',
    marginTop: 4,
  },
});
