import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { PLACES } from '../data/places';

export default function PlacesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="location" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Sacred Places</Text>
          <Text style={styles.headerText}>Temples, ghats, and nearby landmarks</Text>
        </View>
      </View>

      {PLACES.map((place) => (
        <TouchableOpacity
          key={place.name}
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Map')}
        >
          <View style={[styles.iconBox, { backgroundColor: place.color }]}>
            <Ionicons name={place.icon} size={25} color="#3E1908" />
          </View>
          <View style={styles.placeInfo}>
            <View style={styles.titleRow}>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.badge}>{place.badge}</Text>
            </View>
            <Text style={styles.placeDesc}>{place.desc}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.metaText}>{place.distance}</Text>
              <Text style={styles.metaDot}>-</Text>
              <Text style={styles.metaText}>{place.time}</Text>
            </View>
          </View>
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
    marginBottom: 4,
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
  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    gap: 13,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeInfo: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  placeName: {
    flex: 1,
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '900',
  },
  badge: {
    color: '#FFF1E4',
    backgroundColor: '#C94B13',
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 10,
    fontWeight: '900',
  },
  placeDesc: {
    color: '#8A5A3D',
    lineHeight: 19,
    marginTop: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 10,
  },
  metaText: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '800',
  },
  metaDot: {
    color: '#8C6A49',
    fontWeight: '900',
  },
});
