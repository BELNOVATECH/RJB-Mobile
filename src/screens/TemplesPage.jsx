import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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
  },
  {
    id: 2,
    name: 'Hanuman Garhi',
    timing: '5:00 AM - 9:00 PM',
    distance: '1.2 km',
    description:
      'Famous temple dedicated to Lord Hanuman with panoramic city views.',
    image: require('../../assets/2.png'),
  },
  {
    id: 3,
    name: 'Kanak Bhawan',
    timing: '7:00 AM - 8:30 PM',
    distance: '1.5 km',
    description:
      'Beautiful temple gifted to Goddess Sita, known for stunning idols.',
    image: require('../../assets/3.jpg'),
  },
  {
    id: 4,
    name: 'Nageshwarnath Temple',
    timing: '6:30 AM - 8:00 PM',
    distance: '2.3 km',
    description:
      'Ancient Shiva temple believed to be established by Kush, son of Lord Rama.',
    image: require('../../assets/4.webp'),
  },
  {
    id: 5,
    name: 'Treta Ke Thakur',
    timing: '8:00 AM - 7:00 PM',
    distance: '2.8 km',
    description:
      'Historic temple linked to Lord Rama’s Ashwamedha Yajna.',
    image: require('../../assets/5.jpg'),
  },
  {
    id: 6,
    name: 'Guptar Ghat Temple',
    timing: '6:00 AM - 8:00 PM',
    distance: '8.5 km',
    description:
      'Peaceful spiritual site associated with Lord Rama’s departure from earth.',
    image: require('../../assets/6.jpg'),
  },
];

export default function TemplesPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Temples Near Ayodhya</Text>
        <Text style={styles.headerSub}>Explore sacred destinations</Text>
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

              
            </View>
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
    backgroundColor: '#F8FAFC',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});