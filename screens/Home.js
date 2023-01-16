import React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/meteora.jpg')}
        resizeMode='cover'
        style={{flex: 1, justifyContent: 'center'}}
      >
        <Text style={{ textAlign: 'center', color: "white", fontSize: 30 }}>Geography Quiz!!!</Text>
        <Pressable
          onPress={() => navigation.navigate("Quiz")}
          style={styles.button}
        >
          <Text style={styles.btnText}>Start Quiz</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "magenta",
    padding: 14,
    width: 160,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
  }
});

export default Home;
