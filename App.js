import React from 'react';
import { View } from 'react-native';
import style from "./styles/App"

import CreateAccount from "./components/CreateAccount"

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <CreateAccount />
      </View>
    );
  }
}

