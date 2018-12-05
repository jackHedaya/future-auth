import React from "react";
import { View } from "react-native";
import { withRouter } from "react-router-native"

import FieldItem from "../minor/FieldItem";
import MainButton from "../minor/MainButton";
import BackButton from "../minor/BackButton";

import appStyle from "../../styles/App";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      shouldShowPassword: false
    };

    this.verifyAndContinue = this.verifyAndContinue.bind(this);
  }

  verifyAndContinue() {
    if (/^\S+@\S+\.\S+$/.test(this.state.email)) this.setState({ shouldShowPassword: true });
  }

  render() {
    return (
      <View style={appStyle.screen}>
        <BackButton onPress={() => this.props.history.pop} />
        <FieldItem
          title={"Email"}
          value={this.state.email}
          onChangeText={t => {
            if (t[t.length - 1] !== " ") this.setState({ email: t });
          }}
          keyboardType={"email-address"}
        />
        {this.state.shouldShowPassword ? <FieldItem title={"Password"} /> : null}
        <MainButton onPress={this.verifyAndContinue}>Continue</MainButton>
      </View>
    );
  }
}

export default withRouter(CreateAccount)