import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const NomoiResultTemplate = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const dataQ = props.dataQ;
  const repeatQ = props.repeatQ;
  const nextQ = props.nextQ;
  const img = props.img

  const score = (route.params.points * 100) / route.params.data.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
      {/* <ImageBackground
        source={img}
        resizeMode="cover"
        style={{ height: "100vh" }}
      > */}
        <View style={{marginVertical: 'auto'}}>
          <View style={styles.title}>
            <Text style={{ color: "white", fontSize: 20 }}>Βαθμολογία</Text>
          </View>

          <View style={styles.container}>
            {score > 49 ? (
              <View>
                <View style={styles.score}>
                  <Text
                    style={{ fontSize: 60, fontWeight: "bold", color: "green" }}
                  >
                    {score}
                  </Text>
                  <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                </View>
                <View
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginHorizontal: "auto",
                  }}
                >
                  <Text
                    style={{
                      color: "green",
                      fontSize: 16,
                      fontWeight: "bold",
                      margin: 20,
                    }}
                  >
                    Συγχαρητήρια!!! Πέτυχες την απαιτούμενη βαθμολογία για να
                    προχωρήσεις στο επόμενο επίπεδο.
                  </Text>
                  <Text
                    style={{
                      color: "magenta",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    Σωστές Απαντήσεις
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 60,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      padding: 2,
                      fontSize: 16,
                      color: "darkblue",
                      textDecorationLine: "underline",
                    }}
                  >
                    Νομός
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "darkblue",
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    Πρωτεύουσα
                  </Text>
                </View>
                {dataQ.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      marginHorizontal: 40,
                    }}
                  >
                    <Text
                      style={{ fontWeight: "bold", padding: 2, fontSize: 16 }}
                    >
                      {item.nomos}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{item.capital}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <View>
                <View style={styles.score}>
                  <Text
                    style={{ fontSize: 60, fontWeight: "bold", color: "red" }}
                  >
                    {score}
                  </Text>
                  <Text style={{ fontSize: 20, color: "red" }}>%</Text>
                </View>
                <View
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginHorizontal: "auto",
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "bold",
                      margin: 20,
                    }}
                  >
                     Δυστυχώς δεν πέτυχες την απαιτούμενη βαθμολογία για να
                    προχωρήσεις στο επόμενο επίπεδο.
                  </Text>
                </View>
                <View
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginHorizontal: "auto",
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "bold",
                      margin: 20,
                    }}
                  >
                    Επανέλαβε το κουίζ <MaterialIcons name="replay" size={24} color="red"/>
                  </Text>
                </View>
                <View
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginHorizontal: "auto",
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "bold",
                      marginHorizontal: 20,
                    }}
                  >
                    Επιστροφή στην αρχική σελίδα <AntDesign name="home" size={24} color="red" />
                  </Text>
                </View>
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
                onPress={() => navigation.navigate(repeatQ)}
                style={styles.button}
              >
                <MaterialIcons name="replay" size={24} color="white" />
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => navigation.navigate(nextQ)}
              style={styles.nextQueButton}
            >
              <Text style={{ color: "white" }}>Επόμενο Επίπεδο</Text>
            </Pressable>
          )}
        </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default NomoiResultTemplate;

const styles = StyleSheet.create({
  title: {
    marginTop: "10%",
    marginHorizontal: "auto",
    marginBottom: "10%",
  },
  container: {
    width: "90%",
    backgroundColor: "#ccc",
    marginHorizontal: "auto",
    borderRadius: 20,
    padding: 10,
    paddingVertical: 60,
  },
  score: {
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "baseline",
    justifyContent: "center",
  },
  nextQueButton: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    marginTop: 50,
    borderRadius: 20,
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
