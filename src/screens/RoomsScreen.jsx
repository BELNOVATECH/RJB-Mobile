import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const roomData = [
  {
    id: 1,
    name: 'Deluxe Family Cottage',
    property: 'Ram Path Guest House',
    price: 'Rs 2500/night',
    type: 'Family Stay',
    capacity: '4 adults + 2 children',
    distance: '1.2 km from temple',
    stayFit: '2-3 nights',
    amenities: ['WiFi', 'Food', 'Parking', 'AC'],
    rating: 4.8,
    roomsLeft: 4,
    available: true,
    ai: true,
    recommendation: 'Best for family size 4-6 and medium budget.',
  },
  {
    id: 2,
    name: 'Temple View Room',
    property: 'Saryu Residency',
    price: 'Rs 1800/night',
    type: 'Couple Friendly',
    capacity: '2 adults',
    distance: '800 m from temple',
    stayFit: '1-2 nights',
    amenities: ['WiFi', 'Breakfast', 'Lift'],
    rating: 4.6,
    roomsLeft: 7,
    available: true,
    ai: false,
    recommendation: 'Good for short stay and walking distance preference.',
  },
  {
    id: 3,
    name: 'Budget Dharamshala Room',
    property: 'Pilgrim Seva Sadan',
    price: 'Rs 600/night',
    type: 'Pilgrim Stay',
    capacity: '3 adults',
    distance: '2.4 km from temple',
    stayFit: '1 night',
    amenities: ['Shared Bath', 'Locker', 'Drinking Water'],
    rating: 4.3,
    roomsLeft: 0,
    available: false,
    ai: false,
    recommendation: 'Lowest price option for budget-focused pilgrims.',
  },
  {
    id: 4,
    name: 'Premium Suite Cottage',
    property: 'Ayodhya Heritage Cottages',
    price: 'Rs 4200/night',
    type: 'Luxury Stay',
    capacity: '5 adults',
    distance: '1.6 km from temple',
    stayFit: '3+ nights',
    amenities: ['AC', 'Food', 'Parking', 'Private Cab'],
    rating: 4.9,
    roomsLeft: 2,
    available: true,
    ai: true,
    recommendation: 'Best for luxury preference, senior citizens, and longer stay.',
  },
  {
    id: 5,
    name: 'Group Dorm Cottage',
    property: 'Yatri Group Stay',
    price: 'Rs 5200/night',
    type: 'Group Stay',
    capacity: '10-14 pilgrims',
    distance: '3.1 km from temple',
    stayFit: '2+ nights',
    amenities: ['Food', 'Parking', 'Hall', 'Guide Desk'],
    rating: 4.5,
    roomsLeft: 3,
    available: true,
    ai: true,
    recommendation: 'AI group allocation for large families and pilgrim batches.',
  },
];

const filters = ['All', 'Family Stay', 'Group Stay', 'Luxury Stay', 'Pilgrim Stay'];
const amenities = ['WiFi', 'Food', 'Parking', 'AC', 'Guide Desk'];

export default function RoomsScreen() {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('All');
  const [budget, setBudget] = useState('3000');
  const [familySize, setFamilySize] = useState('4');
  const [duration, setDuration] = useState('2 nights');
  const [preference, setPreference] = useState('Near temple');

  const filteredRooms =
    selectedType === 'All'
      ? roomData
      : roomData.filter(room => room.type === selectedType);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="bed" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Accommodation</Text>
          <Text style={styles.headerText}>Guest houses, cottages, rooms, pricing, and AI allocation</Text>
        </View>
      </View>

      <View style={styles.aiBanner}>
        <Ionicons name="sparkles" size={24} color="#C94B13" />
        <View style={styles.aiCopy}>
          <Text style={styles.aiTitle}>AI Room Recommendation</Text>
          <Text style={styles.aiText}>
            Recommends rooms using tourist budget, family size, distance from temple, luxury preference, and stay duration.
          </Text>
        </View>
      </View>


      <Text style={styles.sectionTitle}>Guest House / Cottage Listing</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {filters.map(item => (
          <TouchableOpacity
            key={item}
            style={[styles.filterButton, selectedType === item && styles.activeFilter]}
            onPress={() => setSelectedType(item)}
          >
            <Text style={[styles.filterText, selectedType === item && styles.activeFilterText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filteredRooms.map(room => (
        <View key={room.id} style={styles.card}>
          {room.ai && (
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>AI Recommended</Text>
            </View>
          )}

          <View style={styles.cardTop}>
            <View style={styles.roomIcon}>
              <Ionicons name="home" size={30} color="#C94B13" />
            </View>

            <View style={styles.roomTitleBox}>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomProperty}>{room.property}</Text>
            </View>

            <View style={styles.ratingBox}>
              <Ionicons name="star" size={15} color="#C94B13" />
              <Text style={styles.rating}>{room.rating}</Text>
            </View>
          </View>

          <View style={styles.infoGrid}>
            <Info label="Type" value={room.type} />
            <Info label="Price" value={room.price} highlight />
            <Info label="Capacity" value={room.capacity} />
            <Info label="Distance" value={room.distance} />
            <Info label="Duration" value={room.stayFit} />
            <Info label="Availability" value={room.available ? `${room.roomsLeft} rooms left` : 'Booked'} danger={!room.available} />
          </View>

          <Text style={styles.subTitle}>Amenities Management</Text>
          <View style={styles.amenityRow}>
            {room.amenities.map(item => (
              <View key={item} style={styles.amenityPill}>
                <Ionicons name={amenityIcon(item)} size={14} color="#C94B13" />
                <Text style={styles.amenityText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.recommendBox}>
            <Ionicons name="analytics" size={18} color="#C94B13" />
            <Text style={styles.recommendText}>{room.recommendation}</Text>
          </View>

          <TouchableOpacity
            style={[styles.bookButton, !room.available && styles.disabledButton]}
            disabled={!room.available}
            onPress={() =>
              navigation.navigate('MainTabs', {
                screen: 'Bookings',
                params: { bookingType: 'Room' },
              })
            }
          >
            <Text style={styles.bookButtonText}>
              {room.available ? 'Book Room Online' : 'Not Available'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Price Configuration</Text>
      <View style={styles.priceCard}>
        <PriceLine label="Budget rooms" value="Rs 600 - Rs 1200/night" />
        <PriceLine label="Family cottages" value="Rs 1800 - Rs 3000/night" />
        <PriceLine label="Luxury cottages" value="Rs 4200+/night" />
        <PriceLine label="Group allocation" value="Rs 5200/night package" />
        <PriceLine label="Long stay discount" value="10% after 3 nights" />
      </View>

      <Text style={styles.sectionTitle}>Managed Amenities</Text>
      <View style={styles.amenityManager}>
        {amenities.map(item => (
          <View key={item} style={styles.managerPill}>
            <Ionicons name={amenityIcon(item)} size={18} color="#C94B13" />
            <Text style={styles.managerText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function amenityIcon(item) {
  if (item === 'WiFi') return 'wifi';
  if (item === 'Food' || item === 'Breakfast') return 'restaurant';
  if (item === 'Parking') return 'car';
  if (item === 'AC') return 'snow';
  if (item === 'Guide Desk') return 'people';
  if (item === 'Lift') return 'arrow-up-circle';
  if (item === 'Private Cab') return 'car-sport';
  if (item === 'Locker') return 'lock-closed';
  return 'checkmark-circle';
}

function Info({ label, value, highlight, danger }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, highlight && styles.highlightValue, danger && styles.dangerValue]}>
        {value}
      </Text>
    </View>
  );
}

function PriceLine({ label, value }) {
  return (
    <View style={styles.priceLine}>
      <Text style={styles.priceLabel}>{label}</Text>
      <Text style={styles.priceValue}>{value}</Text>
    </View>
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
    paddingBottom: 36,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
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
    fontSize: 24,
    fontWeight: '900',
  },
  headerText: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
    maxWidth: 270,
  },
  aiBanner: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  aiCopy: {
    flex: 1,
  },
  aiTitle: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
  },
  aiText: {
    color: '#FFEEDC',
    marginTop: 8,
    lineHeight: 21,
  },
  formCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#3E1908',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 14,
    marginTop: 4,
  },
  formLabel: {
    color: '#C94B13',
    fontWeight: '900',
    marginTop: 12,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    color: '#3E1908',
    fontWeight: '700',
  },
  aiResult: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFE2C9',
    borderRadius: 16,
    padding: 13,
    gap: 9,
    marginTop: 16,
  },
  aiResultText: {
    flex: 1,
    color: '#70412A',
    lineHeight: 20,
    fontWeight: '700',
  },
  filterRow: {
    gap: 10,
    paddingBottom: 18,
  },
  filterButton: {
    backgroundColor: '#FFF9F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
  activeFilter: {
    backgroundColor: '#D35400',
  },
  filterText: {
    color: '#C94B13',
    fontWeight: '800',
  },
  activeFilterText: {
    color: '#3E1908',
  },
  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    position: 'relative',
  },
  aiBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#C94B13',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  aiBadgeText: {
    color: '#FFF1E4',
    fontSize: 11,
    fontWeight: '900',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  roomIcon: {
    width: 58,
    height: 58,
    backgroundColor: '#FFE2C9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomTitleBox: {
    flex: 1,
    paddingRight: 42,
  },
  roomName: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
  },
  roomProperty: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE2C9',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  rating: {
    color: '#3E1908',
    fontWeight: '800',
  },
  infoGrid: {
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  infoLabel: {
    color: '#8A5A3D',
    width: 92,
    fontWeight: '800',
  },
  infoValue: {
    flex: 1,
    color: '#3E1908',
    fontWeight: '800',
    textAlign: 'right',
  },
  highlightValue: {
    color: '#C94B13',
  },
  dangerValue: {
    color: '#FF5252',
  },
  subTitle: {
    color: '#3E1908',
    fontWeight: '900',
    marginTop: 16,
    marginBottom: 10,
  },
  amenityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 5,
  },
  amenityText: {
    color: '#70412A',
    fontSize: 12,
    fontWeight: '800',
  },
  recommendBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFE2C9',
    borderRadius: 15,
    padding: 12,
    gap: 8,
    marginTop: 14,
  },
  recommendText: {
    flex: 1,
    color: '#70412A',
    lineHeight: 19,
    fontWeight: '700',
  },
  bookButton: {
    backgroundColor: '#D35400',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 14,
  },
  disabledButton: {
    backgroundColor: '#6B2A1A',
  },
  bookButtonText: {
    color: '#3E1908',
    fontWeight: '900',
    fontSize: 15,
  },
  priceCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },
  priceLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,179,0,0.12)',
  },
  priceLabel: {
    color: '#8A5A3D',
    fontWeight: '800',
  },
  priceValue: {
    color: '#3E1908',
    fontWeight: '900',
    textAlign: 'right',
  },
  amenityManager: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  managerPill: {
    width: '48%',
    backgroundColor: '#FFF9F2',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  managerText: {
    color: '#3E1908',
    fontWeight: '900',
  },
  bottomSpace: {
    height: 24,
  },
});
