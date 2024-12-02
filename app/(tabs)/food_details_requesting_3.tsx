import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162257 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.success}>Thank you for registering!</Text>
      <Text style={styles.text}>Your registration has been successfully submitted.</Text>
      <Text style={styles.text}>Event Details:</Text>
      <Text style={styles.text}>Name, Date, Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#dff0d8',
    alignItems: 'center',
  },
  success: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c763d',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#3c763d',
  },
});

export default Screenshot_2024_12_02_162257;
