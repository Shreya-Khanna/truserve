import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

const LoginScreen: React.FC = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    ConfirmPassword: "",
    ContactNumber: "",
    Email: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          placeholder={key.replace(/([A-Z])/g, " $1")}
          placeholderTextColor="black"
          value={form[key as keyof typeof form]}
          onChangeText={(value) => handleInputChange(key, value)}
          style={styles.input}
          secureTextEntry={key.toLowerCase().includes("password")}
          keyboardType={key === "contactNumber" ? "phone-pad" : "default"}
        />
      ))}
      <TouchableOpacity
      onPress={()=>{
        router.push("/RoleSelectScreen")
      }} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EED9",
    padding: 20,
  },
  header: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 60,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
