import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { router } from "expo-router";

const Premium = ({ navigation }) => {
  const foodUpdates = [
    { id: '1', name: 'Johnson Caterers', serves: '15p', time: '2 min ago' },
    { id: '2', name: 'Cuisines Experts', serves: '12p', time: '17 min ago' },
    { id: '3', name: 'Masala Zing', serves: '27p', time: '36 min ago' },
    { id: '4', name: 'Bittu Deluxe Dhaba', serves: '15p', time: '42 min ago' },
  ];

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={()=>{
        router.push("/ReqFoodDetails")
    }}>
      <Text style={styles.serves}>{`serves ${item.serves}`}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        This page is live. Updates for surplus food will be shown as they are
        shared.
      </Text>
      <FlatList
        data={foodUpdates}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.customerService}>
        <Text style={styles.customerServiceText}>📞 Customer Service</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EAD3',
    padding: 20,
    marginTop: 100,
    marginBottom: 50
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  serves: {
    color: '#555',
    fontSize: 16,
  },
  time: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  customerService: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    elevation: 5,
  },
  customerServiceText: {
    fontSize: 20,
    color: '#000',
  },
});

export default Premium;
