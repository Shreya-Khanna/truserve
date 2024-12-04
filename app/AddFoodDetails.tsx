import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const FoodDetailsForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Details</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Food Description</Text>
        <TextInput style={styles.input} placeholder="Enter food description" />
        <Text style={styles.label}>No. of people it can feed</Text>
        <TextInput style={styles.input} placeholder="Enter number of people" keyboardType="numeric" />

        <Text style={styles.label}>Shelf Life (in hours)</Text>
        <TextInput style={styles.input} placeholder="Enter shelf life" keyboardType="numeric" />

        <Text style={styles.label}>Location/Address</Text>
        <TextInput style={styles.input} placeholder="Enter location or address" />

        <TouchableOpacity onPress={()=>{
          router.push("/SubmissionSuccess")
        }} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 70,
    marginTop:50
  },
  form: {
    backgroundColor: "#ABBA7C",
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FoodDetailsForm;
