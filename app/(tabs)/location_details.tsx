import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162342 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank You for Your Contribution!</Text>
      <Text style={styles.text}>We appreciate your support to our cause.</Text>
      <Text style={styles.text}>Together, we make a difference.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
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

export default Screenshot_2024_12_02_162342;
