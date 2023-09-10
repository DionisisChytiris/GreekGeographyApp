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
  import { AntDesign} from "@expo/vector-icons";
  
  const GeneralQuestionsResults1R = () => {
    const route = useRoute();
    const navigation = useNavigation();
    // const data= props.data
    // const repeatQ = props.repeatQ
  
  
    // const score = 60;
    const score = (route.params.points * 100) / route.params.data.length
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
        <ImageBackground
          source={require("../../assets/MorePhotos/Acropolis.jpg")}
          resizeMode="cover"
          style={{ height: "100vh" }}
        >
          <View style={{ marginVertical: "auto" }}>
            <View style={stylesT.title}>
              <Text style={{ fontWeight: 600, fontSize: 26, color: "white" }}>
                Βαθμολογία
              </Text>
            </View>
  
            <View style={stylesT.container}>
              {score > 49 ? (
                <View>
                  <View style={stylesT.score}>
                    <Text
                      style={{ fontSize: 60, fontWeight: "bold", color: "green" }}
                    >
                      {score}
                    </Text>
                    <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                  </View>
                  <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                    {score === 100 ? (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 18,
                            color: "green",
                            marginTop: 20,
                          }}
                        >
                          Συγχαρητήρια!!! Οι γνώσεις σου στην γεωγραφία είναι
                          φανταστικές!!!
                        </Text>
                      </View>
                    ) : (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 16,
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
                  <View style={stylesT.score}>
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
                      Δεν ήταν άσχημη προσπάθεια, αλλά χρείαζεται να προσπαθήσεις
                      περισσότερο για να βρεις τις σωστές απαντήσεις. Επανέλαβε το
                      κουίζ για να βελτιώσεις τις γνώσεις σου.
                    </Text>
                  </View>
                </View>
              )}
            </View>
  
            <View style={stylesT.buttonBox}>
              <Pressable
                onPress={() => navigation.navigate("Quiz")}
                style={stylesT.button0}
              >
                <View style={stylesT.button1} />
                <View style={stylesT.btnText}>
                  <AntDesign name="home" size={24} color="white" />
                </View>
              </Pressable>
              {/* <Pressable
                onPress={() => navigation.navigate(props.repeat)}
                style={stylesT.button0}
              >
                <View style={stylesT.button1} />
                <View style={stylesT.btnText}>
                  <MaterialIcons name="replay" size={24} color="white" />
                </View>
              </Pressable> */}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  export default GeneralQuestionsResults1R;
  
  const stylesT = StyleSheet.create({
    title: {
      // marginTop: "10%",
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
    button0: {
      position: "relative",
      width: 100,
      height: 50,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
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
  