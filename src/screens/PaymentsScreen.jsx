import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PaymentsScreen() {
  const payments = [
    { title: 'Room Booking', amount: '₹2,500', status: 'Paid', icon: 'bed' },
    { title: 'Guide Booking', amount: '₹800', status: 'Pending', icon: 'people' },
    { title: 'Vehicle Booking', amount: '₹650', status: 'Paid', icon: 'car' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="card" size={30} color="#C94B13" />
        <Text style={styles.headerTitle}>Payments</Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total Paid</Text>
        <Text style={styles.summaryAmount}>₹3,150</Text>
        <Text style={styles.summarySub}>Secure online payments enabled</Text>
      </View>

      <Text style={styles.section}>Payment History</Text>

      {payments.map((item, index) => (
        <View key={index} style={styles.paymentCard}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={26} color="#C94B13" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.paymentTitle}>{item.title}</Text>
            <Text style={styles.paymentStatus}>{item.status}</Text>
          </View>

          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payBtnText}>Make New Payment</Text>
      </TouchableOpacity>

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
    marginBottom: 24,
  },
  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 12,
  },
  summaryCard: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 22,
    marginBottom: 26,
  },
  summaryLabel: {
    color: '#FFEEDC',
    fontSize: 14,
  },
  summaryAmount: {
    color: '#3E1908',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 8,
  },
  summarySub: {
    color: '#FFEEDC',
    marginTop: 8,
  },
  section: {
    color: '#C94B13',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 14,
  },
  paymentCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  paymentTitle: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '800',
  },
  paymentStatus: {
    color: '#8A5A3D',
    marginTop: 4,
  },
  amount: {
    color: '#C94B13',
    fontSize: 17,
    fontWeight: '900',
  },
  payBtn: {
    backgroundColor: '#D35400',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 16,
  },
  payBtnText: {
    color: '#3E1908',
    fontWeight: '900',
  },
});