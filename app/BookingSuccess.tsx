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
      }} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{router.push("/PremiumSub")}}
      style={styles.button}>
        <Text style={styles.buttonText}>Join Premium</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', // White text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    
    backgroundColor: '#212121', // Black button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop:50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
});

export default SuccessScreen;
