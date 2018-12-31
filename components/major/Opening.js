import React from "react";
import { View } from "react-native";
import { withRouter } from "react-router-native";

import MainButton from "../minor/MainButton";

import appStyle from "../../styles/App";

export default withRouter(props => {
  return (
    <View style={appStyle.screen}>
      <MainButton backgroundStyle={{ borderRadius: 1000 }} onPress={() => props.history.push("/signup")}>
        Create Account
      </MainButton>
      <MainButton
        backgroundStyle={{ borderRadius: 1000, marginTop: 10, backgroundColor: "#C2C2C2" }}
        onPress={() => props.history.push("login")}
      >
        Log In
      </MainButton>
    </View>
  );
});
