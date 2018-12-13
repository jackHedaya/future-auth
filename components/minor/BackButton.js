import React from "react";
import { TouchableOpacity } from "react-native";
import { withRouter } from "react-router-native";

import { Entypo } from "@expo/vector-icons";

import styles from "../../styles/minor/BackButton";

const BackButton = (props) => {
    return (
      <TouchableOpacity style={styles.background} onPress={props.history.goBack}>
        <Entypo name="chevron-thin-left" style={styles.icon} />
      </TouchableOpacity>
    );
}

export default withRouter(BackButton);
