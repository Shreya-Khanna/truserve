import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { router } from "expo-router";

type FoodItem = {
  id: string;
  name: string;
  location: string;
  quantity: string;
  menu:string;
  life:string
};



export default function App() {

  const foodItems: FoodItem[] = [
    {
      id: "1",
      name: "Johnson Caterers",
      location: "Phase 6",
      quantity: "15 person",
      menu:"Chole bhature, pickles, yogurt, and a sweet lassi",
      life:"7 hours"
    },
    {
      id: "2",
      name: "Cuisines Experts",
      location: "Phase 7",
      quantity: "12 person",
      menu:"Aloo paratha with curd, salad, and a masala chai",
      life:"6 hours",
    },
    {
      id: "3",
      name: "Masala Zing",
      location: "Phase 9",
      quantity: "27 person",
      menu:"Pulao with vegetable curry, papad,raita",
      life:"8 hours",
    },
    {
      id: "4",
      name: "Bittu Deluxe Dhaba",
      location: "Phase 7",
      quantity: "15 person",
      menu:"Tawa chicken with roti, dal tadka,gajar ka halwa",
      life:"10 hours"
    },
  ];

  foodItems.map((item) => {
    item;
  });

  let handleClick=({ item }: { item: FoodItem })=>{
    router.push({
      pathname: '/RequestedFoodDetails',
      params: {place: item.name,location:item.location,quantity:item.quantity,menu:item.menu,life:item.life},
    })
    console.log(item.name)
  }

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.foodCard}>
      
      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDetails}>Loc: {item.location}</Text>
        <Text style={styles.foodDetails}>Quantity For -{item.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleClick({ item })} // Pass the `item` parameter here
        style={styles.requestButton}
      >
        <Text style={styles.requestButtonText}> Show </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonIcon}>←</Text>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Available Food Items</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
        contentContainerStyle={styles.foodList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E9EED9", padding: 20 },
  addFoodButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
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
    marginTop: 40,
    marginLeft: 10
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
  addFoodIcon: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  addFoodText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 50,
    marginTop: 30,
  },
  foodList: { paddingBottom: 20 },
  foodCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodInfo: { flex: 1 },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  foodDetails: { fontSize: 14, color: "#555" },
  requestButton: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  requestButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
