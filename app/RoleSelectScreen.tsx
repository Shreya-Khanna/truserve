import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
       {/* Back Button */}
       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonIcon}>←</Text>
        <Text style={styles.backButtonText}>Go Back</Text>
       </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/HomeScreenProvider")}
      >
        <Text style={styles.buttonText}>Food Provider</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/AvailableFoodList')}
      >
        <Text style={styles.buttonText}>Food Receiver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9EED9',
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
    marginLeft: 20
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
  button: {
    backgroundColor: '#ABBA7C',
    paddingVertical: 100,
    paddingHorizontal: 65,
    marginVertical: 10,
    borderRadius: 25,
    alignContent:"center",
    marginBottom:60,
    marginTop:50

  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    alignItems:"center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
