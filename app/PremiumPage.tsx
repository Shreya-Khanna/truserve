import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const PremiumPage = () => {

  const data = [
    { id: '1', serves: '15p', time: '2 min ago', caterer: 'Johnson Caterers' },
    { id: '2', serves: '12p', time: '17 min ago', caterer: 'Cuisines Experts' },
    { id: '3', serves: '27p', time: '36 min ago', caterer: 'Masala Zing' },
    { id: '4', serves: '15p', time: '42 min ago', caterer: 'Bittu Deluxe Dhaba' },
  ];

  const handlePress = (caterer) => {
    console.log(`Selected: ${caterer}`);
  }

  const renderItem = ({ item }) => (
    
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.serves}>{`serves ${item.serves}`}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.caterer}>{item.caterer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./assets/bell-icon.png')} style={styles.icon} />
      <Text style={styles.headerText}>This page is live.</Text>
      <Text style={styles.subHeaderText}>
        Updates for surplus food will be shown as they are shared.
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.footerContainer}>
        <Image source={require('./assets/phone-icon.png')} style={styles.phoneIcon} />
        <Text style={styles.footerText}>Customer Service</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5e8ba',
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serves: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#d9534f',
  },
  caterer: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  phoneIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
});

export default PremiumPage;
