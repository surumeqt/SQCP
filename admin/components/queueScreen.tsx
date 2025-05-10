import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QueueScreen({ currentQueue }: { currentQueue: number | null }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Serving</Text>
      <View style={styles.queueBox}>
        <Text style={styles.queueNumber}>
          {currentQueue !== null ? currentQueue : '—'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#004581',
    fontWeight: '600',
    marginBottom: 10,
  },
  queueBox: {
    backgroundColor: '#DDE8F0',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  queueNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#018ADB',
  },
});
