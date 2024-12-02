import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162221 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details</Text>
      <Text style={styles.text}>Food Description</Text>
      <Text style={styles.text}>Quantity (in kg/servings)</Text>
      <Text style={styles.text}>No. of people it can feed</Text>
      <Text style={styles.text}>Shelf Life (in hours)</Text>
      <Text style={styles.text}>Location/Address</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
  },
});

export default Screenshot_2024_12_02_162221;
