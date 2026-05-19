import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const contentData = [
  {
    title: 'Sri Rama Nama Keerthana',
    type: 'Rama Nama Keerthanas',
    format: 'MP3',
    icon: 'musical-note',
    duration: '18 min',
    speaker: 'Temple Choir',
    status: 'Published',
  },
  {
    title: 'Hanuman Chalisa Bhajan',
    type: 'Bhajans',
    format: 'MP3',
    icon: 'musical-notes',
    duration: '12 min',
    speaker: 'Devotional Group',
    status: 'Published',
  },
  {
    title: 'Sri Ram Raksha Stotra',
    type: 'Slokas',
    format: 'WAV',
    icon: 'reader',
    duration: '9 min',
    speaker: 'Pandit Vyas Ji',
    status: 'Published',
  },
  {
    title: 'Ram Dhun Devotional Song',
    type: 'Devotional Songs',
    format: 'MP3',
    icon: 'headset',
    duration: '21 min',
    speaker: 'Ayodhya Bhajan Mandali',
    status: 'Featured',
  },
  {
    title: 'Meaning of Ram Rajya',
    type: 'Spiritual Speeches',
    format: 'Video',
    icon: 'mic',
    duration: '34 min',
    speaker: 'Swami Anand',
    status: 'Published',
  },
  {
    title: 'Ramayana Discourse - Ayodhya Kand',
    type: 'Recorded Discourses',
    format: 'Video',
    icon: 'videocam',
    duration: '52 min',
    speaker: 'Acharya Raman',
    status: 'New',
  },
  {
    title: 'Morning Temple Chant Audio',
    type: 'MP3/WAV Audio Files',
    format: 'WAV',
    icon: 'volume-high',
    duration: '24 min',
    speaker: 'Ram Mandir Audio Archive',
    status: 'Archived',
  },
  {
    title: 'Live Saryu Aarti Stream',
    type: 'Video Streaming',
    format: 'Live Video',
    icon: 'play-circle',
    duration: 'Live at 6:30 PM',
    speaker: 'Saryu Ghat',
    status: 'Streaming Ready',
  },
];

const filters = [
  'All',
  'Rama Nama Keerthanas',
  'Bhajans',
  'Slokas',
  'Devotional Songs',
  'Spiritual Speeches',
  'Recorded Discourses',
  'MP3/WAV Audio Files',
  'Video Streaming',
];

export default function DevotionalContentScreen() {
  const [selected, setSelected] = useState('All');

  const filteredContent =
    selected === 'All'
      ? contentData
      : contentData.filter(item => item.type === selected);

  const audioCount = contentData.filter(item => item.format === 'MP3' || item.format === 'WAV').length;
  const videoCount = contentData.filter(item => item.format.includes('Video')).length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="book" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Devotional Content</Text>
          <Text style={styles.headerText}>Audio, video, songs, speeches, and discourses</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Content Management</Text>
        <Text style={styles.heroTitle}>Spiritual Library</Text>
        <Text style={styles.heroText}>
          Manage Rama Nama Keerthanas, Bhajans, Slokas, songs, speeches, recorded discourses, MP3/WAV files, and live video streams.
        </Text>
      </View>

      <View style={styles.statsRow}>
        <Stat value={contentData.length} label="items" />
        <Stat value={audioCount} label="audio files" />
        <Stat value={videoCount} label="video streams" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {filters.map(item => (
          <TouchableOpacity
            key={item}
            style={[styles.filterBtn, selected === item && styles.filterActive]}
            onPress={() => setSelected(item)}
          >
            <Text style={[styles.filterText, selected === item && styles.filterTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Content Catalogue</Text>

      {filteredContent.map(item => (
        <TouchableOpacity key={item.title} style={styles.contentCard} activeOpacity={0.85}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={27} color="#C94B13" />
          </View>

          <View style={styles.contentInfo}>
            <View style={styles.titleRow}>
              <Text style={styles.contentTitle}>{item.title}</Text>
              <Text style={styles.formatBadge}>{item.format}</Text>
            </View>
            <Text style={styles.contentType}>{item.type}</Text>
            <Text style={styles.metaText}>{item.speaker} - {item.duration}</Text>
            <View style={styles.statusRow}>
              <Ionicons name={item.format.includes('Video') ? 'play' : 'volume-high'} size={14} color="#C94B13" />
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

            <View style={styles.managerCard}>
        <Text style={styles.sectionTitle}>Library Controls</Text>
        <View style={styles.controlGrid}>
          <Control icon="cloud-upload" title="Upload Audio" text="MP3 / WAV" />
          <Control icon="videocam" title="Video Stream" text="Live / recorded" />
          <Control icon="albums" title="Categories" text="8 content types" />
          <Control icon="checkmark-circle" title="Publish" text="Review status" />
        </View>
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function Stat({ value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Control({ icon, title, text }) {
  return (
    <View style={styles.controlCard}>
      <Ionicons name={icon} size={22} color="#C94B13" />
      <Text style={styles.controlTitle}>{title}</Text>
      <Text style={styles.controlText}>{text}</Text>
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
    paddingBottom: 36,
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
  heroCard: {
    backgroundColor: '#D76424',
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
  },
  heroLabel: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#3E1908',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 8,
  },
  heroText: {
    color: '#FFEEDC',
    marginTop: 10,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: 'center',
  },
  statValue: {
    color: '#C94B13',
    fontSize: 20,
    fontWeight: '900',
  },
  statLabel: {
    color: '#8A5A3D',
    fontSize: 11,
    fontWeight: '800',
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
  filterActive: {
    backgroundColor: '#D35400',
  },
  filterText: {
    color: '#C94B13',
    fontWeight: '800',
  },
  filterTextActive: {
    color: '#3E1908',
  },
  managerCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#3E1908',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 14,
  },
  controlGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  controlCard: {
    width: '48%',
    backgroundColor: '#FFE2C9',
    borderRadius: 16,
    padding: 13,
    minHeight: 92,
  },
  controlTitle: {
    color: '#3E1908',
    fontWeight: '900',
    marginTop: 8,
  },
  controlText: {
    color: '#8A5A3D',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '700',
  },
  contentCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 15,
    marginBottom: 14,
    flexDirection: 'row',
    gap: 12,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInfo: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  contentTitle: {
    flex: 1,
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 21,
  },
  formatBadge: {
    color: '#FFF1E4',
    backgroundColor: '#C94B13',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 10,
    fontWeight: '900',
  },
  contentType: {
    color: '#C94B13',
    marginTop: 5,
    fontWeight: '800',
  },
  metaText: {
    color: '#8A5A3D',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '700',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 8,
  },
  statusText: {
    color: '#70412A',
    fontSize: 12,
    fontWeight: '800',
  },
  bottomSpace: {
    height: 24,
  },
});
