import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const kunds = [
  {
    id: 1,
    name: "Suraj Kund",
    timing: "6:00 AM - 8:00 PM",
    distance: "2.4 km",
    description:
      "Ancient sacred water reservoir associated with spiritual rituals and purification.",
    image: require("../../assets/surajkund.jpeg"),
    lat: 26.7908,
    lng: 82.1916,
  },
  {
    id: 2,
    name: "Brahma Kund",
    timing: "6:30 AM - 7:30 PM",
    distance: "1.9 km",
    description:
      "Historic kund believed to have deep mythological importance in Ayodhya.",
    image: require("../../assets/brahmkund.jpeg"),
    lat: 26.8019,
    lng: 82.2061,
  },
  {
    id: 3,
    name: "Sita Kund",
    timing: "7:00 AM - 8:00 PM",
    distance: "3.1 km",
    description:
      "Sacred water body associated with Goddess Sita and pilgrimage rituals.",
    image: require("../../assets/sitakund.jpeg"),
    lat: 26.7954,
    lng: 82.1987,
  },
  {
    id: 4,
    name: "Vidya Kund",
    timing: "6:00 AM - 7:00 PM",
    distance: "2.8 km",
    description:
      "Peaceful devotional kund frequently visited by pilgrims for meditation.",
    image: require("../../assets/vidyakund.jpeg"),
    lat: 26.7936,
    lng: 82.1959,
  },
  {
    id: 5,
    name: "Dashrath Kund",
    timing: "5:30 AM - 8:30 PM",
    distance: "4.0 km",
    description:
      "Traditional sacred kund connected with the Ramayana heritage.",
    image: require("../../assets/dashrathkund.jpeg"),
    lat: 26.7891,
    lng: 82.1898,
  },
  {
    id: 6,
    name: "Hanuman Kund",
    timing: "6:30 AM - 7:30 PM",
    distance: "2.2 km",
    description:
      "Spiritual water site popular among devotees visiting nearby temples.",
    image: require("../../assets/hanumankund.jpeg"),
    lat: 26.7985,
    lng: 82.2029,
  },
];

export default function KundsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sacred Kunds Near Ayodhya</Text>
        <Text style={styles.headerSub}>
          Explore holy water reservoirs
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {kunds.map((kund) => (
          <View key={kund.id} style={styles.card}>
            <Image
  source={typeof kund.image === "string" ? { uri: kund.image } : kund.image}
  style={styles.image}
/>

            <Text style={styles.name}>{kund.name}</Text>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{kund.timing}</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{kund.distance}</Text>
            </View>

            <Text style={styles.description}>{kund.description}</Text>
            <TouchableOpacity
  style={styles.button}
  onPress={() =>
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${kund.lat},${kund.lng}`
    )
  }
>
  <Ionicons name="navigate" size={18} color="#FFF" />
  <Text style={styles.buttonText}>Navigate</Text>
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
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1E293B",
  },
  headerSub: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1E293B",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoText: {
    marginLeft: 8,
    color: "#475569",
    fontSize: 14,
  },
  description: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 16,
  },
button: {
  backgroundColor: "#EA580C",
  paddingVertical: 14,
  borderRadius: 14,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
},
  buttonText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
  },
});