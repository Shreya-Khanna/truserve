import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    email: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Details</Text>
      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          value={form[key as keyof typeof form]}
          onChangeText={(value) => handleInputChange(key, value)}
          style={styles.input}
          secureTextEntry={key.toLowerCase().includes('password')}
          keyboardType={key === 'contactNumber' ? 'phone-pad' : 'default'}
        />
      ))}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c21e1e',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
