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

const ashrams = [
  {
    id: 1,
    name: "Ram Ashram",
    timing: "5:30 AM - 9:00 PM",
    distance: "1.1 km",
    description:
      "Spiritual retreat center offering meditation, prayer, and pilgrim stay.",
    image: require("../../assets/ramashram.jpeg"),
    lat: 26.7993,
    lng: 82.2034,
  },
  {
    id: 2,
    name: "Hanuman Ashram",
    timing: "6:00 AM - 8:30 PM",
    distance: "2.4 km",
    description:
      "Traditional devotional ashram near major Ayodhya temple locations.",
    image: require("../../assets/hanumanashram.jpeg"),
    lat: 26.7978,
    lng: 82.2016,
  },
  {
    id: 3,
    name: "Sarayu Tapovan Ashram",
    timing: "5:00 AM - 8:00 PM",
    distance: "3.1 km",
    description:
      "Peaceful riverside spiritual retreat ideal for prayer and meditation.",
    image: require("../../assets/sarayuashram.jpeg"),
    lat: 26.8057,
    lng: 82.2108,
  },
  {
    id: 4,
    name: "Sita Mata Ashram",
    timing: "6:30 AM - 8:30 PM",
    distance: "1.8 km",
    description:
      "Devotional ashram with spiritual guidance and pilgrim accommodation.",
    image: require("../../assets/sitaashram.jpeg"),
    lat: 26.7962,
    lng: 82.1999,
  },
  {
    id: 5,
    name: "Ayodhya Spiritual Ashram",
    timing: "24 Hours",
    distance: "2.9 km",
    description:
      "Modern spiritual center for satsang, meditation, and group pilgrimages.",
    image: require("../../assets/ayodhyaashram.jpeg"),
    lat: 26.7934,
    lng: 82.1971,
  },
  {
    id: 6,
    name: "Vedanta Ashram",
    timing: "6:00 AM - 9:00 PM",
    distance: "4.2 km",
    description:
      "Sacred retreat focused on yoga, scriptures, and spiritual learning.",
    image: require("../../assets/vedanthaashram.jpeg"),
    lat: 26.7906,
    lng: 82.1945,
  },
];

export default function AshramsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Ashrams in Ayodhya</Text>
        <Text style={styles.headerSub}>
          Spiritual retreats & devotional stays
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {ashrams.map((ashram) => (
          <View key={ashram.id} style={styles.card}>
            {/* <Image source={{ uri: ashram.image }} style={styles.image} /> */}
            <Image
                          source={typeof ashram.image === "string" ? { uri: ashram.image } : ashram.image}
                          style={styles.image}
                        />

            <Text style={styles.name}>{ashram.name}</Text>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{ashram.timing}</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{ashram.distance}</Text>
            </View>

            <Text style={styles.description}>{ashram.description}</Text>
            <TouchableOpacity
  style={styles.button}
  onPress={() =>
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${ashram.lat},${ashram.lng}`
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