import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import questions1 from "../../data/questions1";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const NomoiResult1 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const score = (route.params.points * 100) / route.params.data.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "darkblue" }}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: 20 }}>Your Results</Text>
      </View>

      <View style={styles.container}>
        {score > 49 ? (
          <View>
            <View style={styles.score}>
              <Text style={{ fontSize: 60, fontWeight: "bold", color: "green" }}>
                {score}
              </Text>
              <Text style={{ fontSize: 20, color: "green" }}>%</Text>
            </View>
            {questions1.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 60,
                }}
              >
                <Text style={{ fontWeight: "bold", padding: 2, fontSize: 16 }}>
                  {item.nomos}
                </Text>
                <Text style={{ fontSize: 16 }}>{item.capital}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.score}>
            <Text style={{ fontSize: 60, fontWeight: "bold", color: "red" }}>
              {score}
            </Text>
            <Text style={{ fontSize: 20, color: "red" }}>%</Text>
          </View>
        )}
      </View>

      {score < 50 ? (
        <View style={styles.buttonBox}>
          <Pressable
            onPress={() => navigation.navigate("Quiz")}
            style={styles.button}
          >
            <AntDesign name="home" size={24} color="white" />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Nomoi1")}
            style={styles.button}
          >
            <MaterialIcons name="replay" size={24} color="white" />
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={() => navigation.navigate("Nomoi2")}
          style={styles.nextQueButton}
        >
          <Text style={{ color: "white" }}>Done</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default NomoiResult1;

const styles = StyleSheet.create({
  title: {
    marginTop: '35%',
    marginHorizontal: "auto",
    marginBottom: 60,
  },
  container: {
    width: "90%",
    backgroundColor: "#ccc",
    marginHorizontal: "auto",
    borderRadius: 20,
    padding: 10,
    paddingVertical: 20,
  },
  score: {
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "baseline",
    justifyContent: "center",
  },
  nextQueButton: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    width: 120,
    marginTop: 50,
    borderRadius: 6,
    marginHorizontal: "auto",
  },
  buttonBox: {
    marginTop: 80,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "magenta",
    padding: 10,
    alignItems: "center",
    width: 80,
    borderRadius: 6,
    marginHorizontal: "auto",
  },
});
