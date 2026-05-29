import React, { useMemo, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const languages = ["All", "Hindi", "English", "Gujarati", "Tamil", "Telugu", "Sanskrit"];
const priceFilters = ["All Prices", "Under Rs 1200", "Rs 1200-1800", "Premium"];
const ratingFilters = ["All Ratings", "4.5+", "4.8+", "Top rated"];

const places = [
  { id: "ram-mandir", type: "Temple", name: "Ram Mandir", price: 500 },
  { id: "hanuman-garhi", type: "Temple", name: "Hanuman Garhi", price: 300 },
  { id: "kanak-bhawan", type: "Temple", name: "Kanak Bhawan", price: 350 },
  { id: "ram-ki-paidi", type: "Ghat", name: "Ram Ki Paidi", price: 200 },
  { id: "saryu-aarti", type: "Ghat", name: "Saryu Aarti", price: 250 },
  { id: "ashram-walk", type: "Ashram", name: "Ayodhya Ashram Walk", price: 300 },
];

const guides = [
  {
    id: "rajesh",
    name: "Rajesh Kumar",
    title: "Temple History & Mythology",
    languages: ["Hindi", "English", "Sanskrit"],
    bio: "Expert in Ramayana, ancient temple architecture, and meaningful darshan storytelling.",
    experience: 15,
    reviews: 234,
    rating: 4.9,
    price: 1500,
    availability: "Today, 9:00 AM - 7:00 PM",
    style: "Flexible",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    verified: true,
    specialties: ["Temple route", "Mythology", "Senior friendly"],
  },
  {
    id: "priya",
    name: "Priya Sharma",
    title: "Family Tours & Rituals",
    languages: ["Hindi", "English", "Gujarati"],
    bio: "Specialized in family pilgrimages, rituals, kid-friendly stories, and comfortable pacing.",
    experience: 10,
    reviews: 189,
    rating: 4.8,
    price: 1400,
    availability: "Today, 11:00 AM - 8:00 PM",
    style: "Flexible",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    verified: true,
    specialties: ["Family tours", "Ritual help", "Photography spots"],
  },
  {
    id: "venkatesh",
    name: "Venkatesh Reddy",
    title: "South Indian Pilgrim Support",
    languages: ["Telugu", "Hindi", "English"],
    bio: "Smooth darshan planning for Telugu families with temple stories and local coordination.",
    experience: 12,
    reviews: 176,
    rating: 4.8,
    price: 1800,
    availability: "Tomorrow, 7:00 AM - 4:00 PM",
    style: "Half day",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    verified: true,
    specialties: ["Telugu groups", "Route planning", "Food stops"],
  },
  {
    id: "meera",
    name: "Meera Iyer",
    title: "Tamil Heritage Walks",
    languages: ["Tamil", "English", "Hindi"],
    bio: "Calm, devotional walks focused on temple meaning, aarti timings, and family comfort.",
    experience: 9,
    reviews: 142,
    rating: 4.7,
    price: 1300,
    availability: "Today, 2:00 PM - 9:00 PM",
    style: "Flexible",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    verified: true,
    specialties: ["Tamil tours", "Aarti guidance", "Women groups"],
  },
  {
    id: "anand",
    name: "Anand Tiwari",
    title: "Budget Temple Companion",
    languages: ["Hindi", "Sanskrit"],
    bio: "Simple, devotional guide for first-time visitors who want clear history and quick coverage.",
    experience: 7,
    reviews: 98,
    rating: 4.5,
    price: 900,
    availability: "Today, 5:00 PM - 9:00 PM",
    style: "Hourly",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    verified: false,
    specialties: ["Budget", "Quick tour", "Sanskrit shlokas"],
  },
  {
    id: "nisha",
    name: "Nisha Patel",
    title: "Gujarati Family Darshan",
    languages: ["Gujarati", "Hindi", "English"],
    bio: "Friendly guide for Gujarati families with ritual support, shopping suggestions, and darshan flow.",
    experience: 8,
    reviews: 121,
    rating: 4.6,
    price: 1200,
    availability: "Tomorrow, 8:00 AM - 3:00 PM",
    style: "Half day",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    verified: true,
    specialties: ["Gujarati", "Ritual support", "Shopping lanes"],
  },
];

export default function GuidesScreen() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isWide = width >= 860;
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedPlaces, setSelectedPlaces] = useState(["ram-mandir", "hanuman-garhi"]);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "29-05-2026",
    time: "09:30",
    people: "4",
    notes: "",
  });

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const matchesQuery =
        query.trim().length === 0 ||
        guide.name.toLowerCase().includes(query.toLowerCase()) ||
        guide.title.toLowerCase().includes(query.toLowerCase()) ||
        guide.specialties.join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesLanguage = selectedLanguage === "All" || guide.languages.includes(selectedLanguage);
      const matchesPrice =
        selectedPrice === "All Prices" ||
        (selectedPrice === "Under Rs 1200" && guide.price < 1200) ||
        (selectedPrice === "Rs 1200-1800" && guide.price >= 1200 && guide.price <= 1800) ||
        (selectedPrice === "Premium" && guide.price > 1800);
      const matchesRating =
        selectedRating === "All Ratings" ||
        (selectedRating === "4.5+" && guide.rating >= 4.5) ||
        (selectedRating === "4.8+" && guide.rating >= 4.8) ||
        (selectedRating === "Top rated" && guide.rating >= 4.9);

      return matchesQuery && matchesLanguage && matchesPrice && matchesRating;
    });
  }, [query, selectedLanguage, selectedPrice, selectedRating]);

  const updateBooking = (key, value) => {
    setBooking((current) => ({ ...current, [key]: value }));
  };

  const openBooking = (guide) => {
    setSelectedGuide(guide);
    setSelectedPlaces(["ram-mandir", "hanuman-garhi"]);
  };

  const togglePlace = (placeId) => {
    setSelectedPlaces((current) =>
      current.includes(placeId) ? current.filter((id) => id !== placeId) : [...current, placeId]
    );
  };

  const selectedPlaceTotal = places
    .filter((place) => selectedPlaces.includes(place.id))
    .reduce((total, place) => total + place.price, 0);
  const peopleCount = Number.parseInt(booking.people, 10) || 1;
  const guideFee = selectedGuide ? selectedGuide.price : 0;
  const groupFee = Math.max(0, peopleCount - 4) * 150;
  const payable = guideFee + selectedPlaceTotal + groupFee;

  const confirmBooking = () => {
    if (!selectedGuide) {
      return;
    }

    setReceiptData({
      bookingId: `AYO-GUIDE-${Date.now().toString().slice(-6)}`,
      guide: selectedGuide.name,
      language: selectedGuide.languages.join(", "),
      date: `${booking.date}, ${booking.time}`,
      people: `${peopleCount} pilgrims`,
      places: places
        .filter((place) => selectedPlaces.includes(place.id))
        .map((place) => place.name)
        .join(", "),
      amount: payable,
    });
    setSelectedGuide(null);
    setReceiptVisible(true);
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
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.heroCopy}>
            <Text style={styles.heroTitle}>Book a Guide</Text>
            <Text style={styles.heroSub}>Find your spiritual companion</Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={22} color="#667085" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search guide, language, speciality"
            placeholderTextColor="#667085"
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.languageRow}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              style={[styles.languageChip, selectedLanguage === language && styles.languageChipActive]}
              onPress={() => setSelectedLanguage(language)}
            >
              <Text style={[styles.languageText, selectedLanguage === language && styles.languageTextActive]}>
                {language}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterGrid}>
        <FilterStrip items={priceFilters} selected={selectedPrice} onSelect={setSelectedPrice} icon="cash-outline" />
        <FilterStrip items={ratingFilters} selected={selectedRating} onSelect={setSelectedRating} icon="star-outline" />
      </View>

      <View style={styles.resultHeader}>
        <View>
          <Text style={styles.resultTitle}>{filteredGuides.length} verified guides</Text>
          <Text style={styles.resultSub}>Language, route pricing, ratings, and availability in one place.</Text>
        </View>
        <View style={styles.verifiedPill}>
          <Ionicons name="shield-checkmark" size={15} color="#0F766E" />
          <Text style={styles.verifiedText}>ID checked</Text>
        </View>
      </View>

      <View style={[styles.guideGrid, isWide && styles.guideGridWide]}>
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} onBook={() => openBooking(guide)} isWide={isWide} />
        ))}
      </View>

      <View style={styles.supportPanel}>
        <Text style={styles.supportTitle}>Guide booking support</Text>
        <View style={styles.supportGrid}>
          <SupportCard icon="language-outline" title="Language match" text="Choose guides by Hindi, English, Gujarati, Tamil, Telugu, or Sanskrit." />
          <SupportCard icon="map-outline" title="Place pricing" text="Select temples, ghats, and ashrams with transparent add-on pricing." />
          <SupportCard icon="call-outline" title="Call before booking" text="Talk to the guide before confirming your route and time." />
          <SupportCard icon="people-outline" title="Group friendly" text="Family and senior citizen support can be requested while booking." />
        </View>
      </View>

      <BookingModal
        visible={Boolean(selectedGuide)}
        guide={selectedGuide}
        booking={booking}
        updateBooking={updateBooking}
        selectedPlaces={selectedPlaces}
        togglePlace={togglePlace}
        selectedPlaceTotal={selectedPlaceTotal}
        groupFee={groupFee}
        payable={payable}
        onClose={() => setSelectedGuide(null)}
        onConfirm={confirmBooking}
      />

      <ReceiptModal visible={receiptVisible} data={receiptData} onClose={() => setReceiptVisible(false)} />
    </ScrollView>
  );
}

function FilterStrip({ items, selected, onSelect, icon }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stripContent}>
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.filterChip, selected === item && styles.filterChipActive]}
          onPress={() => onSelect(item)}
        >
          <Ionicons name={icon} size={15} color={selected === item ? "#FFFFFF" : "#7C2D12"} />
          <Text style={[styles.filterChipText, selected === item && styles.filterChipTextActive]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function GuideCard({ guide, onBook, isWide }) {
  return (
    <View style={[styles.guideCard, isWide && styles.guideCardWide]}>
      <View style={styles.cardTop}>
        <Image source={{ uri: guide.image }} style={styles.avatar} />
        <View style={styles.guideInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.guideName}>{guide.name}</Text>
            {guide.verified ? <Ionicons name="checkmark-circle" size={17} color="#0F766E" /> : null}
          </View>
          <Text style={styles.guideTitle}>{guide.title}</Text>
          <View style={styles.languagePill}>
            <Text style={styles.languagePillText}>{guide.languages.join(", ")}</Text>
          </View>
          <Text style={styles.bio}>{guide.bio}</Text>
        </View>
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={14} color="#F59E0B" />
          <Text style={styles.ratingText}>{guide.rating}</Text>
        </View>
      </View>

      <View style={styles.specialtyRow}>
        {guide.specialties.map((item) => (
          <View key={item} style={styles.specialtyChip}>
            <Text style={styles.specialtyText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.statsRow}>
        <Stat value={`${guide.experience} years`} label="Experience" />
        <Stat value={`${guide.reviews}`} label="Reviews" />
        <Stat value={guide.style} label="Pricing" />
      </View>

      <View style={styles.availabilityRow}>
        <Ionicons name="calendar-outline" size={16} color="#0F766E" />
        <Text style={styles.availabilityText}>{guide.availability}</Text>
        <Text style={styles.priceText}>Rs {guide.price}</Text>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call-outline" size={17} color="#C2410C" />
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton} onPress={onBook}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Stat({ value, label }) {
  return (
    <View style={styles.statBlock}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function BookingModal({
  visible,
  guide,
  booking,
  updateBooking,
  selectedPlaces,
  togglePlace,
  selectedPlaceTotal,
  groupFee,
  payable,
  onClose,
  onConfirm,
}) {
  const [placesOpen, setPlacesOpen] = useState(false);

  if (!guide) {
    return null;
  }

  const selectedPlaceNames = places
    .filter((place) => selectedPlaces.includes(place.id))
    .map((place) => place.name);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.bookingSheet}>
          <View style={styles.sheetHeader}>
            <Image source={{ uri: guide.image }} style={styles.sheetAvatar} />
            <View style={styles.sheetTitleBox}>
              <Text style={styles.sheetTitle}>{guide.name}</Text>
              <Text style={styles.sheetSub}>{guide.title}</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={22} color="#F97316" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.sheetContent} showsVerticalScrollIndicator={false}>
            <SheetInput label="Your Name" value={booking.name} onChangeText={(value) => updateBooking("name", value)} />
            <SheetInput label="Phone Number" value={booking.phone} onChangeText={(value) => updateBooking("phone", value)} keyboardType="phone-pad" />
            <View style={styles.formGrid}>
              <SheetInput label="Date" value={booking.date} onChangeText={(value) => updateBooking("date", value)} icon="calendar-outline" />
              <SheetInput label="Time" value={booking.time} onChangeText={(value) => updateBooking("time", value)} icon="time-outline" />
              <SheetInput label="No of People" value={booking.people} onChangeText={(value) => updateBooking("people", value)} keyboardType="numeric" />
            </View>

            <Text style={styles.placeTitle}>Select spiritual places</Text>
            <TouchableOpacity style={styles.placeDropdown} onPress={() => setPlacesOpen(!placesOpen)}>
              <View style={styles.placeDropdownCopy}>
                <Text style={styles.placeDropdownLabel}>Choose Temple / Ghat / Ashram</Text>
                <Text style={styles.placeDropdownValue} numberOfLines={1}>
                  {selectedPlaceNames.length > 0 ? selectedPlaceNames.join(", ") : "No places selected"}
                </Text>
              </View>
              <Ionicons name={placesOpen ? "chevron-up" : "chevron-down"} size={20} color="#7C2D12" />
            </TouchableOpacity>

            {placesOpen ? (
              <View style={styles.placeList}>
                {places.map((place) => {
                  const active = selectedPlaces.includes(place.id);
                  return (
                    <TouchableOpacity key={place.id} style={styles.placeRow} onPress={() => togglePlace(place.id)}>
                      <Ionicons name={active ? "checkbox" : "square-outline"} size={21} color={active ? "#F97316" : "#7C8698"} />
                      <Text style={styles.placeType}>[{place.type}]</Text>
                      <Text style={styles.placeName}>{place.name}</Text>
                      <Text style={styles.placePrice}>Rs {place.price}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            <SheetInput
              label="Special Notes"
              value={booking.notes}
              onChangeText={(value) => updateBooking("notes", value)}
              placeholder="Senior citizen support, ritual help, preferred pace..."
            />

            <View style={styles.billBox}>
              <Text style={styles.billTitle}>Price summary</Text>
              <BillLine label="Guide fee" value={`Rs ${guide.price}`} />
              <BillLine label="Selected places" value={`Rs ${selectedPlaceTotal}`} />
              <BillLine label="Extra group support" value={`Rs ${groupFee}`} />
              <View style={styles.totalLine}>
                <Text style={styles.totalLabel}>Payable amount</Text>
                <Text style={styles.totalValue}>Rs {payable}</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.sheetFooter}>
            <View>
              <Text style={styles.footerLabel}>Total</Text>
              <Text style={styles.footerPrice}>Rs {payable}</Text>
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function SheetInput({ label, value, onChangeText, icon, keyboardType, placeholder }) {
  return (
    <View style={styles.inputField}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputShell}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder || label}
          placeholderTextColor="#7C8698"
          style={styles.sheetInput}
        />
        {icon ? <Ionicons name={icon} size={18} color="#253044" /> : null}
      </View>
    </View>
  );
}

function BillLine({ label, value }) {
  return (
    <View style={styles.billLine}>
      <Text style={styles.billLabel}>{label}</Text>
      <Text style={styles.billValue}>{value}</Text>
    </View>
  );
}

function SupportCard({ icon, title, text }) {
  return (
    <View style={styles.supportCard}>
      <View style={styles.supportIcon}>
        <Ionicons name={icon} size={18} color="#0F766E" />
      </View>
      <Text style={styles.supportCardTitle}>{title}</Text>
      <Text style={styles.supportCardText}>{text}</Text>
    </View>
  );
}

function ReceiptModal({ visible, data, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.receiptModal}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={42} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Guide Booked</Text>
          <Text style={styles.successSub}>Your spiritual companion is confirmed.</Text>

          <View style={styles.receiptCard}>
            <ReceiptLine label="Booking ID" value={data?.bookingId} />
            <ReceiptLine label="Guide" value={data?.guide} />
            <ReceiptLine label="Languages" value={data?.language} />
            <ReceiptLine label="Date" value={data?.date} />
            <ReceiptLine label="People" value={data?.people} />
            <ReceiptLine label="Places" value={data?.places} />
            <View style={styles.receiptTotalLine}>
              <Text style={styles.receiptTotalLabel}>Amount</Text>
              <Text style={styles.receiptTotalValue}>Rs {data?.amount}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.doneButton} onPress={onClose}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
  backButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 6,
  },
  searchBox: {
    minHeight: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  searchInput: {
    flex: 1,
    color: "#172033",
    fontSize: 16,
    fontWeight: "800",
    padding: 0,
  },
  languageRow: {
    gap: 10,
    paddingRight: 16,
  },
  languageChip: {
    backgroundColor: "rgba(255,255,255,0.24)",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  languageChipActive: {
    backgroundColor: "#FFFFFF",
  },
  languageText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  languageTextActive: {
    color: "#C2410C",
  },
  filterGrid: {
    paddingHorizontal: 16,
    gap: 10,
  },
  stripContent: {
    gap: 10,
    paddingRight: 16,
  },
  filterChip: {
    minHeight: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FED7AA",
    borderRadius: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  filterChipActive: {
    backgroundColor: "#172033",
    borderColor: "#172033",
  },
  filterChipText: {
    color: "#7C2D12",
    fontWeight: "900",
  },
  filterChipTextActive: {
    color: "#FFFFFF",
  },
  resultHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  resultTitle: {
    color: "#3E1908",
    fontSize: 19,
    fontWeight: "900",
  },
  resultSub: {
    color: "#8A5A3D",
    fontWeight: "700",
    marginTop: 3,
    maxWidth: 520,
  },
  verifiedPill: {
    backgroundColor: "#ECFDF5",
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  verifiedText: {
    color: "#0F766E",
    fontSize: 12,
    fontWeight: "900",
  },
  guideGrid: {
    paddingHorizontal: 16,
    gap: 18,
  },
  guideGridWide: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  guideCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#FFE1C2",
  },
  guideCardWide: {
    width: "48.7%",
  },
  cardTop: {
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 8,
    backgroundColor: "#FFE1C2",
  },
  guideInfo: {
    flex: 1,
    gap: 7,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  guideName: {
    color: "#7C2D12",
    fontSize: 20,
    fontWeight: "900",
  },
  guideTitle: {
    color: "#777777",
    fontWeight: "800",
  },
  languagePill: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF1E8",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  languagePillText: {
    color: "#EA580C",
    fontSize: 12,
    fontWeight: "900",
  },
  bio: {
    color: "#777777",
    lineHeight: 20,
    fontWeight: "700",
  },
  ratingBox: {
    backgroundColor: "#FEF3C7",
    borderRadius: 18,
    minWidth: 64,
    minHeight: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  ratingText: {
    color: "#3E1908",
    fontWeight: "900",
  },
  specialtyRow: {
    paddingHorizontal: 16,
    paddingBottom: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  specialtyChip: {
    backgroundColor: "#FFF7ED",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  specialtyText: {
    color: "#9A3412",
    fontSize: 12,
    fontWeight: "900",
  },
  statsRow: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#FFE1C2",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  statBlock: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  statValue: {
    color: "#EA580C",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
  },
  statLabel: {
    color: "#777777",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
  },
  availabilityRow: {
    paddingHorizontal: 16,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  availabilityText: {
    color: "#0F766E",
    flex: 1,
    fontWeight: "900",
  },
  priceText: {
    color: "#EA580C",
    fontWeight: "900",
  },
  actionRow: {
    padding: 16,
    flexDirection: "row",
    gap: 12,
  },
  callButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 8,
    backgroundColor: "#F7EEE8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  callText: {
    color: "#C2410C",
    fontWeight: "900",
  },
  bookButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FED7AA",
    alignItems: "center",
    justifyContent: "center",
  },
  bookButtonText: {
    color: "#172033",
    fontWeight: "900",
  },
  supportPanel: {
    marginHorizontal: 16,
    backgroundColor: "#172033",
    borderRadius: 8,
    padding: 16,
    gap: 14,
  },
  supportTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },
  supportGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  supportCard: {
    flexGrow: 1,
    flexBasis: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 13,
    gap: 8,
  },
  supportIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#CCFBF1",
    alignItems: "center",
    justifyContent: "center",
  },
  supportCardTitle: {
    color: "#172033",
    fontWeight: "900",
  },
  supportCardText: {
    color: "#596579",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(12, 18, 31, 0.66)",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  bookingSheet: {
    width: "100%",
    maxWidth: 640,
    maxHeight: "92%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
    borderRightWidth: 6,
    borderRightColor: "#F59E0B",
  },
  sheetHeader: {
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderBottomWidth: 1,
    borderColor: "#E3E8F0",
  },
  sheetAvatar: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: "#FFE1C2",
  },
  sheetTitleBox: {
    flex: 1,
  },
  sheetTitle: {
    color: "#7C2D12",
    fontSize: 22,
    fontWeight: "900",
  },
  sheetSub: {
    color: "#777777",
    fontWeight: "800",
    marginTop: 5,
  },
  closeButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#172033",
    alignItems: "center",
    justifyContent: "center",
  },
  sheetContent: {
    padding: 18,
    gap: 12,
  },
  formGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  inputField: {
    flexGrow: 1,
    flexBasis: 180,
    gap: 7,
  },
  inputLabel: {
    color: "#7C2D12",
    fontWeight: "900",
  },
  inputShell: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: "#D6DEE9",
    borderRadius: 8,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetInput: {
    flex: 1,
    color: "#172033",
    fontSize: 15,
    fontWeight: "800",
    padding: 0,
  },
  placeTitle: {
    color: "#7C2D12",
    fontWeight: "900",
    fontSize: 16,
    marginTop: 4,
  },
  placeDropdown: {
    minHeight: 62,
    borderWidth: 1,
    borderColor: "#F97316",
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  placeDropdownCopy: {
    flex: 1,
    gap: 4,
  },
  placeDropdownLabel: {
    color: "#7C2D12",
    fontSize: 12,
    fontWeight: "900",
  },
  placeDropdownValue: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "800",
  },
  placeList: {
    borderWidth: 1,
    borderColor: "#FED7AA",
    borderRadius: 8,
    overflow: "hidden",
  },
  placeRow: {
    minHeight: 48,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 1,
    borderColor: "#FFF1E8",
  },
  placeType: {
    color: "#EA580C",
    fontWeight: "900",
  },
  placeName: {
    flex: 1,
    color: "#7C2D12",
    fontWeight: "800",
  },
  placePrice: {
    color: "#777777",
    fontWeight: "900",
  },
  billBox: {
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    padding: 13,
    gap: 10,
  },
  billTitle: {
    color: "#172033",
    fontWeight: "900",
    fontSize: 16,
  },
  billLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  billLabel: {
    color: "#596579",
    fontWeight: "800",
  },
  billValue: {
    color: "#172033",
    fontWeight: "900",
  },
  totalLine: {
    borderTopWidth: 1,
    borderColor: "#FED7AA",
    paddingTop: 10,
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
  sheetFooter: {
    borderTopWidth: 1,
    borderColor: "#E3E8F0",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  footerLabel: {
    color: "#777777",
    fontWeight: "800",
    fontSize: 12,
  },
  footerPrice: {
    color: "#EA580C",
    fontSize: 22,
    fontWeight: "900",
  },
  confirmButton: {
    backgroundColor: "#F97316",
    borderRadius: 8,
    paddingHorizontal: 18,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  receiptModal: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 22,
    alignItems: "center",
    gap: 14,
  },
  successCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
  },
  successSub: {
    color: "#596579",
    textAlign: "center",
    fontWeight: "700",
  },
  receiptCard: {
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
  receiptTotalLine: {
    borderTopWidth: 1,
    borderColor: "#D6DEE9",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  receiptTotalLabel: {
    color: "#172033",
    fontWeight: "900",
  },
  receiptTotalValue: {
    color: "#EA580C",
    fontSize: 18,
    fontWeight: "900",
  },
  doneButton: {
    width: "100%",
    minHeight: 50,
    backgroundColor: "#172033",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  doneText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
});
