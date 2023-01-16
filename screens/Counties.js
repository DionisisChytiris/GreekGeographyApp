import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const Counties = () => {
  const navigation = useNavigation();
  const {width,height} = Dimensions.get('window')

  return (
    <View style={{ marginTop: 10 }}>
      <Image
        style={{ height: 370, width: width, marginHorizontal: 'auto' }}
        source={require("../assets/img-6.jpg")}
        resizeMode="contain"
        // style={{flex: 1, justifyContent: 'center'}}
      />

      <View style={{ padding: 10}}>
        <Text
          style={{
            textAlign: "center",
            color: "magenta",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Quiz Rules
        </Text>
      </View>

      <View
        style={{
          padding: 10,
          // margin: 20,
          backgroundColor: "#f88379",
          borderRadius: 6,
          marginTop: 15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>·</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722f37",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            For each correct answer you get 5 answers.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>·</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722f37",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            For each correct answer you get 5 answers.
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Cities")}
          style={{
            backgroundColor: "magenta",
            padding: 14,
            width: 120,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "600", textAlign: "center" }}
          >
            Go to Cities
          </Text>
        </Pressable>

        
      </View>
    </View>
  );
};

export default Counties;
