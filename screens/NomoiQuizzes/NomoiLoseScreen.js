import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const NomoiLoseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%", backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../../assets/meteora.jpg")}
        style={{ height: "100%" }}
      >
        <View
          style={{
            width: "75%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "35%",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ccc",
              // marginHorizontal: "auto",
              borderRadius: 20,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
            }}
          >
            <View>
              <Text
                style={{
                  color: "red",
                  fontSize: 25,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                Λυπάμαι Έχασες
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "600",
                  marginLeft: 35,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                Τέλος χρόνου
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Επανέλαβε το κουίζ{" "}
                </Text>
                <View>
                  <MaterialIcons name="replay" size={24} color="white" />
                </View>
              </View>

              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginHorizontal: 20,
                }}
              >
                Επιστροφή στην αρχική σελίδα{" "}
                <AntDesign name="home" size={20} color="white" />
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 35 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 80,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("Quiz")}
              style={{
                alignItems: "center",
                width: 90,
                height: 60,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "magenta",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  opacity: 0.5,
                }}
              />
              <View style={{ position: "absolute", top: 15 }}>
                <AntDesign name="home" size={24} color="white" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Nomoi1R")}
              style={{
                alignItems: "center",
                width: 90,
                height: 60,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "magenta",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  opacity: 0.5,
                }}
              />
              <View style={{ position: "absolute", top: 15 }}>
                <MaterialIcons name="replay" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NomoiLoseScreen;
