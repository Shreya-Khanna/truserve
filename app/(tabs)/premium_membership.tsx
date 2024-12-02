import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screenshot_2024_12_02_162328 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verification Successful!</Text>
      <Text style={styles.text}>Your account is now verified.</Text>
      <Text style={styles.text}>You can now proceed with donations or requests.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#dff0d8',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
  },
});

export default Screenshot_2024_12_02_162328;
