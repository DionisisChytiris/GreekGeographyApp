import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";

const Introduction = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
        <Pressable
          onPress={() => navigation.navigate("Quiz")}
          style={styles.button}
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
    left: 20,
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
  video: { width: "120%", height: "80%", borderRadius: 25 },
  buttons: { 
    width: 100, 
    marginLeft: "auto", 
    marginRight: "auto",
    marginTop: 20
},
});
