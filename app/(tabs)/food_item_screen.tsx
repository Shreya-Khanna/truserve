import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const foodItems = [
  { name: 'Johnson Caterers', location: 'Phase 6', quantity: '15 persons' },
  { name: 'Cuisines Experts', location: 'Phase 7', quantity: '12 persons' },
  { name: 'Masala Zing', location: 'Phase 9', quantity: '27 persons' },
  { name: 'Bittu Deluxe Dhaba', location: 'Phase 7', quantity: '15 persons' },
];

const FoodItemsScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Available Food Items</Text>
      {foodItems.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>Loc: {item.location}</Text>
          <Text style={styles.cardText}>Quantity: {item.quantity}</Text>
          <TouchableOpacity style={styles.requestButton}>
            <Text style={styles.requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c21e1e',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  requestButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  requestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FoodItemsScreen;
