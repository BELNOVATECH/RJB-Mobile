import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const vehicles = [
  {
    id: 1,
    regNo: 'UP-42-AR-1088',
    chassisNo: 'CHS-AUTO-9182',
    type: 'Auto',
    model: 'Bajaj RE Compact',
    capacity: '3 tourists',
    year: '2023',
    insurance: 'Valid till 18 Jan 2027',
    permit: 'Ayodhya local permit - valid',
    pollution: 'PUC valid till 10 Dec 2026',
    status: 'Available',
    price: 'Rs 150 base',
    eta: '5 mins',
    rating: 4.5,
    aiFor: '2-3 members',
    icon: 'car-sport',
    tag: 'Economy',
  },
  {
    id: 2,
    regNo: 'UP-42-CA-2207',
    chassisNo: 'CHS-CAR-6641',
    type: 'Car',
    model: 'Maruti Suzuki Dzire',
    capacity: '4 tourists',
    year: '2024',
    insurance: 'Valid till 02 Mar 2027',
    permit: 'Tourist permit - valid',
    pollution: 'PUC valid till 22 Nov 2026',
    status: 'Available',
    price: 'Rs 650 local',
    eta: '8 mins',
    rating: 4.8,
    aiFor: 'Small family',
    icon: 'car',
    tag: 'Family',
  },
  {
    id: 3,
    regNo: 'UP-42-MB-7712',
    chassisNo: 'CHS-MBUS-3408',
    type: 'Mini Bus',
    model: 'Force Traveller',
    capacity: '15 tourists',
    year: '2022',
    insurance: 'Valid till 30 Sep 2026',
    permit: 'Intercity pilgrim permit - valid',
    pollution: 'PUC valid till 14 Oct 2026',
    status: 'Available',
    price: 'Rs 2500 package',
    eta: '20 mins',
    rating: 4.7,
    aiFor: '10-15 members',
    icon: 'bus-outline',
    tag: 'Group',
  },
  {
    id: 4,
    regNo: 'UP-42-LX-9901',
    chassisNo: 'CHS-LUX-7210',
    type: 'Luxury Vehicle',
    model: 'Toyota Innova Crysta',
    capacity: '6 tourists',
    year: '2024',
    insurance: 'Valid till 09 May 2027',
    permit: 'Premium tourist permit - valid',
    pollution: 'PUC valid till 01 Jan 2027',
    status: 'On Trip',
    price: 'Rs 1800 local',
    eta: '32 mins',
    rating: 4.9,
    aiFor: 'Senior citizens',
    icon: 'car-sport',
    tag: 'Luxury',
  },
  {
    id: 5,
    regNo: 'UP-42-EV-2044',
    chassisNo: 'CHS-EV-4527',
    type: 'EV Vehicle',
    model: 'Mahindra Treo',
    capacity: '3 tourists',
    year: '2025',
    insurance: 'Valid till 11 Feb 2028',
    permit: 'Green route permit - valid',
    pollution: 'Electric vehicle exempt',
    status: 'Available',
    price: 'Rs 120 base',
    eta: '7 mins',
    rating: 4.6,
    aiFor: 'Short temple route',
    icon: 'battery-charging',
    tag: 'EV',
  },
];

const drivers = [
  {
    name: 'Mohan Verma',
    mobile: '+91 98765 12001',
    address: 'Ram Path, Ayodhya',
    id: 'Aadhaar verified',
    license: 'UP42 20210011882',
    expiry: '12 Aug 2028',
    vehicle: 'UP-42-CA-2207',
    experience: '9 years',
    languages: 'Hindi, English',
    rating: '4.8 / 96 reviews',
  },
  {
    name: 'Iqbal Ansari',
    mobile: '+91 98765 12002',
    address: 'Saryu Ghat Road',
    id: 'ID verified',
    license: 'UP42 20180072810',
    expiry: '04 Apr 2027',
    vehicle: 'UP-42-MB-7712',
    experience: '12 years',
    languages: 'Hindi, Urdu, English',
    rating: '4.7 / 141 reviews',
  },
];

const packages = ['Local visits', 'Temple visits', 'Airport/Railway transfer', 'Multi-day pilgrimage'];
const vehicleTypes = ['All', 'Auto', 'Car', 'Mini Bus', 'Bus', 'EV Vehicle', 'Luxury Vehicle'];

export default function VehiclesScreen() {
  const navigation = useNavigation();
  const [receiptVisible, setReceiptVisible] = useState(false);
const [receiptData, setReceiptData] = useState(null);
  const [selectedType, setSelectedType] = useState('All');
  const [pickup, setPickup] = useState('Ayodhya Junction');
  const [drop, setDrop] = useState('Ram Janmabhoomi');
  const [duration, setDuration] = useState('1 day');
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);

  const filteredVehicles =
    selectedType === 'All'
      ? vehicles
      : vehicles.filter(vehicle => vehicle.type === selectedType);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="car" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Vehicle Management</Text>
          <Text style={styles.headerText}>Registration, drivers, bookings, pricing, and tracking</Text>
        </View>
      </View>

      <View style={styles.aiBanner}>
        <Ionicons name="sparkles" size={24} color="#C94B13" />
        <View style={styles.aiCopy}>
          <Text style={styles.aiTitle}>AI Vehicle Allocation</Text>
          <Text style={styles.aiText}>
            2-3 members get Auto or Car, 4-6 members get SUV/Luxury, 10-15 members get Mini Bus, and larger pilgrim groups get Bus allocation.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Vehicle Registration Module</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {vehicleTypes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.filterBtn, selectedType === item && styles.filterBtnActive]}
            onPress={() => setSelectedType(item)}
          >
            <Text style={[styles.filterText, selectedType === item && styles.filterTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filteredVehicles.map(vehicle => (
        <View key={vehicle.id} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.iconBox}>
              <Ionicons name={vehicle.icon} size={30} color="#C94B13" />
            </View>

            <View style={styles.vehicleTitleBox}>
              <Text style={styles.vehicleName}>{vehicle.type}</Text>
              <Text style={styles.vehicleModel}>{vehicle.model}</Text>
            </View>

            <View style={[styles.statusBadge, vehicle.status === 'Available' ? styles.available : styles.onTrip]}>
              <Text style={styles.statusText}>{vehicle.status}</Text>
            </View>
          </View>

          <View style={styles.masterGrid}>
            <Info label="Reg No" value={vehicle.regNo} />
            <Info label="Chassis" value={vehicle.chassisNo} />
            <Info label="Capacity" value={vehicle.capacity} />
            <Info label="Year" value={vehicle.year} />
            <Info label="Insurance" value={vehicle.insurance} />
            <Info label="Permit" value={vehicle.permit} />
            <Info label="Pollution" value={vehicle.pollution} />
            <Info label="AI Fit" value={vehicle.aiFor} />
          </View>

          <View style={styles.featureRow}>
            <Feature icon="cash" text={vehicle.price} />
            <Feature icon="time" text={vehicle.eta} />
            <Feature icon="star" text={`${vehicle.rating} rating`} />
          </View>

          <TouchableOpacity
            style={styles.bookBtn}
            onPress={() => {
  const bookingId = `AYO-${Date.now().toString().slice(-6)}`;
  const txnId = `TXN-${Math.floor(Math.random() * 999999)}`;

  setReceiptData({
    service: "Vehicle Booking",
    vehicle: vehicle.type,
    model: vehicle.model,
    regNo: vehicle.regNo,
    amount: vehicle.price,
    eta: vehicle.eta,
    bookingId,
    txnId,
    date: new Date().toLocaleString(),
  });

  setReceiptVisible(true);
}}
          >
            <Text style={styles.bookBtnText}>Book Vehicle</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Driver Management</Text>

      {drivers.map(driver => (
        <View key={driver.license} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.iconBox}>
              <Ionicons name="person" size={30} color="#C94B13" />
            </View>
            <View style={styles.vehicleTitleBox}>
              <Text style={styles.vehicleName}>{driver.name}</Text>
              <Text style={styles.vehicleModel}>{driver.mobile}</Text>
            </View>
          </View>

          <View style={styles.masterGrid}>
            <Info label="Address" value={driver.address} />
            <Info label="ID" value={driver.id} />
            <Info label="License" value={driver.license} />
            <Info label="Expiry" value={driver.expiry} />
            <Info label="Assigned" value={driver.vehicle} />
            <Info label="Experience" value={driver.experience} />
            <Info label="Languages" value={driver.languages} />
            <Info label="Reviews" value={driver.rating} />
          </View>
        </View>
      ))}

      {/* <Text style={styles.sectionTitle}>Tourist Vehicle Booking</Text>

      <View style={styles.card}>
        <Text style={styles.formLabel}>Pickup Location</Text>
        <TextInput value={pickup} onChangeText={setPickup} style={styles.input} placeholderTextColor="#8C6A49" />

        <Text style={styles.formLabel}>Drop Location</Text>
        <TextInput value={drop} onChangeText={setDrop} style={styles.input} placeholderTextColor="#8C6A49" />

        <Text style={styles.formLabel}>Travel Duration</Text>
        <TextInput value={duration} onChangeText={setDuration} style={styles.input} placeholderTextColor="#8C6A49" />

        <Text style={styles.formLabel}>Sightseeing Package</Text>
        <View style={styles.packageGrid}>
          {packages.map(item => (
            <TouchableOpacity
              key={item}
              style={[styles.packageBtn, selectedPackage === item && styles.packageActive]}
              onPress={() => setSelectedPackage(item)}
            >
              <Text style={[styles.packageText, selectedPackage === item && styles.packageTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View> */}

      <Text style={styles.sectionTitle}>Dynamic Pricing Engine</Text>

      <View style={styles.pricingCard}>
        <PriceLine label="Per KM charges" value="Rs 18/km" />
        <PriceLine label="Driver allowance" value="Rs 500/day" />
        <PriceLine label="Waiting charges" value="Rs 120/hour" />
        <PriceLine label="Toll charges" value="As applicable" />
        <PriceLine label="Seasonal pricing" value="+12% peak days" />
        <PriceLine label="Multi-day discount" value="8% off after day 2" />
        <View style={styles.aiPriceBox}>
          <Ionicons name="analytics" size={20} color="#C94B13" />
          <Text style={styles.aiPriceText}>AI price optimization enabled for budget, distance, demand, and availability.</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Tracking & Monitoring</Text>

      <View style={styles.monitorGrid}>
        <Monitor icon="location" title="GPS Tracking" text="Live location ready" />
        <Monitor icon="pulse" title="Monitoring" text="Vehicle status visible" />
        <Monitor icon="navigate" title="Route Optimization" text="Fastest pilgrim route" />
        <Monitor icon="time" title="ETA" text="Arrival estimate active" />
        <Monitor icon="warning" title="Emergency SOS" text="Driver support alert" />
      </View>
      <Modal visible={receiptVisible} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <View style={styles.receiptModal}>
      <View style={styles.successCircle}>
        <Ionicons
          name="checkmark-circle"
          size={85}
          color="#22C55E"
        />
      </View>

      <Text style={styles.successTitle}>
        Vehicle Booked Successfully
      </Text>

      <Text style={styles.successSub}>
        Jai Shri Ram 🚩
      </Text>

      <View style={styles.receiptCard}>
        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Service</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.service}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Vehicle</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.vehicle}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Model</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.model}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Reg No</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.regNo}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Amount</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.amount}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>ETA</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.eta}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Booking ID</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.bookingId}
          </Text>
        </View>

        <View style={styles.receiptRow}>
          <Text style={styles.receiptLabel}>Transaction</Text>
          <Text style={styles.receiptValue}>
            {receiptData?.txnId}
          </Text>
        </View>

        <View style={styles.qrBox}>
          <Ionicons
            name="qr-code"
            size={80}
            color="#C94B13"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => setReceiptVisible(false)}
      >
        <Text style={styles.doneBtnText}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function Info({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function Feature({ icon, text }) {
  return (
    <View style={styles.feature}>
      <Ionicons name={icon} size={16} color="#C94B13" />
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

function PriceLine({ label, value }) {
  return (
    <View style={styles.priceLine}>
      <Text style={styles.priceLabel}>{label}</Text>
      <Text style={styles.priceValue}>{value}</Text>
    </View>
  );
}

function Monitor({ icon, title, text }) {
  return (
    <View style={styles.monitorCard}>
      <Ionicons name={icon} size={24} color="#C94B13" />
      <Text style={styles.monitorTitle}>{title}</Text>
      <Text style={styles.monitorText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1E4',
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 58,
    paddingBottom: 32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },

  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#FFF9F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
  },

  headerText: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
    maxWidth: 270,
  },

  aiBanner: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'flex-start',
    gap: 12,
  },

  aiCopy: {
    flex: 1,
  },

  aiTitle: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
  },

  aiText: {
    color: '#FFEEDC',
    marginTop: 8,
    lineHeight: 21,
  },

  sectionTitle: {
    color: '#3E1908',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 14,
    marginTop: 4,
  },

  filterRow: {
    gap: 10,
    paddingBottom: 18,
  },

  filterBtn: {
    backgroundColor: '#FFF9F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },

  filterBtnActive: {
    backgroundColor: '#D35400',
  },

  filterText: {
    color: '#C94B13',
    fontWeight: '800',
  },

  filterTextActive: {
    color: '#3E1908',
  },

  card: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vehicleTitleBox: {
    flex: 1,
  },

  vehicleName: {
    color: '#3E1908',
    fontSize: 18,
    fontWeight: '900',
  },

  vehicleModel: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
  },

  statusBadge: {
    borderRadius: 13,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  available: {
    backgroundColor: '#1B5E20',
  },

  onTrip: {
    backgroundColor: '#8B5A00',
  },

  statusText: {
    color: '#3E1908',
    fontSize: 10,
    fontWeight: '900',
  },

  masterGrid: {
    gap: 10,
  },

  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  infoLabel: {
    color: '#8A5A3D',
    width: 96,
    fontWeight: '800',
  },

  infoValue: {
    flex: 1,
    color: '#3E1908',
    fontWeight: '700',
    textAlign: 'right',
  },

  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
    marginBottom: 14,
  },

  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 6,
  },

  featureText: {
    color: '#70412A',
    fontSize: 12,
    fontWeight: '800',
  },

  bookBtn: {
    backgroundColor: '#D35400',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  bookBtnText: {
    color: '#3E1908',
    fontWeight: '900',
    fontSize: 15,
  },

  formLabel: {
    color: '#C94B13',
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    color: '#3E1908',
    fontWeight: '700',
  },

  packageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  packageBtn: {
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  packageActive: {
    backgroundColor: '#D35400',
  },

  packageText: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '800',
  },

  packageTextActive: {
    color: '#3E1908',
  },

  pricingCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },

  priceLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,179,0,0.12)',
  },

  priceLabel: {
    color: '#8A5A3D',
    fontWeight: '800',
  },

  priceValue: {
    color: '#3E1908',
    fontWeight: '900',
    textAlign: 'right',
  },

  aiPriceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFE2C9',
    borderRadius: 15,
    padding: 13,
    marginTop: 14,
  },

  aiPriceText: {
    flex: 1,
    color: '#70412A',
    lineHeight: 19,
    fontWeight: '700',
  },

  monitorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  monitorCard: {
    width: '48%',
    minHeight: 118,
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 14,
    justifyContent: 'space-between',
  },

  monitorTitle: {
    color: '#3E1908',
    fontWeight: '900',
    marginTop: 10,
  },

  monitorText: {
    color: '#8A5A3D',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 5,
  },

  bottomSpace: {
    height: 30,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.7)",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},

receiptModal: {
  width: "100%",
  backgroundColor: "#FFF9F2",
  borderRadius: 30,
  padding: 24,
  alignItems: "center",
},

successCircle: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#DCFCE7",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 18,
},

successTitle: {
  fontSize: 26,
  fontWeight: "900",
  color: "#3E1908",
},

successSub: {
  color: "#C94B13",
  fontSize: 16,
  fontWeight: "800",
  marginTop: 6,
  marginBottom: 20,
},

receiptCard: {
  width: "100%",
  backgroundColor: "#FFFFFF",
  borderRadius: 20,
  padding: 18,
  borderWidth: 1,
  borderColor: "#F4CAAA",
},

receiptRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 12,
},

receiptLabel: {
  color: "#8A5A3D",
  fontWeight: "700",
},

receiptValue: {
  color: "#3E1908",
  fontWeight: "900",
  maxWidth: "60%",
  textAlign: "right",
},

qrBox: {
  alignItems: "center",
  marginTop: 16,
},

doneBtn: {
  width: "100%",
  backgroundColor: "#D35400",
  paddingVertical: 16,
  borderRadius: 18,
  alignItems: "center",
  marginTop: 20,
},

doneBtnText: {
  color: "#FFF",
  fontWeight: "900",
  fontSize: 16,
},
});
