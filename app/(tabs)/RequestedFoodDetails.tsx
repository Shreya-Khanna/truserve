import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

let FoodItems=["Grilled Chicken with mashed potatoes and green beans","Chocolate brownie"]
let life=3 
let people=15
let location="Industrial Area Phase 6"

const FoodDetails = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>FOOD MENU:</Text>
        <Text style={styles.value}>
         {FoodItems.join("\n")}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>PEOPLE IT CAN FEED:</Text>
        <Text style={styles.value}>{people} people</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>SHELF LIFE:</Text>
        <Text style={styles.value}>{life} hours</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>PICK UP LOCATION:</Text>
        <Text style={styles.value}>{location}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
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
