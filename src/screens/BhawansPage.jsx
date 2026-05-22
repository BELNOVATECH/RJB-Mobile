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

const bhawans = [
  {
    id: 1,
    name: "Ram Bhawan",
    timing: "6:00 AM - 9:00 PM",
    distance: "1.2 km",
    description:
      "Spiritual accommodation and devotional gathering place for pilgrims.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    name: "Sita Bhawan",
    timing: "7:00 AM - 8:30 PM",
    distance: "2.0 km",
    description:
      "Pilgrim stay facility with devotional ambiance and prayer spaces.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 3,
    name: "Hanuman Bhawan",
    timing: "6:30 AM - 9:00 PM",
    distance: "1.8 km",
    description:
      "Traditional religious rest house near major pilgrimage locations.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 4,
    name: "Ayodhya Pilgrim Bhawan",
    timing: "24 Hours",
    distance: "0.9 km",
    description:
      "Dedicated stay facility for pilgrims visiting Ram Mandir and Ayodhya.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
  },
  {
    id: 5,
    name: "Janaki Bhawan",
    timing: "7:00 AM - 8:00 PM",
    distance: "2.7 km",
    description:
      "Comfortable bhawan with spiritual surroundings for group travelers.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
  {
    id: 6,
    name: "Ramrajya Bhawan",
    timing: "24 Hours",
    distance: "3.4 km",
    description:
      "Modern devotional stay option for pilgrims and family groups.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
];

export default function BhawansPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Bhawans in Ayodhya</Text>
        <Text style={styles.headerSub}>
          Devotional stay & accommodation spaces
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {bhawans.map((bhawan) => (
          <View key={bhawan.id} style={styles.card}>
            <Image source={{ uri: bhawan.image }} style={styles.image} />

            <Text style={styles.name}>{bhawan.name}</Text>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{bhawan.timing}</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{bhawan.distance}</Text>
            </View>

            <Text style={styles.description}>{bhawan.description}</Text>

            
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