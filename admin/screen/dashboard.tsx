import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import NextButton from '../components/nextButton';
import QueueScreen from '../components/queueScreen';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function Dashboard() {
  const currentQueue = useQuery(api.getQueue.getCurrentQueue);
  const proceedToNext = useMutation(api.getQueue.proceedToNextQueue);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Dashboard</Text>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Welcome, Admin!</Text>
          <Text style={styles.subText}>Here’s your real-time queue overview</Text>

          <View style={styles.divider} />

          <QueueScreen currentQueue={currentQueue?.number ?? null} />

          <View style={styles.buttonContainer}>
            <NextButton onNext={() => proceedToNext()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004581',
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#DDE8F0',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#004581',
    marginBottom: 4,
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#48426D',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#B3C8D9',
    marginVertical: 16,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
});
