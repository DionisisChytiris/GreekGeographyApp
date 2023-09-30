import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
// import styles from "../styles/testStyle";

const LakeRiverResults = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // const score = 60
  const score = Math.floor((route.params.points * 100) / route.params.data.length);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../../assets/MorePhotos/lake2.jpg")}
        style={{height: '100%'}}
      >
        <View>
          <View style={styles.title}>
            <Text style={{ 
                color: "white", 
                fontWeight: "600", 
                fontSize: 25,
                marginTop: 120,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Βαθμολογία
            </Text>
          </View>
          <View style={styles.container}>
            {score > 49 ? (
              <View>
                <View style={styles.score}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 60, color: "green" }}
                  >
                    {score}
                  </Text>
                  <Text styles={{ fontSize: 20, color: "green" }}>%</Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                  {score === 100 ? (
                    <View>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          color: "green",
                          marginTop: 20,
                        }}
                      >
                        Συγχαρητήρια!!! Οι γνώσεις σου στην γεωγραφία είναι
                        φανταστικές!!!
                      </Text>
                      <Image
                        source={require("../../assets/trophy.png")}
                        resizeMode="cover"
                        style={{
                          marginVertical: 20,
                          width: 80,
                          height: 80,
                          borderRadius: 50,
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </View>
                  ) : (
                    <View>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 14,
                          color: "green",
                          marginTop: 20,
                        }}
                      >
                        Καλή προσπάθεια, αλλά πάντα υπάρχει περιθώριο βελτίωσης.
                        Επανέλαβε το κουίζ για να τελειωποιήσεις τις γνώσεις σου
                        ή πήγαινε στην αρχική σελίδα για να επιλέξεις άλλη
                        κατηγορία.
                      </Text>
                    </View>
                  )}
                </View>
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
                <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "red",
                      marginTop: 20,
                    }}
                  >
                    Δεν ήταν άσχημη προσπάθεια, αλλά χρείαζεται να σκεφτείς
                    περισσότερο για να βρεις τις σωστές απαντήσεις. Επανέλαβε το
                    κουίζ για να βελτιώσεις τις γνώσεις σου.
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.buttonBox}>
            <Pressable
              onPress={() => navigation.navigate("Quiz")}
              style={styles.button0}
            >
              <View style={styles.button1} />
              <View style={styles.btnText}>
                <AntDesign name="home" size={24} color="white" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("LakeRiverRepeat")}
              style={styles.button0}
            >
              <View style={styles.button1} />
              <View style={styles.btnText}>
                <MaterialIcons name="replay" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LakeRiverResults;

const styles = StyleSheet.create({
  title: {
    // marginTop: "10%",
    marginHorizontal: "auto",
    marginBottom: "5%",
  },
  container: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 20,
    marginVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
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
    marginTop: 40,
    flexDirection: "row",
    marginHorizontal: 40
  },
  button0: {
    position: "relative",
    width: 100,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button1: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 12,
    left: 37,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});
