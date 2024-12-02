import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162248 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile</Text>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Age</Text>
      <Text style={styles.text}>Location</Text>
      <Text style={styles.text}>Contact Information</Text>
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
});

export default Screenshot_2024_12_02_162248;
