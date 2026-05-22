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

const charities = [
  {
    id: 1,
    name: "Ram Seva Annadanam Trust",
    timing: "8:00 AM - 8:00 PM",
    distance: "0.8 km",
    description:
      "Provides free meals and food distribution for pilgrims visiting Ayodhya.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a93c6132",
  },
  {
    id: 2,
    name: "Ayodhya Pilgrim Welfare Center",
    timing: "9:00 AM - 7:00 PM",
    distance: "1.5 km",
    description:
      "Support center offering assistance, guidance, and medical help.",
    image:
      "https://images.unsplash.com/photo-1576765608866-5b51046452be",
  },
  {
    id: 3,
    name: "Sarayu Charity Mission",
    timing: "7:00 AM - 6:00 PM",
    distance: "2.1 km",
    description:
      "Community service organization focused on clothing and food donations.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  },
  {
    id: 4,
    name: "Temple Volunteer Foundation",
    timing: "8:30 AM - 7:30 PM",
    distance: "1.9 km",
    description:
      "Volunteer support and crowd assistance for major temple events.",
    image:
      "https://images.unsplash.com/photo-1469571486292-b53601020f15",
  },
  {
    id: 5,
    name: "Ayodhya Elder Care Trust",
    timing: "10:00 AM - 5:00 PM",
    distance: "3.2 km",
    description:
      "Helping elderly pilgrims with transport, accommodation and food.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
  },
  {
    id: 6,
    name: "Ramrajya Social Service",
    timing: "9:00 AM - 8:00 PM",
    distance: "2.7 km",
    description:
      "Devotional charity initiative supporting needy devotees and locals.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
  },
];

export default function CharityPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Charity Services Near Ayodhya</Text>
        <Text style={styles.headerSub}>
          Support & seva opportunities
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {charities.map((charity) => (
          <View key={charity.id} style={styles.card}>
            <Image source={{ uri: charity.image }} style={styles.image} />

            <Text style={styles.name}>{charity.name}</Text>

            <View style={styles.row}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{charity.timing}</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.infoText}>{charity.distance}</Text>
            </View>

            <Text style={styles.description}>{charity.description}</Text>

            
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