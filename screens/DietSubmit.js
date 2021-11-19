import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const DietSubmit = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Breakfast")}
      >
        <ImageBackground
          source={require("../assets/breakfast.jpg")}
          resizeMode="cover"
          style={{
            alignItems: "center",
            width: 310,
            height: 180,
            margin: 66,
            justifyContent: "center",
          }}
          imageStyle={{ borderRadius: 20, borderTopRightRadius: 100 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignContent: "center",
              fontSize: 48,
            }}
          >
            Breakfast
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <ImageBackground
          source={require("../assets/lunch.jpg")}
          resizeMode="cover"
          style={{
            alignItems: "center",
            width: 310,
            height: 180,
            margin: 66,
            justifyContent: "center",
          }}
          imageStyle={{ borderRadius: 20, borderTopRightRadius: 100 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignContent: "center",
              fontSize: 48,
            }}
          >
            Lunch
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <ImageBackground
          source={require("../assets/dinner.jpg")}
          resizeMode="cover"
          style={{
            alignItems: "center",
            width: 310,
            height: 180,
            margin: 66,
            justifyContent: "center",
          }}
          imageStyle={{ borderRadius: 20, borderTopRightRadius: 100 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              alignContent: "center",
              fontSize: 48,
            }}
          >
            Dinner
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default DietSubmit;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 210,
    display: "flex",
    alignItems: "center",
  },
  body: {},
});
