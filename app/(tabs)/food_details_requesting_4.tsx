import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162308 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NGO Name</Text>
      <Text style={styles.text}>Contact Person</Text>
      <Text style={styles.text}>Contact Number</Text>
      <Text style={styles.text}>Email Address</Text>
      <Text style={styles.text}>Food Requirements</Text>
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

export default Screenshot_2024_12_02_162308;
