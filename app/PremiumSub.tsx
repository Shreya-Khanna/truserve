import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const PremiumSubscription = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentSelection = (method: any) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Premium Subscription</Text>

      {/* Premium Benefits */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Benefits</Text>
        <View style={styles.benefitRow}>
          <MaterialIcons name="check-circle" size={20} color="green" />
          <Text style={styles.benefitText}>
            Priority food notification and booking
          </Text>
        </View>
        <View style={styles.benefitRow}>
          <MaterialIcons name="check-circle" size={20} color="green" />
          <Text style={styles.benefitText}>Food delivery offered</Text>
        </View>
        <View style={styles.benefitRow}>
          <MaterialIcons name="check-circle" size={20} color="green" />
          <Text style={styles.benefitText}>24/7 customer support</Text>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Payment details</Text>
        <Text style={styles.price}>₹199/month</Text>
        <Text style={styles.price}></Text>
        <Text style={styles.paymentMethodLabel}>Select payment method: </Text>

        {/* Payment Methods */}
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "card" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentSelection("card")}
        >
          <MaterialIcons name="credit-card" size={20} color="#000" />
          <Text style={styles.paymentText}>Credit/Debit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "upi" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentSelection("upi")}
        >
          <MaterialIcons name="account-balance" size={20} color="#000" />
          <Text style={styles.paymentText}>UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPaymentMethod === "netbanking" && styles.selectedOption,
          ]}
          onPress={() => handlePaymentSelection("netbanking")}
        >
          <MaterialIcons name="payment" size={20} color="#000" />
          <Text style={styles.paymentText}>Net Banking</Text>
        </TouchableOpacity>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.ConfirmText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EED9",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000  ",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },      
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
  paymentMethodLabel: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#0a0",
  },
  button: {
    backgroundColor: "#c8d8a3",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  ConfirmText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default PremiumSubscription;
