import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";


export default function AuthScreen({ navigation }) {
  const [authVisible, setAuthVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [showIdTypePicker, setShowIdTypePicker] = useState(false);

  const [loginMobile, setLoginMobile] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [regMobile, setRegMobile] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regIdType, setRegIdType] = useState("Aadhaar");
  const [regIdNumber, setRegIdNumber] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [regPassword, setRegPassword] = useState("");

 

  const idTypes = ["Aadhaar", "PAN", "Driving License"];

  const openLogin = () => {
    setActiveTab("login");
    setAuthVisible(true);
  };

  const openSignup = () => {
    setActiveTab("register");
    setAuthVisible(true);
  };

  const handleLogin = () => {
    const validMobile = "9876543210";
    const validPassword = "123456";

    if (loginMobile === validMobile && loginPassword === validPassword) {
      setAuthVisible(false);
      Alert.alert("Success 🙏", "Login successful!", [
        {
          text: "OK",
          onPress: () => navigation.replace("MainTabs"),
        },
      ]);
      return;
    }

    Alert.alert(
      "Invalid Login",
      "Use dummy credentials:\nMobile: 9876543210\nPassword: 123456",
    );
  };

  const handleSendOtp = (fieldName) => {
    Alert.alert("OTP Sent", `Dummy OTP sent for ${fieldName}.`);
  };

  const handleRegister = () => {
    if (
      !fullName ||
      !regMobile ||
      !regEmail ||
      !regIdType ||
      !regIdNumber ||
      !familyMembers ||
      !travelDestination ||
      !address ||
      !dob ||
      !regPassword
    ) {
      Alert.alert("Error", "Please fill all signup fields.");
      return;
    }

    setAuthVisible(false);
    Alert.alert(
      "Registration Successful 🎉",
      "Dummy account created successfully.",
      [
        {
          text: "Continue",
          onPress: () => navigation.replace("MainTabs"),
        },
      ],
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#C94B13" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/rama.jpeg")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerTitle}>Ayodhya Dham</Text>
            <Text style={styles.headerSub}>Government of Uttar Pradesh</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTag}>🙏 जय श्री राम 🙏</Text>
          <Text style={styles.heroTitle}>Welcome to Ayodhya Dham</Text>
          <Text style={styles.heroText}>
            Your sacred digital companion for darshan booking, aarti slots,
            temple guidance, accommodations, spiritual journeys and devotional
            services.
          </Text>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={openLogin}
            activeOpacity={0.9}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={openSignup}
            activeOpacity={0.9}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      

        <View style={styles.inspirationWrap}>
          <Text style={styles.sectionTitle}>Ramrajya Inspiration</Text>

          <View style={styles.inspirationRow}>
            <View style={styles.inspirationCard}>
              <View style={styles.avatarCircle}>
                <Image
                  source={require("../../assets/modi.jpg")}
                  style={styles.leaderImage}
                />
              </View>

              <Text style={styles.inspirationName}>Shri Narendra Modi</Text>
              <Text style={styles.inspirationText}>
                Nation first, service first
              </Text>
            </View>

            <View style={styles.inspirationCard}>
              <View style={styles.avatarCircle}>
                <Image
                  source={require("../../assets/Yogi.webp")}
                  style={styles.leaderImage}
                />
              </View>

              <Text style={styles.inspirationName}>Shri Yogi Adityanath</Text>
              <Text style={styles.inspirationText}>
                Ayodhya development vision
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Experience Spiritual Tourism</Text>
          <Text style={styles.aboutText}>
            Discover temples, reserve accommodations, book guides, plan
            pilgrimages, participate in devotional events, and explore Ayodhya
            with a seamless spiritual travel experience.
          </Text>
        </View>
      </ScrollView>

      <Modal
        visible={authVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAuthVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "login" && styles.tabButtonActive,
                ]}
                onPress={() => setActiveTab("login")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "login" && styles.tabTextActive,
                  ]}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "register" && styles.tabButtonActive,
                ]}
                onPress={() => setActiveTab("register")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "register" && styles.tabTextActive,
                  ]}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalScroll}
            >
              {activeTab === "login" ? (
                <View>
                  <Text style={styles.modalTitle}>Login to Continue</Text>

                  <Text style={styles.fieldLabel}>Mobile Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor="#9A8B80"
                    keyboardType="phone-pad"
                    value={loginMobile}
                    onChangeText={setLoginMobile}
                    maxLength={10}
                  />

                  <Text style={styles.fieldLabel}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    placeholderTextColor="#9A8B80"
                    secureTextEntry
                    value={loginPassword}
                    onChangeText={setLoginPassword}
                  />

                  <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleLogin}
                  >
                    <Text style={styles.primaryButtonText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => setActiveTab("register")}
                  >
                    <Text style={styles.linkText}>New user? Register here</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <Text style={styles.modalTitle}>Register Pilgrim</Text>

                  <Text style={styles.fieldLabel}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter full name"
                    placeholderTextColor="#9A8B80"
                    value={fullName}
                    onChangeText={setFullName}
                  />

                  <Text style={styles.fieldLabel}>Mobile Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor="#9A8B80"
                    keyboardType="phone-pad"
                    value={regMobile}
                    onChangeText={setRegMobile}
                    maxLength={10}
                  />

                  <TouchableOpacity
                    style={styles.otpButton}
                    onPress={() => handleSendOtp("mobile number")}
                  >
                    <Text style={styles.otpButtonText}>Send OTP</Text>
                  </TouchableOpacity>

                  <Text style={styles.fieldLabel}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter email address"
                    placeholderTextColor="#9A8B80"
                    keyboardType="email-address"
                    value={regEmail}
                    onChangeText={setRegEmail}
                  />

                  <TouchableOpacity
                    style={styles.otpButton}
                    onPress={() => handleSendOtp("email address")}
                  >
                    <Text style={styles.otpButtonText}>Send OTP</Text>
                  </TouchableOpacity>

                  <Text style={styles.fieldLabel}>ID Type</Text>
                  <TouchableOpacity
                    style={styles.input}
                    onPress={() => setShowIdTypePicker(!showIdTypePicker)}
                    activeOpacity={0.9}
                  >
                    <Text style={styles.selectText}>{regIdType}</Text>
                  </TouchableOpacity>

                  {showIdTypePicker && (
                    <View style={styles.pickerBox}>
                      {idTypes.map((item) => (
                        <TouchableOpacity
                          key={item}
                          style={styles.pickerItem}
                          onPress={() => {
                            setRegIdType(item);
                            setShowIdTypePicker(false);
                          }}
                        >
                          <Text style={styles.pickerItemText}>{item}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}

                  <Text style={styles.fieldLabel}>ID Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter ID number"
                    placeholderTextColor="#9A8B80"
                    value={regIdNumber}
                    onChangeText={setRegIdNumber}
                  />

                  <Text style={styles.fieldLabel}>Family / Group Members</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter number of members"
                    placeholderTextColor="#9A8B80"
                    keyboardType="number-pad"
                    value={familyMembers}
                    onChangeText={setFamilyMembers}
                  />

                  <Text style={styles.fieldLabel}>Travel Destination</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter destination"
                    placeholderTextColor="#9A8B80"
                    value={travelDestination}
                    onChangeText={setTravelDestination}
                  />

                  <Text style={styles.fieldLabel}>Address</Text>
                  <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Enter address"
                    placeholderTextColor="#9A8B80"
                    value={address}
                    onChangeText={setAddress}
                    multiline
                  />

                  <Text style={styles.fieldLabel}>Date of Birth</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="#9A8B80"
                    value={dob}
                    onChangeText={setDob}
                  />

                  <Text style={styles.fieldLabel}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create password"
                    placeholderTextColor="#9A8B80"
                    secureTextEntry
                    value={regPassword}
                    onChangeText={setRegPassword}
                  />

                  <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={handleRegister}
                  >
                    <Text style={styles.primaryButtonText}>
                      Register Pilgrim
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => setActiveTab("login")}
                  >
                    <Text style={styles.linkText}>
                      Already have an account? Login
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setAuthVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF1E4",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 28,
  },
  header: {
    backgroundColor: "#C94B13",
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFF",
  },
  headerSub: {
    color: "#FFE7D6",
    fontSize: 13,
    marginTop: 4,
  },
  hero: {
    backgroundColor: "#D35400",
    margin: 16,
    borderRadius: 24,
    padding: 22,
  },
  heroTag: {
    color: "#FFF6EE",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  heroTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
  },
  heroText: {
    color: "#FFE7D6",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 14,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#FFF",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 14,
  },
  loginText: {
    color: "#D35400",
    fontWeight: "800",
    fontSize: 16,
  },
  signupButton: {
    borderWidth: 2,
    borderColor: "#FFF",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  signupText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#3E1908",
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  inspirationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  inspirationCard: {
    width: "48%",
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    elevation: 3,
  },
  leaderImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 14,
  },
  inspirationName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#3E1908",
    textAlign: "center",
  },
  inspirationText: {
    color: "#8A5A3D",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
  },
  aboutCard: {
    backgroundColor: "#FFF9F2",
    margin: 16,
    borderRadius: 20,
    padding: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#3E1908",
    marginBottom: 10,
  },
  aboutText: {
    color: "#8A5A3D",
    lineHeight: 24,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 14,
  },
  modalBox: {
    backgroundColor: "#FFF9F2",
    borderRadius: 24,
    padding: 16,
    maxHeight: "88%",
  },
  modalHeader: {
    flexDirection: "row",
    backgroundColor: "#FFE2C9",
    borderRadius: 18,
    padding: 6,
    marginBottom: 14,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#D35400",
  },
  tabText: {
    color: "#8A5A3D",
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: "#FFF",
  },
  modalScroll: {
    paddingBottom: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#3E1908",
    marginBottom: 14,
  },
  fieldLabel: {
    color: "#3E1908",
    fontWeight: "800",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "#F1D0B7",
    color: "#3E1908",
  },
  textArea: {
    minHeight: 86,
    textAlignVertical: "top",
  },
  selectText: {
    color: "#3E1908",
    fontWeight: "700",
  },
  pickerBox: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#F1D0B7",
    marginTop: 8,
    overflow: "hidden",
  },
  pickerItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F5E2D4",
  },
  pickerItemText: {
    color: "#3E1908",
    fontWeight: "700",
  },
  otpButton: {
    backgroundColor: "#FFE2C9",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  otpButtonText: {
    color: "#C94B13",
    fontWeight: "900",
  },
  primaryButton: {
    backgroundColor: "#D35400",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 18,
  },
  primaryButtonText: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 15,
  },
  linkButton: {
    alignItems: "center",
    marginTop: 14,
  },
  linkText: {
    color: "#C94B13",
    fontWeight: "800",
  },
  cancelButton: {
    alignItems: "center",
    marginTop: 12,
    paddingVertical: 10,
  },
  cancelButtonText: {
    color: "#8A5A3D",
    fontWeight: "800",
  },
});
