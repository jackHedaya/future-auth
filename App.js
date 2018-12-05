import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Stack from "react-router-native-stack";

import Opening from "./components/major/Opening";
import CreateAccount from "./components/major/CreateAccount";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Stack>
          <Route exact path="/" component={Opening} />
          <Route exact path="/signup" component={CreateAccount} />
        </Stack>
      </NativeRouter>
    );
  }
}
