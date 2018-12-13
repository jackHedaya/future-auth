import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/minor/FieldItem";

const FieldItem = props => {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{props.title}</Text>
      <TextInput style={styles.fieldContent} autoCapitalize={"none"} autoCorrect={false} {...props} />
      <View style={styles.underline} />
    </View>
  );
};

const EmailField = props => {
  return (
    <FieldItem
      title={"Email"}
      value={props.value}
      onChangeText={t => {
        if (t[t.length - 1] !== " ") props.onChangeText(t);
      }}
      keyboardType={"email-address"}
    />
  );
};

const PasswordField = props => {
  return (
    <FieldItem
      title={"Password"}
      value={props.password}
      onChangeText={t => props.onChangeText(t)}
      secureTextEntry
      {...props}
    />
  );
};

export { EmailField, PasswordField };
export default FieldItem;
