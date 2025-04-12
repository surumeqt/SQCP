import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function HelpAndSupport() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <Text style={styles.sectionTitle}>1. Frequently Asked Questions (FAQs)</Text>
      <Text style={styles.text}>- How do I register for a queue? Simply select the service that you need and click confirm then proceed.</Text>
      <Text style={styles.text}>- How can I check my queue status? You can check your queue status after clicking proceed.</Text>
      <Text style={styles.text}>- What if I miss my turn? If you miss your turn, you can register again.</Text>

      <Text style={styles.sectionTitle}>2. Contact Support</Text>
      <Text style={styles.text}>Email Support: support@yourcompany.com</Text>
      <Text style={styles.text}>Phone Support: +123-456-7890</Text>

      <Text style={styles.sectionTitle}>3. Troubleshooting Tips</Text>
      <Text style={styles.text}>- Problem: I’m not receiving notifications? {"\n"} 
        Make sure your app notifications is on.</Text>
      <Text style={styles.text}>- Problem: The system is not letting me register? {"\n"} Kindly refresh the app.</Text>

      <Text style={styles.sectionTitle}>4. Report an Issue</Text>
      <Text style={styles.text}>Email Issue Reporting: issues@yourcompany.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312C51',
    padding: 16,
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
});
