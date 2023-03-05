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
        <Text style={{ textAlign: "center", color: "white", fontSize: 30, fontWeight: '600'}}>
          Επέλεξε κατηγορία
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Cities")}
          style={styles.buttonB}>
          <View style={styles.button1}/>
          <Text style={styles.buttonTxt2}>Λίμνες</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Counties")}
          style={styles.buttonB}>
          <View style={styles.button2}/>
          <Text style={styles.buttonTxt2}>Βουνά</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Nomoi1")}
          style={styles.buttonC}>
          <View style={styles.button3}/>
          <Text style={styles.buttonTxt3}>Νομοί / Πόλεις</Text>
        </Pressable>
        
      </ImageBackground>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonA: {
    position: "relative",
    width: 140,
    height: 60,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  buttonB: {
    position: "relative",
    width: 140,
    height: 60,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  buttonC: {
    position: "relative",
    width: 200,
    height: 60,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  button1: {
    position: "absolute",
    opacity: 0.8,
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  button2: {
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  button3: {
    position: "absolute",
    opacity: 0.9,
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt1: {
    position: "absolute",
    bottom: 20,
    left: 30,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
  },
  buttonTxt2: {
    position: "absolute",
    bottom: 20,
    left: 40,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
  },
  buttonTxt3: {
    position: "absolute",
    bottom: 20,
    left: 30,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
  },
});


