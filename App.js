import React from 'react';
import { View } from 'react-native';
import styles from "./styles/App"

import CreateAccount from "./components/major/CreateAccount"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateAccount />
      </View>
    );
  }
}

