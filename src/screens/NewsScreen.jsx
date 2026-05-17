import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NewsScreen() {
  const news = [
    {
      title: 'Weekend crowd advisory issued near Ram Path',
      tag: 'Advisory',
      time: 'Today',
      icon: 'alert-circle',
      body: 'Plan early morning darshan and keep extra travel time for security queues.',
    },
    {
      title: 'Evening Saryu aarti expected to draw heavy footfall',
      tag: 'Aarti',
      time: 'Today',
      icon: 'flame',
      body: 'Reach the ghat before sunset and follow local barricade directions.',
    },
    {
      title: 'Pilgrim shuttle points active around main temple area',
      tag: 'Transport',
      time: 'Yesterday',
      icon: 'bus',
      body: 'Use marked pickup points for local movement during peak hours.',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="newspaper" size={28} color="#C94B13" />
        </View>
        <View>
          <Text style={styles.headerTitle}>Ayodhya News</Text>
          <Text style={styles.headerText}>Updates useful for pilgrims</Text>
        </View>
      </View>

      <View style={styles.topStory}>
        <Text style={styles.topLabel}>Latest</Text>
        <Text style={styles.topTitle}>{news[0].title}</Text>
        <Text style={styles.topText}>{news[0].body}</Text>
      </View>

      {news.map((item) => (
        <View key={item.title} style={styles.newsCard}>
          <View style={styles.newsIcon}>
            <Ionicons name={item.icon} size={23} color="#C94B13" />
          </View>
          <View style={styles.newsInfo}>
            <View style={styles.metaRow}>
              <Text style={styles.tag}>{item.tag}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsBody}>{item.body}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
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
    paddingBottom: 40,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
    fontSize: 25,
    fontWeight: '900',
  },
  headerText: {
    color: '#8A5A3D',
    marginTop: 4,
    fontWeight: '700',
  },
  topStory: {
    backgroundColor: '#D76424',
    borderRadius: 24,
    padding: 20,
  },
  topLabel: {
    color: '#C94B13',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  topTitle: {
    color: '#3E1908',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 8,
    lineHeight: 29,
  },
  topText: {
    color: '#FFEEDC',
    lineHeight: 21,
    marginTop: 10,
  },
  newsCard: {
    backgroundColor: '#FFF9F2',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    gap: 12,
  },
  newsIcon: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: '#FFE2C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsInfo: {
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tag: {
    color: '#FFF1E4',
    backgroundColor: '#C94B13',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 10,
    fontWeight: '900',
  },
  time: {
    color: '#8A5A3D',
    fontSize: 12,
    fontWeight: '800',
  },
  newsTitle: {
    color: '#3E1908',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 22,
    marginTop: 8,
  },
  newsBody: {
    color: '#8A5A3D',
    lineHeight: 19,
    marginTop: 6,
  },
});
