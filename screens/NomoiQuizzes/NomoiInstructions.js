import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NomoiInstructions = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <Image
        source={require("../../assets/salonika.jpg")}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 0,
          width: "100%",
          height: "25%",
        }}
      />
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            padding: 20,
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          Νόμοι / Πόλεις
        </Text>
        <Text style={{ fontSize: 20 }}> - Αυτή η κατηγορία ερωτήσεων</Text>
        <Text style={{ fontSize: 20 }}>αποτελείται από 6 επίπεδα.</Text>
        <Text style={{ fontSize: 20, paddingTop: 15 }}>
          - Το κάθε επίπεδο έχει 10 ερωτήσεις.
        </Text>
        <Text style={{ fontSize: 20, paddingTop: 15 }}>
          - Για να ανέβεις κατηγορία πρέπει
        </Text>
        <Text style={{ fontSize: 20 }}>να απαντήσεις τουλάχιστον</Text>
        <Text style={{ fontSize: 20 }}>5 ερωτήσεις σωστά.</Text>
        <Pressable
          onPress={() => navigation.navigate("Nomoi1")}
          style={{
            width: 120,
            backgroundColor: "magenta",
            padding: 10,
            paddingBottom: 15,
            marginVertical: "5%",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Ερωτήσεις </Text>
        </Pressable>
      </View>

      <Image
        source={require("../../assets/athina.jpg")}
        resizeMode="cover"
        style={{
          position: "absolute",
          bottom: 0,
          marginTop: 45,
          width: "100%",
          height: "25%",
          zIndex: -1,
          // marginBottom: 50,
        }}
      />
    </View>
  );
};

export default NomoiInstructions;
