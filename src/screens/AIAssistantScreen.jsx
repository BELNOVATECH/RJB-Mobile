import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AIAssistantScreen() {
  const [mode, setMode] = useState('chat');
  const [message, setMessage] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');
  const [group, setGroup] = useState('');
  const [planVisible, setPlanVisible] = useState(false);

  const [chat, setChat] = useState([
    {
      type: 'bot',
      text: 'Jai Shri Ram. I can help with darshan, guides, rooms, vehicles, aarti timings, crowd windows, and budget planning.',
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', text: message };
    const lower = message.toLowerCase();

    let reply = 'I can help with itinerary planning, smart guide allocation, room and vehicle recommendations, crowd timing, and budget optimization.';

    if (lower.includes('room')) reply = 'AI room recommendation checks tourist budget, family size, distance from temple, luxury preference, and stay duration before suggesting cottages or guest houses.';
    if (lower.includes('guide')) reply = 'AI recommendation: choose a verified guide by language, specialization, rating, and today availability.';
    if (lower.includes('darshan')) reply = 'Best visiting time: early morning around 6:00 AM, with buffer time for security and crowd movement.';
    if (lower.includes('vehicle')) reply = 'Vehicle recommendation: e-rickshaw for short trips, sedan for families, SUV or mini bus for groups.';
    if (lower.includes('budget')) reply = 'Budget tip: combine darshan in the morning, shared guide slots, and e-rickshaw hops to reduce total trip cost.';
    if (lower.includes('crowd')) reply = 'Crowd guidance: avoid late morning and evening peak windows near Ram Path on busy days.';
    if (lower.includes('aarti')) reply = 'Sandhya Aarti is around 6:30 PM. Reach early and keep extra route time.';

    setChat([...chat, userMessage, { type: 'bot', text: reply }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="sparkles" size={30} color="#C94B13" />
        <Text style={styles.headerTitle}>AI Assistant</Text>
      </View>

      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.switchBtn, mode === 'chat' && styles.activeBtn]}
          onPress={() => setMode('chat')}
        >
          <Text style={styles.switchText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchBtn, mode === 'planner' && styles.activeBtn]}
          onPress={() => setMode('planner')}
        >
          <Text style={styles.switchText}>Itinerary</Text>
        </TouchableOpacity>
      </View>

      {mode === 'chat' ? (
        <>
          <ScrollView style={styles.chatContainer}>
            {chat.map((item, index) => (
              <View
                key={`${item.type}-${index}`}
                style={[
                  styles.messageBox,
                  item.type === 'user' ? styles.userMessage : styles.botMessage,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Ask about darshan, guide, room..."
              placeholderTextColor="#8A5A3D"
              value={message}
              onChangeText={setMessage}
              style={styles.chatInput}
            />

            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Ionicons name="send" size={22} color="#3E1908" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <ScrollView style={styles.plannerContainer}>
          <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>Smart Pilgrimage Planning</Text>
            <Text style={styles.heroText}>
              AI helps optimize temples, guides, rooms, vehicles, crowd timing, and budget.
            </Text>
          </View>

          <View style={styles.formCard}>
            <Text style={styles.label}>Trip Duration</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter days"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={days}
              onChangeText={setDays}
            />

            <Text style={styles.label}>Budget</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter budget"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={budget}
              onChangeText={setBudget}
            />

            <Text style={styles.label}>Group Size</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter members"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={group}
              onChangeText={setGroup}
            />

            <TouchableOpacity
              style={styles.generateBtn}
              onPress={() => setPlanVisible(true)}
            >
              <Text style={styles.generateText}>Generate AI Plan</Text>
            </TouchableOpacity>
          </View>

          {planVisible && (
            <View style={styles.planCard}>
              <Text style={styles.planTitle}>AI Recommended Plan</Text>

              {[
                `Trip length: ${days || '2'} day plan with morning darshan priority.`,
                'Crowd analysis: visit Ram Janmabhoomi around 6:00 AM and keep evening for Saryu Aarti.',
                'Smart guide allocation: Hindi/English verified guide with heritage specialization.',
                'Smart room recommendation: Deluxe Family Cottage for family allocation, Temple View Room for nearby stay, or Budget Dharamshala for savings.',
                'Vehicle recommendation: sedan for families, e-rickshaw for short inner-city movement.',
                `Budget optimization: estimated total Rs ${budget || '3500'}, adjust rooms and vehicles to fit group size ${group || '4'}.`,
              ].map((text, index) => (
                <View key={text} style={styles.planItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#C94B13" />
                  <Text style={styles.planText}>{text}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF1E4' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  headerTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 12,
  },

  switchRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#FFF9F2',
    borderRadius: 16,
    padding: 5,
    marginBottom: 12,
  },
  switchBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  activeBtn: { backgroundColor: '#D35400' },
  switchText: { color: '#3E1908', fontWeight: '800' },

  chatContainer: { flex: 1, padding: 16 },
  messageBox: {
    padding: 14,
    borderRadius: 16,
    marginBottom: 14,
    maxWidth: '85%',
  },
  userMessage: { backgroundColor: '#D35400', alignSelf: 'flex-end' },
  botMessage: { backgroundColor: '#FFF9F2', alignSelf: 'flex-start' },
  messageText: { color: '#3E1908', lineHeight: 22 },

  inputContainer: {
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#F7D6BD',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    borderRadius: 14,
    paddingHorizontal: 16,
    color: '#3E1908',
    height: 52,
  },
  sendButton: {
    width: 52,
    height: 52,
    backgroundColor: '#D35400',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  plannerContainer: { paddingHorizontal: 16 },
  heroCard: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 22,
    marginBottom: 20,
  },
  heroTitle: { color: '#3E1908', fontSize: 21, fontWeight: '900' },
  heroText: { color: '#FFEEDC', marginTop: 10, lineHeight: 22 },

  formCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 18,
  },
  label: {
    color: '#C94B13',
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#FFE2C9',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
    color: '#3E1908',
  },
  generateBtn: {
    backgroundColor: '#D35400',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 24,
  },
  generateText: { color: '#3E1908', fontWeight: '900' },

  planCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 18,
    marginTop: 22,
  },
  planTitle: {
    color: '#3E1908',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 18,
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  planText: {
    color: '#70412A',
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },
});
