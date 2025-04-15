import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Privacy() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy</Text>
      
      <Text style={styles.text}>
        We care about your privacy. This policy explains how we collect, use, and protect your personal information
        when you use our queueing system.
      </Text>

      <Text style={styles.subHeader}>How We Use Your Information:</Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bulletText}>{'\u2022'} Register you in a queue</Text>
        <Text style={styles.bulletText}>{'\u2022'} Notify you when it's your turn</Text>
        <Text style={styles.bulletText}>{'\u2022'} Improve the speed and accuracy of our service</Text>
        <Text style={styles.bulletText}>{'\u2022'} Send you updates (if you allow it)</Text>
      </View>

      <Text style={styles.warning}>(**WE DO NOT SELL YOUR INFORMATION**)</Text>

      <Text style={styles.subHeader}>How We Protect Your Data:</Text>
      <Text style={styles.text}>
        We use encryption, secure servers, and access controls to keep your data safe.
        Only authorized staff can access sensitive information.
      </Text>

      <Text style={styles.sectionTitle}>Need Help Right Now?</Text>
      <Text style={styles.text}>Email Us: support@yourplatform.com</Text>
      <Text style={styles.text}>
        Submit a Support Request:{"\n"}[Click here to contact us directly]
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Support request sent!')}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312C51',
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    color: '#F1AA9B',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#F1AA9B',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 12,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 8,
  },
  subHeader: {
    color: '#F1AA9B',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  bulletContainer: {
    paddingLeft: 20,
    marginTop: 4,
  },
  bulletText: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 6,
  },
  warning: {
    color: '#F1AA9B',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#F1AA9B',
    borderRadius: 20,
    padding: 12,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
