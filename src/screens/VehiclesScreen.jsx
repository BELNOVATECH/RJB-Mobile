import React, { useMemo, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const VEHICLE_TYPES = ['All', 'Sedan', 'SUV', 'Mini Bus', 'Auto', 'EV'];
const DURATIONS = ['4 hrs', '8 hrs', '12 hrs', '16 hrs'];
const vehicleImages = [
  require('../../assets/innova.jpg'),
  require('../../assets/Dzire.jpeg'),
  require('../../assets/minibus.jpeg'),
  require('../../assets/treo.jpg'),
  require('../../assets/auto.jpg'),
  require('../../assets/fortuner.jpeg'),
  require('../../assets/ertiga.jpeg'),
  require('../../assets/verna.jpeg'),
  require('../../assets/kia.jpeg'),
];

const vehicles = [
  {
    id: 'innova',
    type: 'SUV',
    model: 'Toyota Innova Crysta',
    driver: 'Ramesh Kumar',
    experience: '15 yrs exp',
    seats: 7,
    fuel: 'Diesel',
    gear: 'Automatic',
    rating: 4.8,
    status: 'Available',
    perHour: 273,
    fullDay: 3500,
    includedKm: 80,
    image: vehicleImages[0],
    features: ['AC', 'Music System', 'GPS', 'First Aid'],
    recommendedFor: 'Family darshan route',
    eta: '8 mins',
    regNo: 'UP-42-LX-9901',
  },
  {
    id: 'dzire',
    type: 'Sedan',
    model: 'Maruti Suzuki Dzire',
    driver: 'Suresh Das',
    experience: '8 yrs exp',
    seats: 4,
    fuel: 'Petrol',
    gear: 'Manual',
    rating: 4.6,
    status: 'Available',
    perHour: 125,
    fullDay: 2000,
    includedKm: 80,
    image: vehicleImages[1],
    features: ['AC', 'Music System', 'Phone Charger'],
    recommendedFor: 'Couple or small family',
    eta: '12 mins',
    regNo: 'UP-42-CA-2207',
  },
  {
    id: 'traveller',
    type: 'Mini Bus',
    model: 'Force Traveller',
    driver: 'Iqbal Ansari',
    experience: '12 yrs exp',
    seats: 15,
    fuel: 'Diesel',
    gear: 'Manual',
    rating: 4.7,
    status: 'Available',
    perHour: 360,
    fullDay: 5200,
    includedKm: 120,
    image: vehicleImages[2],
    features: ['AC', 'Pushback Seats', 'Luggage Space'],
    recommendedFor: 'Group pilgrimage',
    eta: '20 mins',
    regNo: 'UP-42-MB-7712',
  },
  {
    id: 'treo',
    type: 'EV',
    model: 'Mahindra Treo',
    driver: 'Mahesh Prajapati',
    experience: '6 yrs exp',
    seats: 3,
    fuel: 'Electric',
    gear: 'Automatic',
    rating: 4.5,
    status: 'Available',
    perHour: 95,
    fullDay: 1200,
    includedKm: 45,
    image: vehicleImages[3],
    features: ['Eco Ride', 'Local Routes', 'Low Noise'],
    recommendedFor: 'Short temple hops',
    eta: '6 mins',
    regNo: 'UP-42-EV-2044',
  },
  
  {
    id: 'auto',
    type: 'Auto',
    model: 'Bajaj RE Compact',
    driver: 'Mohan Verma',
    experience: '9 yrs exp',
    seats: 3,
    fuel: 'CNG',
    gear: 'Manual',
    rating: 4.4,
    status: 'On Trip',
    perHour: 80,
    fullDay: 950,
    includedKm: 35,
    image: vehicleImages[4],
    features: ['Budget', 'Fast Pickup', 'Local Expert'],
    recommendedFor: 'Nearby ghats',
    eta: '25 mins',
    regNo: 'UP-42-AR-1088',
  },
  {
    id: 'fortuner',
    type: 'SUV',
    model: ' Fortuner',
    driver: 'Harish Kumar',
    experience: '10 yrs exp',
    seats: 7,
    fuel: 'Diesel',
    gear: 'Automatic',
    rating: 4.8,
    status: 'Available',
    perHour: 547,
    fullDay: 7000,
    includedKm: 80,
    image: vehicleImages[5],
    features: ['AC', 'Music System', 'GPS', 'First Aid'],
    recommendedFor: 'Family darshan route',
    eta: '8 mins',
    regNo: 'UP-42-LX-9001',
  },
    {
    id: 'Ertiga',
    type: 'SUV',
    model: ' Maruthi Ertiga',
    driver: 'Ravi Kumar',
    experience: '7 yrs exp',
    seats: 7,
    fuel: 'Diesel',
    gear: 'Automatic',
    rating: 4.8,
    status: 'Available',
    perHour: 200,
    fullDay: 3200,
    includedKm: 80,
    image: vehicleImages[6],
    features: ['AC', 'Music System', 'GPS', 'First Aid'],
    recommendedFor: 'Family darshan route',
    eta: '8 mins',
    regNo: 'UP-42-LX-9001',
  },
    {
    id: 'verna',
    type: 'Sedan',
    model: ' Hyundai Verna',
    driver: 'Baba Sehgal',
    experience: '7 yrs exp',
    seats: 4,
    fuel: 'Petrol',
    gear: 'Manual',
    rating: 4.6,
    status: 'Available',
    perHour: 156,
    fullDay: 2500,
    includedKm: 80,
    image: vehicleImages[7],
    features: ['AC', 'Music System', 'Phone Charger'],
    recommendedFor: 'Couple or small family',
    eta: '12 mins',
    regNo: 'UP-42-CA-2207',
  },
    {
    id: 'carens',
    type: 'SUV',
    model: ' Kia Carens',
    driver: 'Anil Kumar',
    experience: '10 yrs exp',
    seats: 7,
    fuel: 'Diesel',
    gear: 'Automatic',
    rating: 4.8,
    status: 'Available',
    perHour: 328,
    fullDay: 4200,
    includedKm: 80,
    image: vehicleImages[8],
    features: ['AC', 'Music System', 'GPS', 'First Aid'],
    recommendedFor: 'Family darshan route',
    eta: '8 mins',
    regNo: 'UP-42-LX-9001',
  },
];

const addOns = ['Flower pickup', 'Wheelchair help', 'Guide call', 'Extra luggage'];

export default function VehiclesScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 760;
  const [selectedType, setSelectedType] = useState('All');
  const [duration, setDuration] = useState('8 hrs');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    pickup: 'Ayodhya Junction',
    drop: 'Ram Janmabhoomi',
    date: '29-05-2026',
    time: '09:30',
    persons: '4',
    vehicleClass: 'Comfort',
    bags: '1',
    notes: '',
  });

  const hours = Number.parseInt(duration, 10);
  const filteredVehicles = useMemo(
    () =>
      selectedType === 'All'
        ? vehicles
        : vehicles.filter((vehicle) => vehicle.type === selectedType),
    [selectedType]
  );

  const activeEstimate = selectedVehicle ? selectedVehicle.perHour * hours : 0;

  const updateForm = (key, value) => {
    setBookingForm((current) => ({ ...current, [key]: value }));
  };

  const openBooking = (vehicle) => {
    if (vehicle.status !== 'Available') {
      return;
    }
    setSelectedVehicle(vehicle);
  };

  const confirmBooking = () => {
    if (!selectedVehicle) {
      return;
    }

    const bookingId = `AYO-${Date.now().toString().slice(-6)}`;
    setReceiptData({
      bookingId,
      vehicle: selectedVehicle.model,
      driver: selectedVehicle.driver,
      regNo: selectedVehicle.regNo,
      route: `${bookingForm.pickup} to ${bookingForm.drop}`,
      schedule: `${bookingForm.date}, ${bookingForm.time}`,
      amount: activeEstimate,
      duration,
      eta: selectedVehicle.eta,
    });
    setSelectedVehicle(null);
    setReceiptVisible(true);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <Text style={styles.headerTitle}>Book a vehicle</Text>
          <Text style={styles.headerText}>
            Choose verified cars, autos, EVs, and mini buses for darshan, ghats, transfers, and full-day travel.
          </Text>
        </View>

        {/* <View style={styles.searchPanel}>
        <View style={styles.routeRow}>
          <RouteInput
            icon="radio-button-on"
            label="Pickup"
            value={bookingForm.pickup}
            onChangeText={(value) => updateForm('pickup', value)}
          />
          <View style={styles.swapButton}>
            <Ionicons name="swap-vertical" size={18} color="#C94B13" />
          </View>
          <RouteInput
            icon="location"
            label="Drop"
            value={bookingForm.drop}
            onChangeText={(value) => updateForm('drop', value)}
          />
        </View>

        <View style={styles.quickGrid}>
          <CompactField label="Date" value={bookingForm.date} icon="calendar-outline" />
          <CompactField label="Time" value={bookingForm.time} icon="time-outline" />
          <CompactField label="Travellers" value={`${bookingForm.persons} people`} icon="people-outline" />
        </View>
       </View> */}

        <View style={styles.filterSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {VEHICLE_TYPES.map((item) => (
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.durationRow}>
          {DURATIONS.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.durationBtn, duration === item && styles.durationBtnActive]}
              onPress={() => setDuration(item)}
            >
              <Ionicons name="time-outline" size={14} color={duration === item ? '#C2410C' : '#FFFFFF'} />
              <Text style={[styles.durationText, duration === item && styles.durationTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>
      </View>

      <View style={[styles.vehicleGrid, isWide && styles.vehicleGridWide]}>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            estimate={vehicle.perHour * hours}
            onBook={() => openBooking(vehicle)}
            isWide={isWide}
          />
        ))}
      </View>

      <View style={styles.servicePanel}>
        <Text style={styles.sectionTitle}>Trip support</Text>
        <View style={styles.supportGrid}>
          <SupportCard icon="navigate" title="Live route" text="Driver shares pickup ETA and route status." />
          <SupportCard icon="call" title="24/7 help" text="Support stays active until trip completion." />
          <SupportCard icon="receipt" title="Clear fare" text="Price estimate, included km, and receipt are shown upfront." />
          <SupportCard icon="sparkles" title="Add-ons" text="Request guide calls, luggage help, or accessibility support." />
        </View>
      </View>

      <BookingModal
        visible={Boolean(selectedVehicle)}
        vehicle={selectedVehicle}
        form={bookingForm}
        duration={duration}
        estimate={activeEstimate}
        addOns={addOns}
        onChange={updateForm}
        onClose={() => setSelectedVehicle(null)}
        onConfirm={confirmBooking}
      />

      <ReceiptModal
        visible={receiptVisible}
        data={receiptData}
        onClose={() => setReceiptVisible(false)}
      />
    </ScrollView>
  );
}

function RouteInput({ icon, label, value, onChangeText }) {
  return (
    <View style={styles.routeInput}>
      <Ionicons name={icon} size={16} color="#0F766E" />
      <View style={styles.routeCopy}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.routeTextInput}
          placeholderTextColor="#7C8698"
        />
      </View>
    </View>
  );
}

function CompactField({ label, value, icon }) {
  return (
    <View style={styles.compactField}>
      <Ionicons name={icon} size={16} color="#C94B13" />
      <View>
        <Text style={styles.compactLabel}>{label}</Text>
        <Text style={styles.compactValue}>{value}</Text>
      </View>
    </View>
  );
}

function VehicleCard({ vehicle, estimate, onBook, isWide }) {
  const unavailable = vehicle.status !== 'Available';

  return (
    <View style={[styles.vehicleCard, isWide && styles.vehicleCardWide]}>
      <View style={styles.imageWrap}>
        <Image source={vehicle.image} style={styles.vehicleImage} resizeMode="cover" />
        <View style={styles.imageShade} />
        <View style={[styles.statusBadge, unavailable && styles.busyBadge]}>
          <Text style={styles.statusText}>{vehicle.status}</Text>
        </View>
        <View style={styles.typeBadge}>
          <Text style={styles.typeBadgeText}>{vehicle.type}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.titleRow}>
          <View style={styles.titleBox}>
            <Text style={styles.vehicleName}>{vehicle.model}</Text>
            <Text style={styles.driverText}>
              {vehicle.driver} ({vehicle.experience})
            </Text>
          </View>
          <View style={styles.ratingPill}>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={styles.ratingText}>{vehicle.rating}</Text>
          </View>
        </View>

        <View style={styles.specRow}>
          <Spec icon="people-outline" text={`${vehicle.seats} Seater`} />
          <Spec icon="flame-outline" text={vehicle.fuel} />
          <Spec icon="settings-outline" text={vehicle.gear} />
        </View>

        <View style={styles.chipRow}>
          {vehicle.features.map((feature) => (
            <View key={feature} style={styles.featureChip}>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.priceRow}>
          <PriceBlock label="Per Hour" value={`Rs ${vehicle.perHour}`} />
          <PriceBlock label="16 Hour Day" value={`Rs ${vehicle.fullDay}`} />
        </View>

        <View style={styles.estimateRow}>
          <Text style={styles.estimateText}>Estimated for selected duration</Text>
          <Text style={styles.estimateValue}>Rs {estimate}</Text>
        </View>

        <View style={styles.includedRow}>
          <Ionicons name="map-outline" size={16} color="#0F766E" />
          <Text style={styles.includedText}>{vehicle.includedKm} km complimentary</Text>
          <Text style={styles.etaText}>{vehicle.eta}</Text>
        </View>

        <TouchableOpacity
          style={[styles.bookBtn, unavailable && styles.bookBtnDisabled]}
          onPress={onBook}
          activeOpacity={0.85}
        >
          <Text style={styles.bookBtnText}>{unavailable ? 'Currently On Trip' : 'Book Vehicle'}</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Spec({ icon, text }) {
  return (
    <View style={styles.specItem}>
      <Ionicons name={icon} size={15} color="#596579" />
      <Text style={styles.specText}>{text}</Text>
    </View>
  );
}

function PriceBlock({ label, value }) {
  return (
    <View>
      <Text style={styles.priceLabel}>{label}</Text>
      <Text style={styles.priceValue}>{value}</Text>
    </View>
  );
}

function SupportCard({ icon, title, text }) {
  return (
    <View style={styles.supportCard}>
      <View style={styles.supportIcon}>
        <Ionicons name={icon} size={18} color="#0F766E" />
      </View>
      <Text style={styles.supportTitle}>{title}</Text>
      <Text style={styles.supportText}>{text}</Text>
    </View>
  );
}

function BookingModal({ visible, vehicle, form, duration, estimate, addOns, onChange, onClose, onConfirm }) {
  if (!vehicle) {
    return null;
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.bookingSheet}>
          <View style={styles.sheetHeader}>
            <View>
              <Text style={styles.sheetTitle}>Book {vehicle.model}</Text>
              <Text style={styles.sheetSub}>{vehicle.driver} arrives in {vehicle.eta}</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Ionicons name="close" size={22} color="#253044" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.sheetContent} showsVerticalScrollIndicator={false}>
            <View style={styles.summaryGrid}>
              <SummaryBox label="Estimated Price" value={`Rs ${estimate}`} />
              <SummaryBox label="Operating Window" value="16 hrs/day" />
              <SummaryBox label="Complimentary KM" value={`${vehicle.includedKm} km`} />
            </View>

            <FormInput label="Pickup Location" value={form.pickup} onChangeText={(value) => onChange('pickup', value)} />
            <FormInput label="Drop Location" value={form.drop} onChangeText={(value) => onChange('drop', value)} />

            <View style={styles.formGrid}>
              <FormInput label="Pickup Date" value={form.date} onChangeText={(value) => onChange('date', value)} icon="calendar-outline" />
              <FormInput label="Pickup Time" value={form.time} onChangeText={(value) => onChange('time', value)} icon="time-outline" />
              <FormInput label="Persons Traveling" value={form.persons} onChangeText={(value) => onChange('persons', value)} keyboardType="numeric" />
              <FormInput label="Vehicle Class" value={form.vehicleClass} onChangeText={(value) => onChange('vehicleClass', value)} />
              <FormInput label="Trip Duration" value={duration} editable={false} icon="chevron-down" />
              <FormInput label="Luggage Bags" value={form.bags} onChangeText={(value) => onChange('bags', value)} keyboardType="numeric" />
            </View>

            <Text style={styles.addOnTitle}>Helpful add-ons</Text>
            <View style={styles.addOnRow}>
              {addOns.map((item) => (
                <TouchableOpacity key={item} style={styles.addOnChip}>
                  <Ionicons name="add-circle-outline" size={15} color="#0F766E" />
                  <Text style={styles.addOnText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <FormInput
              label="Special Notes"
              value={form.notes}
              onChangeText={(value) => onChange('notes', value)}
              multiline
              placeholder="Any senior citizen support, luggage, or route request?"
            />
          </ScrollView>

          <View style={styles.sheetFooter}>
            <View>
              <Text style={styles.footerLabel}>Payable estimate</Text>
              <Text style={styles.footerPrice}>Rs {estimate}</Text>
            </View>
            <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function SummaryBox({ label, value }) {
  return (
    <View style={styles.summaryBox}>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </View>
  );
}

function FormInput({ label, value, onChangeText, icon, editable = true, multiline = false, keyboardType, placeholder }) {
  return (
    <View style={styles.formField}>
      <Text style={styles.formLabel}>{label}</Text>
      <View style={[styles.inputShell, multiline && styles.textAreaShell]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          multiline={multiline}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#7C8698"
          style={[styles.textInput, multiline && styles.textArea]}
        />
        {icon ? <Ionicons name={icon} size={18} color="#253044" /> : null}
      </View>
    </View>
  );
}

function ReceiptModal({ visible, data, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.receiptModal}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={44} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Vehicle Booked</Text>
          <Text style={styles.successSub}>Your driver and trip details are ready.</Text>

          <View style={styles.receiptCard}>
            <ReceiptLine label="Booking ID" value={data?.bookingId} />
            <ReceiptLine label="Vehicle" value={data?.vehicle} />
            <ReceiptLine label="Driver" value={data?.driver} />
            <ReceiptLine label="Reg No" value={data?.regNo} />
            <ReceiptLine label="Route" value={data?.route} />
            <ReceiptLine label="Schedule" value={data?.schedule} />
            <ReceiptLine label="Duration" value={data?.duration} />
            <ReceiptLine label="ETA" value={data?.eta} />
            <View style={styles.totalLine}>
              <Text style={styles.totalLabel}>Estimated Amount</Text>
              <Text style={styles.totalValue}>Rs {data?.amount}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.doneBtn} onPress={onClose}>
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function ReceiptLine({ label, value }) {
  return (
    <View style={styles.receiptRow}>
      <Text style={styles.receiptLabel}>{label}</Text>
      <Text style={styles.receiptValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7ED',
  },
  content: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 34,
    gap: 18,
  },
  header: {
    backgroundColor: '#F97316',
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 24,
    gap: 18,
  },
  headerCopy: {
    gap: 8,
  },
  kicker: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '900',
  },
  headerText: {
    color: '#FFF7ED',
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 620,
  },
  liveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECFDF5',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  liveText: {
    color: '#0F766E',
    fontWeight: '900',
    fontSize: 12,
  },
  searchPanel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 14,
    gap: 12,
  },
  routeRow: {
    gap: 8,
  },
  routeInput: {
    minHeight: 62,
    backgroundColor: '#FFF7ED',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FED7AA',
    paddingHorizontal: 12,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  routeCopy: {
    flex: 1,
  },
  inputLabel: {
    color: '#7C8698',
    fontSize: 11,
    fontWeight: '800',
  },
  routeTextInput: {
    color: '#172033',
    fontSize: 15,
    fontWeight: '900',
    padding: 0,
    marginTop: 4,
  },
  swapButton: {
    alignSelf: 'center',
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFF4E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -5,
    zIndex: 1,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  compactField: {
    flexGrow: 1,
    flexBasis: 145,
    backgroundColor: '#FFF7ED',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  compactLabel: {
    color: '#8A5A3D',
    fontSize: 11,
    fontWeight: '800',
  },
  compactValue: {
    color: '#172033',
    fontWeight: '900',
    marginTop: 3,
  },
  filterSection: {
    gap: 10,
  },
  filterRow: {
    gap: 10,
    paddingRight: 16,
  },
  filterBtn: {
    backgroundColor: 'rgba(255,255,255,0.24)',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  filterBtnActive: {
    backgroundColor: '#FFFFFF',
  },
  filterText: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  filterTextActive: {
    color: '#C2410C',
  },
  durationRow: {
    gap: 9,
    paddingRight: 16,
  },
  durationBtn: {
    backgroundColor: 'rgba(255,255,255,0.24)',
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  durationBtnActive: {
    backgroundColor: '#FFFFFF',
  },
  durationText: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  durationTextActive: {
    color: '#C2410C',
  },
  vehicleGrid: {
    paddingHorizontal: 16,
    gap: 18,
  },
  vehicleGridWide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  vehicleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFE1C2',
  },
  vehicleCardWide: {
    width: '48.7%',
  },
  imageWrap: {
    height: 205,
    backgroundColor: '#FFE1C2',
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9, 15, 27, 0.16)',
  },
  statusBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: '#F97316',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  busyBadge: {
    backgroundColor: '#7C2D12',
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  typeBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  typeBadgeText: {
    color: '#7C2D12',
    fontWeight: '900',
  },
  cardBody: {
    padding: 16,
    gap: 14,
  },
  titleRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  titleBox: {
    flex: 1,
  },
  vehicleName: {
    color: '#7C2D12',
    fontSize: 20,
    fontWeight: '900',
  },
  driverText: {
    color: '#596579',
    fontWeight: '700',
    marginTop: 5,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF3C7',
    borderRadius: 18,
    minWidth: 64,
    minHeight: 54,
    justifyContent: 'center',
  },
  ratingText: {
    color: '#111827',
    fontWeight: '900',
  },
  specRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#FFE1C2',
    paddingBottom: 14,
  },
  specItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minWidth: 98,
  },
  specText: {
    color: '#596579',
    fontWeight: '800',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#FED7AA',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#FFF7ED',
  },
  featureText: {
    color: '#9A3412',
    fontSize: 12,
    fontWeight: '800',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  priceLabel: {
    color: '#8D96A8',
    fontSize: 12,
    fontWeight: '800',
  },
  priceValue: {
    color: '#F97316',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 4,
  },
  estimateRow: {
    backgroundColor: '#FFF7ED',
    borderWidth: 1,
    borderColor: '#FED7AA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  estimateText: {
    color: '#9A3412',
    fontWeight: '800',
    flex: 1,
  },
  estimateValue: {
    color: '#C2410C',
    fontWeight: '900',
  },
  includedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  includedText: {
    flex: 1,
    color: '#0F766E',
    fontWeight: '900',
  },
  etaText: {
    color: '#596579',
    fontWeight: '800',
  },
  bookBtn: {
    minHeight: 52,
    backgroundColor: '#F97316',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  bookBtnDisabled: {
    backgroundColor: '#94A3B8',
  },
  bookBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
  servicePanel: {
    backgroundColor: '#172033',
    borderRadius: 8,
    padding: 16,
    gap: 14,
    marginHorizontal: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  supportGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  supportCard: {
    flexGrow: 1,
    flexBasis: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 13,
    gap: 8,
  },
  supportIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#CCFBF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportTitle: {
    color: '#172033',
    fontWeight: '900',
  },
  supportText: {
    color: '#596579',
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(12, 18, 31, 0.62)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  bookingSheet: {
    width: '100%',
    maxWidth: 620,
    maxHeight: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sheetHeader: {
    padding: 18,
    borderBottomWidth: 1,
    borderColor: '#E3E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  sheetTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '900',
  },
  sheetSub: {
    color: '#596579',
    marginTop: 5,
    fontWeight: '700',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent: {
    padding: 18,
    gap: 14,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  summaryBox: {
    flexGrow: 1,
    flexBasis: 155,
    borderWidth: 1,
    borderColor: '#FED7AA',
    backgroundColor: '#FFF7ED',
    borderRadius: 8,
    padding: 13,
    gap: 6,
  },
  summaryLabel: {
    color: '#9A3412',
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  summaryValue: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '900',
  },
  formGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  formField: {
    flexGrow: 1,
    flexBasis: 230,
    gap: 7,
  },
  formLabel: {
    color: '#253044',
    fontWeight: '900',
  },
  inputShell: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#D6DEE9',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textAreaShell: {
    minHeight: 92,
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
    padding: 0,
  },
  textArea: {
    minHeight: 76,
    textAlignVertical: 'top',
  },
  addOnTitle: {
    color: '#253044',
    fontWeight: '900',
    marginTop: 2,
  },
  addOnRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },
  addOnChip: {
    borderRadius: 999,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addOnText: {
    color: '#0F766E',
    fontWeight: '900',
    fontSize: 12,
  },
  sheetFooter: {
    borderTopWidth: 1,
    borderColor: '#E3E8F0',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  footerLabel: {
    color: '#7C8698',
    fontWeight: '800',
    fontSize: 12,
  },
  footerPrice: {
    color: '#F97316',
    fontSize: 22,
    fontWeight: '900',
  },
  confirmBtn: {
    backgroundColor: '#F97316',
    borderRadius: 8,
    paddingHorizontal: 18,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
  receiptModal: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 22,
    alignItems: 'center',
    gap: 14,
  },
  successCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '900',
  },
  successSub: {
    color: '#596579',
    textAlign: 'center',
    fontWeight: '700',
  },
  receiptCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 14,
    gap: 10,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  receiptLabel: {
    color: '#7C8698',
    fontWeight: '800',
  },
  receiptValue: {
    color: '#172033',
    fontWeight: '900',
    flex: 1,
    textAlign: 'right',
  },
  totalLine: {
    borderTopWidth: 1,
    borderColor: '#D6DEE9',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  totalLabel: {
    color: '#172033',
    fontWeight: '900',
  },
  totalValue: {
    color: '#F97316',
    fontSize: 18,
    fontWeight: '900',
  },
  doneBtn: {
    width: '100%',
    minHeight: 50,
    backgroundColor: '#172033',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
});
