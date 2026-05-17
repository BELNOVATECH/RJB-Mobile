import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BookingScreen({ route }) {
  const bookingType = route?.params?.bookingType || 'Darshan';

  const bookingIntents = {
    Darshan: {
      title: 'Darshan',
      text: 'Review temple visit details and keep this booking linked with your trip plan.',
      icon: 'ticket',
    },
    Guide: {
      title: 'Guide',
      text: 'Confirm language, specialization, availability, and guide assignment.',
      icon: 'people',
    },
    Room: {
      title: 'Room / Cottage',
      text: 'Confirm guest house, room availability, amenities, family/group allocation, price, and stay duration.',
      icon: 'bed',
    },
    Vehicle: {
      title: 'Vehicle',
      text: 'Confirm vehicle type, pickup/drop, driver, pricing, route, and tracking details.',
      icon: 'car',
    },
  };

  const activeIntent = bookingIntents[bookingType] || bookingIntents.Darshan;

  const bookings = [
    { type: 'Darshan', title: 'Ram Mandir Darshan', date: '25 May 2026', status: 'Confirmed', icon: 'ticket', code: 'AYO-DAR-2401' },
    { type: 'Guide', title: 'Hindi Guide - Ramesh Sharma', date: '26 May 2026', status: 'Pending', icon: 'people', code: 'AYO-GUI-8802' },
    { type: 'Room', title: 'Deluxe Family Cottage', date: '25-27 May 2026', status: 'Confirmed', icon: 'bed', code: 'AYO-STAY-1190' },
    { type: 'Vehicle', title: 'Sedan Cab', date: '25 May 2026', status: 'Confirmed', icon: 'car', code: 'AYO-VEH-6520' },
  ];

  const roomConfirmations = [
    { label: 'Accommodation', value: 'Ram Path Guest House' },
    { label: 'Room', value: 'Deluxe Family Cottage' },
    { label: 'Guests', value: '4 adults + 2 children' },
    { label: 'Price', value: 'Rs 2500/night' },
    { label: 'Amenities', value: 'WiFi, Food, Parking, AC' },
    { label: 'Confirmation', value: 'AYO-STAY-1190' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="calendar" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>My Bookings</Text>
          <Text style={styles.headerText}>Manage pilgrim services</Text>
        </View>
      </View>

      <View style={styles.intentCard}>
        <Text style={styles.intentLabel}>Ready to book</Text>
        <View style={styles.intentTitleRow}>
          <Ionicons name={activeIntent.icon} size={24} color="#C94B13" />
          <Text style={styles.intentTitle}>{activeIntent.title}</Text>
        </View>
        <Text style={styles.intentText}>{activeIntent.text}</Text>
        <TouchableOpacity style={styles.intentButton} activeOpacity={0.85}>
          <Ionicons name="add-circle" size={19} color="#fff" />
          <Text style={styles.intentButtonText}>Start {bookingType} Booking</Text>
        </TouchableOpacity>
      </View>

      {bookingType === 'Room' && (
        <View style={styles.confirmationCard}>
          <Text style={styles.confirmationTitle}>Room Booking Confirmation</Text>
          {roomConfirmations.map(item => (
            <View key={item.label} style={styles.confirmationRow}>
              <Text style={styles.confirmationLabel}>{item.label}</Text>
              <Text style={styles.confirmationValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}

      <Text style={styles.section}>Upcoming</Text>

      {bookings.map((item) => (
        <View key={`${item.type}-${item.title}`} style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={27} color="#C94B13" />
          </View>

          <View style={styles.bookingInfo}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.code}>{item.code}</Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              item.status === 'Confirmed' ? styles.confirmed : styles.pending,
            ]}
          >
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
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
    borderWidth: 1,
    borderColor: '#F4CAAA',
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
  intentCard: {
    backgroundColor: '#D76424',
    borderRadius: 24,
    padding: 20,
    gap: 9,
    borderWidth: 1,
    borderColor: '#F7A45E',
  },
  intentLabel: {
    color: '#FFEEDC',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  intentTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '900',
  },
  intentTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  intentText: {
    color: '#FFEEDC',
    lineHeight: 21,
  },
  intentButton: {
    backgroundColor: '#8B2D08',
    borderRadius: 16,
    paddingVertical: 13,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  intentButtonText: {
    color: '#fff',
    fontWeight: '900',
  },
  section: {
    color: '#3E1908',
    fontSize: 19,
    fontWeight: '900',
  },
  confirmationCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#F4CAAA',
  },
  confirmationTitle: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  confirmationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  confirmationLabel: {
    color: '#8A5A3D',
    width: 104,
    fontWeight: '800',
  },
  confirmationValue: {
    flex: 1,
    color: '#3E1908',
    textAlign: 'right',
    fontWeight: '800',
  },
  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F4CAAA',
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingInfo: {
    flex: 1,
  },
  type: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '900',
  },
  title: {
    color: '#3E1908',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 4,
  },
  date: {
    color: '#8A5A3D',
    fontSize: 12,
    marginTop: 4,
  },
  code: {
    color: '#C94B13',
    fontSize: 11,
    marginTop: 4,
    fontWeight: '900',
  },
  statusBadge: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
  },
  confirmed: {
    backgroundColor: '#2E7D32',
  },
  pending: {
    backgroundColor: '#B86B00',
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
  },
});
