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
    languages: 'Hindi, Awadhi',
    experience: '8 Years',
    specialization: 'Ram Mandir history',
    availability: 'Today 2:00 PM - 7:00 PM',
    approval: 'Approved',
    reviews: 128,
    rating: 4.9,
    available: true,
    ai: true,
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
  },
  {
    id: 3,
    name: 'Venkatesh',
    language: 'Telugu',
    languages: 'Telugu, Hindi',
    experience: '6 Years',
    specialization: 'South Indian pilgrim groups',
    availability: 'Next available 28 May',
    approval: 'Under Review',
    reviews: 96,
    rating: 4.8,
    available: false,
    ai: true,
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
  },
];

export default function GuidesScreen() {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const languages = ['All', 'Hindi', 'English', 'Telugu'];

  const filteredGuides =
    selectedLanguage === 'All'
      ? guidesData
      : guidesData.filter(
          item => item.language === selectedLanguage
        );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="people" size={28} color="#C94B13" />

        <Text style={styles.headerTitle}>
          Tour Guides
        </Text>
      </View>

      <View style={styles.workflowCard}>
        <Text style={styles.workflowTitle}>Guide Registration Workflow</Text>
        <Text style={styles.workflowText}>
          Registration, document verification, language review, approval, and public listing are tracked here.
        </Text>
        <View style={styles.workflowSteps}>
          {['Register', 'Verify', 'Approve', 'List'].map((item) => (
            <View key={item} style={styles.workflowStep}>
              <Ionicons name="checkmark-circle" size={16} color="#C94B13" />
              <Text style={styles.workflowStepText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Filters */}
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
              selectedLanguage === lang &&
                styles.activeFilter,
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

      {/* Guide Cards */}
      {filteredGuides.map((guide) => (
        <View key={guide.id} style={styles.card}>

          {/* AI Badge */}
          {guide.ai && (
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>
                AI Recommended
              </Text>
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
              <Text style={styles.name}>
                {guide.name}
              </Text>

              <Text style={styles.language}>
                {guide.language} Guide
              </Text>
            </View>

            <View style={styles.ratingBox}>
              <Ionicons
                name="star"
                size={16}
                color="#C94B13"
              />

              <Text style={styles.rating}>
                {guide.rating}
              </Text>
            </View>
          </View>

          {/* Info */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Languages:
            </Text>

            <Text style={styles.infoValue}>
              {guide.languages}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Experience:
            </Text>

            <Text style={styles.infoValue}>
              {guide.experience}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Speciality:
            </Text>

            <Text style={styles.infoValue}>
              {guide.specialization}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Calendar:
            </Text>

            <Text style={styles.infoValue}>
              {guide.availability}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Status:
            </Text>

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
            <Ionicons name="chatbubbles" size={17} color="#C94B13" />
            <Text style={styles.reviewText}>
              {guide.reviews} pilgrim reviews
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() =>
              navigation.navigate('MainTabs', {
                screen: 'Bookings',
                params: { bookingType: 'Guide' },
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

  filterContainer: {
    marginBottom: 20,
  },

  workflowCard: {
    backgroundColor: '#D76424',
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
  },

  workflowTitle: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
  },

  workflowText: {
    color: '#FFEEDC',
    marginTop: 8,
    lineHeight: 20,
  },

  workflowSteps: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },

  workflowStep: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F2',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 5,
  },

  workflowStepText: {
    color: '#3E1908',
    fontSize: 12,
    fontWeight: '800',
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
