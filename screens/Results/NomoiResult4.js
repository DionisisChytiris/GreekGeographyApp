import { View} from "react-native";
import React from "react";
import questions4 from "../../data/questions4";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult4 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate dataQ={questions4} repeatQ={"Nomoi4R"} nextQ={'Nomoi5'}/>
    </View>
  );
};

export default NomoiResult4;
