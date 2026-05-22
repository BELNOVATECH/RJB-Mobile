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

const ghats = [
  {
    id: 1,
    name: "Ram Ki Paidi",
    timing: "5:00 AM - 10:00 PM",
    distance: "0.5 km",
    description:
      "Famous bathing ghat on the Sarayu River with beautiful evening aarti.",
    image:require('../../assets/ramkipaidi.jpeg'),
  },
  {
    id: 2,
    name: "Guptar Ghat",
    timing: "6:00 AM - 9:00 PM",
    distance: "8.2 km",
    description:
      "Sacred riverside ghat associated with Lord Rama’s departure.",
    image:require('../../assets/guptarghat.jpeg'),
  },
  {
    id: 3,
    name: "Lakshman Ghat",
    timing: "6:00 AM - 8:30 PM",
    distance: "1.8 km",
    description:
      "Historic ghat dedicated to Lakshman, attracting pilgrims daily.",
    image:require('../../assets/lakshmanghat.jpeg'),
  },
  {
    id: 4,
    name: "Janki Ghat",
    timing: "6:30 AM - 8:00 PM",
    distance: "2.2 km",
    description:
      "Serene riverside ghat with peaceful devotional atmosphere.",
    image:require('../../assets/jankighat.jpeg'),
  },
  {
    id: 5,
    name: "Naya Ghat",
    timing: "5:30 AM - 9:30 PM",
    distance: "1.1 km",
    description:
      "Modern ghat area popular for boat rides and Sarayu views.",
    image:require('../../assets/nayaghat.jpeg'),
  },
  {
    id: 6,
    name: "Raj Ghat",
    timing: "6:00 AM - 8:00 PM",
    distance: "3.5 km",
    description:
      "Traditional sacred riverside location for rituals and prayer.",
    image:require('../../assets/rajghat.jpeg'),
  },
];

export default function GhatsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sacred Ghats Near Ayodhya</Text>
        <Text style={styles.headerSub}>
          Explore spiritual riverfront destinations
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {ghats.map((ghat) => (
          <View key={ghat.id} style={styles.card}>
            {/* <Image source={{ uri: ghat.image }} style={styles.image} /> */}
            <Image
              source={typeof ghat.image === "string" ? { uri: ghat.image } : ghat.image}
              style={styles.image}
            />
            

            <Text style={styles.name}>{ghat.name}</Text>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{ghat.timing}</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{ghat.distance}</Text>
            </View>

            <Text style={styles.description}>{ghat.description}</Text>

            
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