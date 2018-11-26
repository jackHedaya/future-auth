import React from "react";
import { View, Text, TextInput, Font } from "react-native";

import styles from "../styles/CreateAccount";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <FieldItem onChangeText={text => this.setState({ email: text })} title={"Email"} keyboardType={"email-address"} />
    );
  }
}

const FieldItem = props => {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{props.title}</Text>
      <TextInput
        style={styles.fieldContent}
        onChangeText={text => props.onChangeText(text)}
        autoFocus={props.autoFocus}
        keyboardType={props.keyboardType}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <View style={styles.underline} />
    </View>
  );
};
