import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const slots = [
  {
    id: 1,
    title: "Morning Aarti",
    time: "5:30 AM - 7:00 AM",
    devotees: "120 slots available",
    icon: "sunny",
  },
  {
    id: 2,
    title: "Afternoon Aarti",
    time: "12:00 PM - 1:30 PM",
    devotees: "85 slots available",
    icon: "partly-sunny",
  },
  {
    id: 3,
    title: "Evening Aarti",
    time: "6:00 PM - 7:30 PM",
    devotees: "60 slots available",
    icon: "moon",
  },
  {
    id: 4,
    title: "Night Aarti",
    time: "9:00 PM - 10:00 PM",
    devotees: "40 slots available",
    icon: "star",
  },
];

const devoteesCount = [1, 2, 3, 4, 5, 6];

export default function AartiSlotsPage() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDevotees, setSelectedDevotees] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookedSlot, setBookedSlot] = useState(null);

  return (
     <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerTopRow}>
        <View style={styles.headerIconWrap}>
          <Ionicons name="flame" size={34} color="#FFFFFF" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.headerMini}>Ayodhya Dham</Text>
          <Text style={styles.headerTitle}>Aarti Slot Booking</Text>
          <Text style={styles.headerSub}>
            Sacred darshan experience booking
          </Text>
        </View>
      </View>

      <View style={styles.headerStats}>
        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>305+</Text>
          <Text style={styles.headerStatLabel}>Slots Today</Text>
        </View>

        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>4</Text>
          <Text style={styles.headerStatLabel}>Aarti Sessions</Text>
        </View>

        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>24x7</Text>
          <Text style={styles.headerStatLabel}>Support</Text>
        </View>
      </View>
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
              <Ionicons name="checkmark-circle" size={28} color="#16A34A" />
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

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => {
            if (!selectedSlot) {
              return;
            }

            const slot = slots.find((item) => item.id === selectedSlot);
            setBookedSlot(slot);
            setBookingSuccess(true);
          }}
        >
          <Text style={styles.bookButtonText}>Book Aarti Slot</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
      <Modal
  visible={bookingSuccess}
  transparent
  animationType="fade"
>
  <View style={styles.modalOverlay}>
    <View style={styles.successModal}>
      <View style={styles.successIconWrap}>
        <Ionicons
          name="checkmark-circle"
          size={90}
          color="#16A34A"
        />
      </View>

      <Text style={styles.successTitle}>
        Booking Confirmed 🙏
      </Text>

      <Text style={styles.successSubtitle}>
        Jai Shri Ram 🚩
      </Text>

      <View style={styles.bookingCard}>
        <Text style={styles.bookingLabel}>Aarti Slot</Text>
        <Text style={styles.bookingValue}>
          {bookedSlot?.title}
        </Text>

        <Text style={styles.bookingLabel}>Timing</Text>
        <Text style={styles.bookingValue}>
          {bookedSlot?.time}
        </Text>

        <Text style={styles.bookingLabel}>Devotees</Text>
        <Text style={styles.bookingValue}>
          {selectedDevotees}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => setBookingSuccess(false)}
      >
        <Text style={styles.doneButtonText}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
header: {
  backgroundColor: "#D35400",
  borderRadius: 30,
  padding: 22,
  marginBottom: 22,
  elevation: 8,
},

headerTopRow: {
  flexDirection: "row",
  alignItems: "center",
},

headerIconWrap: {
  width: 74,
  height: 74,
  borderRadius: 37,
  backgroundColor: "rgba(255,255,255,0.18)",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 16,
},

headerMini: {
  color: "#FFE7D6",
  fontSize: 13,
  fontWeight: "800",
  textTransform: "uppercase",
},

headerTitle: {
  fontSize: 30,
  fontWeight: "900",
  color: "#FFFFFF",
  marginTop: 4,
},

headerSub: {
  fontSize: 14,
  color: "#FFF1E4",
  marginTop: 6,
  fontWeight: "600",
},

headerStats: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 22,
},

headerStatCard: {
  width: "31%",
  backgroundColor: "rgba(255,255,255,0.15)",
  borderRadius: 18,
  paddingVertical: 14,
  alignItems: "center",
},

headerStatValue: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "900",
},

headerStatLabel: {
  color: "#FFE7D6",
  fontSize: 11,
  fontWeight: "700",
  marginTop: 6,
  textAlign: "center",
},
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#EA580C",
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#FEF3C7",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  slotTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  slotTime: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
  slotAvailability: {
    fontSize: 13,
    color: "#16A34A",
    marginTop: 4,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 20,
    marginBottom: 14,
  },
  devoteeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  devoteeButton: {
    width: 55,
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  selectedDevotee: {
    backgroundColor: "#EA580C",
  },
  devoteeText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  selectedDevoteeText: {
    color: "#FFFFFF",
  },
  bookButton: {
    backgroundColor: "#EA580C",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 28,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.65)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
},

successModal: {
  width: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: 30,
  padding: 28,
  alignItems: 'center',
  elevation: 15,
},

successIconWrap: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: '#DCFCE7',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},

successTitle: {
  fontSize: 28,
  fontWeight: '800',
  color: '#1E293B',
},

successSubtitle: {
  fontSize: 18,
  color: '#EA580C',
  fontWeight: '700',
  marginTop: 8,
  marginBottom: 20,
},

bookingCard: {
  width: '100%',
  backgroundColor: '#FFF7ED',
  borderRadius: 20,
  padding: 20,
  marginBottom: 24,
},

bookingLabel: {
  fontSize: 13,
  color: '#64748B',
  marginTop: 8,
},

bookingValue: {
  fontSize: 18,
  fontWeight: '700',
  color: '#1E293B',
},

doneButton: {
  width: '100%',
  backgroundColor: '#EA580C',
  paddingVertical: 16,
  borderRadius: 18,
  alignItems: 'center',
},

doneButtonText: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: '800',
},
});
