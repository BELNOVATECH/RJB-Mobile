import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity, ScrollView
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [familyCount, setFamilyCount] = useState('1');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={34} color="#C94B13" />
        <Text style={styles.headerTitle}>Tourist Profile</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tourist name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        <Text style={styles.label}>Family / Group Members</Text>
        <TextInput
          style={styles.input}
          placeholder="Number of members"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={familyCount}
          onChangeText={setFamilyCount}
        />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Profile</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Management Features</Text>

      <View style={styles.featureCard}>
        <Ionicons name="call" size={24} color="#C94B13" />
        <Text style={styles.featureText}>Mobile OTP Verification</Text>
      </View>

      <View style={styles.featureCard}>
        <Ionicons name="id-card" size={24} color="#C94B13" />
        <Text style={styles.featureText}>Aadhaar / ID Verification Optional</Text>
      </View>

      <View style={styles.featureCard}>
        <Ionicons name="people" size={24} color="#C94B13" />
        <Text style={styles.featureText}>Family / Group Registration</Text>
      </View>

      <View style={styles.featureCard}>
        <Ionicons name="time" size={24} color="#C94B13" />
        <Text style={styles.featureText}>Travel History Tracking</Text>
      </View>

      <View style={{ height: 35 }} />
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
    marginBottom: 22,
  },
  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 18,
  },
  label: {
    color: '#C94B13',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#FFE2C9',
    color: '#3E1908',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
  },
  saveBtn: {
    backgroundColor: '#D35400',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 22,
  },
  saveText: {
    color: '#3E1908',
    fontWeight: '900',
  },
  section: {
    color: '#C94B13',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },
  featureCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    color: '#3E1908',
    marginLeft: 14,
    fontWeight: '700',
  },
});