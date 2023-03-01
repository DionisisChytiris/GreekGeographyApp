import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const LoseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100vh", backgroundColor: "darkblue" }}>
      <View
        style={{
          width: 250,
          height: 400,
          backgroundColor: "#ccc",
          marginHorizontal: "auto",
          marginTop: 100,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white" }}>Λυπάμαι Έχασες</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        marginTop: 80
      }}>
        <Pressable
          onPress={() =>
            navigation.navigate("Quiz")
          }
          style={{
            backgroundColor: "magenta",
            padding: 10,
            alignItems: "center",
            width: 80,
            borderRadius: 6,
            marginHorizontal: "auto",
          }}
        >
          {/* <Text style={{ color: "white" }}>Done</Text> */}
          <AntDesign name="home" size={24} color="white" />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Results")
          }
          style={{
            backgroundColor: "magenta",
            padding: 10,
            alignItems: "center",
            width: 80,
            borderRadius: 6,
            marginHorizontal: "auto",
          }}
        >
          {/* <Text style={{ color: "white" }}>Done</Text> */}
          <MaterialIcons name="replay" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default LoseScreen;
