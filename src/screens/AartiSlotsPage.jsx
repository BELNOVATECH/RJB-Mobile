import React, { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const temples = ["Ram Mandir", "Hanuman Garhi", "Kanak Bhawan", "Saryu Ghat"];
const dates = ["Today", "Tomorrow", "29 May", "30 May"];
const devoteesCount = [1, 2, 3, 4, 5, 6];

const slots = [
  {
    id: 1,
    title: "Mangla Aarti",
    period: "Morning",
    time: "5:30 AM - 7:00 AM",
    left: 120,
    capacity: 180,
    price: 0,
    icon: "sunny",
    note: "Best for peaceful early darshan and low crowd movement.",
    temple: "Ram Mandir",
  },
  {
    id: 2,
    title: "Rajbhog Aarti",
    period: "Afternoon",
    time: "12:00 PM - 1:30 PM",
    left: 85,
    capacity: 140,
    price: 0,
    icon: "partly-sunny",
    note: "Midday bhog offering with seated waiting zones.",
    temple: "Ram Mandir",
  },
  {
    id: 3,
    title: "Sandhya Aarti",
    period: "Evening",
    time: "6:00 PM - 7:30 PM",
    left: 60,
    capacity: 200,
    price: 100,
    icon: "flame",
    note: "Most popular slot. Reach early for security and entry flow.",
    temple: "Saryu Ghat",
    featured: true,
  },
  {
    id: 4,
    title: "Shayan Aarti",
    period: "Night",
    time: "9:00 PM - 10:00 PM",
    left: 40,
    capacity: 90,
    price: 0,
    icon: "moon",
    note: "Calm closing prayers with limited devotee entry.",
    temple: "Ram Mandir",
  },
  {
    id: 5,
    title: "Hanuman Garhi Aarti",
    period: "Morning",
    time: "7:00 AM - 8:00 AM",
    left: 55,
    capacity: 100,
    price: 50,
    icon: "sparkles",
    note: "Good for families combining Hanuman Garhi and Ram Mandir.",
    temple: "Hanuman Garhi",
  },
];

export default function AartiSlotsPage() {
  const [selectedTemple, setSelectedTemple] = useState("Ram Mandir");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [selectedDevotees, setSelectedDevotees] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    note: "",
  });

  const visibleSlots = useMemo(() => {
    return slots.filter((slot) => slot.temple === selectedTemple || selectedTemple === "Ram Mandir");
  }, [selectedTemple]);

  const activeSlot = slots.find((slot) => slot.id === selectedSlot) || visibleSlots[0];
  const sevaAmount = (activeSlot?.price || 0) * selectedDevotees;
  const bookingId = bookedSlot ? `AYO-AARTI-${bookedSlot.id}${selectedDevotees}${selectedDate.replace(" ", "")}` : "";

  const updateForm = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const confirmBooking = () => {
    const slot = slots.find((item) => item.id === selectedSlot);
    if (!slot) {
      return;
    }

    setBookedSlot(slot);
    setBookingSuccess(true);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroIconWrap}>
            <Ionicons name="flame" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.heroCopy}>
            <Text style={styles.heroTitle}>Book Aarti Slot</Text>
            <Text style={styles.heroSub}>Reserve a peaceful devotional entry</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {temples.map((temple) => (
            <TouchableOpacity
              key={temple}
              style={[styles.heroChip, selectedTemple === temple && styles.heroChipActive]}
              onPress={() => setSelectedTemple(temple)}
            >
              <Text style={[styles.heroChipText, selectedTemple === temple && styles.heroChipTextActive]}>
                {temple}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {dates.map((date) => (
            <TouchableOpacity
              key={date}
              style={[styles.dateChip, selectedDate === date && styles.dateChipActive]}
              onPress={() => setSelectedDate(date)}
            >
              <Ionicons name="calendar-outline" size={14} color={selectedDate === date ? "#C2410C" : "#FFFFFF"} />
              <Text style={[styles.dateChipText, selectedDate === date && styles.dateChipTextActive]}>
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.statsRow}>
        <StatCard value="305+" label="Slots Today" icon="ticket-outline" />
        <StatCard value="5" label="Sessions" icon="flame-outline" />
        <StatCard value="24x7" label="Support" icon="headset-outline" />
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Available Aarti Slots</Text>
          <Text style={styles.sectionSub}>Choose the best time for your darshan plan</Text>
        </View>
      </View>

      <View style={styles.slotList}>
        {visibleSlots.map((slot) => (
          <TouchableOpacity
            key={slot.id}
            style={[styles.slotCard, selectedSlot === slot.id && styles.selectedSlotCard]}
            onPress={() => setSelectedSlot(slot.id)}
            activeOpacity={0.86}
          >
            <View style={styles.slotIcon}>
              <Ionicons name={slot.icon} size={26} color="#EA580C" />
            </View>

            <View style={styles.slotContent}>
              <View style={styles.slotTitleRow}>
                <Text style={styles.slotTitle}>{slot.title}</Text>
                {slot.featured ? <Text style={styles.featuredBadge}>Popular</Text> : null}
              </View>
              <Text style={styles.slotTime}>{slot.time}</Text>
              <Text style={styles.slotNote}>{slot.note}</Text>

              <View style={styles.slotMetaRow}>
                <View style={styles.metaPill}>
                  <Ionicons name="people-outline" size={14} color="#0F766E" />
                  <Text style={styles.metaText}>{slot.left} left</Text>
                </View>
                <View style={styles.metaPill}>
                  <Ionicons name="location-outline" size={14} color="#0F766E" />
                  <Text style={styles.metaText}>{slot.temple}</Text>
                </View>
                <Text style={styles.priceText}>{slot.price > 0 ? `Rs ${slot.price}` : "Free"}</Text>
              </View>
            </View>

            <Ionicons
              name={selectedSlot === slot.id ? "checkmark-circle" : "ellipse-outline"}
              size={25}
              color={selectedSlot === slot.id ? "#16A34A" : "#CBD5E1"}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.devoteePanel}>
        <View>
          <Text style={styles.sectionTitle}>Select Devotees</Text>
          <Text style={styles.sectionSub}>Maximum 6 devotees per booking</Text>
        </View>

        <View style={styles.devoteeContainer}>
          {devoteesCount.map((count) => (
            <TouchableOpacity
              key={count}
              style={[styles.devoteeButton, selectedDevotees === count && styles.selectedDevotee]}
              onPress={() => setSelectedDevotees(count)}
            >
              <Text style={[styles.devoteeText, selectedDevotees === count && styles.selectedDevoteeText]}>
                {count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Selected slot</Text>
          <Text style={styles.summaryTitle}>{activeSlot?.title}</Text>
          <Text style={styles.summaryText}>{selectedDate} - {activeSlot?.time}</Text>
        </View>
        <View style={styles.summaryPriceBox}>
          <Text style={styles.summaryLabel}>Seva amount</Text>
          <Text style={styles.summaryPrice}>{sevaAmount > 0 ? `Rs ${sevaAmount}` : "Free"}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={confirmBooking}>
        <Text style={styles.bookButtonText}>Book Aarti Slot</Text>
        <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Ionicons name="information-circle-outline" size={22} color="#C2410C" />
        <Text style={styles.infoText}>
          Timings may change during festivals, special events, and high-crowd days. Please arrive 30 minutes early.
        </Text>
      </View>

      <Modal visible={bookingSuccess} transparent animationType="fade" onRequestClose={() => setBookingSuccess(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.successModal}>
            <View style={styles.successIconWrap}>
              <Ionicons name="checkmark" size={44} color="#FFFFFF" />
            </View>

            <Text style={styles.successTitle}>Aarti Slot Booked</Text>
            <Text style={styles.successSubtitle}>Your devotional entry is confirmed.</Text>

            <View style={styles.bookingCard}>
              <ReceiptLine label="Booking ID" value={bookingId} />
              <ReceiptLine label="Temple" value={bookedSlot?.temple} />
              <ReceiptLine label="Aarti Slot" value={bookedSlot?.title} />
              <ReceiptLine label="Timing" value={`${selectedDate}, ${bookedSlot?.time}`} />
              <ReceiptLine label="Devotees" value={`${selectedDevotees}`} />
              <View style={styles.totalLine}>
                <Text style={styles.totalLabel}>Seva Amount</Text>
                <Text style={styles.totalValue}>{sevaAmount > 0 ? `Rs ${sevaAmount}` : "Free"}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.doneButton} onPress={() => setBookingSuccess(false)}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

function FormField({ label, value, onChangeText, icon, placeholder, keyboardType }) {
  return (
    <View style={styles.formField}>
      <Text style={styles.formLabel}>{label}</Text>
      <View style={styles.inputShell}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7C8698"
          keyboardType={keyboardType}
          style={styles.input}
        />
        <Ionicons name={icon} size={18} color="#253044" />
      </View>
    </View>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <View style={styles.statCard}>
      <Ionicons name={icon} size={18} color="#EA580C" />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ReceiptLine({ label, value }) {
  return (
    <View style={styles.receiptRow}>
      <Text style={styles.receiptLabel}>{label}</Text>
      <Text style={styles.receiptValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },
  content: {
    paddingBottom: 36,
    gap: 18,
  },
  hero: {
    backgroundColor: "#F97316",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 24,
    gap: 18,
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  heroIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.22)",
    justifyContent: "center",
    alignItems: "center",
  },
  heroCopy: {
    flex: 1,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "900",
  },
  heroSub: {
    color: "#FFF7ED",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 5,
  },
  searchPanel: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 14,
    gap: 12,
  },
  formGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  formField: {
    flexGrow: 1,
    flexBasis: 170,
    gap: 6,
  },
  formLabel: {
    color: "#7C2D12",
    fontSize: 12,
    fontWeight: "900",
  },
  inputShell: {
    minHeight: 52,
    backgroundColor: "#FFF7ED",
    borderWidth: 1,
    borderColor: "#FED7AA",
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    color: "#172033",
    fontSize: 15,
    fontWeight: "800",
    padding: 0,
  },
  chipRow: {
    gap: 10,
    paddingRight: 16,
  },
  heroChip: {
    backgroundColor: "rgba(255,255,255,0.24)",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  heroChipActive: {
    backgroundColor: "#FFFFFF",
  },
  heroChipText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  heroChipTextActive: {
    color: "#C2410C",
  },
  dateChip: {
    backgroundColor: "rgba(255,255,255,0.24)",
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dateChipActive: {
    backgroundColor: "#FFFFFF",
  },
  dateChipText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  dateChipTextActive: {
    color: "#C2410C",
  },
  statsRow: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFE1C2",
    paddingVertical: 13,
    alignItems: "center",
    gap: 5,
  },
  statValue: {
    color: "#EA580C",
    fontSize: 18,
    fontWeight: "900",
  },
  statLabel: {
    color: "#7C2D12",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
  },
  sectionHeader: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "#7C2D12",
    fontSize: 20,
    fontWeight: "900",
  },
  sectionSub: {
    color: "#8A5A3D",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 4,
  },
  slotList: {
    paddingHorizontal: 16,
    gap: 14,
  },
  slotCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFE1C2",
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  selectedSlotCard: {
    borderColor: "#F97316",
    backgroundColor: "#FFFDF9",
  },
  slotIcon: {
    width: 54,
    height: 54,
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  slotContent: {
    flex: 1,
    gap: 7,
  },
  slotTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  slotTitle: {
    color: "#7C2D12",
    fontSize: 18,
    fontWeight: "900",
    flex: 1,
  },
  featuredBadge: {
    color: "#FFFFFF",
    backgroundColor: "#F97316",
    borderRadius: 999,
    overflow: "hidden",
    paddingHorizontal: 9,
    paddingVertical: 4,
    fontSize: 11,
    fontWeight: "900",
  },
  slotTime: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "900",
  },
  slotNote: {
    color: "#8A5A3D",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
  },
  slotMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8,
  },
  metaPill: {
    backgroundColor: "#ECFDF5",
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  metaText: {
    color: "#0F766E",
    fontSize: 12,
    fontWeight: "900",
  },
  priceText: {
    color: "#EA580C",
    fontWeight: "900",
  },
  devoteePanel: {
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFE1C2",
    padding: 14,
    gap: 14,
  },
  devoteeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  devoteeButton: {
    width: 52,
    height: 52,
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FED7AA",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDevotee: {
    backgroundColor: "#F97316",
    borderColor: "#F97316",
  },
  devoteeText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#7C2D12",
  },
  selectedDevoteeText: {
    color: "#FFFFFF",
  },
  summaryCard: {
    marginHorizontal: 16,
    backgroundColor: "#172033",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  summaryLabel: {
    color: "#DDE6F3",
    fontSize: 12,
    fontWeight: "800",
  },
  summaryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 4,
  },
  summaryText: {
    color: "#DDE6F3",
    fontWeight: "700",
    marginTop: 4,
  },
  summaryPriceBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  summaryPrice: {
    color: "#F97316",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 4,
  },
  bookButton: {
    marginHorizontal: 16,
    backgroundColor: "#F97316",
    minHeight: 54,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  infoBox: {
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FED7AA",
    padding: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  infoText: {
    flex: 1,
    color: "#7C2D12",
    lineHeight: 20,
    fontWeight: "800",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(12, 18, 31, 0.66)",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
  },
  successModal: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 22,
    alignItems: "center",
    gap: 14,
  },
  successIconWrap: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#16A34A",
    justifyContent: "center",
    alignItems: "center",
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111827",
  },
  successSubtitle: {
    color: "#596579",
    textAlign: "center",
    fontWeight: "700",
  },
  bookingCard: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    padding: 14,
    gap: 10,
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  receiptLabel: {
    color: "#7C8698",
    fontWeight: "800",
  },
  receiptValue: {
    color: "#172033",
    fontWeight: "900",
    flex: 1,
    textAlign: "right",
  },
  totalLine: {
    borderTopWidth: 1,
    borderColor: "#D6DEE9",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  totalLabel: {
    color: "#172033",
    fontWeight: "900",
  },
  totalValue: {
    color: "#EA580C",
    fontSize: 18,
    fontWeight: "900",
  },
  doneButton: {
    width: "100%",
    backgroundColor: "#172033",
    minHeight: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
});
