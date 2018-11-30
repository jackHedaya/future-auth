import React from "react";
import { withRouter } from "react-router-native";

import MainButton from "../minor/MainButton";

export default withRouter(props => {
  return (
    <>
      <MainButton backgroundStyle={{ borderRadius: 1000 }} onPress={() => props.history.push("/signup")}>
        Create Account
      </MainButton>
      <MainButton
        backgroundStyle={{ borderRadius: 1000, marginTop: 10, backgroundColor: "#C2C2C2" }}
        onPress={() => props.history.push("login")}
      >
        Log In
      </MainButton>
    </>
  );
});
