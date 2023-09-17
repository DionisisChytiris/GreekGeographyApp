// import * as React from "react";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";

const Introduction = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [showBtn, setShowBtn] = useState(false);

  const hide = ()=> setShowBtn(true)

  setTimeout(hide, 9000)
  // useEffect(() => {
  //   const timer = setTimeout(()=>{
  //     setShowBtn((showBtn)=>showBtn + 1)
  //     console.log(showBtn)
  //   }, 1000)
  
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [showBtn]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/meteora.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            width: "70%",
            height: 400,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 25,
          }}
        >
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/video/aiVideo.mp4")}
            // useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate("Quiz")}
          // style={showBtn > 8 ? styles.button : styles.buttonA}
          style={showBtn ? styles.button : styles.buttonA}
        >
          <View style={styles.button1} />
          <Text style={styles.btnText}>Κατηγορίες</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 100,
    right: 60,
    width: 140,
    height: 45,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 1
  },
  buttonA: {
    position: "absolute",
    bottom: 100,
    right: 60,
    width: 140,
    height: 45,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0
  },
  button1: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 12,
    left: 22,
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  video: { width: "120%", height: "80%", borderRadius: 45 },
  buttons: {
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});
