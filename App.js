import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/images/dice1.png")} />
      <TouchableOpacity>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF3031",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
  text:{
    marginTop: 70,
    borderWidth: 2,
    paddingHorizontal: 50,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "white",
    color: "white",
  }
});
