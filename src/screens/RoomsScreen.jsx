import React, { useMemo, useState } from "react";
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
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const stayImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
];

const filters = ["All", "Premium", "Guest House", "Homestay", "Budget", "Near temple"];
const sortChips = ["Best rated", "Lowest price", "Closest", "Family friendly"];
const roomClasses = ["Premium", "Deluxe", "Standard", "Homestay"];

const stays = [
  {
    id: "spiritual-guest-house",
    name: "Spiritual Guest House",
    category: "Guest House",
    tag: "Premium",
    area: "Ram Path, Ayodhya",
    distance: "0.5 km from temple",
    description: "Peaceful stay with a prayer room, fresh meals, and calm family rooms near the main darshan route.",
    rating: 4.8,
    reviews: 234,
    image: stayImages[0],
    price: 2400,
    mrp: 3200,
    taxes: 286,
    roomsLeft: 2,
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    amenities: ["Free WiFi", "AC Rooms", "Restaurant", "24/7 Water", "Prayer Room"],
    rooms: [
      { name: "Premium", price: 8000, left: 2 },
      { name: "Deluxe", price: 4000, left: 4 },
      { name: "Standard", price: 2000, left: 6 },
      { name: "Homestay", price: 1500, left: 8 },
    ],
    perks: ["Free cancellation before check-in", "Pay at stay available", "Family verified"],
  },
  {
    id: "rama-darshan-hotel",
    name: "Rama Darshan Hotel",
    category: "Hotel",
    tag: "Premium",
    area: "Near Hanuman Garhi",
    distance: "1.2 km from temple",
    description: "Modern hotel with room service, lift access, parking, and quick cab support for senior pilgrims.",
    rating: 4.5,
    reviews: 156,
    image: stayImages[1],
    price: 2200,
    mrp: 2900,
    taxes: 264,
    roomsLeft: 3,
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    amenities: ["Free WiFi", "AC Rooms", "Room Service", "Parking"],
    rooms: [
      { name: "Premium", price: 8500, left: 3 },
      { name: "Deluxe", price: 4500, left: 5 },
      { name: "Standard", price: 2200, left: 7 },
      { name: "Homestay", price: 1600, left: 9 },
    ],
    perks: ["Breakfast add-on", "Lift access", "Parking included"],
  },
  {
    id: "sarayu-river-residency",
    name: "Sarayu River Residency",
    category: "Premium",
    tag: "River View",
    area: "Naya Ghat",
    distance: "1.8 km from temple",
    description: "Premium rooms with Sarayu-facing lounge, clean linen, buffet breakfast, and evening aarti access.",
    rating: 4.9,
    reviews: 421,
    image: stayImages[2],
    price: 3600,
    mrp: 4800,
    taxes: 432,
    roomsLeft: 4,
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    amenities: ["Breakfast", "River View", "AC Rooms", "Parking", "Concierge"],
    rooms: [
      { name: "Premium", price: 9200, left: 2 },
      { name: "Deluxe", price: 5600, left: 4 },
      { name: "Standard", price: 3600, left: 5 },
      { name: "Homestay", price: 2400, left: 6 },
    ],
    perks: ["Top rated", "Couple friendly", "Aarti route support"],
  },
  {
    id: "janaki-homestay",
    name: "Janaki Homestay",
    category: "Homestay",
    tag: "Family",
    area: "Saryu Ghat Road",
    distance: "2.1 km from temple",
    description: "Warm family homestay with home-style food, shared courtyard, and flexible check-in for pilgrims.",
    rating: 4.6,
    reviews: 118,
    image: stayImages[3],
    price: 1400,
    mrp: 1900,
    taxes: 168,
    roomsLeft: 5,
    checkIn: "11:00 AM",
    checkOut: "10:00 AM",
    amenities: ["Home Food", "WiFi", "Family Rooms", "Laundry"],
    rooms: [
      { name: "Premium", price: 4200, left: 1 },
      { name: "Deluxe", price: 2600, left: 3 },
      { name: "Standard", price: 1400, left: 5 },
      { name: "Homestay", price: 1200, left: 7 },
    ],
    perks: ["Home cooked meals", "Quiet locality", "Budget friendly"],
  },
  {
    id: "pilgrim-seva-sadan",
    name: "Pilgrim Seva Sadan",
    category: "Budget",
    tag: "Value",
    area: "Faizabad Road",
    distance: "3.0 km from temple",
    description: "Clean budget rooms for short stays with lockers, drinking water, and easy group allocation.",
    rating: 4.2,
    reviews: 89,
    image: stayImages[4],
    price: 850,
    mrp: 1200,
    taxes: 102,
    roomsLeft: 0,
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    amenities: ["Locker", "Drinking Water", "Shared Bath", "Dorm Beds"],
    rooms: [
      { name: "Premium", price: 2200, left: 0 },
      { name: "Deluxe", price: 1600, left: 0 },
      { name: "Standard", price: 850, left: 0 },
      { name: "Homestay", price: 700, left: 0 },
    ],
    perks: ["Group beds", "Locker available", "Budget pick"],
  },
];

export default function RoomsScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 760;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Best rated");
  const [selectedStay, setSelectedStay] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("Premium");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [search, setSearch] = useState({
    destination: "Ayodhya near Ram Mandir",
    checkIn: "29-05-2026",
    checkOut: "30-05-2026",
    guests: "2 adults",
    rooms: "1 room",
    coupon: "AYODHYA15",
  });

  const filteredStays = useMemo(() => {
    const base =
      selectedFilter === "All"
        ? stays
        : stays.filter(
            (stay) =>
              stay.category === selectedFilter ||
              stay.tag === selectedFilter ||
              (selectedFilter === "Near temple" && stay.distance.startsWith("0."))
          );

    return [...base].sort((a, b) => {
      if (sortBy === "Lowest price") return a.price - b.price;
      if (sortBy === "Closest") return Number.parseFloat(a.distance) - Number.parseFloat(b.distance);
      if (sortBy === "Family friendly") return Number(b.category !== "Homestay") - Number(a.category !== "Homestay");
      return b.rating - a.rating;
    });
  }, [selectedFilter, sortBy]);

  const updateSearch = (key, value) => {
    setSearch((current) => ({ ...current, [key]: value }));
  };

  const openBooking = (stay) => {
    if (stay.roomsLeft < 1) {
      return;
    }
    setSelectedStay(stay);
    setSelectedRoom(stay.rooms.find((room) => room.left > 0)?.name || "Premium");
    setAgreePolicy(false);
  };

  const activeRoom = selectedStay?.rooms.find((room) => room.name === selectedRoom);
  const nightlyPrice = activeRoom?.price || selectedStay?.price || 0;
  const taxAmount = Math.round(nightlyPrice * 0.12);
  const offerAmount = Math.round(nightlyPrice * 0.15);
  const payableAmount = nightlyPrice + taxAmount - offerAmount;

  const confirmBooking = () => {
    if (!selectedStay || !agreePolicy) {
      return;
    }

    setReceiptData({
      bookingId: `AYO-STAY-${Date.now().toString().slice(-6)}`,
      stay: selectedStay.name,
      room: selectedRoom,
      dates: `${search.checkIn} to ${search.checkOut}`,
      guests: `${search.guests}, ${search.rooms}`,
      address: selectedStay.area,
      amount: payableAmount,
      checkIn: selectedStay.checkIn,
      checkOut: selectedStay.checkOut,
    });
    setSelectedStay(null);
    setReceiptVisible(true);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.heroTitle}>Book a Cottage</Text>
            <Text style={styles.heroText}>
              Find premium cottages, guest houses, homestays, and rooms near temple routes.
            </Text>
          </View>
        </View>

        {/* <View style={styles.searchCard}>
        <SearchField
          label="Destination"
          value={search.destination}
          onChangeText={(value) => updateSearch("destination", value)}
          icon="search-outline"
        />
        <View style={styles.searchGrid}>
          <SearchField label="Check-in" value={search.checkIn} onChangeText={(value) => updateSearch("checkIn", value)} icon="calendar-outline" compact />
          <SearchField label="Check-out" value={search.checkOut} onChangeText={(value) => updateSearch("checkOut", value)} icon="calendar-outline" compact />
          <SearchField label="Guests" value={search.guests} onChangeText={(value) => updateSearch("guests", value)} icon="people-outline" compact />
          <SearchField label="Rooms" value={search.rooms} onChangeText={(value) => updateSearch("rooms", value)} icon="bed-outline" compact />
        </View>
        <View style={styles.couponRow}>
          <Ionicons name="pricetag-outline" size={18} color="#C2410C" />
          <Text style={styles.couponText}>Coupon {search.coupon} applied for 15% off on selected stays</Text>
        </View>
      </View> */}

      <View style={styles.controlBlock}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {filters.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.filterButton, selectedFilter === item && styles.activeFilter]}
              onPress={() => setSelectedFilter(item)}
            >
              <Text style={[styles.filterText, selectedFilter === item && styles.activeFilterText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.sortRow}>
          {sortChips.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.sortButton, sortBy === item && styles.activeSort]}
              onPress={() => setSortBy(item)}
            >
              <Ionicons name={sortIcon(item)} size={15} color={sortBy === item ? "#C2410C" : "#FFFFFF"} />
              <Text style={[styles.sortText, sortBy === item && styles.activeSortText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      </View>

      <View style={styles.resultHeader}>
        <View>
          <Text style={styles.resultTitle}>{filteredStays.length} stays available</Text>
          <Text style={styles.resultSub}>Real-time room count, taxes, offers, and cancellation policy</Text>
        </View>
        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="map-outline" size={17} color="#172033" />
          <Text style={styles.mapText}>Map</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.stayGrid, isWide && styles.stayGridWide]}>
        {filteredStays.map((stay) => (
          <StayCard key={stay.id} stay={stay} onBook={() => openBooking(stay)} isWide={isWide} />
        ))}
      </View>

      <View style={styles.trustPanel}>
        <Text style={styles.trustTitle}>Why book here</Text>
        <View style={styles.trustGrid}>
          <TrustCard icon="shield-checkmark" title="Verified rooms" text="Photos, amenities, and availability stay visible before payment." />
          <TrustCard icon="wallet" title="Pay options" text="Reserve now, pay online, or pay at stay for eligible rooms." />
          <TrustCard icon="receipt" title="Transparent bill" text="Room price, discount, taxes, and cancellation terms are shown clearly." />
          <TrustCard icon="call" title="Stay support" text="Help desk can assist with check-in, directions, and special requests." />
        </View>
      </View>

      <BookingSheet
        visible={Boolean(selectedStay)}
        stay={selectedStay}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        search={search}
        updateSearch={updateSearch}
        agreePolicy={agreePolicy}
        setAgreePolicy={setAgreePolicy}
        nightlyPrice={nightlyPrice}
        taxAmount={taxAmount}
        offerAmount={offerAmount}
        payableAmount={payableAmount}
        onClose={() => setSelectedStay(null)}
        onConfirm={confirmBooking}
      />

      <ReceiptModal visible={receiptVisible} data={receiptData} onClose={() => setReceiptVisible(false)} />
    </ScrollView>
  );
}

function StayCard({ stay, onBook, isWide }) {
  const soldOut = stay.roomsLeft < 1;
  const discount = Math.round(((stay.mrp - stay.price) / stay.mrp) * 100);

  return (
    <View style={[styles.stayCard, isWide && styles.stayCardWide]}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: stay.image }} style={styles.stayImage} resizeMode="cover" />
        <View style={styles.imageOverlay} />
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={13} color="#FBBF24" />
          <Text style={styles.ratingText}>{stay.rating}</Text>
          <Text style={styles.reviewText}>({stay.reviews})</Text>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{stay.tag}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.titleRow}>
          <View style={styles.titleBox}>
            <Text style={styles.stayName}>{stay.name}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={15} color="#596579" />
              <Text style={styles.locationText}>{stay.distance} - {stay.area}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart-outline" size={20} color="#596579" />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{stay.description}</Text>

        <View style={styles.amenityRow}>
          {stay.amenities.slice(0, 4).map((item) => (
            <View key={item} style={styles.amenityPill}>
              <Ionicons name={amenityIcon(item)} size={13} color="#0F766E" />
              <Text style={styles.amenityText}>{item}</Text>
            </View>
          ))}
          {stay.amenities.length > 4 ? (
            <View style={styles.amenityPill}>
              <Text style={styles.amenityText}>+{stay.amenities.length - 4} more</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.roomPanel}>
          <View style={styles.roomPanelHeader}>
            <Text style={styles.roomPanelTitle}>Room types</Text>
            <Text style={styles.checkText}>Check-in {stay.checkIn}</Text>
          </View>
          {stay.rooms.map((room) => (
            <View key={room.name} style={styles.roomLine}>
              <View style={styles.roomNameRow}>
                <Ionicons name="bed-outline" size={14} color="#253044" />
                <Text style={styles.roomName}>{room.name}</Text>
              </View>
              <View style={styles.roomRateRow}>
                <Text style={styles.roomPrice}>Rs {room.price}/night</Text>
                <View style={[styles.leftBadge, room.left < 1 && styles.soldBadge]}>
                  <Text style={styles.leftText}>{room.left > 0 ? `${room.left} left` : "Sold"}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.perkRow}>
          {stay.perks.slice(0, 2).map((perk) => (
            <View key={perk} style={styles.perkPill}>
              <Ionicons name="checkmark-circle" size={14} color="#16A34A" />
              <Text style={styles.perkText}>{perk}</Text>
            </View>
          ))}
        </View>

        <View style={styles.priceFooter}>
          <View>
            <View style={styles.priceTop}>
              <Text style={styles.mrpText}>Rs {stay.mrp}</Text>
              <Text style={styles.discountText}>{discount}% off</Text>
            </View>
            <Text style={styles.mainPrice}>Rs {stay.price}</Text>
            <Text style={styles.taxText}>+ Rs {stay.taxes} taxes and fees per night</Text>
          </View>
          <View style={styles.actionCol}>
            <Text style={[styles.roomsLeftText, soldOut && styles.soldText]}>
              {soldOut ? "Sold out" : `${stay.roomsLeft} rooms left`}
            </Text>
            <TouchableOpacity
              style={[styles.bookButton, soldOut && styles.disabledButton]}
              disabled={soldOut}
              onPress={onBook}
            >
              <Text style={styles.bookButtonText}>{soldOut ? "Unavailable" : "Book room"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function SearchField({ label, value, onChangeText, icon, compact }) {
  return (
    <View style={[styles.searchField, compact && styles.compactSearchField]}>
      <Text style={styles.searchLabel}>{label}</Text>
      <View style={styles.searchInputRow}>
        <Ionicons name={icon} size={17} color="#C2410C" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.searchInput}
          placeholderTextColor="#7C8698"
        />
      </View>
    </View>
  );
}

function BookingSheet({
  visible,
  stay,
  selectedRoom,
  setSelectedRoom,
  search,
  updateSearch,
  agreePolicy,
  setAgreePolicy,
  nightlyPrice,
  taxAmount,
  offerAmount,
  payableAmount,
  onClose,
  onConfirm,
}) {
  if (!stay) {
    return null;
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.bookingSheet}>
          <View style={styles.sheetHeader}>
            <View style={styles.sheetTitleBox}>
              <Text style={styles.sheetTitle}>Book room at {stay.name}</Text>
              <Text style={styles.sheetSub}>{stay.distance} - {stay.area}</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Ionicons name="close" size={22} color="#253044" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.sheetContent} showsVerticalScrollIndicator={false}>
            <Image source={{ uri: stay.image }} style={styles.sheetImage} resizeMode="cover" />

            <View style={styles.summaryGrid}>
              <SummaryBox label="Rating" value={`${stay.rating} / 5`} />
              <SummaryBox label="Check-in" value={stay.checkIn} />
              <SummaryBox label="Check-out" value={stay.checkOut} />
            </View>

            <Text style={styles.sheetSectionTitle}>Select room</Text>
            <View style={styles.roomSelectGrid}>
              {stay.rooms.map((room) => {
                const disabled = room.left < 1;
                const active = selectedRoom === room.name;
                return (
                  <TouchableOpacity
                    key={room.name}
                    disabled={disabled}
                    style={[styles.roomOption, active && styles.roomOptionActive, disabled && styles.roomOptionDisabled]}
                    onPress={() => setSelectedRoom(room.name)}
                  >
                    <View>
                      <Text style={[styles.roomOptionName, active && styles.roomOptionNameActive]}>{room.name}</Text>
                      <Text style={[styles.roomOptionMeta, active && styles.roomOptionMetaActive]}>
                        {disabled ? "Sold out" : `${room.left} rooms left`}
                      </Text>
                    </View>
                    <Text style={[styles.roomOptionPrice, active && styles.roomOptionPriceActive]}>Rs {room.price}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.formGrid}>
              <SheetInput label="Check-in Date" value={search.checkIn} onChangeText={(value) => updateSearch("checkIn", value)} icon="calendar-outline" />
              <SheetInput label="Check-out Date" value={search.checkOut} onChangeText={(value) => updateSearch("checkOut", value)} icon="calendar-outline" />
              <SheetInput label="Guests" value={search.guests} onChangeText={(value) => updateSearch("guests", value)} icon="people-outline" />
              <SheetInput label="Rooms" value={search.rooms} onChangeText={(value) => updateSearch("rooms", value)} icon="bed-outline" />
              <SheetInput label="Mobile Number" value="+91 " onChangeText={() => {}} icon="call-outline" />
              <SheetInput label="Special Request" value="" onChangeText={() => {}} icon="sparkles-outline" placeholder="Early check-in, senior support, extra bedding" />
            </View>

            <View style={styles.priceBreakup}>
              <Text style={styles.sheetSectionTitle}>Price breakup</Text>
              <BillLine label={`${selectedRoom} room x 1 night`} value={`Rs ${nightlyPrice}`} />
              <BillLine label="Taxes and service fees" value={`Rs ${taxAmount}`} />
              <BillLine label={`Coupon ${search.coupon}`} value={`- Rs ${offerAmount}`} success />
              <View style={styles.payableLine}>
                <Text style={styles.payableLabel}>Payable now</Text>
                <Text style={styles.payableValue}>Rs {payableAmount}</Text>
              </View>
            </View>

            <View style={styles.policyBox}>
              <Ionicons name="information-circle-outline" size={19} color="#C2410C" />
              <Text style={styles.policyText}>
                50% refund will be provided if the booking is cancelled before check-in time. Valid photo ID is required.
              </Text>
            </View>

            <TouchableOpacity style={styles.agreeRow} onPress={() => setAgreePolicy(!agreePolicy)}>
              <Ionicons name={agreePolicy ? "checkbox" : "square-outline"} size={22} color={agreePolicy ? "#16A34A" : "#7C8698"} />
              <Text style={styles.agreeText}>I agree to the refundable cancellation policy.</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.sheetFooter}>
            <View>
              <Text style={styles.footerLabel}>Total amount</Text>
              <Text style={styles.footerPrice}>Rs {payableAmount}</Text>
            </View>
            <TouchableOpacity
              style={[styles.confirmBtn, !agreePolicy && styles.confirmBtnDisabled]}
              disabled={!agreePolicy}
              onPress={onConfirm}
            >
              <Text style={styles.confirmText}>Confirm booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function ReceiptModal({ visible, data, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.receiptModal}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={42} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Stay booked</Text>
          <Text style={styles.successSub}>Your accommodation booking is confirmed.</Text>

          <View style={styles.receiptCard}>
            <ReceiptLine label="Booking ID" value={data?.bookingId} />
            <ReceiptLine label="Stay" value={data?.stay} />
            <ReceiptLine label="Room" value={data?.room} />
            <ReceiptLine label="Dates" value={data?.dates} />
            <ReceiptLine label="Guests" value={data?.guests} />
            <ReceiptLine label="Address" value={data?.address} />
            <ReceiptLine label="Check-in" value={data?.checkIn} />
            <ReceiptLine label="Check-out" value={data?.checkOut} />
            <View style={styles.totalLine}>
              <Text style={styles.totalLabel}>Amount paid</Text>
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

function SummaryBox({ label, value }) {
  return (
    <View style={styles.summaryBox}>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </View>
  );
}

function SheetInput({ label, value, onChangeText, icon, placeholder }) {
  return (
    <View style={styles.sheetInputField}>
      <Text style={styles.sheetInputLabel}>{label}</Text>
      <View style={styles.sheetInputShell}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.sheetInput}
          placeholder={placeholder}
          placeholderTextColor="#7C8698"
        />
        <Ionicons name={icon} size={18} color="#253044" />
      </View>
    </View>
  );
}

function BillLine({ label, value, success }) {
  return (
    <View style={styles.billLine}>
      <Text style={styles.billLabel}>{label}</Text>
      <Text style={[styles.billValue, success && styles.billSuccess]}>{value}</Text>
    </View>
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

function TrustCard({ icon, title, text }) {
  return (
    <View style={styles.trustCard}>
      <View style={styles.trustIcon}>
        <Ionicons name={icon} size={18} color="#0F766E" />
      </View>
      <Text style={styles.trustCardTitle}>{title}</Text>
      <Text style={styles.trustCardText}>{text}</Text>
    </View>
  );
}

function amenityIcon(item) {
  if (item.includes("WiFi")) return "wifi-outline";
  if (item.includes("Food") || item.includes("Restaurant") || item.includes("Breakfast")) return "restaurant-outline";
  if (item.includes("Parking")) return "car-outline";
  if (item.includes("AC")) return "snow-outline";
  if (item.includes("Room Service")) return "notifications-outline";
  if (item.includes("Prayer")) return "flower-outline";
  if (item.includes("Water")) return "water-outline";
  if (item.includes("View")) return "image-outline";
  if (item.includes("Concierge")) return "person-outline";
  if (item.includes("Laundry")) return "shirt-outline";
  if (item.includes("Locker")) return "lock-closed-outline";
  return "checkmark-circle-outline";
}

function sortIcon(item) {
  if (item === "Lowest price") return "trending-down-outline";
  if (item === "Closest") return "navigate-outline";
  if (item === "Family friendly") return "people-outline";
  return "star-outline";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
  },
  content: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 36,
    gap: 16,
  },
  hero: {
    backgroundColor: "#F97316",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 24,
    gap: 18,
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "flex-start",
  },
  kicker: {
    color: "#F97316",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 0,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "900",
  },
  heroText: {
    color: "#FFF7ED",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "800",
    marginTop: 6,
    maxWidth: 680,
  },
  helpPill: {
    backgroundColor: "#ECFDF5",
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  helpText: {
    color: "#0F766E",
    fontWeight: "900",
    fontSize: 12,
  },
  searchCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 14,
    gap: 12,
  },
  searchGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  searchField: {
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FED7AA",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  compactSearchField: {
    flexGrow: 1,
    flexBasis: 145,
  },
  searchLabel: {
    color: "#7C8698",
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  searchInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: "#172033",
    fontSize: 15,
    fontWeight: "900",
    padding: 0,
  },
  couponRow: {
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    padding: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  couponText: {
    flex: 1,
    color: "#9A3412",
    fontWeight: "900",
    fontSize: 12,
  },
  controlBlock: {
    gap: 10,
  },
  filterRow: {
    gap: 10,
    paddingRight: 16,
  },
  filterButton: {
    backgroundColor: "rgba(255,255,255,0.24)",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  activeFilter: {
    backgroundColor: "#FFFFFF",
  },
  filterText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  activeFilterText: {
    color: "#C2410C",
  },
  sortRow: {
    gap: 9,
    paddingRight: 16,
  },
  sortButton: {
    backgroundColor: "rgba(255,255,255,0.24)",
    borderRadius: 14,
    paddingHorizontal: 13,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  activeSort: {
    backgroundColor: "#FFFFFF",
  },
  sortText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 12,
  },
  activeSortText: {
    color: "#C2410C",
  },
  resultHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  resultTitle: {
    color: "#172033",
    fontSize: 19,
    fontWeight: "900",
  },
  resultSub: {
    color: "#596579",
    marginTop: 3,
    fontWeight: "700",
    maxWidth: 540,
  },
  mapButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E3E8F0",
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  mapText: {
    color: "#172033",
    fontWeight: "900",
  },
  stayGrid: {
    paddingHorizontal: 16,
    gap: 18,
  },
  stayGridWide: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  stayCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#FFE1C2",
  },
  stayCardWide: {
    width: "48.7%",
  },
  imageWrap: {
    height: 210,
    backgroundColor: "#FFE1C2",
  },
  stayImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(8, 13, 24, 0.12)",
  },
  ratingBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "#FEF3C7",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#172033",
    fontWeight: "900",
  },
  reviewText: {
    color: "#7C8698",
    fontWeight: "800",
  },
  categoryBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryText: {
    color: "#172033",
    fontWeight: "900",
  },
  cardBody: {
    padding: 16,
    gap: 14,
  },
  titleRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  titleBox: {
    flex: 1,
    gap: 6,
  },
  stayName: {
    color: "#7C2D12",
    fontSize: 20,
    fontWeight: "900",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    color: "#596579",
    fontWeight: "700",
    flex: 1,
  },
  heartButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    color: "#596579",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
  },
  amenityRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  amenityPill: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FED7AA",
    backgroundColor: "#FFF7ED",
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  amenityText: {
    color: "#9A3412",
    fontSize: 12,
    fontWeight: "800",
  },
  roomPanel: {
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    padding: 13,
    gap: 10,
  },
  roomPanelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  roomPanelTitle: {
    color: "#111827",
    fontWeight: "900",
  },
  checkText: {
    color: "#596579",
    fontWeight: "700",
    fontSize: 12,
  },
  roomLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderTopWidth: 1,
    borderColor: "#E7DED3",
    paddingTop: 9,
  },
  roomNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  roomName: {
    color: "#253044",
    fontWeight: "900",
  },
  roomRateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  roomPrice: {
    color: "#EA580C",
    fontWeight: "900",
  },
  leftBadge: {
    backgroundColor: "#F59E0B",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  soldBadge: {
    backgroundColor: "#94A3B8",
  },
  leftText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },
  perkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  perkPill: {
    backgroundColor: "#ECFDF5",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  perkText: {
    color: "#0F766E",
    fontSize: 12,
    fontWeight: "900",
  },
  priceFooter: {
    borderTopWidth: 1,
    borderColor: "#FFE1C2",
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  priceTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mrpText: {
    color: "#94A3B8",
    textDecorationLine: "line-through",
    fontWeight: "800",
  },
  discountText: {
    color: "#16A34A",
    fontWeight: "900",
    fontSize: 12,
  },
  mainPrice: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 3,
  },
  taxText: {
    color: "#7C8698",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },
  actionCol: {
    minWidth: 118,
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 9,
  },
  roomsLeftText: {
    color: "#C2410C",
    fontWeight: "900",
    fontSize: 12,
  },
  soldText: {
    color: "#64748B",
  },
  bookButton: {
    minHeight: 46,
    backgroundColor: "#F97316",
    borderRadius: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#94A3B8",
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  trustPanel: {
    backgroundColor: "#172033",
    borderRadius: 8,
    padding: 16,
    gap: 14,
    marginHorizontal: 16,
  },
  trustTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },
  trustGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  trustCard: {
    flexGrow: 1,
    flexBasis: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 13,
    gap: 8,
  },
  trustIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#CCFBF1",
    alignItems: "center",
    justifyContent: "center",
  },
  trustCardTitle: {
    color: "#172033",
    fontWeight: "900",
  },
  trustCardText: {
    color: "#596579",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(12, 18, 31, 0.62)",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  bookingSheet: {
    width: "100%",
    maxWidth: 640,
    maxHeight: "92%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  sheetHeader: {
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#E3E8F0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  sheetTitleBox: {
    flex: 1,
  },
  sheetTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  sheetSub: {
    color: "#596579",
    marginTop: 5,
    fontWeight: "700",
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  sheetContent: {
    padding: 18,
    gap: 14,
  },
  sheetImage: {
    height: 160,
    borderRadius: 8,
    backgroundColor: "#DDE6F3",
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  summaryBox: {
    flexGrow: 1,
    flexBasis: 145,
    borderWidth: 1,
    borderColor: "#FED7AA",
    backgroundColor: "#FFF7ED",
    borderRadius: 8,
    padding: 12,
    gap: 5,
  },
  summaryLabel: {
    color: "#9A3412",
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  summaryValue: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "900",
  },
  sheetSectionTitle: {
    color: "#111827",
    fontWeight: "900",
    fontSize: 16,
  },
  roomSelectGrid: {
    gap: 10,
  },
  roomOption: {
    borderWidth: 1,
    borderColor: "#D6DEE9",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  roomOptionActive: {
    backgroundColor: "#172033",
    borderColor: "#172033",
  },
  roomOptionDisabled: {
    backgroundColor: "#F1F5F9",
  },
  roomOptionName: {
    color: "#172033",
    fontWeight: "900",
  },
  roomOptionNameActive: {
    color: "#FFFFFF",
  },
  roomOptionMeta: {
    color: "#7C8698",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 3,
  },
  roomOptionMetaActive: {
    color: "#DDE6F3",
  },
  roomOptionPrice: {
    color: "#EA580C",
    fontWeight: "900",
  },
  roomOptionPriceActive: {
    color: "#FFFFFF",
  },
  formGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  sheetInputField: {
    flexGrow: 1,
    flexBasis: 230,
    gap: 7,
  },
  sheetInputLabel: {
    color: "#253044",
    fontWeight: "900",
  },
  sheetInputShell: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: "#D6DEE9",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetInput: {
    flex: 1,
    color: "#111827",
    fontSize: 15,
    fontWeight: "700",
    padding: 0,
  },
  priceBreakup: {
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    padding: 13,
    gap: 10,
  },
  billLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  billLabel: {
    color: "#596579",
    fontWeight: "800",
    flex: 1,
  },
  billValue: {
    color: "#172033",
    fontWeight: "900",
  },
  billSuccess: {
    color: "#16A34A",
  },
  payableLine: {
    borderTopWidth: 1,
    borderColor: "#D6DEE9",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  payableLabel: {
    color: "#111827",
    fontWeight: "900",
  },
  payableValue: {
    color: "#F97316",
    fontSize: 18,
    fontWeight: "900",
  },
  policyBox: {
    backgroundColor: "#FFF7ED",
    borderWidth: 1,
    borderColor: "#FED7AA",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  policyText: {
    flex: 1,
    color: "#9A3412",
    fontWeight: "800",
    lineHeight: 20,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  agreeText: {
    flex: 1,
    color: "#253044",
    fontWeight: "800",
  },
  sheetFooter: {
    borderTopWidth: 1,
    borderColor: "#E3E8F0",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  footerLabel: {
    color: "#7C8698",
    fontWeight: "800",
    fontSize: 12,
  },
  footerPrice: {
    color: "#F97316",
    fontSize: 22,
    fontWeight: "900",
  },
  confirmBtn: {
    backgroundColor: "#F97316",
    borderRadius: 8,
    paddingHorizontal: 18,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBtnDisabled: {
    backgroundColor: "#CBD5E1",
  },
  confirmText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  receiptModal: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 22,
    alignItems: "center",
    gap: 14,
  },
  successCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
  },
  successSub: {
    color: "#596579",
    textAlign: "center",
    fontWeight: "700",
  },
  receiptCard: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    padding: 14,
    gap: 10,
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  receiptLabel: {
    color: "#7C8698",
    fontWeight: "800",
  },
  receiptValue: {
    color: "#172033",
    fontWeight: "900",
    flex: 1,
    textAlign: "right",
  },
  totalLine: {
    borderTopWidth: 1,
    borderColor: "#D6DEE9",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  totalLabel: {
    color: "#172033",
    fontWeight: "900",
  },
  totalValue: {
    color: "#F97316",
    fontSize: 18,
    fontWeight: "900",
  },
  doneBtn: {
    width: "100%",
    minHeight: 50,
    backgroundColor: "#172033",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  doneBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
});
