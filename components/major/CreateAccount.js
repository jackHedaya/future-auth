import React from "react";
import { View } from "react-native";
import { withRouter } from "react-router-native";

import FieldItem from "../minor/FieldItem";
import MainButton from "../minor/MainButton";
import BackButton from "../minor/BackButton";

import appStyle from "../../styles/App";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      shouldShowPassword: false
    };

    this.verifyEmailAndContinue = this.verifyEmailAndContinue.bind(this);
  }

  verifyEmailAndContinue() {
    if (/^\S+@\S+\.\S+$/.test(this.state.email)) this.setState({ shouldShowPassword: true });
  }

  verifyPasswordAndContinue() {
    if (this.state.password.length > 6) {
      // Submit password
    }
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
        {this.state.shouldShowPassword ? (
          <FieldItem
            title={"Password"}
            value={this.state.password}
            onChangeText={t => this.setState({ password: t })}
            secureTextEntry
          />
        ) : null}
        <MainButton onPress={this.verifyEmailAndContinue}>Continue</MainButton>
      </View>
    );
  }
}

export default withRouter(CreateAccount);
