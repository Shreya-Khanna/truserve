import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { router } from "expo-router";

export default function App() {
  const [username, setUsername] = useState("");
  
  const handleLogin = () => {
    if (username === "rajesh.kumar") {
      router.push("/AvailableFoodList");
    } else if (username === "shweta.singh") {
      router.push("/AddFoodDetails");
    } else if (username === "vikas.bansal") {
      router.push("/PremiumPage");
    }
  };
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Cleaned_Logo.png")}
        style={{
          width: 250,
          height: 250,
          top: -20
        }} 
      />
         
      <TextInput 
      style={styles.input} 
      placeholder="Username" 
      placeholderTextColor="black" 
      value={username}
      onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/NewRoleSelectScreen");
        }}
      >
        <Text style={styles.newUserText}>New user? 
          Sign up here.</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  newUserText: {
    color: "blue",
    fontSize: 18,
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
