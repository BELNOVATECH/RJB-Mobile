import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  },
  {
    id: 2,
    name: "Brahma Kund",
    timing: "6:30 AM - 7:30 PM",
    distance: "1.9 km",
    description:
      "Historic kund believed to have deep mythological importance in Ayodhya.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    id: 3,
    name: "Sita Kund",
    timing: "7:00 AM - 8:00 PM",
    distance: "3.1 km",
    description:
      "Sacred water body associated with Goddess Sita and pilgrimage rituals.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    id: 4,
    name: "Vidya Kund",
    timing: "6:00 AM - 7:00 PM",
    distance: "2.8 km",
    description:
      "Peaceful devotional kund frequently visited by pilgrims for meditation.",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458",
  },
  {
    id: 5,
    name: "Dashrath Kund",
    timing: "5:30 AM - 8:30 PM",
    distance: "4.0 km",
    description:
      "Traditional sacred kund connected with the Ramayana heritage.",
    image:
      "https://images.unsplash.com/photo-1609948543911-1f1b0c4d5d84",
  },
  {
    id: 6,
    name: "Hanuman Kund",
    timing: "6:30 AM - 7:30 PM",
    distance: "2.2 km",
    description:
      "Spiritual water site popular among devotees visiting nearby temples.",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
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
            <Image source={{ uri: kund.image }} style={styles.image} />

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
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
  },
});