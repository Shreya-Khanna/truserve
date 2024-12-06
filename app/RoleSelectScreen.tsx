import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9EED9',
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
