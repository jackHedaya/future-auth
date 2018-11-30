import React from "react";
import { View } from "react-native";
import FieldItem from "../minor/FieldItem";
import MainButton from "../minor/MainButton";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

    this.verifyAndContinue = this.verifyAndContinue.bind(this);
  }

  verifyAndContinue() {
    // if (/^\S+@\S+\.\S+$/.test(this.state.email))
    //   console.log("Continue")
    // else
  }

  render() {
    return (
      <>
        <FieldItem
          title={"Email"}
          value={this.state.email}
          onChangeText={t => {
            if (t[t.length - 1] !== " ") this.setState({ email: t });
          }}
          keyboardType={"email-address"}
        />
        <MainButton onPress={this.verifyAndContinue}>Continue</MainButton>
      </>
    );
  }
}
