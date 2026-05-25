import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PaymentsScreen() {
  const [paymentVisible, setPaymentVisible] = useState(false);
const [serviceType, setServiceType] = useState('Guide');
const [payerName, setPayerName] = useState('');
const [paymentAmount, setPaymentAmount] = useState('');
  const payments = [
    {
      title: 'Room Booking',
      amount: '₹2,500',
      status: 'Paid',
      icon: 'bed',
      date: '24 May 2026',
      txn: 'TXN982341',
    },
    {
      title: 'Guide Booking',
      amount: '₹800',
      status: 'Pending',
      icon: 'people',
      date: '23 May 2026',
      txn: 'TXN881223',
    },
    {
      title: 'Vehicle Booking',
      amount: '₹650',
      status: 'Paid',
      icon: 'car',
      date: '22 May 2026',
      txn: 'TXN774112',
    },
  ];

  const [receiptVisible, setReceiptVisible] = useState(false);
const [selectedReceipt, setSelectedReceipt] = useState(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="card" size={34} color="#FFFFFF" />
        </View>

        <View>
          <Text style={styles.headerMini}>Ayodhya Dham</Text>
          <Text style={styles.headerTitle}>Payments & Receipts</Text>
          <Text style={styles.headerSub}>
            Secure pilgrim transactions
          </Text>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryTop}>
          <View>
            <Text style={styles.summaryLabel}>Total Paid</Text>
            <Text style={styles.summaryAmount}>₹3,150</Text>
          </View>

          <View style={styles.summaryBadge}>
            <Ionicons name="shield-checkmark" size={20} color="#FFF" />
            <Text style={styles.summaryBadgeText}>Secure</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Paid</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>
      </View>

      <Text style={styles.section}>Payment History</Text>

      {payments.map((item, index) => (
        <View key={index} style={styles.paymentCard}>
          <View style={styles.cardTop}>
            <View style={styles.iconBox}>
              <Ionicons
                name={item.icon}
                size={28}
                color="#D35400"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.paymentTitle}>{item.title}</Text>
              <Text style={styles.paymentDate}>{item.date}</Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                item.status === 'Paid'
                  ? styles.paidBadge
                  : styles.pendingBadge,
              ]}
            >
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>

          <View style={styles.receiptInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Transaction ID</Text>
              <Text style={styles.infoValue}>{item.txn}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Amount</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>

          <TouchableOpacity
  style={styles.receiptBtn}
  onPress={() => {
    setSelectedReceipt(item);
    setReceiptVisible(true);
  }}
>
            <Ionicons name="receipt" size={18} color="#FFF" />
            <Text style={styles.receiptBtnText}>View Receipt</Text>
          </TouchableOpacity>
        </View>
      ))}

      
      <Modal visible={receiptVisible} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <View style={styles.receiptModal}>
      <View style={styles.successCircle}>
        <Ionicons
          name="receipt"
          size={70}
          color="#D35400"
        />
      </View>

      <Text style={styles.popupTitle}>Payment Receipt</Text>
      <Text style={styles.popupSub}>Ayodhya Dham Official Receipt</Text>

      <View style={styles.popupReceiptCard}>
        <View style={styles.popupRow}>
          <Text style={styles.popupLabel}>Service</Text>
          <Text style={styles.popupValue}>
            {selectedReceipt?.title}
          </Text>
        </View>

        <View style={styles.popupRow}>
          <Text style={styles.popupLabel}>Transaction ID</Text>
          <Text style={styles.popupValue}>
            {selectedReceipt?.txn}
          </Text>
        </View>

        <View style={styles.popupRow}>
          <Text style={styles.popupLabel}>Date</Text>
          <Text style={styles.popupValue}>
            {selectedReceipt?.date}
          </Text>
        </View>

        <View style={styles.popupRow}>
          <Text style={styles.popupLabel}>Status</Text>
          <Text style={styles.popupValue}>
            {selectedReceipt?.status}
          </Text>
        </View>

        <View style={styles.popupRow}>
          <Text style={styles.popupLabel}>Amount</Text>
          <Text style={styles.popupAmount}>
            {selectedReceipt?.amount}
          </Text>
        </View>

        <View style={styles.qrBox}>
          <Ionicons
            name="qr-code"
            size={90}
            color="#C94B13"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => setReceiptVisible(false)}
      >
        <Text style={styles.doneBtnText}>Close Receipt</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
<Modal visible={paymentVisible} transparent animationType="slide">
  <View style={styles.modalOverlay}>
    <View style={styles.paymentModal}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.paymentScrollContent}
  >
      <View style={styles.successCircle}>
        <Ionicons
          name="card"
          size={70}
          color="#D35400"
        />
        
      </View>

      <Text style={styles.popupTitle}>Make New Payment</Text>
      <Text style={styles.popupSub}>
        Ayodhya Dham Secure Payment Portal
      </Text>

      <View style={styles.serviceGrid}>
        {[
          { name: 'Guide', icon: 'people' },
          { name: 'Room', icon: 'bed' },
          { name: 'Vehicle', icon: 'car' },
          { name: 'Ashram', icon: 'home' },
          { name: 'Donation', icon: 'heart' },
          { name: 'Charity', icon: 'gift' },
          { name: 'Darshan', icon: 'flame' },
          { name: 'Temple Seva', icon: 'library' },
        ].map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.serviceBtn,
              serviceType === item.name && styles.serviceBtnActive,
            ]}
            onPress={() => setServiceType(item.name)}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={
                serviceType === item.name ? '#FFF' : '#D35400'
              }
            />
            <Text
              style={[
                styles.serviceText,
                serviceType === item.name &&
                  styles.serviceTextActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
</ScrollView>
      <TextInput
        placeholder="Enter Full Name"
        placeholderTextColor="#8A5A3D"
        style={styles.paymentInput}
        value={payerName}
        onChangeText={setPayerName}
      />

      <TextInput
        placeholder="Enter Amount"
        placeholderTextColor="#8A5A3D"
        style={styles.paymentInput}
        keyboardType="numeric"
        value={paymentAmount}
        onChangeText={setPaymentAmount}
      />

      {serviceType === 'Guide' && (
        <TextInput
          placeholder="Guide Name / Booking Ref"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      {serviceType === 'Room' && (
        <TextInput
          placeholder="Room Number / Booking Ref"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      {serviceType === 'Vehicle' && (
        <TextInput
          placeholder="Vehicle Type / Reg Number"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      {serviceType === 'Donation' && (
        <TextInput
          placeholder="Donation Purpose"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      {serviceType === 'Charity' && (
        <TextInput
          placeholder="Charity Campaign"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      {serviceType === 'Ashram' && (
        <TextInput
          placeholder="Ashram Name"
          placeholderTextColor="#8A5A3D"
          style={styles.paymentInput}
        />
      )}

      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => setPaymentVisible(false)}
      >
        <Ionicons name="card" size={18} color="#FFF" />
        <Text style={styles.doneBtnText}>Proceed Payment</Text>
      </TouchableOpacity>
    </View>
    
  </View>
</Modal>
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
    backgroundColor: '#D35400',
    borderRadius: 28,
    padding: 20,
    marginTop: 55,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIcon: {
    width: 30,
    height: 30,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  headerMini: {
    color: '#FFEEDC',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 4,
  },

  headerSub: {
    color: '#FFEEDC',
    marginTop: 6,
    fontWeight: '700',
  },

  summaryCard: {
    backgroundColor: '#C94B13',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },

  summaryTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    color: '#FFEEDC',
    fontSize: 14,
  },

  summaryAmount: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '900',
    marginTop: 8,
  },

  summaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    gap: 6,
  },

  summaryBadgeText: {
    color: '#FFF',
    fontWeight: '800',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  statBox: {
    width: '31%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },

  statValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },

  statLabel: {
    color: '#FFEEDC',
    fontSize: 11,
    marginTop: 5,
    fontWeight: '700',
  },

  section: {
    color: '#3E1908',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 16,
  },

  paymentCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  paymentTitle: {
    color: '#3E1908',
    fontSize: 17,
    fontWeight: '900',
  },

  paymentDate: {
    color: '#8A5A3D',
    marginTop: 6,
    fontWeight: '700',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
  },

  paidBadge: {
    backgroundColor: '#22C55E',
  },

  pendingBadge: {
    backgroundColor: '#EAB308',
  },

  statusText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 12,
  },

  receiptInfo: {
    backgroundColor: '#FFF3E8',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  infoLabel: {
    color: '#8A5A3D',
    fontWeight: '700',
  },

  infoValue: {
    color: '#3E1908',
    fontWeight: '900',
  },

  amount: {
    color: '#D35400',
    fontWeight: '900',
    fontSize: 16,
  },

  receiptBtn: {
    backgroundColor: '#D35400',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  receiptBtnText: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 15,
  },

  payBtn: {
    backgroundColor: '#3E1908',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  payBtnText: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.75)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

receiptModal: {
  width: '100%',
  backgroundColor: '#FFF9F2',
  borderRadius: 30,
  padding: 24,
  alignItems: 'center',
},

successCircle: {
  width: 110,
  height: 110,
  borderRadius: 55,
  backgroundColor: '#FFE2C9',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 18,
},

popupTitle: {
  fontSize: 28,
  fontWeight: '900',
  color: '#3E1908',
},

popupSub: {
  color: '#C94B13',
  fontWeight: '800',
  marginTop: 8,
  marginBottom: 20,
},

popupReceiptCard: {
  width: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: 22,
  padding: 18,
  borderWidth: 1,
  borderColor: '#F4CAAA',
},

popupRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 14,
},

popupLabel: {
  color: '#8A5A3D',
  fontWeight: '700',
},

popupValue: {
  color: '#3E1908',
  fontWeight: '900',
  maxWidth: '60%',
  textAlign: 'right',
},

popupAmount: {
  color: '#D35400',
  fontWeight: '900',
  fontSize: 18,
},

qrBox: {
  alignItems: 'center',
  marginTop: 16,
},

doneBtn: {
  width: '100%',
  backgroundColor: '#D35400',
  paddingVertical: 16,
  borderRadius: 18,
  alignItems: 'center',
  marginTop: 20,
},

doneBtnText: {
  color: '#FFF',
  fontWeight: '900',
  fontSize: 16,
},
paymentModal: {
  width: '100%',
  maxHeight: '92%',
  backgroundColor: '#FFF9F2',
  borderRadius: 30,
  padding: 22,
},

serviceGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
  marginBottom: 20,
},

serviceBtn: {
  width: '47%',
  backgroundColor: '#FFF3E8',
  borderRadius: 18,
  paddingVertical: 14,
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#F4CAAA',
},

serviceBtnActive: {
  backgroundColor: '#D35400',
},

serviceText: {
  color: '#D35400',
  fontWeight: '800',
  marginTop: 8,
  fontSize: 12,
},

serviceTextActive: {
  color: '#FFF',
},

paymentInput: {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  paddingHorizontal: 16,
  height: 56,
  marginBottom: 14,
  color: '#3E1908',
  fontWeight: '700',
  borderWidth: 1,
  borderColor: '#F4CAAA',
},
});