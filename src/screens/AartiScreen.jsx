import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AartiScreen() {
  const aartiTimes = [
    { name: 'Mangla Aarti', time: '5:00 AM', icon: 'sunny-outline', note: 'Morning opening prayers' },
    { name: 'Shringar Aarti', time: '8:00 AM', icon: 'flower-outline', note: 'Adornment and bhog preparation' },
    { name: 'Rajbhog Aarti', time: '12:00 PM', icon: 'restaurant-outline', note: 'Midday offering' },
    { name: 'Sandhya Aarti', time: '6:30 PM', icon: 'flame', note: 'Evening aarti and main crowd window', featured: true },
    { name: 'Shayan Aarti', time: '9:30 PM', icon: 'moon-outline', note: 'Night closing prayers' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="flame" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Aarti Timings</Text>
          <Text style={styles.headerText}>Daily devotional schedule</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureLabel}>Featured</Text>
        <Text style={styles.featureTitle}>Sandhya Aarti</Text>
        <Text style={styles.featureTime}>6:30 PM</Text>
        <Text style={styles.featureText}>
          Arrive early for the evening aarti because temple and ghat areas get busy.
        </Text>
      </View>

      <Text style={styles.section}>Daily Schedule</Text>

      {aartiTimes.map((item) => (
        <View key={item.name} style={[styles.aartiCard, item.featured && styles.featuredCard]}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={25} color="#C94B13" />
          </View>

          <View style={styles.aartiInfo}>
            <Text style={styles.aartiName}>{item.name}</Text>
            <Text style={styles.aartiNote}>{item.note}</Text>
          </View>

          <View style={styles.timeBox}>
            <Text style={styles.aartiTime}>{item.time}</Text>
            {item.featured && <Text style={styles.badgeText}>Main</Text>}
          </View>
        </View>
      ))}

      <View style={styles.infoBox}>
        <Ionicons name="information-circle" size={22} color="#C94B13" />
        <Text style={styles.infoText}>
          Timings may change during festivals, special events, and high-crowd days.
        </Text>
      </View>
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
    gap: 18,
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
  featureCard: {
    backgroundColor: '#D76424',
    borderRadius: 24,
    padding: 20,
  },
  featureLabel: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  featureTitle: {
    color: '#3E1908',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 8,
  },
  featureTime: {
    color: '#C94B13',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 8,
  },
  featureText: {
    color: '#FFEEDC',
    lineHeight: 21,
    marginTop: 8,
  },
  section: {
    color: '#3E1908',
    fontSize: 19,
    fontWeight: '900',
  },
  aartiCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featuredCard: {
    borderWidth: 1,
    borderColor: '#C94B13',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aartiInfo: {
    flex: 1,
  },
  aartiName: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '900',
  },
  aartiNote: {
    color: '#8A5A3D',
    marginTop: 4,
    lineHeight: 18,
    fontSize: 12,
  },
  timeBox: {
    alignItems: 'flex-end',
    width: 74,
  },
  aartiTime: {
    color: '#C94B13',
    fontWeight: '900',
    textAlign: 'right',
  },
  badgeText: {
    color: '#FFF1E4',
    backgroundColor: '#C94B13',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 7,
    fontSize: 11,
    fontWeight: '900',
  },
  infoBox: {
    backgroundColor: '#FFE2C9',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    flex: 1,
    color: '#70412A',
    lineHeight: 21,
  },
});
