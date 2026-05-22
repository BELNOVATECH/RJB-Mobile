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
    image:require('../../assets/rambhawan.jpeg'),
  },
  {
    id: 2,
    name: "Sita Bhawan",
    timing: "7:00 AM - 8:30 PM",
    distance: "2.0 km",
    description:
      "Pilgrim stay facility with devotional ambiance and prayer spaces.",
    image:require('../../assets/sitabhawan.jpeg'),
  },
  {
    id: 3,
    name: "Hanuman Bhawan",
    timing: "6:30 AM - 9:00 PM",
    distance: "1.8 km",
    description:
      "Traditional religious rest house near major pilgrimage locations.",
    image:require('../../assets/hanumanbhawan.jpeg'),
  },
  {
    id: 4,
    name: "Ayodhya Pilgrim Bhawan",
    timing: "24 Hours",
    distance: "0.9 km",
    description:
      "Dedicated stay facility for pilgrims visiting Ram Mandir and Ayodhya.",
    image:
      require('../../assets/kanakbhawan.jpeg'),
  },
  {
    id: 5,
    name: "Janaki Bhawan",
    timing: "7:00 AM - 8:00 PM",
    distance: "2.7 km",
    description:
      "Comfortable bhawan with spiritual surroundings for group travelers.",
    image:
      require('../../assets/rambhawan.jpeg'),
  },
  {
    id: 6,
    name: "Ramrajya Bhawan",
    timing: "24 Hours",
    distance: "3.4 km",
    description:
      "Modern devotional stay option for pilgrims and family groups.",
    image:
      require('../../assets/sitabhawan.jpeg'),
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
            {/* <Image source={{ uri: bhawan.image }} style={styles.image} /> */}
             <Image
              source={typeof bhawan.image === "string" ? { uri: bhawan.image } : bhawan.image}
              style={styles.image}
            />

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