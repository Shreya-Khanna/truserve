import React from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";

export default function Maps() {
    return (
        <View style={styles.container}>
          <Image
            source={require("../assets/images/tracking.png")}
            style={{
              width: 300,
              height: 700,
            }} 
          />
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
});
