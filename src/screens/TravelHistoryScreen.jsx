import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TravelHistoryScreen() {
  const trips = [
    {
      place: 'Ram Janmabhoomi Temple',
      date: '25 May 2026',
      type: 'Darshan Visit',
      status: 'Completed',
      icon: 'ticket',
    },
    {
      place: 'Hanuman Garhi',
      date: '26 May 2026',
      type: 'Temple Visit',
      status: 'Completed',
      icon: 'location',
    },
    {
      place: 'Saryu Ghat',
      date: '26 May 2026',
      type: 'Evening Aarti',
      status: 'Completed',
      icon: 'water',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="time" size={30} color="#C94B13" />
        <Text style={styles.headerTitle}>Travel History</Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Pilgrimage Summary</Text>
        <Text style={styles.summaryText}>Total Visits: 3</Text>
        <Text style={styles.summaryText}>Last Visit: 26 May 2026</Text>
      </View>

      {trips.map((trip, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name={trip.icon} size={26} color="#C94B13" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.place}>{trip.place}</Text>
            <Text style={styles.type}>{trip.type}</Text>
            <Text style={styles.date}>{trip.date}</Text>
          </View>

          <Text style={styles.status}>{trip.status}</Text>
        </View>
      ))}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1E4',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 24,
  },
  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 12,
  },
  summaryCard: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,
  },
  summaryTitle: {
    color: '#3E1908',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
  },
  summaryText: {
    color: '#FFEEDC',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  place: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '800',
  },
  type: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },
  date: {
    color: '#8A5A3D',
    fontSize: 12,
    marginTop: 4,
  },
  status: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '900',
  },
});