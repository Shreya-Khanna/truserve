import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { router } from "expo-router";

export default function Maps() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Arriving in 32 minutes</Text>  
          <Image
            source={require("../assets/images/track.png")}
            style={{
              width: 300,
              height: 500,
            }} 
          />
          <TouchableOpacity
                onPress={()=>{router.push("/")}}
                style={styles.button}>
                  <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9EED9",
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#c8d8a3', // Black button
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121', // White text
  },
});
