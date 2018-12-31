import React from "react";
import { View } from "react-native";
import { withRouter } from "react-router-native";

import { EmailField, PasswordField } from "../minor/FieldItem";
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
    this.verifyPasswordAndContinue = this.verifyPasswordAndContinue.bind(this);
  }

  verifyEmailAndContinue() {
    if (/^\S+@\S+\.\S+$/.test(this.state.email)) this.setState({ shouldShowPassword: true });
  }

  verifyPasswordAndContinue() {
    if (this.state.password.length > 6) {
      // Change to https://future-auth.herokuapp.com/createAccount in production
      fetch("https://future-auth.herokuapp.com/createAccount", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(x => {
          if (x.status >= 200 && x.status < 300) this.props.history.push("/");
          else console.log("Error creating account");
        })
        .catch(x => console.log(x));
    }
  }

  render() {
    return (
      <View style={appStyle.screen}>
        <BackButton />
        <EmailField
          value={this.state.email}
          onChangeText={t => {
            this.setState({ email: t });
          }}
        />
        {this.state.shouldShowPassword ? (
          <PasswordField value={this.state.password} onChangeText={t => this.setState({ password: t })} />
        ) : null}
        <MainButton
          onPress={this.state.shouldShowPassword ? this.verifyPasswordAndContinue : this.verifyEmailAndContinue}
        >
          Continue
        </MainButton>
      </View>
    );
  }
}

export default withRouter(CreateAccount);
