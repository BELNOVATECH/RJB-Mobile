import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const languages = [
  'English',
  'Hindi',
  'Telugu',
  'Tamil',
  'Kannada',
  'Malayalam',
  'Bengali',
  'Marathi',
];

const guides = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    experience: '8 Years Experience',
    rating: '4.9',
    price: '₹1500',
  },
  {
    id: 2,
    name: 'Anil Verma',
    experience: '6 Years Experience',
    rating: '4.8',
    price: '₹1200',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    experience: '10 Years Experience',
    rating: '5.0',
    price: '₹2000',
  },
  {
    id: 4,
    name: 'Ravi Prakash',
    experience: '5 Years Experience',
    rating: '4.7',
    price: '₹1000',
  },
];

const personCounts = [1, 2, 3, 4, 5, 6];

export default function GuidesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedPersons, setSelectedPersons] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book a Guide</Text>
        <Text style={styles.headerSub}>
          Choose your language and travel guide
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Select Language</Text>

        <View style={styles.languageContainer}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang}
              style={[
                styles.languageButton,
                selectedLanguage === lang && styles.selectedLanguage,
              ]}
              onPress={() => setSelectedLanguage(lang)}
            >
              <Text
                style={[
                  styles.languageText,
                  selectedLanguage === lang && styles.selectedLanguageText,
                ]}
              >
                {lang}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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

        <Text style={styles.sectionTitle}>Available Guides</Text>

        {guides.map((guide) => (
          <View key={guide.id} style={styles.card}>
            <View style={styles.guideTop}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={28} color="#EA580C" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.guideName}>{guide.name}</Text>
                <Text style={styles.guideExperience}>
                  {guide.experience}
                </Text>

                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color="#F59E0B" />
                  <Text style={styles.ratingText}>{guide.rating}</Text>
                </View>
              </View>

              <Text style={styles.price}>{guide.price}</Text>
            </View>

            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>
                Book {selectedLanguage} Guide
              </Text>
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
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },
  headerSub: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 14,
    marginTop: 12,
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  languageButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    elevation: 3,
  },
  selectedLanguage: {
    backgroundColor: '#EA580C',
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  selectedLanguageText: {
    color: '#FFFFFF',
  },
  personContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },
  personButton: {
    width: 55,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  selectedPerson: {
    backgroundColor: '#EA580C',
  },
  personText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  selectedPersonText: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },
  guideTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 65,
    height: 65,
    backgroundColor: '#FEF3C7',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  guideName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  guideExperience: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#EA580C',
  },
  bookButton: {
    backgroundColor: '#EA580C',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});