import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ResultsScreen = () => {
  // const route = useRoute();
  // console.log(route.params)
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'darkblue'}}>
      <View style={styles.infoContainer1}>
        <Text>Your Results</Text>
        <View style={styles.shareBox}>
          <Text>Share</Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={18}
            color="black"
          />
        </View>
      </View>

      <View style={styles.infoContainer2}>
        <Text>Questions Answered</Text>
        <Text>(5/5)</Text>
      </View>

      {/* <Pressable style={styles.scoreCardContainer}>
        <Text style={styles.scoreCardText}>Score Card</Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View style={styles.flatListStyle}>
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => navigation.navigate("Quiz")}
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </Pressable>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  infoContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: 'darkblue',
    height: 400
  },
  infoContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  shareBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  scoreCardContainer: {
    backgroundColor: "white",
    height: 200,
    borderRadius: 7,
    marginTop: 20,
  },
  scoreCardText: {
    color: "magenta",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
  },
  flatListStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    backgroundColor: "green",
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    borderRadius: 5,
  },
});
