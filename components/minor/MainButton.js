import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/minor/MainButton";

const MainButton = props => {
  return (
    <TouchableOpacity
      style={props.overwriteStyle ? styles.background : { ...styles.background, ...props.backgroundStyle }}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Text style={props.overwriteStyle ? props.style : { ...styles.text, ...props.style }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
