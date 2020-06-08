import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: require("./src/images/dice1.png"),
    };
  }

  roll = () => {
    let uri = null;
    let randNumber = Math.floor(Math.random()*6)+1
    switch (randNumber) {
      case 1:
        uri = require("./src/images/dice1.png");
        break;
      case 2:
        uri = require("./src/images/dice2.png");
        break;
      case 3:
        uri = require("./src/images/dice3.png");
        break;
      case 4:
        uri = require("./src/images/dice4.png");
        break;
      case 5:
        uri = require("./src/images/dice5.png");
        break;
      case 6:
        uri = require("./src/images/dice6.png");
        break;
      default:
        uri = require("./src/images/dice1.png");
        break;
    }
    this.setState({
      uri: uri,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />
        <TouchableOpacity
          onPress={() => {
            this.roll();
          }}
        >
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF3031",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  text: {
    marginTop: 70,
    borderWidth: 2,
    paddingHorizontal: 50,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "white",
    color: "white",
  },
});
