import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import questions2 from "../../data/questions2";

const TestResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const score = (route.params.points * 100) / route.params.data.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "darkblue" }}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: 20 }}>Your Results</Text>
      </View>

      <View style={styles.container}>
        <Text>Questions Answered</Text>
        <Text>This is a test.</Text>
        <Text>{score} %</Text>
        {questions2.map((item, index) => (
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

      {score < 50 ? (
        <Text>Try again</Text>
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

export default TestResultsScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  container: {
    width: "90%",
    backgroundColor: "#ccc",
    marginHorizontal: "auto",
    borderRadius: 20,
    padding: 10,
    paddingVertical: 20,
  },
  nextQueButton: {
    backgroundColor: "magenta",
    padding: 10,
    alignItems: "center",
    width: 120,
    marginTop: 50,
    // marginVertical: 30,
    borderRadius: 6,
    // marginLeft: '60%'
    marginHorizontal: "auto",
  },
});
