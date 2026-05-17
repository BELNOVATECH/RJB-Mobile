import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const slots = [
  {
    id: 1,
    title: 'Morning Aarti',
    time: '5:30 AM - 7:00 AM',
    devotees: '120 slots available',
    icon: 'sunny',
  },
  {
    id: 2,
    title: 'Afternoon Aarti',
    time: '12:00 PM - 1:30 PM',
    devotees: '85 slots available',
    icon: 'partly-sunny',
  },
  {
    id: 3,
    title: 'Evening Aarti',
    time: '6:00 PM - 7:30 PM',
    devotees: '60 slots available',
    icon: 'moon',
  },
  {
    id: 4,
    title: 'Night Aarti',
    time: '9:00 PM - 10:00 PM',
    devotees: '40 slots available',
    icon: 'star',
  },
];

const devoteesCount = [1, 2, 3, 4, 5, 6];

export default function AartiSlotsPage() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDevotees, setSelectedDevotees] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Aarti Slot Booking</Text>
        <Text style={styles.headerSub}>
          Select your preferred darshan timing
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {slots.map((slot) => (
          <TouchableOpacity
            key={slot.id}
            style={[
              styles.card,
              selectedSlot === slot.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedSlot(slot.id)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={slot.icon} size={30} color="#EA580C" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.slotTitle}>{slot.title}</Text>
              <Text style={styles.slotTime}>{slot.time}</Text>
              <Text style={styles.slotAvailability}>{slot.devotees}</Text>
            </View>

            {selectedSlot === slot.id && (
              <Ionicons
                name="checkmark-circle"
                size={28}
                color="#16A34A"
              />
            )}
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Select Number of Devotees</Text>

        <View style={styles.devoteeContainer}>
          {devoteesCount.map((count) => (
            <TouchableOpacity
              key={count}
              style={[
                styles.devoteeButton,
                selectedDevotees === count && styles.selectedDevotee,
              ]}
              onPress={() => setSelectedDevotees(count)}
            >
              <Text
                style={[
                  styles.devoteeText,
                  selectedDevotees === count && styles.selectedDevoteeText,
                ]}
              >
                {count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Aarti Slot</Text>
        </TouchableOpacity>

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
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#EA580C',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FEF3C7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  slotTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  slotTime: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  slotAvailability: {
    fontSize: 13,
    color: '#16A34A',
    marginTop: 4,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 20,
    marginBottom: 14,
  },
  devoteeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  devoteeButton: {
    width: 55,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  selectedDevotee: {
    backgroundColor: '#EA580C',
  },
  devoteeText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  selectedDevoteeText: {
    color: '#FFFFFF',
  },
  bookButton: {
    backgroundColor: '#EA580C',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 28,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});