import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const GenQResLoseScreenR = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100vh", backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../../assets/meteora.jpg")}
        resizeMode="cover"
        style={{ height: "100vh" }}
      >
        <View
          style={{
            width: "75%",
            height: "50%",
            marginHorizontal: "auto",
            marginTop: "35%",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ccc",
              marginHorizontal: "auto",
              borderRadius: 20,
              opacity: 0.7,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: "20%",
              left: "13%",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                marginHorizontal: "auto",
                // backgroundColor: 'yellow'
              }}
            >
              <Text style={{ color: "red", fontSize: 30, fontWeight: 600 }}>
                Λυπάμαι Έχασες
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 600,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 40,
                }}
              >
                Τέλος χρόνου
              </Text>
      
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginHorizontal: 20,
                }}
              >
                Επιστροφή στην αρχική σελίδα{" "}
                <AntDesign name="home" size={24} color="white" />
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 80,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Quiz")}
            style={{
              // backgroundColor: "magenta",
              padding: 10,
              alignItems: "center",
              width: 80,
              height: 50,
              // borderRadius: 6,
              marginHorizontal: "auto",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                backgroundColor: "magenta",
                // padding: 10,
                // alignItems: "center",
                width: "100%",
                height: "100%",
                borderRadius: 6,
                // marginHorizontal: "auto",
                opacity: 0.5,
              }}
            />
            <View>
              <AntDesign name="home" size={24} color="white" />
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GenQResLoseScreenR ;
