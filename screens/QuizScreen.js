import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/athens.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 30 }}>
          Geography Quiz!!!
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Cities")}
          style={{
            backgroundColor: "gray",
            padding: 14,
            width: 160,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Quiz Cities
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Counties")}
          style={{
            backgroundColor: "red",
            padding: 14,
            width: 160,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Quiz Counties
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Nomoi1")}
          style={{
            backgroundColor: "green",
            padding: 14,
            width: '60%',
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Νομοί Ελλάδας
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default QuizScreen;
