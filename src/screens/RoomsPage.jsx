import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const accommodations = [
  {
    id: 1,
    type: 'Luxury Cottage',
    price: '₹4,500 / night',
    availability: '6 rooms available',
    icon: 'home',
    amenities: ['AC', 'WiFi', 'Breakfast', 'Temple View'],
  },
  {
    id: 2,
    type: 'Budget Hotel',
    price: '₹2,200 / night',
    availability: '12 rooms available',
    icon: 'bed',
    amenities: ['AC', 'WiFi', 'Parking'],
  },
  {
    id: 3,
    type: 'Family House Stay',
    price: '₹1,800 / night',
    availability: '8 houses available',
    icon: 'business',
    amenities: ['Kitchen', 'Family Space', 'Parking'],
  },
  {
    id: 4,
    type: 'Premium Hotel Suite',
    price: '₹6,500 / night',
    availability: '3 suites available',
    icon: 'star',
    amenities: ['AC', 'WiFi', 'Room Service', 'Temple View'],
  },
  {
    id: 5,
    type: 'Pilgrim Cottage',
    price: '₹1,200 / night',
    availability: '15 cottages available',
    icon: 'home-outline',
    amenities: ['Fan', 'Basic Stay', 'Near Temple'],
  },
];

export default function RoomsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Accommodation</Text>
        <Text style={styles.headerSub}>
          Hotels, cottages & family stays near Ayodhya
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {accommodations.map((room) => (
          <View key={room.id} style={styles.card}>
            <View style={styles.topRow}>
              <View style={styles.iconContainer}>
                <Ionicons name={room.icon} size={30} color="#EA580C" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.roomType}>{room.type}</Text>
                <Text style={styles.price}>{room.price}</Text>
                <Text style={styles.availability}>{room.availability}</Text>
              </View>
            </View>

            <Text style={styles.amenitiesTitle}>Amenities</Text>

            <View style={styles.amenitiesContainer}>
              {room.amenities.map((item, index) => (
                <View key={index} style={styles.amenityBadge}>
                  <Text style={styles.amenityText}>{item}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FEF3C7',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  roomType: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EA580C',
    marginTop: 4,
  },
  availability: {
    fontSize: 14,
    color: '#16A34A',
    marginTop: 4,
    fontWeight: '600',
  },
  amenitiesTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 18,
    marginBottom: 10,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityBadge: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },
  amenityText: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: '#EA580C',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});