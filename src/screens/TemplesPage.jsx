import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const temples = [
  {
    id: 1,
    name: 'Shri Ram Janmabhoomi Mandir',
    timing: '6:00 AM - 10:00 PM',
    distance: '0.2 km',
    description:
      'Sacred birthplace of Lord Rama and the main spiritual destination in Ayodhya.',
    image: require('../../assets/1.avif'),
    lat: 26.7996,
    lng: 82.2042,
  },
  {
    id: 2,
    name: 'Hanuman Garhi',
    timing: '5:00 AM - 9:00 PM',
    distance: '1.2 km',
    description:
      'Famous temple dedicated to Lord Hanuman with panoramic city views.',
    image: require('../../assets/2.png'),
    lat: 26.7983,
    lng: 82.2011,
  },
  {
    id: 3,
    name: 'Kanak Bhawan',
    timing: '7:00 AM - 8:30 PM',
    distance: '1.5 km',
    description:
      'Beautiful temple gifted to Goddess Sita, known for stunning idols.',
    image: require('../../assets/3.jpg'),
    lat: 26.7972,
    lng: 82.2036,
  },
  {
    id: 4,
    name: 'Nageshwarnath Temple',
    timing: '6:30 AM - 8:00 PM',
    distance: '2.3 km',
    description:
      'Ancient Shiva temple believed to be established by Kush.',
    image: require('../../assets/4.webp'),
    lat: 26.8012,
    lng: 82.2068,
  },
  {
    id: 5,
    name: 'Treta Ke Thakur',
    timing: '8:00 AM - 7:00 PM',
    distance: '2.8 km',
    description:
      'Historic temple linked to Lord Rama’s Ashwamedha Yajna.',
    image: require('../../assets/5.jpg'),
    lat: 26.7945,
    lng: 82.1992,
  },
  {
    id: 6,
    name: 'Guptar Ghat Temple',
    timing: '6:00 AM - 8:00 PM',
    distance: '8.5 km',
    description:
      'Peaceful spiritual site associated with Lord Rama’s departure.',
    image: require('../../assets/6.jpg'),
    lat: 26.7735,
    lng: 82.1457,
  },
];

export default function TemplesPage() {
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerTopRow}>
        <View style={styles.headerIconWrap}>
          <Ionicons name="library" size={34} color="#FFFFFF" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.headerMini}>Ayodhya Dham</Text>
          <Text style={styles.headerTitle}>Sacred Temples</Text>
          <Text style={styles.headerSub}>
            Explore divine spiritual destinations
          </Text>
        </View>
      </View>

      <View style={styles.headerStats}>
        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>6+</Text>
          <Text style={styles.headerStatLabel}>Temples</Text>
        </View>

        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>24x7</Text>
          <Text style={styles.headerStatLabel}>Pilgrimage</Text>
        </View>

        <View style={styles.headerStatCard}>
          <Text style={styles.headerStatValue}>Near</Text>
          <Text style={styles.headerStatLabel}>Ayodhya</Text>
        </View>
      </View>
    </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {temples.map((temple) => (
        <View key={temple.id} style={styles.card}>
          <Image
            source={temple.image}
            style={styles.templeImage}
            resizeMode="cover"
          />

          <View style={styles.cardContent}>
            <Text style={styles.name}>{temple.name}</Text>

            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="time-outline"
                  size={16}
                  color="#EA580C"
                />
                <Text style={styles.infoText}>{temple.timing}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#EA580C"
                />
                <Text style={styles.infoText}>{temple.distance}</Text>
              </View>
            </View>

            <Text style={styles.description}>
              {temple.description}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&destination=${temple.lat},${temple.lng}`
                )
              }
            >
              <Ionicons
                name="navigate"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.buttonText}>Navigate</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={{ height: 30 }} />
    </ScrollView>
  </View>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 50,
  },
 header: {
  backgroundColor: "#D35400",
  borderRadius: 30,
  padding: 22,
  marginHorizontal: 16,
  marginBottom: 22,
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 10,
},

headerTopRow: {
  flexDirection: "row",
  alignItems: "center",
},

headerIconWrap: {
  width: 74,
  height: 74,
  borderRadius: 37,
  backgroundColor: "rgba(255,255,255,0.18)",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 16,
},

headerMini: {
  color: "#FFE7D6",
  fontSize: 13,
  fontWeight: "800",
  textTransform: "uppercase",
},

headerTitle: {
  fontSize: 30,
  fontWeight: "900",
  color: "#FFFFFF",
  marginTop: 4,
},

headerSub: {
  fontSize: 14,
  color: "#FFF1E4",
  marginTop: 6,
  fontWeight: "600",
},

headerStats: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 22,
},

headerStatCard: {
  width: "31%",
  backgroundColor: "rgba(255,255,255,0.15)",
  borderRadius: 18,
  paddingVertical: 14,
  alignItems: "center",
},

headerStatValue: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "900",
},

headerStatLabel: {
  color: "#FFE7D6",
  fontSize: 11,
  fontWeight: "700",
  marginTop: 6,
  textAlign: "center",
},
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 18,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  templeImage: {
    width: '100%',
    height: 220,
  },
  cardContent: {
    padding: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 12,
  },
  infoContainer: {
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    color: '#475569',
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
button: {
  backgroundColor: '#EA580C',
  paddingVertical: 15,
  borderRadius: 14,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 8,
},
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});