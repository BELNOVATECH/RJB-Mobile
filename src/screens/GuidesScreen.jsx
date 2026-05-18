import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const guidesData = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    language: 'Hindi',
    languages: 'Hindi, Awadhi, English',
    experience: '8 Years',
    specialization: 'Ram Mandir history',
    availability: 'Today 2:00 PM - 7:00 PM',
    approval: 'Approved',
    reviews: 128,
    rating: 4.9,
    available: true,
    ai: true,
    price: '₹1500',
  },
  {
    id: 2,
    name: 'Suresh Kumar',
    language: 'English',
    languages: 'English, Hindi',
    experience: '5 Years',
    specialization: 'Heritage walks',
    availability: 'Tomorrow 8:00 AM - 1:00 PM',
    approval: 'Approved',
    reviews: 84,
    rating: 4.7,
    available: true,
    ai: false,
    price: '₹1200',
  },
  {
    id: 3,
    name: 'Venkatesh Reddy',
    language: 'Telugu',
    languages: 'Telugu, Hindi, English',
    experience: '6 Years',
    specialization: 'South Indian pilgrim groups',
    availability: 'Next available 28 May',
    approval: 'Approved',
    reviews: 96,
    rating: 4.8,
    available: true,
    ai: true,
    price: '₹1800',
  },
  {
    id: 4,
    name: 'Rahul Mishra',
    language: 'Hindi',
    languages: 'Hindi, English',
    experience: '3 Years',
    specialization: 'Family darshan support',
    availability: 'Today 5:00 PM - 9:00 PM',
    approval: 'Approved',
    reviews: 42,
    rating: 4.5,
    available: true,
    ai: false,
    price: '₹1000',
  },
  {
    id: 5,
    name: 'Arun Kumar',
    language: 'Tamil',
    languages: 'Tamil, English, Hindi',
    experience: '7 Years',
    specialization: 'Temple darshan assistance',
    availability: 'Today 10:00 AM - 6:00 PM',
    approval: 'Approved',
    reviews: 110,
    rating: 4.8,
    available: true,
    ai: true,
    price: '₹1700',
  },
  {
    id: 6,
    name: 'Manjunath Gowda',
    language: 'Kannada',
    languages: 'Kannada, Telugu, Hindi',
    experience: '9 Years',
    specialization: 'Senior citizen pilgrimage support',
    availability: 'Tomorrow 7:00 AM - 4:00 PM',
    approval: 'Approved',
    reviews: 140,
    rating: 4.9,
    available: true,
    ai: true,
    price: '₹1900',
  },
  {
    id: 7,
    name: 'Ajith Menon',
    language: 'Malayalam',
    languages: 'Malayalam, Tamil, English',
    experience: '5 Years',
    specialization: 'Family and group travel assistance',
    availability: 'Today 1:00 PM - 8:00 PM',
    approval: 'Approved',
    reviews: 76,
    rating: 4.6,
    available: true,
    ai: false,
    price: '₹1400',
  },
  {
    id: 8,
    name: 'Pradeep Joshi',
    language: 'English',
    languages: 'English, Hindi, Telugu',
    experience: '10 Years',
    specialization: 'VIP darshan & premium guide tours',
    availability: 'Tomorrow 9:00 AM - 9:00 PM',
    approval: 'Approved',
    reviews: 210,
    rating: 5.0,
    available: true,
    ai: true,
    price: '₹2500',
  },
];

const languages = [
  'All',
  'Hindi',
  'English',
  'Telugu',
  'Tamil',
  'Kannada',
  'Malayalam',
];

const personCounts = [1, 2, 3, 4, 5, 6];

export default function GuidesPage() {
  const navigation = useNavigation();

  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedPersons, setSelectedPersons] = useState(1);

  const filteredGuides =
    selectedLanguage === 'All'
      ? guidesData
      : guidesData.filter(
          item =>
            item.languages.includes(selectedLanguage) ||
            item.language === selectedLanguage
        );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="people" size={28} color="#C94B13" />
        <Text style={styles.headerTitle}>Book Tour Guides</Text>
      </View>

      {/* Language Selection */}
      <Text style={styles.sectionTitle}>Select Language</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {languages.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,
              selectedLanguage === lang && styles.activeFilter,
            ]}
            onPress={() => setSelectedLanguage(lang)}
          >
            <Text
              style={[
                styles.filterText,
                selectedLanguage === lang && {
                  color: '#3E1908',
                },
              ]}
            >
              {lang}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Person Count */}
      <Text style={styles.sectionTitle}>Number of Persons</Text>

      <View style={styles.personContainer}>
        {personCounts.map((count) => (
          <TouchableOpacity
            key={count}
            style={[
              styles.personButton,
              selectedPersons === count && styles.selectedPerson,
            ]}
            onPress={() => setSelectedPersons(count)}
          >
            <Text
              style={[
                styles.personText,
                selectedPersons === count && styles.selectedPersonText,
              ]}
            >
              {count}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Guide Cards */}
      {filteredGuides.map((guide) => (
        <View key={guide.id} style={styles.card}>
          {guide.ai && (
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>AI Recommended</Text>
            </View>
          )}

          <View style={styles.cardTop}>
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={32}
                color="#C94B13"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{guide.name}</Text>
              <Text style={styles.language}>{guide.language} Guide</Text>
            </View>

            <View style={styles.ratingBox}>
              <Ionicons name="star" size={16} color="#C94B13" />
              <Text style={styles.rating}>{guide.rating}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Languages:</Text>
            <Text style={styles.infoValue}>{guide.languages}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Experience:</Text>
            <Text style={styles.infoValue}>{guide.experience}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Speciality:</Text>
            <Text style={styles.infoValue}>{guide.specialization}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Calendar:</Text>
            <Text style={styles.infoValue}>{guide.availability}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Persons:</Text>
            <Text style={styles.infoValue}>
              {selectedPersons} Pilgrims
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Price:</Text>
            <Text style={styles.infoValue}>{guide.price}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Status:</Text>
            <Text
              style={[
                styles.infoValue,
                {
                  color: guide.available
                    ? '#4CAF50'
                    : '#FF5252',
                },
              ]}
            >
              {guide.available
                ? `${guide.approval} / Available`
                : `${guide.approval} / Unavailable`}
            </Text>
          </View>

          <View style={styles.reviewRow}>
            <Ionicons
              name="chatbubbles"
              size={17}
              color="#C94B13"
            />
            <Text style={styles.reviewText}>
              {guide.reviews} pilgrim reviews
            </Text>
          </View>

          <TouchableOpacity
            style={styles.bookButton}
            onPress={() =>
              navigation.navigate('MainTabs', {
                screen: 'Bookings',
                params: {
                  bookingType: 'Guide',
                  language: selectedLanguage,
                  persons: selectedPersons,
                },
              })
            }
          >
            <Text style={styles.bookButtonText}>
              Book Guide
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1E4',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },

  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 12,
  },

  sectionTitle: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 12,
  },

  filterContainer: {
    marginBottom: 20,
  },

  filterButton: {
    backgroundColor: '#FFF9F2',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeFilter: {
    backgroundColor: '#D35400',
  },

  filterText: {
    color: '#C94B13',
    fontWeight: '700',
  },

  personContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },

  personButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF9F2',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedPerson: {
    backgroundColor: '#D35400',
  },

  personText: {
    color: '#3E1908',
    fontWeight: '800',
    fontSize: 16,
  },

  selectedPersonText: {
    color: '#FFF1E4',
  },

  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    position: 'relative',
  },

  aiBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#C94B13',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  aiBadgeText: {
    color: '#FFF1E4',
    fontSize: 11,
    fontWeight: '800',
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#FFE2C9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  name: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '800',
  },

  language: {
    color: '#8A5A3D',
    marginTop: 4,
  },

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE2C9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  rating: {
    color: '#3E1908',
    marginLeft: 4,
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  infoLabel: {
    color: '#8A5A3D',
    width: 110,
  },

  infoValue: {
    flex: 1,
    color: '#3E1908',
    fontWeight: '700',
  },

  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 4,
  },

  reviewText: {
    color: '#8A5A3D',
    fontWeight: '700',
  },

  bookButton: {
    backgroundColor: '#D35400',
    marginTop: 16,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  bookButtonText: {
    color: '#3E1908',
    fontWeight: '800',
    fontSize: 15,
  },
});