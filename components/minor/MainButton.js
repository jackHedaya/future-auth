import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/minor/MainButton";

const MainButton = props => {
  return (
    <TouchableOpacity style={styles.background} activeOpacity={0.5} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
