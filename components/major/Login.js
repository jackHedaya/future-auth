import React from "react";
import { View } from "react-native";
import { EmailField, PasswordField } from "../minor/FieldItem";

import appStyle from "../../styles/App";
import MainButton from "../minor/MainButton";
import BackButton from "../minor/BackButton";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.login = this.login.bind(this);
  }

  login() {
    fetch("http://localhost:3000/login", {
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
      .then(x => console.log(x))
      .catch(x => console.log(x));
  }

  render() {
    return (
      <View style={appStyle.screen}>
        <BackButton />
        <EmailField onChangeText={t => this.setState({ email: t })} value={this.state.email} />
        <PasswordField onChangeText={t => this.setState({ password: t })} value={this.state.password} />
        <MainButton onPress={this.login}>Login</MainButton>
      </View>
    );
  }
}
