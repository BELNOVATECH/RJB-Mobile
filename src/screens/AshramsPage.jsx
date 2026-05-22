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

const ashrams = [
  {
    id: 1,
    name: "Ram Ashram",
    timing: "5:30 AM - 9:00 PM",
    distance: "1.1 km",
    description:
      "Spiritual retreat center offering meditation, prayer, and pilgrim stay.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 2,
    name: "Hanuman Ashram",
    timing: "6:00 AM - 8:30 PM",
    distance: "2.4 km",
    description:
      "Traditional devotional ashram near major Ayodhya temple locations.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 3,
    name: "Sarayu Tapovan Ashram",
    timing: "5:00 AM - 8:00 PM",
    distance: "3.1 km",
    description:
      "Peaceful riverside spiritual retreat ideal for prayer and meditation.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
  },
  {
    id: 4,
    name: "Sita Mata Ashram",
    timing: "6:30 AM - 8:30 PM",
    distance: "1.8 km",
    description:
      "Devotional ashram with spiritual guidance and pilgrim accommodation.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
  {
    id: 5,
    name: "Ayodhya Spiritual Ashram",
    timing: "24 Hours",
    distance: "2.9 km",
    description:
      "Modern spiritual center for satsang, meditation, and group pilgrimages.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
  {
    id: 6,
    name: "Vedanta Ashram",
    timing: "6:00 AM - 9:00 PM",
    distance: "4.2 km",
    description:
      "Sacred retreat focused on yoga, scriptures, and spiritual learning.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
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
            <Image source={{ uri: ashram.image }} style={styles.image} />

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