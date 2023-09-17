import * as React from "react";
import {View} from "react-native";
import { Video, ResizeMode } from "expo-av";

const LoseScreenAiMsg = () => {
  const video = React.useRef(null);
  
  return (
      <View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            width: '100%',
            height: '120%',
            marginLeft: "auto",
            marginRight: "auto",
            // borderRadius: 40,
          }}
        >
          <Video
            ref={video}
            style={{
                width: "100%", 
                height: "100%", 
                borderRadius: 45
            }}
            source={require("../assets/video/aiTimeEnd.mp4")}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay
          />
        </View>
    </View>
  );
};

export default LoseScreenAiMsg;

