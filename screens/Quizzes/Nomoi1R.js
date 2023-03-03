import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions1 from "../../data/questions1";
import styles from "../styles/testStyle";
import { Entypo } from "@expo/vector-icons";

const Nomoi1R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions1}
          nomoiResults={"NomoiResult1"}
          num={1}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Nomoi1R;
