import React from "react"
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/minor/FieldItem"

const FieldItem = props => {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{props.title}</Text>
      <TextInput
        style={styles.fieldContent}
        autoCapitalize={"none"}
        autoCorrect={false}
        {...props}
      />
      <View style={styles.underline} />
    </View>
  );
};

export default FieldItem