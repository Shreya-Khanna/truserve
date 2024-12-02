import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162204 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Name</Text>
      <Text style={styles.text}>Username</Text>
      <Text style={styles.text}>Password</Text>
      <Text style={styles.text}>Re-enter password</Text>
      <Text style={styles.text}>Contact Number</Text>
      <Text style={styles.text}>Email ID</Text>
      <Text style={styles.premium}>Go premium for just 2199/mo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
  },
  premium: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
});

export default Screenshot_2024_12_02_162204;
