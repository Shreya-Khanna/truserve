import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";


const FoodDetails = () => {
  // Get the parameters passed through router.push
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonIcon}>←</Text>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Food Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Place:</Text>
        <Text style={styles.value}>Sector 82</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>FOOD MENU:</Text>
        <Text style={styles.value}>Farmhouse pizza and garlic bread</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>PEOPLE IT CAN FEED:</Text>
        <Text style={styles.value}>15</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>SHELF LIFE:</Text>
        <Text style={styles.value}>8 hours</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          router.push("/PremBookingSuccess");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EED9", // Background color
    paddingVertical: 90,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 800,
    color: "#000", // White text
    marginBottom: 35,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c8d8a3", // Green background
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 10
  },
  backButtonIcon: {
    fontSize: 18,
    color: "#000",
    marginRight: 10, // Space between icon and text
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  value: {
    fontSize: 16,
    color: "#000000",
  },
  button: {
    backgroundColor: "#212121", // Black button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // White text
  },
});

export default FoodDetails;
