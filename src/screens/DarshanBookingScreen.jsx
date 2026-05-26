import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DarshanBookingScreen() {
  const temples = [
    {
      id: 1,
      name: "Shri Ram Janmabhoomi",
      distance: "0.3 km",
      timing: "6:00 AM - 10:00 PM",
      crowd: "High",
      vip: "Available",
      image: require("../../assets/5.jpg"),
    },
    {
      id: 2,
      name: "Hanuman Garhi",
      distance: "1.1 km",
      timing: "5:00 AM - 9:00 PM",
      crowd: "Medium",
      vip: "Available",
      image: require("../../assets/2.png"),
    },
    {
      id: 3,
      name: "Kanak Bhawan",
      distance: "1.8 km",
      timing: "7:00 AM - 8:30 PM",
      crowd: "Low",
      vip: "Available",
      image: require("../../assets/3.jpg"),
    },
    {
      id: 4,
      name: "Nageshwarnath Temple",
      distance: "2.5 km",
      timing: "6:00 AM - 8:00 PM",
      crowd: "Medium",
      vip: "Limited",
      image: require("../../assets/4.webp"),
    },
  ];

  const [selectedTemple, setSelectedTemple] = useState(temples[0].name);
const darshanPricing = {
  General: 300,
  VIP: 1500,
  Senior: 500,
  Family: 1200,
};

const [selectedType, setSelectedType] = useState("General");
  const [receiptVisible, setReceiptVisible] = useState(false);
  const navigation = useNavigation();

const [bookingVisible, setBookingVisible] = useState(false);
const [selectedTempleData, setSelectedTempleData] = useState(null);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    aadhaar: "",
    pilgrims: "",
    date: "",
    slot: "",
    request: "",
  });

  const bookingId = `AYO-${Math.floor(Math.random() * 999999)}`;

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.headerMini}>Ayodhya Dham</Text>
          <Text style={styles.headerTitle}>Darshan Pass Booking</Text>
          <Text style={styles.headerSub}>
            Book temple darshan slots instantly
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Nearby Temples</Text>
        <Text style={styles.sectionHint}>Select a temple to enter pilgrim details and book a pass.</Text>

        {temples.map((temple) => (
          <TouchableOpacity
            key={temple.id}
            style={[
              styles.templeCard,
              selectedTemple === temple.name && styles.selectedTemple,
            ]}
            onPress={() => {
  setSelectedTemple(temple.name);
  setSelectedTempleData(temple);
  setBookingVisible(true);
}}
          >
            <Image source={temple.image} style={styles.templeImage} />

            <View style={styles.templeContent}>
              <Text style={styles.templeName}>{temple.name}</Text>

              <View style={styles.infoRow}>
                <Ionicons name="location" size={14} color="#D35400" />
                <Text style={styles.infoText}>{temple.distance}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="time" size={14} color="#D35400" />
                <Text style={styles.infoText}>{temple.timing}</Text>
              </View>

              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    Crowd: {temple.crowd}
                  </Text>
                </View>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    VIP: {temple.vip}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={bookingVisible} transparent animationType="slide">
  <View style={styles.modalOverlay}>
    <View style={styles.bookingModal}>
      <ScrollView showsVerticalScrollIndicator={false}>
       

        <View style={styles.popupHeader}>
  <TouchableOpacity
    style={styles.popupBackBtn}
    onPress={() => setBookingVisible(false)}
  >
    <Ionicons name="arrow-back" size={22} color="#D35400" />
  </TouchableOpacity>

  <View>
    <Text style={styles.popupTitle}>Book Darshan Slot</Text>
    <Text style={styles.popupSub}>
      {selectedTempleData?.name}
    </Text>
  </View>
</View>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#8A5A3D"
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#8A5A3D"
          keyboardType="phone-pad"
          style={styles.input}
          value={form.mobile}
          onChangeText={(text) => setForm({ ...form, mobile: text })}
        />

        <TextInput
          placeholder="Aadhaar Number"
          placeholderTextColor="#8A5A3D"
          keyboardType="numeric"
          style={styles.input}
          value={form.aadhaar}
          onChangeText={(text) => setForm({ ...form, aadhaar: text })}
        />

        <TextInput
          placeholder="Number of Pilgrims"
          placeholderTextColor="#8A5A3D"
          keyboardType="numeric"
          style={styles.input}
          value={form.pilgrims}
          onChangeText={(text) => setForm({ ...form, pilgrims: text })}
        />

        <TextInput
          placeholder="Visit Date"
          placeholderTextColor="#8A5A3D"
          style={styles.input}
          value={form.date}
          onChangeText={(text) => setForm({ ...form, date: text })}
        />

        <TextInput
          placeholder="Preferred Time Slot"
          placeholderTextColor="#8A5A3D"
          style={styles.input}
          value={form.slot}
          onChangeText={(text) => setForm({ ...form, slot: text })}
        />

        <Text style={styles.typeTitle}>Darshan Type</Text>

        <View style={styles.typeRow}>
          {Object.keys(darshanPricing).map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeBtn,
                selectedType === type && styles.activeType,
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text
                style={[
                  styles.typeText,
                  selectedType === type &&
                    styles.activeTypeText,
                ]}
              >
                {type} ₹{darshanPricing[type]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => {
            setBookingVisible(false);
            setReceiptVisible(true);
          }}
        >
          <Ionicons name="ticket" size={18} color="#FFF" />
          <Text style={styles.bookBtnText}>
            Pay ₹{darshanPricing[selectedType]}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
</Modal>

      <Modal visible={receiptVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.receiptModal}>
            <Ionicons
              name="checkmark-circle"
              size={90}
              color="#22C55E"
            />

            <Text style={styles.popupTitle}>Booking Confirmed</Text>
            <Text style={styles.popupSub}>Official Darshan Receipt</Text>

            <View style={styles.receiptCard}>
              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Temple</Text>
                <Text style={styles.receiptValue}>{selectedTemple}</Text>
              </View>

              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Booking ID</Text>
                <Text style={styles.receiptValue}>{bookingId}</Text>
              </View>

              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Pilgrim</Text>
                <Text style={styles.receiptValue}>{form.name}</Text>
              </View>

              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Date</Text>
                <Text style={styles.receiptValue}>{form.date}</Text>
              </View>

              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Slot</Text>
                <Text style={styles.receiptValue}>{form.slot}</Text>
              </View>

              <View style={styles.receiptRow}>
                <Text style={styles.receiptLabel}>Type</Text>
                <Text style={styles.receiptValue}>{selectedType}</Text>
              </View>

              <View style={styles.qrBox}>
                <Ionicons name="qr-code" size={90} color="#D35400" />
              </View>
            </View>
            <View style={styles.receiptRow}>
  <Text style={styles.receiptLabel}>Amount</Text>
  <Text style={styles.receiptValue}>
    ₹{darshanPricing[selectedType]}
  </Text>
</View>

            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => setReceiptVisible(false)}
            >
              <Text style={styles.doneBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF1E4",
  },
  content: {
    padding: 16,
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#D35400",
    borderRadius: 26,
    padding: 22,
    marginBottom: 20,
  },
  headerMini: {
    color: "#FFEEDC",
    fontWeight: "900",
    fontSize: 12,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 6,
  },
  headerSub: {
    color: "#FFEEDC",
    marginTop: 8,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#3E1908",
    marginBottom: 6,
  },
  sectionHint: {
    color: "#8A5A3D",
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 16,
  },
  templeCard: {
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F4CAAA",
  },
  selectedTemple: {
    borderColor: "#D35400",
    borderWidth: 2,
  },
  templeImage: {
    width: "100%",
    height: 180,
  },
  templeContent: {
    padding: 16,
  },
  templeName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#3E1908",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  infoText: {
    color: "#8A5A3D",
    fontWeight: "700",
  },
  badgeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  badge: {
    backgroundColor: "#FFE2C9",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  badgeText: {
    color: "#D35400",
    fontWeight: "800",
  },
  formCard: {
    backgroundColor: "#FFF9F2",
    borderRadius: 24,
    padding: 18,
  },
  input: {
    backgroundColor: "#FFF",
    color: "#3E1908",
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#F4CAAA",
  },
  typeTitle: {
    fontWeight: "900",
    color: "#3E1908",
    marginBottom: 12,
  },
  typeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 16,
  },
  typeBtn: {
    backgroundColor: "#FFE2C9",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },
  activeType: {
    backgroundColor: "#D35400",
  },
  typeText: {
    color: "#D35400",
    fontWeight: "800",
  },
  activeTypeText: {
    color: "#FFF",
  },
  bookBtn: {
    backgroundColor: "#D35400",
    paddingVertical: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  bookBtnText: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  receiptModal: {
    width: "100%",
    backgroundColor: "#FFF9F2",
    borderRadius: 28,
    padding: 22,
    alignItems: "center",
  },
  popupTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#3E1908",
    marginTop: 14,
  },
  popupSub: {
    color: "#D35400",
    fontWeight: "800",
    marginBottom: 20,
  },
  receiptCard: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 18,
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  receiptLabel: {
    color: "#8A5A3D",
    fontWeight: "700",
  },
  receiptValue: {
    color: "#3E1908",
    fontWeight: "900",
    maxWidth: "55%",
    textAlign: "right",
  },
  qrBox: {
    alignItems: "center",
    marginTop: 16,
  },
  doneBtn: {
    width: "100%",
    backgroundColor: "#D35400",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
  },
  doneBtnText: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 16,
  },
  backBtn: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "rgba(255,255,255,0.2)",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 18,
},

bookingModal: {
  width: "100%",
  maxHeight: "85%",
  backgroundColor: "#FFF9F2",
  borderRadius: 28,
  padding: 22,
},
popupHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
},

popupBackBtn: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: "#FFE2C9",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 14,
},
});
