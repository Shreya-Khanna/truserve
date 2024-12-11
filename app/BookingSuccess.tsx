import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.subtitle}>Food item has been booked successfully</Text>
      <TouchableOpacity onPress={()=>{
          router.push("/")
      }} style={styles.button1}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}> </Text>
      <Text style={styles.subtitle}> </Text>
      <Text style={styles.subtitle}>Want notifications the next time food is available? </Text>
      <TouchableOpacity
      onPress={()=>{router.push("/PremiumSub")}}
      style={styles.button2}>
        <Text style={styles.buttonText}>Get Premium!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EED9', // Background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    padding: 20,
    fontWeight: 'bold',
    color: '#000', // White text
    marginBottom: 10,
    marginTop: 40,
    marginStart: 20
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  button1: {
    backgroundColor: '#c8d8a3', // Black button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#c8d8a3', // Black button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121', // White text
  },
});

export default SuccessScreen;
