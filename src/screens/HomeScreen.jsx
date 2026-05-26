import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  TextInput,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [donationVisible, setDonationVisible] = useState(false);
const [donationSuccessVisible, setDonationSuccessVisible] = useState(false);
const [selectedDonation, setSelectedDonation] = useState(null);

const [donationForm, setDonationForm] = useState({
  name: "",
  mobile: "",
  amount: "",
  purpose: "",
  temple: "",
});
const donations = [
  {
    title: "Temple Seva",
    icon: "business",
    amount: "501",
    description: "Offer seva to temple rituals",
  },
  {
    title: "Annadanam",
    icon: "restaurant",
    amount: "1001",
    description: "Sponsor sacred meals for pilgrims",
  },
  {
    title: "Charity Support",
    icon: "heart",
    amount: "751",
    description: "Support needy devotees",
  },
  {
    title: "Ashram Support",
    icon: "home",
    amount: "1501",
    description: "Contribute to spiritual shelters",
  },
  {
    title: "Gau Seva",
    icon: "paw",
    amount: "901",
    description: "Cow feeding & care donation",
  },
  {
    title: "Pilgrim Welfare",
    icon: "people",
    amount: "1201",
    description: "Support yatra assistance",
  },
];

 const stats = [
  {
    value: "6",
    label: "Pilgrimages",
    icon: "library",
    screen: "Temples",
  },
  {
    value: "4",
    label: "Aarti Slots",
    icon: "flame",
    screen: "AartiSlots",
  },
  {
    value: "16",
    label: "Cottages Left",
    icon: "bed",
    screen: "RoomDetails",
  },
  {
    value: "8",
    label: "Tourist Guides",
    icon: "people",
    screen: "GuideDetails",
  },
  {
    value: "12+",
    label: "Ghats",
    icon: "library",
    screen: "Ghats",
  },
  {
    value: "25+",
    label: "Charity",
    icon: "heart",
    screen: "Charity",
  },
  {
    value: "8+",
    label: "Kunds",
    icon: "home",
    screen: "Kunds",
  },
  {
    value: "15+",
    label: "Bhawans",
    icon: "business",
    screen: "Bhawans",
  },
  {
    value: "20+",
    label: "Ashrams",
    icon: "home",
    screen: "Ashrams",
  },
];


  const services = [
   {
  title: "Darshan Pass",
  caption: "Temple visit slot",
  icon: "ticket",
  screen: "DarshanBooking",
},
    {
      title: "Travel",
      caption: "Vehicle allocation",
      icon: "car",
      screen: "Vehicles",
    },
    {
      title: "Payments",
      caption: "Receipts and dues",
      icon: "card",
      screen: "Payments",
    },
    {
      title: "Devotional",
      caption: "Audio and video",
      icon: "book",
      screen: "DevotionalContent",
    },
  ];

  const menuItems = [
    { title: "Guides", icon: "people", screen: "Guides" },
    { title: "Rooms", icon: "bed", screen: "Rooms" },
    { title: "Vehicles", icon: "car", screen: "Vehicles" },
    { title: "Payments", icon: "card", screen: "Payments" },
    { title: "Travel History", icon: "time", screen: "TravelHistory" },
    { title: "Devotional Content", icon: "book", screen: "DevotionalContent" },
    { title: "Map", icon: "map", screen: "Map" },
    { title: "News", icon: "newspaper", screen: "News" },
  ];

  const darshanTimings = [
    { temple: "Ram Janmabhoomi", time: "6:00 AM - 10:00 PM" },
    { temple: "Hanuman Garhi", time: "5:00 AM - 10:00 PM" },
    { temple: "Kanak Bhawan", time: "8:00 AM - 9:00 PM" },
  ];

  // const attractions = [
  //   { title: 'Ram Janmabhoomi', text: 'Main darshan route and crowd alerts.', icon: 'business', screen: 'Map' },
  //   { title: 'Saryu Ghat Aarti', text: 'Evening riverfront devotional visit.', icon: 'water', screen: 'Map' },
  //   { title: 'Kanak Bhawan', text: 'Heritage temple near the inner city.', icon: 'home', screen: 'Map' },
  // ];
  const attractions = [
    {
      title: "Ram Janmabhoomi",
      text: "Main darshan route and crowd alerts.",
      image: require("../../assets/rambhoomi.jpeg"),
      screen: "Map",
    },
    {
      title: "Saryu Ghat Aarti",
      text: "Evening riverfront devotional visit.",
      image: require("../../assets/5.jpg"),
      screen: "Map",
    },
    {
      title: "Kanak Bhawan",
      text: "Heritage temple near the inner city.",
      image: require("../../assets/3.jpg"),
      screen: "Map",
    },
  ];

  const events = [
    { title: "Ram Navami Ceremony", date: "17 Apr 2026", icon: "calendar" },
    { title: "Deepotsav Aarti", date: "20 Oct 2026", icon: "sparkles" },
  ];

  const info = [
    { label: "Helpline", value: "1076" },
    { label: "Police", value: "112" },
    { label: "Ambulance", value: "108" },
    // { label: "Temple", value: "5 AM+" },
  ];

  const devotionalHighlights = [
    {
      title: "Rama Nama Keerthana",
      meta: "MP3 - 18 min",
      icon: "musical-note",
    },
    {
      title: "Live Saryu Aarti",
      meta: "Video stream - 6:30 PM",
      icon: "play-circle",
    },
  ];

  const openBooking = () => {
    navigation.navigate("DarshanBooking");
  };

  const openService = (item) => {
  navigation.navigate(item.screen);
};

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.brandMini}>Ayodhya Dham</Text>
            <Text style={styles.brandTitle}>Pilgrim Dashboard</Text>
          </View>

          <TouchableOpacity
            style={styles.menuButton}
            activeOpacity={0.8}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu" size={28} color="#C94B13" />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroBadge}>
            <Ionicons name="flame" size={14} color="#fff" />
            <Text style={styles.heroBadgeText}>Jai Shri Ram</Text>
          </View>

          <Text style={styles.heroTitle}>
            Your Ayodhya journey, beautifully planned
          </Text>
          <Text style={styles.heroText}>
            Darshan, guides, cottages, vehicles, devotional content, maps,
            events, and support in one warm mobile experience.
          </Text>

          <View style={styles.heroActions}>
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.86}
              onPress={openBooking}
            >
              <Ionicons name="ticket" size={18} color="#fff" />
              <Text style={styles.primaryButtonText}>Book Darshan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.86}
              onPress={() => navigation.navigate("AI Assistant")}
            >
              <Ionicons name="sparkles" size={18} color="#C94B13" />
              <Text style={styles.secondaryButtonText}>Ask AI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          {stats.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.statCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Ionicons name={item.icon} size={18} color="#D35400" />
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.supportCard}>
          <Ionicons name="heart" size={22} color="#E6531B" />
          <View style={styles.supportCopy}>
            <Text style={styles.supportTitle}>Need help during yatra?</Text>
            <Text style={styles.supportText}>
              Use AI guidance, emergency info, maps, and booking support
              anytime.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={() => navigation.navigate("AI Assistant")}
          >
            <Text style={styles.supportButtonText}>Help</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <TouchableOpacity onPress={() => navigation.navigate("DarshanBooking")}>
            <Text style={styles.sectionLink}>Bookings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {services.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.serviceCard}
              activeOpacity={0.85}
              onPress={() => openService(item)}
            >
              <View style={styles.serviceIcon}>
                <Ionicons name={item.icon} size={23} color="#D35400" />
              </View>
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.serviceText}>{item.caption}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Sacred Donations</Text>

<View style={styles.grid}>
  {donations.map((item) => (
    <TouchableOpacity
      key={item.title}
      style={styles.donationCard}
      activeOpacity={0.9}
      onPress={() => {
        setSelectedDonation(item);
        setDonationForm({
          ...donationForm,
          amount: item.amount,
          purpose: item.title,
        });
        setDonationVisible(true);
      }}
    >
      <View style={styles.donationIcon}>
        <Ionicons name={item.icon} size={24} color="#D35400" />
      </View>

      <Text style={styles.donationTitle}>{item.title}</Text>
      <Text style={styles.donationText}>{item.description}</Text>

      <View style={styles.amountBadge}>
        <Text style={styles.amountBadgeText}>₹{item.amount}</Text>
      </View>
    </TouchableOpacity>
  ))}
</View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Darshan Timings</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Aarti")}>
            <Text style={styles.sectionLink}>Aarti</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timingCard}>
          {darshanTimings.map((item) => (
            <View key={item.temple} style={styles.timingRow}>
              <View style={styles.timingIcon}>
                <Ionicons name="time" size={16} color="#D35400" />
              </View>
              <Text style={styles.timingTemple}>{item.temple}</Text>
              <Text style={styles.timingValue}>{item.time}</Text>
            </View>
          ))}
        </View>

        <View style={styles.featureBand}>
          <View style={styles.featureBlock}>
            <Text style={styles.featureTitle}>AI Room Match</Text>
            <Text style={styles.featureText}>
              Budget, family size, duration, luxury preference, and temple
              distance.
            </Text>
            <TouchableOpacity
              style={styles.featureButton}
              onPress={() => navigation.navigate("Rooms")}
            >
              <Text style={styles.featureButtonText}>Find Rooms</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.featureBlock}>
            <Text style={styles.featureTitle}>Smart Transport</Text>
            <Text style={styles.featureText}>
              Vehicle registration, drivers, dynamic pricing, GPS, ETA, and SOS.
            </Text>
            <TouchableOpacity
              style={styles.featureButton}
              onPress={() => navigation.navigate("Vehicles")}
            >
              <Text style={styles.featureButtonText}>Manage</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Attractions</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Temples")}>
            <Text style={styles.sectionLink}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.attractionsContainer}
        >
          {attractions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={item.image} style={styles.cardImage} />

              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Upcoming Festivals</Text>
        <View style={styles.eventList}>
          {events.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.eventCard}
              onPress={() => navigation.navigate("News")}
            >
              <View style={styles.eventIcon}>
                <Ionicons name={item.icon} size={20} color="#D35400" />
              </View>
              <View style={styles.eventCopy}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDate}>{item.date}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#C94B13" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Daily Devotional</Text>
        <View style={styles.devotionalPanel}>
          {devotionalHighlights.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.devotionalItem}
              activeOpacity={0.85}
              onPress={() => navigation.navigate("DevotionalContent")}
            >
              <View style={styles.devotionalIcon}>
                <Ionicons name={item.icon} size={22} color="#D35400" />
              </View>
              <View style={styles.devotionalCopy}>
                <Text style={styles.devotionalTitle}>{item.title}</Text>
                <Text style={styles.devotionalMeta}>{item.meta}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#C94B13" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Important Information</Text>
        <View style={styles.infoPanel}>
          {info.map((item) => (
            <View key={item.label} style={styles.infoChip}>
              <Text style={styles.infoValue}>{item.value}</Text>
              <Text style={styles.infoLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
  visible={donationVisible}
  transparent
  animationType="slide"
>
  <View style={styles.popupOverlay}>
    <View style={styles.donationPopup}>
      <TouchableOpacity
        style={styles.popupClose}
        onPress={() => setDonationVisible(false)}
      >
        <Ionicons name="close" size={24} color="#3E1908" />
      </TouchableOpacity>

      <Text style={styles.popupTitle}>
        {selectedDonation?.title}
      </Text>

      <Text style={styles.popupSubtitle}>
        Offer your sacred contribution
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={donationForm.name}
          onChangeText={(text) =>
            setDonationForm({ ...donationForm, name: text })
          }
        />

        <TextInput
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          style={styles.input}
          value={donationForm.mobile}
          onChangeText={(text) =>
            setDonationForm({ ...donationForm, mobile: text })
          }
        />

        <TextInput
          placeholder="Temple / Organization"
          style={styles.input}
          value={donationForm.temple}
          onChangeText={(text) =>
            setDonationForm({ ...donationForm, temple: text })
          }
        />

        <TextInput
          placeholder="Amount"
          keyboardType="numeric"
          style={styles.input}
          value={donationForm.amount}
          onChangeText={(text) =>
            setDonationForm({ ...donationForm, amount: text })
          }
        />

        <TextInput
          placeholder="Purpose / Message"
          multiline
          style={styles.textArea}
          value={donationForm.purpose}
          onChangeText={(text) =>
            setDonationForm({ ...donationForm, purpose: text })
          }
        />

        <TouchableOpacity
          style={styles.donateButton}
          onPress={() => {
            setDonationVisible(false);
            setDonationSuccessVisible(true);
          }}
        >
          <Text style={styles.donateButtonText}>
            Donate Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
</Modal>
<Modal
  visible={donationSuccessVisible}
  transparent
  animationType="fade"
>
  <View style={styles.popupOverlay}>
    <View style={styles.successPopup}>
      <Ionicons
        name="checkmark-circle"
        size={85}
        color="#22C55E"
      />

      <Text style={styles.successTitle}>
        Donation Successful
      </Text>

      <Text style={styles.successBlessing}>
        May Lord Rama bless your seva
      </Text>

      <View style={styles.receiptCard}>
        <Text style={styles.receiptText}>
          Receipt ID: DON-{Math.floor(Math.random() * 999999)}
        </Text>
        <Text style={styles.receiptText}>
          Type: {selectedDonation?.title}
        </Text>
        <Text style={styles.receiptText}>
          Amount: ₹{donationForm.amount}
        </Text>
        <Text style={styles.receiptText}>
          Donor: {donationForm.name}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => setDonationSuccessVisible(false)}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalScrim}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          />
          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View>
                <Text style={styles.drawerTitle}>Ayodhya Dham</Text>
                <Text style={styles.drawerSubtitle}>Pilgrim menu</Text>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setMenuVisible(false)}
              >
                <Ionicons name="close" size={24} color="#3E1908" />
              </TouchableOpacity>
            </View>

            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.screen}
                style={styles.menuItem}
                activeOpacity={0.8}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate(item.screen);
                }}
              >
                <View style={styles.menuIcon}>
                  <Ionicons name={item.icon} size={21} color="#C94B13" />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
                <Ionicons name="chevron-forward" size={18} color="#8C6A49" />
              </TouchableOpacity>
            ))}
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
  container: {
    flex: 1,
  },
avatarCircle: {
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: '#FFE2C9',
  justifyContent: 'center',
  alignItems: 'center',
},

leaderImage: {
  width: 84,
  height: 84,
  borderRadius: 42,
},
  content: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 36,
    gap: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandMini: {
    color: "#C94B13",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  brandTitle: {
    color: "#3E1908",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 3,
  },
  menuButton: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "#FFF9F2",
    borderWidth: 1,
    borderColor: "#F4B37F",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    backgroundColor: "#D76424",
    borderRadius: 28,
    padding: 22,
    gap: 13,
    borderWidth: 1,
    borderColor: "#F7A45E",
  },
  heroBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  heroBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 29,
    fontWeight: "900",
    lineHeight: 35,
  },
  heroText: {
    color: "#FFEEDC",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
  },
  heroActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#8B2D08",
    borderRadius: 16,
    paddingVertical: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "900",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#FFF7EF",
    borderRadius: 16,
    paddingVertical: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  secondaryButtonText: {
    color: "#C94B13",
    fontWeight: "900",
  },
 statsRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 10,
},
 statCard: {
  width: "31%",
  backgroundColor: "#FFF9F2",
  borderRadius: 18,
  paddingVertical: 14,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#F4CAAA",
},
  statValue: {
    color: "#C94B13",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4,
  },
  statLabel: {
    color: "#70412A",
    fontSize: 10,
    fontWeight: "800",
    marginTop: 2,
  },
  inspirationWrap: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "#9E3A10",
    fontSize: 19,
    fontWeight: "900",
  },
  sectionLink: {
    color: "#D35400",
    fontWeight: "900",
  },
  inspirationRow: {
    flexDirection: "row",
    gap: 12,
  },
  inspirationCard: {
    flex: 1,
    backgroundColor: "#FFF9F2",
    borderRadius: 22,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F4CAAA",
  },
  avatarCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  inspirationName: {
    color: "#3E1908",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
  },
  inspirationText: {
    color: "#8A5A3D",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },
  supportCard: {
    backgroundColor: "#FFF9F2",
    borderWidth: 1,
    borderColor: "#F18E48",
    borderRadius: 22,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  supportCopy: {
    flex: 1,
  },
  supportTitle: {
    color: "#3E1908",
    fontWeight: "900",
  },
  supportText: {
    color: "#8A5A3D",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
    fontWeight: "700",
  },
  supportButton: {
    backgroundColor: "#E6531B",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  supportButtonText: {
    color: "#fff",
    fontWeight: "900",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  serviceCard: {
    width: "48%",
    minHeight: 128,
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    padding: 14,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F4CAAA",
  },
  serviceIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceTitle: {
    color: "#3E1908",
    fontSize: 16,
    fontWeight: "900",
  },
  serviceText: {
    color: "#8A5A3D",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
  },
  timingCard: {
    backgroundColor: "#FFF9F2",
    borderRadius: 22,
    padding: 15,
    borderWidth: 1,
    borderColor: "#F4CAAA",
    gap: 12,
  },
  timingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timingIcon: {
    width: 34,
    height: 34,
    borderRadius: 13,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  timingTemple: {
    flex: 1,
    color: "#3E1908",
    fontWeight: "900",
  },
  timingValue: {
    color: "#C94B13",
    fontSize: 12,
    fontWeight: "900",
    width: 116,
    textAlign: "right",
  },
  featureBand: {
    gap: 12,
  },
  featureBlock: {
    backgroundColor: "#3E1908",
    borderRadius: 22,
    padding: 17,
  },
  featureTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  featureText: {
    color: "#F6D7C0",
    lineHeight: 20,
    marginTop: 7,
    fontWeight: "700",
  },
  featureButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FFB300",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 13,
  },
  featureButtonText: {
    color: "#3E1908",
    fontWeight: "900",
  },
  devotionalPanel: {
    backgroundColor: "#FFF9F2",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#F4CAAA",
    padding: 12,
    gap: 10,
  },
  devotionalItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    backgroundColor: "#FFF1E4",
    borderRadius: 16,
    padding: 12,
  },
  devotionalIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  devotionalCopy: {
    flex: 1,
  },
  devotionalTitle: {
    color: "#3E1908",
    fontWeight: "900",
  },
  devotionalMeta: {
    color: "#8A5A3D",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 3,
  },
  attractionRow: {
    gap: 12,
    paddingRight: 10,
  },
  attractionCard: {
    width: 220,
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F4CAAA",
  },
  attractionImage: {
    height: 104,
    backgroundColor: "#D76424",
    justifyContent: "center",
    alignItems: "center",
  },
  attractionTitle: {
    color: "#3E1908",
    fontSize: 15,
    fontWeight: "900",
    paddingHorizontal: 13,
    paddingTop: 12,
  },
  attractionText: {
    color: "#8A5A3D",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "700",
    paddingHorizontal: 13,
    paddingTop: 5,
    paddingBottom: 13,
  },
  eventList: {
    gap: 10,
  },
  eventCard: {
    backgroundColor: "#FFF9F2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F4CAAA",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  eventIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  eventCopy: {
    flex: 1,
  },
  eventTitle: {
    color: "#3E1908",
    fontWeight: "900",
  },
  eventDate: {
    color: "#8A5A3D",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 3,
  },
  infoPanel: {
    backgroundColor: "#D8C5B8",
    borderRadius: 22,
    padding: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  infoChip: {
    backgroundColor: "#FFF9F2",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    minWidth: 78,
    alignItems: "center",
  },
  infoValue: {
    color: "#C94B13",
    fontWeight: "900",
  },
  infoLabel: {
    color: "#70412A",
    fontSize: 10,
    fontWeight: "800",
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  modalScrim: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.52)",
  },
  drawer: {
    width: "78%",
    backgroundColor: "#FFF9F2",
    paddingTop: 58,
    paddingHorizontal: 18,
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  drawerTitle: {
    color: "#3E1908",
    fontSize: 24,
    fontWeight: "900",
  },
  drawerSubtitle: {
    color: "#8A5A3D",
    marginTop: 3,
    fontWeight: "700",
  },
  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  menuIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#FFE2C9",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    color: "#3E1908",
    fontSize: 16,
    fontWeight: "800",
  },
  attractionImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    resizeMode: "cover",
  },
  card: {
    width: 260,
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 16,
    backgroundColor: "#fff",
    elevation: 5,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  cardOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },

  cardText: {
    color: "#f1f1f1",
    fontSize: 13,
    lineHeight: 18,
  },
 donationCard: {
  width: "48%",
  minHeight: 230,
  backgroundColor: "#FFF9F2",
  borderRadius: 22,
  padding: 16,
  borderWidth: 1,
  borderColor: "#F4CAAA",
  justifyContent: "space-between",
},
donationIcon: {
  width: 50,
  height: 50,
  borderRadius: 18,
  backgroundColor: "#FFE2C9",
  justifyContent: "center",
  alignItems: "center",
},

donationTitle: {
  color: "#3E1908",
  fontWeight: "900",
  fontSize: 15,
  marginTop: 12,
},

donationText: {
  color: "#8A5A3D",
  fontSize: 12,
  lineHeight: 17,
  marginTop: 6,
  minHeight: 38,
},

amountBadge: {
  marginTop: 12,
  backgroundColor: "#D35400",
  paddingVertical: 8,
  borderRadius: 999,
  alignItems: "center",
},

amountBadgeText: {
  color: "#fff",
  fontWeight: "900",
},

popupOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.55)",
  justifyContent: "center",
  padding: 16,
},

donationPopup: {
  backgroundColor: "#FFF9F2",
  borderRadius: 28,
  padding: 22,
  maxHeight: "85%",
},

popupClose: {
  alignSelf: "flex-end",
},

popupTitle: {
  color: "#3E1908",
  fontSize: 24,
  fontWeight: "900",
},

popupSubtitle: {
  color: "#8A5A3D",
  marginBottom: 16,
},

input: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#F4CAAA",
  borderRadius: 16,
  paddingHorizontal: 14,
  height: 54,
  marginBottom: 12,
},

textArea: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#F4CAAA",
  borderRadius: 16,
  padding: 14,
  height: 110,
  marginBottom: 14,
},

donateButton: {
  backgroundColor: "#D35400",
  borderRadius: 18,
  paddingVertical: 16,
  alignItems: "center",
},

donateButtonText: {
  color: "#fff",
  fontWeight: "900",
},

successPopup: {
  backgroundColor: "#FFF9F2",
  borderRadius: 30,
  padding: 24,
  alignItems: "center",
},

successTitle: {
  fontSize: 24,
  fontWeight: "900",
  color: "#3E1908",
  marginTop: 14,
},

successBlessing: {
  color: "#8A5A3D",
  marginTop: 6,
},

receiptCard: {
  width: "100%",
  backgroundColor: "#FFF1E4",
  borderRadius: 18,
  padding: 16,
  marginTop: 20,
},

receiptText: {
  color: "#3E1908",
  fontWeight: "700",
  marginBottom: 8,
},

doneButton: {
  backgroundColor: "#22C55E",
  paddingHorizontal: 30,
  paddingVertical: 14,
  borderRadius: 18,
  marginTop: 20,
},

doneButtonText: {
  color: "#fff",
  fontWeight: "900",
},
});
