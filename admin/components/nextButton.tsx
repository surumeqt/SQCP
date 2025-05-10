import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NextButton({ onNext }: { onNext: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onNext}>
      <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#018ADB',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
