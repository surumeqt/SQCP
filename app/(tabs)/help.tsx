import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';

export default function HelpAndSupport() {
  return (
  <ScrollView
  style={{ backgroundColor: '#312C51' }} 
  contentContainerStyle={styles.scrollContainer}>

      <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.text}>Welcome to the Help & Support Center of our Queueing Coordination Platform! 
        Whether you're organizing queues or joining them, we’re here to ensure everything flows smoothly.</Text>

      <Text style={styles.sectionTitle}>1.What We Can Help You With:</Text>
      <Text style={styles.subHeader}>Getting Started</Text>
      <Text style={styles.text}>Learn how to create an account, set up your profile, and start using the queueing system.</Text>

      <Text style={styles.subHeader}>Joining Queue</Text>
      <Text style={styles.text}> Step-by-step guidance on how to find and join a service queue, whether online or in person.</Text>

      <Text style={styles.subHeader}>Managing Queue</Text>
      <Text style={styles.text}>Need help setting up or managing queues for your service? We've got easy-to-follow guides and tools.</Text>

      <Text style={styles.subHeader}>Real-Time Notifications: </Text>
      <Text style={styles.text}>Not receiving updates or alerts? We’ll help you troubleshoot.</Text>

      <Text style={styles.subHeader}>Booking & Scheduling Support: </Text>
      <Text style={styles.text}> Understand how queue reservations, time slots, or appointment links work.</Text>

      <Text style={styles.subHeader}>Feedback & Suggestions: </Text>
      <Text style={styles.text}>Got ideas or ran into something confusing? We love hearing from you.</Text>

      <Text style={styles.subHeader}>Real-Time Notifications: </Text>
      <Text style={styles.text}> Not receiving updates or alerts? We’ll help you troubleshoot.</Text>

      <Text style={styles.sectionTitle}>2. Frequently Asked Questions (FAQs)</Text>
      <Text style={styles.subHeader}>How do I register for a queue? </Text>
      <Text style={styles.text}>Simply select the service that you need and click confirm then proceed.</Text>

      <Text style={styles.subHeader}>How can I check my queue status? </Text>
      <Text style={styles.text}>You can check your queue status after clicking proceed.</Text>

      <Text style={styles.subHeader}>What if I miss my turn?</Text>
      <Text style={styles.text}> If you miss your turn, you can register again.</Text>


      <Text style={styles.sectionTitle}>3. Need Help Right Now?</Text>
      <Text style={styles.text}> Email Us: support@yourplatform.com</Text>
      <Text style={styles.text}> Submit a Support Request:{"\n"}
         [Click here to contact us directly]</Text>

    <TouchableOpacity style={styles.button} onPress={() => alert('Support request sent!')}>
        <Text style={styles.buttonText}>Contact Support</Text>
    </TouchableOpacity>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312C51',
    padding: 15,
    marginTop: 20,
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
scrollContainer: {
    paddingBottom: 20,
  },
  button:{  backgroundColor: '#F1AA9B',
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
  subHeader: {
    color: '#F1AA9B',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  }
  
});
