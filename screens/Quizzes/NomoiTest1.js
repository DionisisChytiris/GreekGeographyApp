import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions1 from "../../data/questions1";
import { Entypo } from "@expo/vector-icons";

const NomoiTest1 = () => {
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
              {/* <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" /> */}
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default NomoiTest1;
