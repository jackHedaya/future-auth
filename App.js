import React from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import styles from "./styles/App";

import Opening from "./components/major/Opening";
import CreateAccount from "./components/major/CreateAccount";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Opening} />
          <Route exact path="/signup" component={CreateAccount} />
        </View>
      </NativeRouter>
    );
  }
}
