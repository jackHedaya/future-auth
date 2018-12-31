import React from "react";
import { View } from "react-native";
import { withRouter } from "react-router-native";
import * as ls from "react-native-local-storage";

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

  // Change to https://sweet-home-backend.herokuapp.com/login for prod
  login() {
    fetch("https://future-auth.herokuapp.com/login", {
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
      .then(resp => resp.text()) 
      .then(text => ls.save("sessionId", text))
      .then(_ => this.props.history.push("/home"))
      .catch(x => console.error(x));
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

export default withRouter(Login);
